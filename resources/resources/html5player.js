function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

var playerScript = null;
let signatureTimestamp = null;
var DEBUG = false;

function GetPlayerJs() {
    function fetchContentAndAssign(url, variableName) {

        // Base result.
        var result = {
            status: "FAILURE",
            reason: "No reason provided.",
            content: null
        };

        if (DEBUG)
            console.log("[FetchContent] Fetching content from:", url);

        try {
            // Use the fetch API to get content from the specified URL.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false); // Make the request synchronous
            xhr.send();

            if (xhr.status >= 200 && xhr.status < 300) {
                var data = xhr.responseText;
                var match = data.match(/signatureTimestamp:\s*(\d+)/);
                if (match) {
                    signatureTimestamp = parseInt(match[1], 10);
                }
                result.content = data;
                result.status = "SUCCESS";
                if (DEBUG)
                    console.log("[FetchContent] Content fetched successfully:", result.content);

                // Assign the fetched content to the specified variable.
                window[playerScript] = result.content;
                playerScript = result.content;
                return result;
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            result.reason = "Failed to fetch content: " + error.message;
            console.error("[FetchContent]" + result.reason);
            throw result;
        }
    }

    var foundScriptSrc = null;


    // Rest of your code continues here
    console.log('Result from XHR:', yt.config_.PLAYER_JS_URL);

    // Example usage:
    fetchContentAndAssign('https://www.youtube.com' + yt.config_.PLAYER_JS_URL, 'playerScript');
}


function UrlStreamCreator(format, callback) {

    async function CreateUrl(format) {


        function getDecryptorForPlayerSig(playerScript) {


            if (DEBUG)
                console.log("[SigDecode] Using player script:", playerScript);

            // Resulting groups:
            //   [0]: Entire function declaration
            //   [1]: Arguments only
            //   [2]: Body only
            //   [3]: Decode calls only
            var DECODER_PATTERN =
                "function\\((.*?)\\){(a=a\\.split\\(\\\"\\\"\\);(.*?)return a\\.join\\(\\\"\\\"\\))}";

            // Base result.
            var result = {
                status: "FAILURE",
                reason: "No reason provided.",
                extractCb: null,
                cacheParams: null
            };

            var decoderMatches = playerScript.match(new RegExp(DECODER_PATTERN));
            if (DEBUG)
                console.log("[SigDecode] decoderMatches ==", decoderMatches);

            if (!decoderMatches) {
                result.reason = "Failed to extract decode function.";
                console.error("[Rehike.SigDecode]" + result.reason);
                return result;
            }

            var sourceDeclaration = decoderMatches[0];
            var sourceArguments = decoderMatches[1].split(",");
            var sourceBody = decoderMatches[2].split(";");
            var sourceCalls = decoderMatches[3].split(";");

            var lookupList = [];

            // Parse the source function body:
            for (var i = 0, j = sourceBody.length; i < j; i++) {
                // See if a foreign variable is being used for assignment,
                // and add it to the lookup list if so.
                var varName = sourceBody[i].split(".")[0].split("=")[0].split(",")[0];
                if (DEBUG)
                    console.log("[SigDecode.ForeignIterator] Iterating #" + i + " (" + varName + ").");
                if (
                    varName != sourceBody[i] &&
                    (varName.indexOf(" ") == -1) &&
                    !sourceArguments.includes(varName)
                ) {
                    if (!lookupList.includes(varName)) {
                        if (DEBUG)
                            console.log("[SigDecode.ForeignIterator] Adding #" + i + " (" + varName + ") to lookup list.");
                        lookupList.push(varName);
                    }
                }
            }

            if (DEBUG)
                console.log("[SigDecode] lookupList ==", lookupList);

            // Iterate the lookup list and search the player JS for the declarations:
            var successfulLookups = 0;
            var lookupResults = [];
            for (var i = 0, j = lookupList.length; i < j; i++) {
                // Firstly, objects are searched for. The obfuscator routine is often in
                // an object literal, so they're the only thing we're looking for.
                var curName = lookupList[i];
                var text = playerScript.split("var " + curName + "=")[1];

                if (!text)
                    text = playerScript.split(";" + curName + "=")[1];

                if (!text)
                    text = playerScript.split("\n" + obfuscator + "=")[1];

                if (!text)
                // Out of possibilities, so just skip this iteration.
                    continue;

                // Parse to the last unclosed "}" character (terminator)
                var endIndex = 0;
                var depth = 0;

                for (var k = 0, l = text.length; k < l; k++) {
                    if (depth < 0) {
                        // Parse error, break.
                        endIndex = -1;
                        depth = 0;
                        break;
                    } else if (text[k] == "{") {
                        ++depth;
                    } else if (text[k] == "}") {
                        if (--depth == 0) {
                            endIndex = k + 1;
                            break;
                        }
                    }
                }

                // If we had any problems, skip the result.
                if (endIndex < 0)
                    continue;

                var resultObj = text.substr(0, endIndex);
                var resultText = "var " + curName + "=" + resultObj;
                lookupResults.push(resultText);
            }

            if (DEBUG)
                console.log("[SigDecode] lookupResults ==", lookupResults);

            if (lookupResults.length == 0) {
                result.reason = "Failed to lookup required external functions.";
                console.error("[Rehike.SigDecode]" + result.reason);
                return result;
            }

            // Generate the function:
            var resultFunctionBody =
                lookupResults.join(";") +
                ";var decodeSignature = " + sourceDeclaration +
                ";return decodeSignature(sourceSignature);"; // sourceSignature declared below.

            if (DEBUG)
                console.log("[SigDecode] resultFunctionBody ==", resultFunctionBody);

            result.cacheParams = {
                args: "sourceSignature",
                body: resultFunctionBody
            };

            result.extractCb = new Function(
                // Arguments:
                result.cacheParams.args,
                // Function body:
                result.cacheParams.body
            );
            result.status = "SUCCESS";

            return result;
        }

        /**
         * Extract the "n" parameter decryptor from a given player script.
         * 
         * Special thanks to Reprety (V3) for providing a reference implementation.
         * 
         * @argument {string} playerScript A copy of the text content of the latest YouTube player
         *                                 binary.
         * 
         * @returns {
         *      {
         *          status: string,
         *          reason: string, 
         *          extractCb: ?function(string),
         *          cacheParams: { args: string, body: string }|null
         *      }
         * }
         */
        function getDecryptorForPlayerN(playerScript) {


            if (DEBUG)
                console.log("[NDecode] Using player script:", playerScript);

            // Resulting groups:
            //   [0]: Entire expression
            //   [1]: Assigned variable name.
            var BASE_CALL_PATTERN = "([a-zA-Z0-9_$]*?)\\=[a-zA-Z0-9_$]*?\\.get\\(\\\"n\\\"\\)";

            // Resulting groups:
            //   [0]: Entire expression
            //   [1]: Obfuscator function name
            //   [2]: Only the array index
            var OBFUSCATOR_CALL_PATTERN_TEMPLATE =
                "__NAME__=([a-zA-Z0-9_$]*?(\\[[a-zA-Z0-9_$]*\\])?)\\(.*\\)";

            // Base result.
            var result = {
                status: "FAILURE",
                reason: "No reason provided.",
                extractCb: null,
                cacheParams: null
            };

            var declarationMatches = playerScript.match(new RegExp(BASE_CALL_PATTERN));

            if (DEBUG)
                console.log("[NDecode] declarationMatches ==", declarationMatches);

            if (!declarationMatches) {
                result.reason = "Failed to extract decode expression.";
                console.error("[Rehike.NDecode]" + result.reason);
                return result;
            }

            var declarationExpression = declarationMatches[0];
            var declarationVarName = declarationMatches[1];

            // The next use of the declaration variable should be to another
            // function. This can become a bit of a mess.
            var searchIndex = declarationMatches.index;
            var subsequentText = playerScript.slice(searchIndex);

            var obfuscatorCallPattern =
                OBFUSCATOR_CALL_PATTERN_TEMPLATE.replace("__NAME__", declarationVarName);

            var obfuscatorCallMatches = subsequentText.match(new RegExp(obfuscatorCallPattern));
            if (DEBUG)
                console.log("[NDecode] obfuscatorCallMatches ==", obfuscatorCallMatches);
            var obfuscatorFnName = obfuscatorCallMatches[1];

            var obfuscatorFnNameSymbol = obfuscatorFnName.split("[")[0];

            var obfuscatorFnText = null;
            var obfuscatorArrayText = null;
            var lookupName = obfuscatorFnName;

            if (obfuscatorFnNameSymbol != obfuscatorFnName) {
                // The obfuscator is referenced through an array, so we need to do some
                // additional work.
                obfuscatorArrayText = playerScript.slice(
                    playerScript.indexOf("var " + obfuscatorFnNameSymbol + "=")
                );
                obfuscatorArrayText = obfuscatorArrayText.slice(
                    0,
                    obfuscatorArrayText.indexOf("]") + 2
                );

                if (DEBUG)
                    console.log("[NDecode] (mid) obfuscatorFnNameSymbol ==", obfuscatorFnNameSymbol);

                if (DEBUG)
                    console.log("[NDecode] (mid) obfuscatorArrayText ==", obfuscatorArrayText);

                // Set lookupName to the content between the array tokens:
                lookupName = obfuscatorArrayText.split("[")[1].split("]")[0];
            }

            obfuscatorFnText = playerScript.slice(playerScript.indexOf(lookupName + "="));
            if (DEBUG)
                console.log("[NDecode] obfuscatorFnText ==", obfuscatorFnText);

            // Thanks reprety!
            // This code was broken in late January 2024 for some reason, but this much
            // simpler code from Reprety seems to find the pattern more reliably.
            var nextVariableDef = obfuscatorFnText.search("var ");
            var patternSearch = obfuscatorFnText.slice(nextVariableDef);
            nextVariableDef = patternSearch.search("=");
            patternSearch = patternSearch.slice(0, nextVariableDef).slice(4);
            var endPattern = 'return ' + patternSearch + '.join("")};';
            try {
                obfuscatorFnText = obfuscatorFnText.split(endPattern)[0] + endPattern;
            } catch (e) {}

            if (DEBUG)
                console.log("[NDecode] (final) obfuscatorFnText ==", obfuscatorFnText);

            var bakedFunctionString = "";

            bakedFunctionString += obfuscatorFnText + ";";

            if (obfuscatorArrayText) {
                bakedFunctionString += obfuscatorArrayText + ";";
            }

            bakedFunctionString += "return " + obfuscatorFnName + "(encryptedN);";

            if (DEBUG)
                console.log("[NDecode] bakedFunctionString ==", bakedFunctionString);

            result.cacheParams = {
                args: "encryptedN",
                body: bakedFunctionString
            };

            var bakedFunction = new Function(
                // Arguments:
                result.cacheParams.args,
                // Function body:
                result.cacheParams.body
            );

            result.status = "SUCCESS";
            result.extractCb = bakedFunction;

            return result;
        }
        if (format.signatureCipher) {
            const startIndex = format.signatureCipher.indexOf('s=') + 2;
            const endIndex = format.signatureCipher.indexOf('&', startIndex);

            // Extract the substring between 's=' and '&'
            const encodedSignature = format.signatureCipher.substring(startIndex, endIndex)
            const URIdecodedSignature = decodeURIComponent(encodedSignature)
                // Find the index of 'url='
            const urlIndex = format.signatureCipher.indexOf('url=');

            // Extract the substring after 'url='
            const encodedUrl = format.signatureCipher.substring(urlIndex + 4);
            const URIdecodedUrl = decodeURIComponent(encodedUrl)
                // Find the index of 'n='
            const nIndex = URIdecodedUrl.indexOf('&n=');

            // Extract everything after '&n=' up to the next '&'
            const nParamValue = nIndex !== -1 ? URIdecodedUrl.substring(nIndex + 3, URIdecodedUrl.indexOf('&', nIndex + 3)) : null;

            var decodingsigfunction = getDecryptorForPlayerSig(playerScript)
            var decodedSignature = decodingsigfunction.extractCb(URIdecodedSignature)
            var decodingNfunction = getDecryptorForPlayerN(playerScript)
            var decodedN = decodingNfunction.extractCb(nParamValue)
                // Replace 'n' parameter with decodedN in URIdecodedUrl and add '&alr=yes&sig=' at the end
            const decodedUrl = URIdecodedUrl.replace(`&n=${nParamValue}`, `&n=${decodedN}`) + '&alr=yes&sig=' + decodedSignature;
            callback({
                encodedSignature,
                encodedUrl,
                URIdecodedUrl,
                nParamValue,
                URIdecodedSignature,
                decodedSignature,
                decodedN,
                decodedUrl
            });


        } else if (format.url) {
            const encodedUrl = format.url
            const nIndex = encodedUrl.indexOf('&n=');

            // Extract everything after '&n=' up to the next '&'
            const nParamValue = nIndex !== -1 ? encodedUrl.substring(nIndex + 3, encodedUrl.indexOf('&', nIndex + 3)) : null;
            var decodingNfunction = getDecryptorForPlayerN(playerScript)
            var decodedN = decodingNfunction.extractCb(nParamValue)
            const decodedUrl = encodedUrl.replace(`&n=${nParamValue}`, `&n=${decodedN}`);
            callback({
                encodedUrl,
                decodedUrl,
                nParamValue,
                decodedN,
            });

        }
    }

    var created = CreateUrl(format, function(result) {
        console.log(result);
        // Now you can use 'result' or perform any other actions with the decodedUrl
        if (callback) {
            callback({
                decodedUrl: result.decodedUrl
            });
        }
    });
    console.log(created)


}

function PlayerInit() {
    function html() {
        containerplayer = document.getElementById('watch-player');
        containerplayer.innerHTML = `<div class="video-container paused" style="position: relative;
        z-index: 0;" data-volume-level="high">
        <div class="fullscreen-moreinfo hid" style="
position: absolute;
top: 0;
width: 100%;
left: 0;
right: 0;
z-index: 1;
background: rgba(0, 0, 0, 0.8);
color: #fff;
margin-top: 28px;
height: 100%;
font-size: 16px;
font-family: sans-serif;
padding: 5px;
"><div id="moreinfo-description"></div></div>
      
      <div class="html5-info-bar html5-stop-propagation">
<div class="html5-title" tabindex="1"><?php echo $video_title; ?&gt;</div>
<div class="html5-info-bar-buttons">
  <button type="button" class="html5-more-info-button html5-control-right html5-control-sep-left yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="More info" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="More info"><span class="yt-uix-button-valign"></span></span></button>

  <button type="button" class="html5-share-button html5-text-button html5-control-right html5-control-sep-left yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" onclick="document.exitFullscreen();V3.www.toggle.panels('action-panel-share', '.action-panel-trigger-share')" title="Share" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Share"><span class="yt-uix-button-valign"></span></span></button>


  <div class="html5-like-dislike-buttons hid">
    <button type="button" class="html5-dislike-button html5-control-right yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Dislike" role="button" aria-label="Dislike"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Dislike"><span class="yt-uix-button-valign"></span></span></button>
    <button type="button" class="html5-like-button html5-control-right html5-control-sep-left yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Like" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Like"><span class="yt-uix-button-valign"></span></span></button>
  </div>
  <div class="html5-info-bar-logo hid">YouTube</div>
</div>
  <div class="html5-info-panel">

<div class="html5-info-panel-content">
  <div class="html5-author">
    <div class="html5-author-img">
      <span class="video-thumb ux-thumb yt-thumb-default-138 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Thumbnail" width="138"><span class="vertical-align"></span></span></span></span>
    </div>
    <div class="html5-author-info">
      <div class="html5-author-name"></div>
      <div class="html5-subscriber-count"></div>
    </div>
  </div>

  <div class="html5-video-info">
    <div class="html5-view-count"></div>
      <div class="video-extras-sparkbars">
<div class="video-extras-sparkbar-likes" style="width: 0%"></div>
<div class="video-extras-sparkbar-dislikes" style="width: 0%"></div>
</div>
<span class="video-extras-likes-dislikes">

</span>

  </div>

  <p class="html5-description-text"></p>
</div>
</div>

</div>
      <img class="thumbnail-img">
      <div class="html5-endscreen">
    <div class="html5-endscreen-content"></div>

    <div class="videowall-still-content-template">
      <!--
        <span class="videowall-still-featured-label">Featured video</span>
        <span class="videowall-info">__info__</span>
      -->
    </div>
    <div class="videowall-info-template">
      <!--
        <span class="videowall-info-title">__title__</span>
        <span class="videowall-info-author">__author__</span>
        <span class="videowall-info-duration">__duration__</span>
        <span class="videowall-info-view-count">__view_count__</span>
      -->
    </div>
  </div>
  <div class="html5-bezel html5-center-overlay" aria-hidden="true" style="display: none"><div class="html5-bezel-play"></div></div>
      <div class="video-controls-container">
          <div class="timeline-container" style="--preview-position: 0.0921875;position: relative;z-index: 1;">
              <div class="timeline">
                  <img style="display: none !important" class="preview-img" style="background:black">
                  <span class="timeline-txttime" >NaN:NaN:NaN</span>
                  <div class="thumb-indicator"></div>
              </div>
          </div>
          
          <div class="settings-menu" style="align-content: center; display:none ">
              <div class="ul-container">
                  <ul style="display:inline;left: 10px">
                      <li>
                          <p class="html5-popup-menu-header" style="color: #fff;
padding: 4px 7px 4px 16px;
font-size: 11px;
white-space: nowrap;
cursor: default;">
Quality
                          </p>
                      </li>
                      <li><button style="" id="resolution-1080p" class="">1080p <sup style="font-size: 75%;
font-weight: bold;">HD</sup></button></li>
                      <li><button id="resolution-720p" class="">720p <sup style="font-size: 75%;
font-weight: bold;">HD</sup></button></li>
<li><button id="resolution-480p" class="" style="align-items: center;">480p</button></li>
<li><button id="resolution-360p" class="" style="display: block;align-items: center;">360p</button></li>
<li><button id="resolution-240p" class="" style="align-items: center;">240p</button></li>
                      <li><button id="resolution-144p" class="" style="align-items: center;">144p</button></li>
                  </ul>
                  <div style="width: 10px;border-right:1px solid #000000"></div>
                  <ul style="display:inline;border-left:1px solid #2B2B2B;">
                      <li>
                          <p class="html5-popup-menu-header" style="color: #fff;
padding: 4px 7px 4px 16px;
font-size: 11px;
white-space: nowrap;
cursor: default;">
Speed
                          </p>
                      </li>
                      <li><button id="speed-20">2.0x</button></li>
                      <li><button id="speed-15">1.5x</button></li>
                      <li><button id="speed-1" class="selected">Normal</button></li>
                      <li><button id="speed-05">0.5x</button></li>
                      <li><button id="speed-025">0.25x</button></li>

                  </ul>
              </div>


          </div>
          <div class="ytp-menu-container" tabindex="-1" role="menu" aria-labelledby="settings_button" style="display: none;" aria-hidden="true"><div class="ytp-menu"><div class="ytp-menu-content"><div class="ytp-menu-row"><div class="ytp-menu-cell ytp-menu-title" id="ytp-menu-autoplay">Autoplay</div><div class="ytp-menu-cell"><div class="ytp-segmented-control" role="radiogroup" aria-label="Autoplay"><div class="ytp-button ytp-segmented-control-selected" role="radio" aria-labelledby="ytp-menu-autoplay" aria-checked="true" tabindex="2050">Off</div><div class="ytp-button ytp-segmented-control-other ytp-segmented-control-deselected" role="radio" aria-labelledby="ytp-menu-autoplay" aria-checked="false" tabindex="2050">On</div></div></div></div><div class="ytp-menu-row hid"><div class="ytp-menu-cell ytp-menu-title" id="ytp-menu-iv">DASH</div><div class="ytp-menu-cell"><div class="ytp-segmented-control" role="radiogroup" aria-label="Annotations"><div class="ytp-button ytp-segmented-control-deselected" role="radio" aria-labelledby="ytp-menu-iv" aria-checked="false" tabindex="2200">Off</div><div class="ytp-button ytp-segmented-control-other ytp-segmented-control-selected" role="radio" aria-labelledby="ytp-menu-iv" aria-checked="true" tabindex="2200">On</div></div></div></div><div class="ytp-menu-row"><div class="ytp-menu-cell ytp-menu-title" id="ytp-menu-speed">Speed</div><div class="ytp-menu-cell"><div class="ytp-drop-down" aria-label="Speed" style="min-width: 100px;"><div class="ytp-drop-down-menu" tabindex="-1" role="listbox" aria-hidden="true" style="display: none; bottom: 22px;"><div class="ytp-drop-down-menu-content"><div class="ytp-button ytp-drop-down-menu-button" role="option" aria-labelledby="ytp-menu-speed" aria-checked="false" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>0.25</div><div class="ytp-button ytp-drop-down-menu-button" role="option" aria-labelledby="ytp-menu-speed" aria-checked="false" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>0.5</div><div class="ytp-button ytp-drop-down-menu-button ytp-drop-down-menu-button-selected ytp-drop-down-menu-button-checked" role="option" aria-labelledby="ytp-menu-speed" aria-checked="true" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>1</div><div class="ytp-button ytp-drop-down-menu-button" role="option" aria-labelledby="ytp-menu-speed" aria-checked="false" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>1.25</div><div class="ytp-button ytp-drop-down-menu-button" role="option" aria-labelledby="ytp-menu-speed" aria-checked="false" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>1.5</div><div class="ytp-button ytp-drop-down-menu-button" role="option" aria-checked="false" aria-labelledby="ytp-menu-speed" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>2</div></div></div><div class="ytp-button ytp-drop-down-label" role="button" tabindex="2301"><div class="ytp-drop-down-label-content">1</div><div class="ytp-drop-down-arrow"></div></div></div></div></div><div class="ytp-menu-row"><div class="ytp-menu-cell ytp-menu-title" id="ytp-menu-quality">Quality</div><div class="ytp-menu-cell"><div class="ytp-drop-down" aria-label="Quality" style="min-width: 100px;"><div class="ytp-drop-down-menu" tabindex="-1" role="listbox" style="display: none; bottom: 22px;" aria-hidden="true"><div class="ytp-drop-down-menu-content"><div class="ytp-button ytp-drop-down-menu-button ytp-drop-down-menu-button-checked" role="option" aria-labelledby="ytp-menu-quality" aria-checked="false" tabindex="2700"><div class="ytp-drop-down-menu-button-check"></div><span>720p<sup style="font-size: 75%;
font-weight: bold;">HD</sup></span></div><div class="ytp-button ytp-drop-down-menu-button ytp-drop-down-menu-button-selected" role="option" aria-labelledby="ytp-menu-quality" aria-checked="true" tabindex="2700"><div class="ytp-drop-down-menu-button-check"></div><span>360p</span></div></div></div><div class="ytp-button ytp-drop-down-label" role="button" tabindex="2701"><div class="ytp-drop-down-label-content"><span>Auto (360p)</span></div><div class="ytp-drop-down-arrow"></div></div></div></div></div></div></div></div>
          <div class="controls">
              
              <button class="play-pause-btn ">
<div class="play-icon " >
</div>
<div class="pause-icon ">
</div>
<div class="replay-icon">
</div>
</button>
              <div class="volume-container " >
                  <button class="mute-btn">
<div class="volume-high-icon "></div>
<div class="volume-low-icon "></div>
<div class="volume-muted-icon "></div>
</button>
                  <input class="volume-slider" type="range" min="0" max="1" step="any" value="1">
              </div>
              <div class="duration-container">
                  <div class="current-time">0:00</div>
                  <div class="time-separator">/</div>
                  <div class="total-time">NaN:NaN:NaN</div>
              </div>
              <button class="captions-btn" style="display: none;">
<div style="background: url(https://i.ibb.co/kxDdv58/obraz-2024-01-11-185348713.png);width: 35px;height: 31px;background-position: -98px 0px;">
</div>
</button>
<div class="ytp-button ytp-button-watch-later " role="button" aria-label="Watch Later" tabindex="6300"></div>
              <button class="settings-btn ">
              <div class="ytp-settings-hd-quality-badge"></div>
<div class="open">
</div>
<div class="close">
</div>
</button>
<div class="ytp-button ytp-button-watch-on-youtube" role="button" aria-label="Watch on YouTube.com" tabindex="6700" aria-hidden="true"></div>
              <button class="small-player-btn "title="">
<div class="open " >
</div>
<div class="close ">
</div>

</button>

              <button class="full-screen-btn " >
<div class="open">
</div>
<div class="close">
</div>
</button>
          </div>
      </div>
      <video tabindex="-1" type="video/mp4; codecs=avc1.42E01E" id="video-to-replace-new">
<track default="" kind="captions" srclang="en" src="data:text/vtt;base64,">                                </video>
<audio tabindex="-1" type="audio/webm; id="audio-to-replace-new"></audio>
<div id="context-menu" class="custom-context-menu">
  <ul>
   <li><a id="context-item" data-onclick="repeat">Repeat</a></li>
      <li><a id="context-item" data-onclick="copyurl">Copy URL</a></li>
      <li><a id="context-item" data-onclick="download">Download video</a></li>
      <li><a id="context-item" data-onclick="html5">About HTML5</a></li>
  </ul>
</div>
      <img class="buffer" src="https://i.ibb.co/C0cHndZ/fulp-spinner.webp" style="display:none;width: 50px;height: 50px;position: absolute;top: calc(50% - 34px);">
  </div>`;
    }

    function js() {
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('v');
        var videoidforjs = id


        const videoidforjsyes = videoidforjs

        const playPauseBtn = document.querySelector(".play-pause-btn")
        const fullScreenBtn = document.querySelector(".full-screen-btn")
        const smallPlayerBtn = document.querySelector(".small-player-btn")
        const SettingsBtn = document.querySelector(".settings-btn")
        const watchLaterBtn = document.querySelector('.ytp-button-watch-later')
        const settingsMenu = document.querySelector(".ytp-menu-container");
        const muteBtn = document.querySelector(".mute-btn")
        const captionsBtn = document.querySelector(".captions-btn")
        const currentTimeElem = document.querySelector(".current-time")
        const totalTimeElem = document.querySelector(".total-time")
        const previewImg = document.querySelector(".preview-img")
        const thumbnailImg = document.querySelector(".thumbnail-img")
        const volumeSlider = document.querySelector(".volume-slider")
        const videoContainer = document.querySelector(".video-container")
        const timelineContainer = document.querySelector(".timeline-container")
        const video = document.querySelector("video")
        const audio = document.querySelector("audio")
        const buffer = document.querySelector(".buffer")
        const hovercurrentTimeElem = document.querySelector(".timeline-txttime")
        const TopTitleBar = document.querySelector(".top-bar")
        const resolution720pBtn = document.getElementById("resolution-720p");
        const resolution360pBtn = document.getElementById("resolution-360p");
        const watchcontainerfortheater = document.getElementById("watch-container");
        const contextMenu = document.getElementById('context-menu');
        const contextItemhtml5 = document.querySelector('#context-item[data-onclick="html5"]');
        const contextItemdownload = document.querySelector('#context-item[data-onclick="download"]');
        const contextItemrepeat = document.querySelector('#context-item[data-onclick="repeat"]');
        const contextItemcopy = document.querySelector('#context-item[data-onclick="copyurl"]');
        const playercontainer = document.querySelector('#watch-player')
        const WatchOnYoutube = document.querySelector('.ytp-button-watch-on-youtube')
        const TopBar = document.querySelector('.html5-info-bar')
        const Bezel = document.querySelector('.html5-bezel')
        const BezelIcon = document.querySelector('.html5-bezel div')
        WatchOnYoutube.onclick = function() {
            window.location.href = `https://www.youtube.com/watch?v=${videoidforjs}`
        }

        function gotopercent(value) {
            video.currentTime = video.duration * value;
        }
        waitForElm('#watch-related').then((elm) => {
            var page = sdj.CreateJSON(elm)
            console.log(page)
            var idelement = document.querySelector("#watch-related .video-list-item:nth-of-type(1) .related-video");

            // Get the href attribute
            var hrefValue = idelement.getAttribute("href");

            // Remove "watch?v=" from the href
            var videoId = hrefValue.replace("watch?v=", "");

            // Log the modified href
            console.log("Original Href: " + hrefValue);
            console.log("Modified Video ID: " + videoId);
            var topbarauthorpfp = document.querySelector('.html5-info-bar .html5-author-img img')
            var videoinfosdjelm = document.querySelector('#videoinfo-for-sdj')
            var videoinfosdj = sdj.CreateJSON(videoinfosdjelm)
            topbarauthorpfp.src = videoinfosdj.children[0].text
            video.addEventListener("ended", function() {
                if (localStorage.getItem('v3-player-autoplay') === 'true') {
                    window.location.href = 'https://youtube.com/watch?v=' + videoId
                } else {
                    videoContainer.classList.add('video-ended')
                    var element = document.querySelector('#watch-related')
                    var json = sdj.CreateJSON(element)
                    json.children.forEach(item => {
                        if (item.children[0].children[2].text === 'video') {
                            console.log('sheesh')

                            const container = document.querySelector('.html5-endscreen-content')
                            const videowallstill = document.createElement('a')
                            videowallstill.className = 'videowall-still'
                            videowallstill.href = 'https://www.youtube.com/' + item.children[0].children[0].attributes.href
                            videowallstill.style.backgroundImage = `url(https://i1.ytimg.com/vi/${item.children[0].children[1].text}/mqdefault.jpg)`

                            videowallstill.innerHTML = `
                        <span class="videowall-info"> <span class="videowall-info-title">${item.children[0].children[0].children[1].text}</span>
        <span class="videowall-info-author">${item.children[0].children[0].children[2].children[0].children[0].children[0].text}</span>
        <span class="videowall-info-duration">${item.children[0].children[0].children[0].children[1].text}</span>
        <span class="videowall-info-view-count">${item.children[0].children[0].children[3].text}</span></span>`;
                            container.appendChild(videowallstill)
                        }
                    })

                }


                // You can perform actions here after the video has ended
                // For example, play another video or execute some code.
            });
        });

        /*    waitForElm('#watch7-sidebar-contents').then((elm) => {
                var sdjelm = document.querySelector('#watch-related')
                var sdjdata = sdj.CreateJSON(sdjelm)
                var autoplaybar = document.createElement('div')
                autoplaybar.id = "watch-sidebar-section"
                autoplaybar.innerHTML = `<div class="autoplay-bar"><div class="checkbox-on-off"><label>Autoplay</label>
                <span class="yt-uix-hovercard autoplay-hovercard"></span>
                <span class="yt-uix-checkbox-on-off "><input type="checkbox"><label><span class="checked"></span><span class="unchecked"></span><span class="toggle"></span></label></span></div><h4 class="watch-sidebar-head">Up Next</h4><div class="watch-sidebar-body"><ul id="watch-related-autoplay" class="video-list"><li class="video-list-item related-list-item"><a href="/watch?v=_PVA8kUZe9k" class="related-video yt-uix-contextlink yt-uix-sessionlink"><span class="ux-thumb-wrap contains-addto " href="/watch?v=_PVA8kUZe9k">    <span class="video-thumb yt-thumb yt-thumb-120"><span class="yt-thumb-default">
                        <span class="yt-thumb-clip">
                          <span class="yt-thumb-clip-inner">
                            <img alt="Thumbnail" src="https://i.ytimg.com/vi/_PVA8kUZe9k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAQK7IGqazOxUzdOkgxN-5F5d7szw" width="120">
                            <span class="vertical-align"></span>
                          </span>
                        </span>
                      </span></span>
                <span class="video-time">12:52</span>
                
                
                
                </span><span dir="ltr" class="title" title="Rekordziści, których złapano na cheatowaniu">Rekordziści, których złapano na cheatowaniu</span><span class="stat attribution"><span class="g-hovercard" data-name="watch-vrec"><span class="run run-text">by </span><span class="run run-text"><b>tvgry</b></span></span></span><span class="stat view-count">874&nbsp;322 wyświetlenia<span class="extra">2 lata temu</span></span></a></li>
                </ul></div></div>`
                elm.insertBefore(autoplaybar, elm.firstChild)
            });
            */
        // Set a timeout for 10 seconds
        var timeout = setTimeout(function() {
            // Check if the video is still loading after 10 seconds
            if (video.readyState < video.HAVE_FUTURE_DATA) {
                console.log('Video not loading within 10 seconds.');
                playercontainer.innerHTML = `<div id="player-unavailable" class="    player-width player-height    player-unavailable ">
                      <img class="icon meh" src="https://s.ytimg.com/yts/img/meh7-vflGevej7.png" alt="">
              <div class="content">
                <h1 id="unavailable-message" class="message">
                        This video is unavailable.
                </h1>
                <div id="unavailable-submessage" class="submessage">The video could not be loaded. Check issue #1 in the extension popup for more info
                </div>
              </div>
            
            
              </div>`
                    // Perform actions if the video is not loading
            }
        }, 15000);
        video.addEventListener('loadeddata', function() {
            // Clear the timeout if the video has loaded within 10 seconds
            clearTimeout(timeout);
            console.log('Video loaded successfully.');
            // Perform actions when the video is loaded
        });
        const autoplayoff = document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(1) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(1)");
        const autoplayon = document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(1) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(2)");
        if (localStorage.getItem('v3-player-autoplay') === 'true') {
            autoplayon.classList.add('ytp-segmented-control-selected')
            autoplayon.classList.add('ytp-segmented-control-other')
            autoplayon.classList.remove('ytp-segmented-control-deselected')
            autoplayoff.classList.remove('ytp-segmented-control-selected')
            autoplayoff.classList.add('ytp-segmented-control-other')
            autoplayoff.classList.add('ytp-segmented-control-deselected')

        } else {
            autoplayon.classList.remove('ytp-segmented-control-selected')
            autoplayon.classList.add('ytp-segmented-control-other')
            autoplayon.classList.add('ytp-segmented-control-deselected')
            autoplayoff.classList.add('ytp-segmented-control-selected')
            autoplayoff.classList.remove('ytp-segmented-control-other')
            autoplayoff.classList.remove('ytp-segmented-control-deselected')
        }
        autoplayon.onclick = function() {
            localStorage.setItem('v3-player-autoplay', 'true')
            autoplayon.classList.add('ytp-segmented-control-selected')
            autoplayon.classList.add('ytp-segmented-control-other')
            autoplayon.classList.remove('ytp-segmented-control-deselected')
            autoplayoff.classList.remove('ytp-segmented-control-selected')
            autoplayoff.classList.add('ytp-segmented-control-other')
            autoplayoff.classList.add('ytp-segmented-control-deselected')
        }
        autoplayoff.onclick = function() {
            localStorage.setItem('v3-player-autoplay', 'false')
            autoplayon.classList.remove('ytp-segmented-control-selected')
            autoplayon.classList.add('ytp-segmented-control-other')
            autoplayon.classList.add('ytp-segmented-control-deselected')
            autoplayoff.classList.add('ytp-segmented-control-selected')
            autoplayoff.classList.remove('ytp-segmented-control-other')
            autoplayoff.classList.remove('ytp-segmented-control-deselected')
        }
        const dashoff = document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(2) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(1)");
        const dashon = document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(2) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(2)");
        if (localStorage.getItem('v3-player-dash') === 'true') {
            dashon.classList.add('ytp-segmented-control-selected')
            dashon.classList.add('ytp-segmented-control-other')
            dashon.classList.remove('ytp-segmented-control-deselected')
            dashoff.classList.remove('ytp-segmented-control-selected')
            dashoff.classList.add('ytp-segmented-control-other')
            dashoff.classList.add('ytp-segmented-control-deselected')

        } else {
            dashon.classList.remove('ytp-segmented-control-selected')
            dashon.classList.add('ytp-segmented-control-other')
            dashon.classList.add('ytp-segmented-control-deselected')
            dashoff.classList.add('ytp-segmented-control-selected')
            dashoff.classList.remove('ytp-segmented-control-other')
            dashoff.classList.remove('ytp-segmented-control-deselected')
        }
        dashon.onclick = function() {
            localStorage.setItem('v3-player-dash', 'true')
            dashon.classList.add('ytp-segmented-control-selected')
            dashon.classList.add('ytp-segmented-control-other')
            dashon.classList.remove('ytp-segmented-control-deselected')
            dashoff.classList.remove('ytp-segmented-control-selected')
            dashoff.classList.add('ytp-segmented-control-other')
            dashoff.classList.add('ytp-segmented-control-deselected')
            clearTimeout(timeout);
            PlayerInit()
            settingsMenu.style.display = "block";
        }
        dashoff.onclick = function() {
            localStorage.setItem('v3-player-dash', 'false')
            dashon.classList.remove('ytp-segmented-control-selected')
            dashon.classList.add('ytp-segmented-control-other')
            dashon.classList.add('ytp-segmented-control-deselected')
            dashoff.classList.add('ytp-segmented-control-selected')
            dashoff.classList.remove('ytp-segmented-control-other')
            dashoff.classList.remove('ytp-segmented-control-deselected')
            clearTimeout(timeout);
            PlayerInit()
            settingsMenu.style.display = "block";
        }

        function checkSource() {
            if (video.readyState >= 1) {
                // Video source is available
                video.play();
            } else {
                // Check again after a short delay
                setTimeout(checkSource, 100);
            }
        }
        videoContainer.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Prevent the default context menu from appearing

            // Calculate the menu position using getBoundingClientRect and pageX/Y
            const videoRect = video.getBoundingClientRect();
            const menuX = e.pageX - videoRect.left - window.scrollX;
            const menuY = e.pageY - videoRect.top - window.scrollY;

            contextMenu.style.left = `${menuX}px`;
            contextMenu.style.top = `${menuY}px`;
            contextMenu.style.display = 'block';
        });

        function copyToClipboard(text) {
            navigator.clipboard.writeText(text)
                .then(() => {

                })
                .catch((error) => {
                    console.error('Failed to copy URL to clipboard: ', error);
                });
        }
        contextItemhtml5.addEventListener('click', () => {
            window.location.href = "html5.html"
        });
        contextItemcopy.addEventListener('click', () => {
            const currentURL = window.location.href;
            copyToClipboard(currentURL);
        });
        contextItemdownload.addEventListener('click', () => {
            var expirationTimestamp = Math.floor((Date.now() + 24 * 60 * 60 * 1000) / 1000);
            window.location.href = video.getAttribute('src');
            const example = "https://www.youtube.com/videoplayback?expire=1602206135&id=rATbtwj1qls&ei=UExBWUVSX0dFVF9WSURFT1BMQVlCQUNL&requiressl=yes&source=youtube&host=iv.datura.network";
        });
        contextItemrepeat.addEventListener('click', function() {
            // Toggle the loop property
            video.loop = !video.loop;

            console.log('Loop toggled:', video.loop);

            if (video.loop) {
                contextItemrepeat.textContent = '✓ Repeat';
            } else {
                contextItemrepeat.textContent = "Repeat";
            }
        });

        document.addEventListener('click', () => {
            contextMenu.style.display = 'none';
        });

        function addtowatchlater() {
            const url = 'https://www.youtube.com/youtubei/v1/browse/edit_playlist?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false'; // Replace this with the actual URL you want to fetch

            const payload = {
                "context": yt.config_.INNERTUBE_CONTEXT,
                "actions": [{
                    "addedVideoId": videoidforjs,
                    "action": "ACTION_ADD_VIDEO"
                }],
                "playlistId": "WL"
            }


            let headers = {}
            if (yt.config_.LOGGED_IN === false) {
                headers = {}
            } else {
                headers = {
                    "authorization": Panda.document.Account.getSapisidhash(),
                    "x-goog-authuser": yt.config_.SESSION_INDEX,
                    "x-goog-pageid": yt.config_.DELEGATED_SESSION_ID,
                    "x-goog-visitor-id": yt.config_.VISITOR_DATA
                }
            }
            console.log(headers)

            fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(payload)
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    watchLaterBtn.classList.add('html5-async-success')
                    watchLaterBtn.classList.remove('html5-async-progress')
                })
        }
        watchLaterBtn.onclick = function() {
            watchLaterBtn.classList.add('html5-async-progress')
            addtowatchlater()
        }

        console.log(ytInitialPlayerResponse)
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
        const currentDay = currentDate.getDate();
        // video.src = "https://" + config_.apiurl + "/latest_version?id=" + videoidforjsyes + "&local=true";
        if (currentMonth === 12 && currentDay === 27) {
            video.src = 'https://pixiecat-dev.github.io/media/laugh.mp4'
        } else {
            // Get all elements with class "ytp-button ytp-drop-down-label"
            var dropdownLabels = document.querySelectorAll('.ytp-button.ytp-drop-down-label');
            var qualityBadge = document.querySelector('.ytp-settings-hd-quality-badge')
                // Iterate through each button
            dropdownLabels.forEach(function(label) {
                // Attach a click event listener to each button
                label.addEventListener('click', function() {
                    // Find the closest parent with class "ytp-drop-down"
                    var dropdownContainer = label.closest('.ytp-drop-down');

                    // Find the closest child with class "ytp-drop-down-menu"
                    var dropdownMenu = dropdownContainer.querySelector('.ytp-drop-down-menu');

                    // Toggle the display style of the closest dropdown menu
                    if (dropdownMenu) {
                        dropdownMenu.style.display = (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') ? 'block' : 'none';
                    }
                });
            });
            if (ytInitialPlayerResponse.streamingData) {
                var selectedbuttontext = document.querySelector('.ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(4) .ytp-menu-cell:nth-of-type(2) .ytp-button .ytp-drop-down-label-content span')
                var hdbutton = document.querySelector('.ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(4) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(1)')
                var sdbutton = document.querySelector('.ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(4) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(2)')

                if (localStorage.getItem('v3-player-dash') === 'true') {
                    const DashPlayer = dashjs.MediaPlayer().create();

                    // Initialize the player with your video element
                    DashPlayer.initialize(video, null, true);

                    // Load your DASH manifest file
                    // Replace 'path/to/your/manifest.mpd' with the path to your DASH manifest file
                    DashPlayer.attachSource('https://iv.datura.network/api/manifest/dash/id/hlZdjjIsnGE?local=true');

                    function switchRepresentation(value) {
                        const selectedValue = value;

                        // Set the chosen representation
                        if (selectedValue === 'auto') {
                            // Enable adaptive streaming (auto mode)
                            DashPlayer.updateSettings({
                                'streaming': {
                                    'abr': {
                                        'autoSwitchBitrate': true
                                    }
                                }
                            });
                        } else {
                            // Manually set representation
                            DashPlayer.setQualityFor('video', selectedValue, true); // Convert to integer
                        }
                    }
                    switchRepresentation(6)
                    hdbutton.addEventListener("click", () => {
                        // Set the resolution to 720p
                        switchRepresentation(6)
                    });
                } else if (ytInitialPlayerResponse.streamingData.formats) {

                    if (ytInitialPlayerResponse.streamingData.formats[1]) {
                        qualityBadge.style.display = "block"
                        selectedbuttontext.innerHTML = '720p<sup style="font-size: 75%;font-weight: bold;">HD</sup>'
                        UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[1], function(result) {
                            video.src = result.decodedUrl
                        })
                        video.play();
                        resolution720pBtn.classList.add('selected');
                        resolution360pBtn.classList.remove('selected');
                        // Update the src attribute of the video element
                        hdbutton.addEventListener("click", () => {
                            // Set the resolution to 720p
                            changeResolution("720p");
                        });

                        sdbutton.addEventListener("click", () => {
                            // Set the resolution to 360p
                            changeResolution("360p");
                        });


                        function changeResolution(resolution) {
                            const video = document.querySelector("video");
                            // Store the current playback position
                            const currentTime = video.currentTime;

                            var isPaused;

                            if (video.paused) {
                                isPaused = true;

                            } else {
                                // Video is playing
                                isPaused = false
                            }
                            // Add your logic to change the video resolution
                            // For example, update the video source URL to the selected resolution


                            if (resolution === "720p") {
                                video.src = null;
                                UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[1], function(result) {
                                    video.src = result.decodedUrl
                                    video.currentTime = currentTime;
                                    if (isPaused) {
                                        // Do something when the video is paused
                                        video.pause();
                                    } else {
                                        // Do something when the video is playing
                                        video.play();
                                    }
                                })
                                hdbutton.classList.add("ytp-drop-down-menu-button-checked");
                                sdbutton.classList.remove("ytp-drop-down-menu-button-checked");
                                qualityBadge.style.display = "block"
                                selectedbuttontext.innerHTML = '720p<sup style="font-size: 75%;font-weight: bold;">HD</sup>'
                            } else if (resolution === "360p") {
                                video.src = null;
                                UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0], function(result) {
                                    video.src = result.decodedUrl
                                    video.currentTime = currentTime;
                                    if (isPaused) {
                                        // Do something when the video is paused
                                        video.pause();
                                    } else {
                                        // Do something when the video is playing
                                        video.play();
                                    }
                                })
                                sdbutton.classList.add("ytp-drop-down-menu-button-checked");
                                hdbutton.classList.remove("ytp-drop-down-menu-button-checked");
                                selectedbuttontext.textContent = '360p'
                                qualityBadge.style.display = "none"
                            } else if (resolution === "auto") {
                                selectedbuttontext.innerHTML = 'Auto'
                                video.src = null;
                                const effectiveType = navigator.connection.effectiveType;

                                if (effectiveType === '4g' || effectiveType === '3g') {
                                    UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[1], function(result) {
                                        video.src = result.decodedUrl
                                        video.currentTime = currentTime;
                                        if (isPaused) {
                                            // Do something when the video is paused
                                            video.pause();
                                        } else {
                                            // Do something when the video is playing
                                            video.play();
                                        }
                                    })
                                } else {
                                    UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0], function(result) {
                                        video.src = result.decodedUrl
                                        video.currentTime = currentTime;
                                        if (isPaused) {
                                            // Do something when the video is paused
                                            video.pause();
                                        } else {
                                            // Do something when the video is playing
                                            video.play();
                                        }
                                    })
                                }
                            }

                            // Seek to the stored playback position
                            video.currentTime = currentTime;

                            if (isPaused) {
                                // Do something when the video is paused
                                video.pause();
                            } else {
                                // Do something when the video is playing
                                video.play();
                            }
                            var dropdownContainer = sdbutton.closest('.ytp-drop-down .ytp-drop-down-menu');
                            // Close the settings menu (optional)
                            dropdownContainer.style.display = "none";
                        }
                    } else {
                        selectedbuttontext.textContent = '360p'
                        hdbutton.classList.add('hid')
                        sdbutton.classList.add('ytp-drop-down-menu-button-checked')
                        qualityBadge.style.display = "none"
                            // If the URL doesn't exist, you can handle this case here
                        UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0], function(result) {
                            video.src = result.decodedUrl
                        })
                        video.play();
                        resolution720pBtn.classList.remove('selected');
                        resolution720pBtn.style.display = "none";
                        resolution360pBtn.classList.add('selected');

                        sdbutton.addEventListener("click", () => {
                            // Set the resolution to 360p
                            changeResolution("360p");
                        });

                        function changeResolution(resolution) {
                            const video = document.querySelector("video");
                            // Store the current playback position
                            const currentTime = video.currentTime;

                            var isPaused;

                            if (video.paused) {
                                isPaused = true;

                            } else {
                                // Video is playing
                                isPaused = false
                            }
                            // Add your logic to change the video resolution
                            // For example, update the video source URL to the selected resolution


                            if (resolution === "720p") {
                                if (ytInitialPlayerResponse.streamingData.formats[1].url) {
                                    video.src = "https://" + config_.apiurl + "/latest_version?id=" + videoidforjsyes + "&itag=22";
                                } else {
                                    video.src = "https://" + config_.apiurl + "/latest_version?id=" + videoidforjsyes + "&itag=22&local=true";
                                }
                                resolution720pBtn.classList.add("selected");
                                resolution360pBtn.classList.remove("selected");
                            } else if (resolution === "360p") {
                                video.src = null;
                                UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0], function(result) {
                                    video.src = result.decodedUrl
                                    video.currentTime = currentTime;
                                    if (isPaused) {
                                        // Do something when the video is paused
                                        video.pause();
                                    } else {
                                        // Do something when the video is playing
                                        video.play();
                                    }
                                })
                                resolution360pBtn.classList.add("selected");
                                resolution720pBtn.classList.remove("selected");

                            }

                            // Seek to the stored playback position
                            video.currentTime = currentTime;

                            if (isPaused) {
                                // Do something when the video is paused
                                video.pause();
                            } else {
                                // Do something when the video is playing
                                video.play();
                            }

                            // Close the settings menu (optional)
                            var dropdownContainer = sdbutton.closest('.ytp-drop-down .ytp-drop-down-menu');
                            // Close the settings menu (optional)
                            dropdownContainer.style.display = "none";
                        }
                    }
                } else if (ytInitialPlayerResponse.streamingData.hlsManifestUrl) {
                    console.log(ytInitialPlayerResponse.streamingData.hlsManifestUrl)
                    const styleElement = document.createElement('script');
                    styleElement.innerHTML = ` 
                            const video = document.querySelector("video")
                            // URL of the live stream manifest file
                    const streamUrl = "${ytInitialPlayerResponse.streamingData.hlsManifestUrl}"
                        // Check if the browser supports HLS.js
                    if (Hls.isSupported()) {
                        const hls = new Hls();
                        hls.loadSource(streamUrl);
                        hls.attachMedia(video);
                        video.play()
                    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        // For Safari
                        video.src = streamUrl;
                        video.play()
                    }`;
                    document.head.appendChild(styleElement);

                    Panda.document.utils.waitForElm('#watch7-sidebar').then((elm) => {
                        const sidebar = document.querySelector('#watch7-sidebar')
                        const livechat = document.createElement('iframe');
                        livechat.src = "https://www.youtube.com/live_chat?v=" + videoidforjs
                        livechat.style.width = "100%"
                        livechat.style.height = "390px"
                        sidebar.insertBefore(livechat, sidebar.firstChild);
                        document.body.classList.add('playlist-exists')
                    });

                }
            } else {
                video.src = "https://iv.datura.network/latest_version?id=" + videoidforjs + "&local=true"
            }
        }
        var topbartitle = document.querySelector('.html5-info-bar .html5-title')
        var topbardesc = document.querySelector('.html5-info-bar .html5-description-text')
        var topbarauthorname = document.querySelector('.html5-info-bar .html5-author-name')
        var topbarviews = document.querySelector('.html5-info-bar .html5-view-count')
        var fixedcount = parseInt(ytInitialPlayerResponse.videoDetails.viewCount, 10);
        topbartitle.textContent = ytInitialPlayerResponse.videoDetails.title
        topbardesc.textContent = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.description.simpleText
        topbarauthorname.textContent = ytInitialPlayerResponse.videoDetails.author
        topbarviews.textContent = fixedcount.toLocaleString('en-US', {
            useGrouping: true
        });
        var pausedfortopbar = 'no';
        var moreinfobutton = document.querySelector('.html5-more-info-button');

        moreinfobutton.onclick = function() {
            var a = document.querySelector('.html5-info-bar');

            if (a.classList.contains('show-more-info')) {
                a.classList.remove('show-more-info');
                if (pausedfortopbar === 'yes') {
                    video.play();
                }
            } else {
                a.classList.add('show-more-info');
                if (!video.paused) {
                    video.pause();
                    pausedfortopbar = 'yes';
                } else {
                    pausedfortopbar = 'no';
                }
            }
        }
        waitForElm('.watch-extras-section #eow-category > a').then((elm) => {
            elm.textContent = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.category
        })



        video.addEventListener('ended', function() {

            const url6 = new URL(window.location.href);

            // Get the value of the "list" parameter
            const listParam6 = url6.searchParams.get("list");

            // Get the value of the "id" parameter
            const id6 = url.searchParams.get("v");

            // Check if the "list" parameter is not present and hide the element
            if (listParam6 === null) {
                // Redirect to another page when the video ends
                window.location.href = "watch.html?v=" + videoInfo.recommendedVideos[0].videoId;
            } else {
                window.location.href = "watch.html?v=" + nextVideo.videoId + "&list=" + listParam6;

            }

        });
        let largymode;
        var selectedspeedbuttontext = document.querySelector('.ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-button .ytp-drop-down-label-content')
        const speed2Btn = document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(6)");
        const speed15Btn = document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(5)");
        const speed125Btn = document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(4)");
        const speed1Btn = document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(3)");
        const speed05Btn = document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(2)");
        const speed025Btn = document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(1)");

        speed2Btn.addEventListener("click", () => {
            video.playbackRate = 2.0; // Decrease playback speed by 0.25
            speed2Btn.classList.add("ytp-drop-down-menu-button-checked");
            speed15Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed125Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed1Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed05Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed025Btn.classList.remove("ytp-drop-down-menu-button-checked");
            selectedspeedbuttontext.textContent = '2'
            var dropdownContainer = speed1Btn.closest('.ytp-drop-down .ytp-drop-down-menu');
            // Close the settings menu (optional)
            dropdownContainer.style.display = "none";
        });
        speed15Btn.addEventListener("click", () => {
            video.playbackRate = 1.5; // Decrease playback speed by 0.25
            speed2Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed15Btn.classList.add("ytp-drop-down-menu-button-checked");
            speed125Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed1Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed05Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed025Btn.classList.remove("ytp-drop-down-menu-button-checked");
            var dropdownContainer = speed1Btn.closest('.ytp-drop-down .ytp-drop-down-menu');
            selectedspeedbuttontext.textContent = '1.5'
                // Close the settings menu (optional)
            dropdownContainer.style.display = "none";
        });
        speed125Btn.addEventListener("click", () => {
            video.playbackRate = 1.25; // Decrease playback speed by 0.25
            speed2Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed15Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed125Btn.classList.add("ytp-drop-down-menu-button-checked");
            speed1Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed05Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed025Btn.classList.remove("ytp-drop-down-menu-button-checked");
            var dropdownContainer = speed1Btn.closest('.ytp-drop-down .ytp-drop-down-menu');
            selectedspeedbuttontext.textContent = '1.25'
                // Close the settings menu (optional)
            dropdownContainer.style.display = "none";
        });

        speed1Btn.addEventListener("click", () => {
            video.playbackRate = 1.0; // Decrease playback speed by 0.25
            speed2Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed15Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed125Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed1Btn.classList.add("ytp-drop-down-menu-button-checked");
            speed05Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed025Btn.classList.remove("ytp-drop-down-menu-button-checked");
            var dropdownContainer = speed1Btn.closest('.ytp-drop-down .ytp-drop-down-menu');
            selectedspeedbuttontext.textContent = '1'
                // Close the settings menu (optional)
            dropdownContainer.style.display = "none";
        });
        speed05Btn.addEventListener("click", () => {
            video.playbackRate = 0.5; // Decrease playback speed by 0.25
            speed2Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed15Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed125Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed1Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed05Btn.classList.add("ytp-drop-down-menu-button-checked");
            speed025Btn.classList.remove("ytp-drop-down-menu-button-checked");
            var dropdownContainer = speed1Btn.closest('.ytp-drop-down .ytp-drop-down-menu');
            selectedspeedbuttontext.textContent = '0.5'
                // Close the settings menu (optional)
            dropdownContainer.style.display = "none";
        });
        speed025Btn.addEventListener("click", () => {
            video.playbackRate = 0.25; // Decrease playback speed by 0.25
            speed2Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed15Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed125Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed1Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed05Btn.classList.remove("ytp-drop-down-menu-button-checked");
            speed025Btn.classList.add("ytp-drop-down-menu-button-checked");
            var dropdownContainer = speed1Btn.closest('.ytp-drop-down .ytp-drop-down-menu');
            selectedspeedbuttontext.textContent = '0.25'
                // Close the settings menu (optional)
            dropdownContainer.style.display = "none";
        });

        let timer; // Declare the timer variable

        const videoControlsContainer = document.querySelector('.video-controls-container');

        function handleMouseMove() {
            videoControlsContainer.style.opacity = '1';
            TopBar.style.opacity = '1';
            clearTimeout(timer);
            timer = setTimeout(() => {
                videoControlsContainer.style.opacity = '0';
                TopBar.style.opacity = '0';
                checkFullScreen();
            }, 2000); // 2 seconds
        }

        videoContainer.addEventListener('mousemove', handleMouseMove);

        function checkFullScreen() {
            if (!videoContainer.classList.contains('full-screen')) {
                videoControlsContainer.style.opacity = '1';
                TopBar.style.opacity = '0';
            }
        }

        // Check the full-screen class initially and start checking periodically
        checkFullScreen();
        setInterval(checkFullScreen, 2000);
        document.addEventListener("keydown", e => {
            const tagName = document.activeElement.tagName.toLowerCase()

            if (tagName === "input") return

            switch (e.key.toLowerCase()) {
                case " ":
                    if (tagName === "button") return
                case "k":
                    togglePlay()
                    break
                case "f":
                    toggleFullScreenMode()
                    break
                case "1":
                    gotopercent('0.1')
                    break
                case "2":
                    gotopercent('0.2')
                    break
                case "3":
                    gotopercent('0.3')
                    break
                case "4":
                    gotopercent('0.4')
                    break
                case "5":
                    gotopercent('0.5')
                    break
                case "6":
                    gotopercent('0.6')
                    break
                case "7":
                    gotopercent('0.7')
                    break
                case "8":
                    gotopercent('0.8')
                    break
                case "9":
                    gotopercent('0.9')
                    break
                case "0":
                    gotopercent('0.0')
                    break

                case "i":
                    toggleMiniPlayerMode()
                    break
                case "m":
                    toggleMute()
                    break
                case "t":
                    toggleLargePlayerMode()
                    break
                case "arrowleft":
                case "j":
                    skip(-5)
                    break
                case "arrowright":
                case "l":
                    skip(5)
                    break
                case "c":
                    toggleCaptions()
                    break
            }
        })





        smallPlayerBtn.addEventListener("click", () => {

            toggleLargePlayerMode();
        });


        function toggleLargePlayerMode() {
            if (largymode == true) {
                DisableLargePlayer();
            } else {
                EnableLargePlayer();
            }
        }

        function EnableLargePlayer() {
            largymode = true

            document.body.classList.add("watch-wide");



            function myFunction() {
                document.body.classList.add("theater-mode");
            }

            // Wait for 1 second and then execute myFunction
            setTimeout(myFunction, 300);



        }

        function DisableLargePlayer() {

            document.body.classList.remove("theater-mode");


            document.body.classList.remove("watch-wide");


            // Wait for 1 second and then execute myFunction

            largymode = false;
        }


        timelineContainer.addEventListener("mousemove", handleTimelineUpdate)
        timelineContainer.addEventListener("mousedown", toggleScrubbing)
        document.addEventListener("mouseup", e => {
            if (isScrubbing) toggleScrubbing(e)
        })
        document.addEventListener("mousemove", e => {
            if (isScrubbing) handleTimelineUpdate(e)
        })
        let isScrubbing = false
        let wasPaused

        function toggleScrubbing(e) {
            const rect = timelineContainer.getBoundingClientRect()
            const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
            isScrubbing = (e.buttons & 1) === 1
            videoContainer.classList.toggle("scrubbing", isScrubbing)
            if (isScrubbing) {
                wasPaused = video.paused
                video.pause()
            } else {
                video.currentTime = percent * video.duration
                if (!wasPaused) {
                    video.play();
                }
            }
            handleTimelineUpdate(e)
        }

        function handleTimelineUpdate(e) {
            const rect = timelineContainer.getBoundingClientRect()
            const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
            const previewImgNumber = Math.max(1, Math.floor((percent * video.duration) / 10))
            timelineContainer.style.setProperty("--preview-position", percent)
            if (isScrubbing) {
                e.preventDefault()
                timelineContainer.style.setProperty("--progress-position", percent)
            }
        }
        video.addEventListener("loadedmetadata", function() {
            updateBufferedProgress();
        });

        video.addEventListener("timeupdate", function() {
            updateBufferedProgress();
        });

        function updateBufferedProgress() {
            var buffered = video.buffered;

            // Check if there are buffered time ranges
            if (buffered.length > 0) {
                var bufferedPercentage = (buffered.end(0) / video.duration);

                // Update the CSS variable for progress position
                document.documentElement.style.setProperty('--loaded-position', bufferedPercentage + '%');
            }
        }
        const captions = video.textTracks[0]
        captions.mode = "hidden"

        captionsBtn.addEventListener("click", toggleCaptions)

        function toggleCaptions() {
            const isHidden = captions.mode === "hidden"
            captions.mode = isHidden ? "showing" : "hidden"
            videoContainer.classList.toggle("captions", isHidden)
        }
        video.addEventListener("loadeddata", () => {
            totalTimeElem.textContent = formatDuration(video.duration)
            buffer.style.display = "none"
        })
        video.addEventListener("timeupdate", () => {
            currentTimeElem.textContent = formatDuration(video.currentTime)
            const percent = video.currentTime / video.duration
            timelineContainer.style.setProperty("--progress-position", percent)
        })
        const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
            minimumIntegerDigits: 2,
        })

        function formatDuration(time) {
            const seconds = Math.floor(time % 60)
            const minutes = Math.floor(time / 60) % 60
            const hours = Math.floor(time / 3600)
            if (hours === 0) {
                return `${minutes}:${leadingZeroFormatter.format(seconds)}`
            } else {
                return `${hours}:${leadingZeroFormatter.format(
                                                  minutes
                                                  )}:${leadingZeroFormatter.format(seconds)}`
            }
        }

        function skip(duration) {
            video.currentTime += duration
        }
        muteBtn.addEventListener("click", toggleMute)
        volumeSlider.addEventListener("input", e => {
            video.volume = e.target.value
            video.muted = e.target.value === 0
        })

        function toggleMute() {
            video.muted = !video.muted
        }
        video.addEventListener("volumechange", () => {
            volumeSlider.value = video.volume
            let volumeLevel
            if (video.muted || video.volume === 0) {
                volumeSlider.value = 0
                volumeLevel = "muted"
            } else if (video.volume >= 0.5) {
                volumeLevel = "high"
            } else {
                volumeLevel = "low"
            }
            videoContainer.dataset.volumeLevel = volumeLevel
        })
        fullScreenBtn.addEventListener("click", toggleFullScreenMode)

        function toggleFullScreenMode() {
            if (document.fullscreenElement == null) {
                videoContainer.requestFullscreen()
            } else {
                document.exitFullscreen()
            }
        }

        SettingsBtn.addEventListener("click", () => {


            if (settingsMenu.style.display === "none" || settingsMenu.style.display === "") {
                settingsMenu.style.display = "block";
                SettingsBtn.classList.add('ytp-settings-button-active')
            } else {
                settingsMenu.style.display = "none";
                SettingsBtn.classList.remove('ytp-settings-button-active')
            }
        });



        function toggleMiniPlayerMode() {
            if (videoContainer.classList.contains("mini-player")) {
                document.exitPictureInPicture()
            } else {
                video.requestPictureInPicture()
            }
        }
        document.addEventListener("fullscreenchange", () => {
            videoContainer.classList.toggle("full-screen", document.fullscreenElement)
        })
        video.addEventListener("enterpictureinpicture", () => {
            videoContainer.classList.add("mini-player")
        })
        video.addEventListener("leavepictureinpicture", () => {
            videoContainer.classList.remove("mini-player")
        })
        playPauseBtn.addEventListener("click", togglePlay)
        video.addEventListener("click", togglePlay)

        function togglePlay() {
            if (video.paused) {
                video.play();
                videoContainer.classList.remove("video-ended")
                const container = document.querySelector('.html5-endscreen-content')
                container.innerHTML = ``;
                Bezel.style.display = "block"
                BezelIcon.classList.add('html5-bezel-play')
                BezelIcon.classList.remove('html5-bezel-pause')
                Bezel.setAttribute('aria-hidden', 'false')
                setTimeout(function() {
                    Bezel.setAttribute('aria-hidden', 'true')
                }, 10)
                setTimeout(function() { Bezel.style.display = "none" }, 510)
            } else if (!video.paused) {
                video.pause();
                Bezel.style.display = "block"
                BezelIcon.classList.remove('html5-bezel-play')
                BezelIcon.classList.add('html5-bezel-pause')
                Bezel.setAttribute('aria-hidden', 'false')
                setTimeout(function() {
                    Bezel.setAttribute('aria-hidden', 'true')
                }, 10)
                setTimeout(function() { Bezel.style.display = "none" }, 510)
            } else {
                video.play();
                videoContainer.classList.remove("video-ended")
                const container = document.querySelector('.html5-endscreen-content')
                container.innerHTML = ``;
            }
        }
        video.addEventListener("play", () => {
            videoContainer.classList.remove("paused")
            videoContainer.classList.remove("replay")
        })
        video.addEventListener("pause", () => {
            videoContainer.classList.add("paused")
            videoContainer.classList.remove("replay")
        })
        video.addEventListener("ended", () => {
            videoContainer.classList.add("paused")
            videoContainer.classList.add("replay")

        });
        setInterval(function() {
            totalTimeElem.textContent = formatDuration(video.duration)
            hovercurrentTimeElem.innerHTML = formatDuration(getComputedStyle(timelineContainer).getPropertyValue("--preview-position") * video.duration)
        }, 100)
        video.onwaiting = function() {
            console.log("Buffering...");
            buffer.style.display = "block";
        }
        video.onplaying = function() {
            console.log("Finished buffering!");
            buffer.style.display = "none";
        }

        function preventKeyBoardScroll(e) {
            var keys = [33, 34, 35, 37, 38, 39, 40];
            if (keys.includes(e.keyCode)) {
                e.preventDefault();
                return false;
            }
        }

        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 32 && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault(); // Prevent the default behavior of scrolling
            }
        });

        function enableKeyBoardScroll(e) {
            return true;
        }
        document.addEventListener('keydown', preventKeyBoardScroll);
        document.querySelector("#masthead-search-term").addEventListener('keydown', enableKeyBoardScroll);

    }
    html();
    js()
    
}

Panda.document.utils.waitForElm('#watch-player').then((elm) => {
    GetPlayerJs()
    PlayerInit()

});
document.addEventListener('spfdone', function(event) {
    waitForElm('#watch-player').then((elm) => {
        GetPlayerJs()
        PlayerInit()

    });
})
var _v3_player = {
    get_latest_player_js: GetPlayerJs,
    init_player: PlayerInit,
    _v3_player_config: {
        DEBUG: 'false'
    },
    decode_stream_url: {
        decode_sig: function(playerScript) {

            if (_v3_player._v3_player_config.DEBUG === "true")
                console.log("[SigDecode] Using player script:", playerScript);

            // Resulting groups:
            //   [0]: Entire function declaration
            //   [1]: Arguments only
            //   [2]: Body only
            //   [3]: Decode calls only
            var DECODER_PATTERN =
                "function\\((.*?)\\){(a=a\\.split\\(\\\"\\\"\\);(.*?)return a\\.join\\(\\\"\\\"\\))}";

            // Base result.
            var result = {
                status: "FAILURE",
                reason: "No reason provided.",
                extractCb: null,
                cacheParams: null
            };

            var decoderMatches = playerScript.match(new RegExp(DECODER_PATTERN));
            if (_v3_player._v3_player_config.DEBUG === "true")
                console.log("[SigDecode] decoderMatches ==", decoderMatches);

            if (!decoderMatches) {
                result.reason = "Failed to extract decode function.";
                console.error("[Rehike.SigDecode]" + result.reason);
                return result;
            }

            var sourceDeclaration = decoderMatches[0];
            var sourceArguments = decoderMatches[1].split(",");
            var sourceBody = decoderMatches[2].split(";");
            var sourceCalls = decoderMatches[3].split(";");

            var lookupList = [];

            // Parse the source function body:
            for (var i = 0, j = sourceBody.length; i < j; i++) {
                // See if a foreign variable is being used for assignment,
                // and add it to the lookup list if so.
                var varName = sourceBody[i].split(".")[0].split("=")[0].split(",")[0];
                if (_v3_player._v3_player_config.DEBUG === "true")
                    console.log("[SigDecode.ForeignIterator] Iterating #" + i + " (" + varName + ").");
                if (
                    varName != sourceBody[i] &&
                    (varName.indexOf(" ") == -1) &&
                    !sourceArguments.includes(varName)
                ) {
                    if (!lookupList.includes(varName)) {
                        if (DEBUG)
                            console.log("[SigDecode.ForeignIterator] Adding #" + i + " (" + varName + ") to lookup list.");
                        lookupList.push(varName);
                    }
                }
            }

            if (_v3_player._v3_player_config.DEBUG === "true")
                console.log("[SigDecode] lookupList ==", lookupList);

            // Iterate the lookup list and search the player JS for the declarations:
            var successfulLookups = 0;
            var lookupResults = [];
            for (var i = 0, j = lookupList.length; i < j; i++) {
                // Firstly, objects are searched for. The obfuscator routine is often in
                // an object literal, so they're the only thing we're looking for.
                var curName = lookupList[i];
                var text = playerScript.split("var " + curName + "=")[1];

                if (!text)
                    text = playerScript.split(";" + curName + "=")[1];

                if (!text)
                    text = playerScript.split("\n" + obfuscator + "=")[1];

                if (!text)
                // Out of possibilities, so just skip this iteration.
                    continue;

                // Parse to the last unclosed "}" character (terminator)
                var endIndex = 0;
                var depth = 0;

                for (var k = 0, l = text.length; k < l; k++) {
                    if (depth < 0) {
                        // Parse error, break.
                        endIndex = -1;
                        depth = 0;
                        break;
                    } else if (text[k] == "{") {
                        ++depth;
                    } else if (text[k] == "}") {
                        if (--depth == 0) {
                            endIndex = k + 1;
                            break;
                        }
                    }
                }

                // If we had any problems, skip the result.
                if (endIndex < 0)
                    continue;

                var resultObj = text.substr(0, endIndex);
                var resultText = "var " + curName + "=" + resultObj;
                lookupResults.push(resultText);
            }

            if (_v3_player._v3_player_config.DEBUG === "true")
                console.log("[SigDecode] lookupResults ==", lookupResults);

            if (lookupResults.length == 0) {
                result.reason = "Failed to lookup required external functions.";
                console.error("[Rehike.SigDecode]" + result.reason);
                return result;
            }

            // Generate the function:
            var resultFunctionBody =
                lookupResults.join(";") +
                ";var decodeSignature = " + sourceDeclaration +
                ";return decodeSignature(sourceSignature);"; // sourceSignature declared below.

            if (_v3_player._v3_player_config.DEBUG === "true")
                console.log("[SigDecode] resultFunctionBody ==", resultFunctionBody);

            result.cacheParams = {
                args: "sourceSignature",
                body: resultFunctionBody
            };

            result.extractCb = new Function(
                // Arguments:
                result.cacheParams.args,
                // Function body:
                result.cacheParams.body
            );
            result.status = "SUCCESS";

            return result;

        },
        decode_N: function(playerScript) {

            if (_v3_player._v3_player_config.DEBUG === "true")
                console.log("[NDecode] Using player script:", playerScript);

            // Resulting groups:
            //   [0]: Entire expression
            //   [1]: Assigned variable name.
            var BASE_CALL_PATTERN = "([a-zA-Z0-9_$]*?)\\=[a-zA-Z0-9_$]*?\\.get\\(\\\"n\\\"\\)";

            // Resulting groups:
            //   [0]: Entire expression
            //   [1]: Obfuscator function name
            //   [2]: Only the array index
            var OBFUSCATOR_CALL_PATTERN_TEMPLATE =
                "__NAME__=([a-zA-Z0-9_$]*?(\\[[a-zA-Z0-9_$]*\\])?)\\(.*\\)";

            // Base result.
            var result = {
                status: "FAILURE",
                reason: "No reason provided.",
                extractCb: null,
                cacheParams: null
            };

            var declarationMatches = playerScript.match(new RegExp(BASE_CALL_PATTERN));

            if (_v3_player._v3_player_config.DEBUG === "true")
                console.log("[NDecode] declarationMatches ==", declarationMatches);

            if (!declarationMatches) {
                result.reason = "Failed to extract decode expression.";
                console.error("[Rehike.NDecode]" + result.reason);
                return result;
            }

            var declarationExpression = declarationMatches[0];
            var declarationVarName = declarationMatches[1];

            // The next use of the declaration variable should be to another
            // function. This can become a bit of a mess.
            var searchIndex = declarationMatches.index;
            var subsequentText = playerScript.slice(searchIndex);

            var obfuscatorCallPattern =
                OBFUSCATOR_CALL_PATTERN_TEMPLATE.replace("__NAME__", declarationVarName);

            var obfuscatorCallMatches = subsequentText.match(new RegExp(obfuscatorCallPattern));
            if (_v3_player._v3_player_config.DEBUG === "true")
                console.log("[NDecode] obfuscatorCallMatches ==", obfuscatorCallMatches);
            var obfuscatorFnName = obfuscatorCallMatches[1];

            var obfuscatorFnNameSymbol = obfuscatorFnName.split("[")[0];

            var obfuscatorFnText = null;
            var obfuscatorArrayText = null;
            var lookupName = obfuscatorFnName;

            if (obfuscatorFnNameSymbol != obfuscatorFnName) {
                // The obfuscator is referenced through an array, so we need to do some
                // additional work.
                obfuscatorArrayText = playerScript.slice(
                    playerScript.indexOf("var " + obfuscatorFnNameSymbol + "=")
                );
                obfuscatorArrayText = obfuscatorArrayText.slice(
                    0,
                    obfuscatorArrayText.indexOf("]") + 2
                );

                if (_v3_player._v3_player_config.DEBUG === "true")
                    console.log("[NDecode] (mid) obfuscatorFnNameSymbol ==", obfuscatorFnNameSymbol);

                if (_v3_player._v3_player_config.DEBUG === "true")
                    console.log("[NDecode] (mid) obfuscatorArrayText ==", obfuscatorArrayText);

                // Set lookupName to the content between the array tokens:
                lookupName = obfuscatorArrayText.split("[")[1].split("]")[0];
            }

            obfuscatorFnText = playerScript.slice(playerScript.indexOf(lookupName + "="));
            if (_v3_player._v3_player_config.DEBUG === "true")
                console.log("[NDecode] obfuscatorFnText ==", obfuscatorFnText);

            // Thanks reprety!
            // This code was broken in late January 2024 for some reason, but this much
            // simpler code from Reprety seems to find the pattern more reliably.
            var nextVariableDef = obfuscatorFnText.search("var ");
            var patternSearch = obfuscatorFnText.slice(nextVariableDef);
            nextVariableDef = patternSearch.search("=");
            patternSearch = patternSearch.slice(0, nextVariableDef).slice(4);
            var endPattern = 'return ' + patternSearch + '.join("")};';
            try {
                obfuscatorFnText = obfuscatorFnText.split(endPattern)[0] + endPattern;
            } catch (e) {}

            if (_v3_player._v3_player_config.DEBUG === "true")
                console.log("[NDecode] (final) obfuscatorFnText ==", obfuscatorFnText);

            var bakedFunctionString = "";

            bakedFunctionString += obfuscatorFnText + ";";

            if (obfuscatorArrayText) {
                bakedFunctionString += obfuscatorArrayText + ";";
            }

            bakedFunctionString += "return " + obfuscatorFnName + "(encryptedN);";

            if (_v3_player._v3_player_config.DEBUG === "true")
                console.log("[NDecode] bakedFunctionString ==", bakedFunctionString);

            result.cacheParams = {
                args: "encryptedN",
                body: bakedFunctionString
            };

            var bakedFunction = new Function(
                // Arguments:
                result.cacheParams.args,
                // Function body:
                result.cacheParams.body
            );

            result.status = "SUCCESS";
            result.extractCb = bakedFunction;

            return result;
        }
    }
}