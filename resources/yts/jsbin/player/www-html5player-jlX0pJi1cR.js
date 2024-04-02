function waitForElm(d){return new Promise(g=>{if(document.querySelector(d))return g(document.querySelector(d));const c=new MutationObserver(q=>{document.querySelector(d)&&(c.disconnect(),g(document.querySelector(d)))});c.observe(document.body,{childList:!0,subtree:!0})})}var playerScript=null;let signatureTimestamp=null;var DEBUG=!1,Panda=Panda,ytInitialData=ytInitialData,ytInitialPlayerResponse=ytInitialPlayerResponse,yt=yt;yt.config_=yt.config_;
var dashjs=dashjs,Hls=Hls,localStorage=localStorage,obfuscator=obfuscator;
function GetPlayerJs(){var d=d;console.log("Result from XHR:",d.config_.PLAYER_JS_URL);d="https://www.youtube.com"+d.config_.PLAYER_JS_URL;var g={status:"FAILURE",reason:"No reason provided.",content:null};DEBUG&&console.log("[FetchContent] Fetching content from:",d);try{var c=new XMLHttpRequest;c.open("GET",d,!1);c.send();if(200<=c.status&&300>c.status){var q=c.responseText,p=q.match(/signatureTimestamp:\s*(\d+)/);if(p){signatureTimestamp=parseInt(p[1],10);var l=l;l.panda_player_sigTimestamp=parseInt(p[1],
10);window[l.panda_player_sigTimestamp]=parseInt(p[1],10)}g.content=q;g.status="SUCCESS";DEBUG&&console.log("[FetchContent] Content fetched successfully:",g.content);playerScript=window[playerScript]=g.content;l.panda_player_js=g.content;window[l.panda_player_js]=g.content}else throw Error("Network response was not ok");}catch(n){throw g.reason="Failed to fetch content: "+n.message,console.error("[FetchContent]"+g.reason),g;}}
function UrlStreamCreator(d,g){d=async function(c){function q(h){DEBUG&&console.log("[SigDecode] Using player script:",h);var m={status:"FAILURE",reason:"No reason provided.",extractCb:null,cacheParams:null},k=h.match(RegExp('function\\((.*?)\\){(a=a\\.split\\(\\"\\"\\);(.*?)return a\\.join\\(\\"\\"\\))}'));DEBUG&&console.log("[SigDecode] decoderMatches ==",k);if(!k)return m.reason="Failed to extract decode function.",console.error("[Rehike.SigDecode]"+m.reason),m;var x=k[0],t=k[1].split(","),v=k[2].split(";");
k[3].split(";");k=[];for(var A=0,Z=v.length;A<Z;A++){var w=v[A].split(".")[0].split("=")[0].split(",")[0];DEBUG&&console.log("[SigDecode.ForeignIterator] Iterating #"+A+" ("+w+").");w==v[A]||-1!=w.indexOf(" ")||t.includes(w)||k.includes(w)||(DEBUG&&console.log("[SigDecode.ForeignIterator] Adding #"+A+" ("+w+") to lookup list."),k.push(w))}DEBUG&&console.log("[SigDecode] lookupList ==",k);t=[];A=0;for(Z=k.length;A<Z;A++){v=k[A];(w=h.split("var "+v+"=")[1])||(w=h.split(";"+v+"=")[1]);var V=V;w||=h.split("\n"+
V+"=")[1];if(w){for(var J=0,I=0,O=0,ja=w.length;O<ja;O++)if(0>I){J=-1;break}else if("{"==w[O])++I;else if("}"==w[O]&&0==--I){J=O+1;break}0>J||(w=w.substr(0,J),t.push("var "+v+"="+w))}}DEBUG&&console.log("[SigDecode] lookupResults ==",t);if(0==t.length)return m.reason="Failed to lookup required external functions.",console.error("[Rehike.SigDecode]"+m.reason),m;h=t.join(";")+";var decodeSignature = "+x+";return decodeSignature(sourceSignature);";DEBUG&&console.log("[SigDecode] resultFunctionBody ==",
h);m.cacheParams={args:"sourceSignature",body:h};m.extractCb=new Function(m.cacheParams.args,m.cacheParams.body);m.status="SUCCESS";return m}function p(h){DEBUG&&console.log("[NDecode] Using player script:",h);var m={status:"FAILURE",reason:"No reason provided.",extractCb:null,cacheParams:null},k=h.match(RegExp('([a-zA-Z0-9_$]*?)\\=[a-zA-Z0-9_$]*?\\.get\\(\\"n\\"\\)'));DEBUG&&console.log("[NDecode] declarationMatches ==",k);if(!k)return m.reason="Failed to extract decode expression.",console.error("[Rehike.NDecode]"+
m.reason),m;var x=k[1];k=h.slice(k.index);x="__NAME__=([a-zA-Z0-9_$]*?(\\[[a-zA-Z0-9_$]*\\])?)\\(.*\\)".replace("__NAME__",x);x=k.match(new RegExp(x));DEBUG&&console.log("[NDecode] obfuscatorCallMatches ==",x);x=x[1];var t=x.split("[")[0];k=null;var v=x;t!=x&&(k=h.slice(h.indexOf("var "+t+"=")),k=k.slice(0,k.indexOf("]")+2),DEBUG&&console.log("[NDecode] (mid) obfuscatorFnNameSymbol ==",t),DEBUG&&console.log("[NDecode] (mid) obfuscatorArrayText ==",k),v=k.split("[")[1].split("]")[0]);h=h.slice(h.indexOf(v+
"="));DEBUG&&console.log("[NDecode] obfuscatorFnText ==",h);t=h.search("var ");v=h.slice(t);t=v.search("=");v=v.slice(0,t).slice(4);t="return "+v+'.join("")};';try{h=h.split(t)[0]+t}catch(A){}DEBUG&&console.log("[NDecode] (final) obfuscatorFnText ==",h);h+=";";k&&(h+=k+";");h+="return "+x+"(encryptedN);";DEBUG&&console.log("[NDecode] bakedFunctionString ==",h);m.cacheParams={args:"encryptedN",body:h};h=new Function(m.cacheParams.args,m.cacheParams.body);m.status="SUCCESS";m.extractCb=h;return m}if(c.signatureCipher){var l=
c.signatureCipher.indexOf("s=")+2,n=c.signatureCipher.indexOf("&",l);l=c.signatureCipher.substring(l,n);n=decodeURIComponent(l);var y=c.signatureCipher.indexOf("url=");y=c.signatureCipher.substring(y+4);const h=decodeURIComponent(y);c=h.indexOf("&n=");const m=-1!==c?h.substring(c+3,h.indexOf("&",c+3)):null;var r=q(playerScript).extractCb(n);c=p(playerScript);c=c.extractCb(m);const k=h.replace(`&n=${m}`,`&n=${c}`)+"&alr=yes&sig="+r;g({encodedSignature:l,encodedUrl:y,URIdecodedUrl:h,nParamValue:m,URIdecodedSignature:n,
decodedSignature:r,decodedN:c,decodedUrl:k})}else c.url&&(l=c.url,n=l.indexOf("&n="),n=-1!==n?l.substring(n+3,l.indexOf("&",n+3)):null,c=p(playerScript),c=c.extractCb(n),y=l.replace(`&n=${n}`,`&n=${c}`),g({encodedUrl:l,decodedUrl:y,nParamValue:n,decodedN:c}))}(d,function(c){console.log(c);g&&g({decodedUrl:c.decodedUrl})});console.log(d)}function PlayerInit(){document.getElementById("watch-player").innerHTML=`<div class="video-container paused" style="position: relative;
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
<div class="html5-title" tabindex="1">&lt;?php echo $video_title; ?&gt;</div>
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
                  <span class="html5-live-indicator">${ytcfg.msgs.PLAYER_LIVE_LABEL}</span>
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
  </div>`;(function(){function d(a){b.currentTime=b.duration*a}function g(a){navigator.clipboard.writeText(a).then(()=>{}).catch(e=>{console.error("Failed to copy URL to clipboard: ",e)})}function c(){const a={context:yt.config_.INNERTUBE_CONTEXT,actions:[{addedVideoId:v,action:"ACTION_ADD_VIDEO"}],playlistId:"WL"};let e={};e=!1===yt.config_.LOGGED_IN?{}:{authorization:Panda.document.Account.getSapisidhash(),"x-goog-authuser":yt.config_.SESSION_INDEX,"x-goog-pageid":yt.config_.DELEGATED_SESSION_ID,
"x-goog-visitor-id":yt.config_.VISITOR_DATA};console.log(e);fetch("https://www.youtube.com/youtubei/v1/browse/edit_playlist?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false",{method:"POST",headers:e,body:JSON.stringify(a)}).then(f=>f.json()).then(f=>{console.log(f);J.classList.add("html5-async-success");J.classList.remove("html5-async-progress")})}function q(){u.classList.contains("full-screen")||(ka.style.opacity="1",la.style.opacity="0")}function p(){da=!0;document.body.classList.add("watch-wide");
setTimeout(function(){document.body.classList.add("theater-mode")},300)}function l(){document.body.classList.remove("theater-mode");document.body.classList.remove("watch-wide");da=!1}function n(a){var e=L.getBoundingClientRect();e=Math.min(Math.max(0,a.x-e.x),e.width)/e.width;W=1===(a.buttons&1);u.classList.toggle("scrubbing",W);W?(ta=b.paused,b.pause()):(b.currentTime=e*b.duration,ta||b.play());y(a)}function y(a){var e=L.getBoundingClientRect();e=Math.min(Math.max(0,a.x-e.x),e.width)/e.width;L.style.setProperty("--preview-position",
e);W&&(a.preventDefault(),L.style.setProperty("--progress-position",e))}function r(){var a=b.buffered;0<a.length&&(a=a.end(0)/b.duration,document.documentElement.style.setProperty("--loaded-position",a+"%"))}function h(){const a="hidden"===ma.mode;ma.mode=a?"showing":"hidden";u.classList.toggle("captions",a)}function m(a){const e=Math.floor(a%60),f=Math.floor(a/60)%60;a=Math.floor(a/3600);return 0===a?`${f}:${na.format(e)}`:`${a}:${na.format(f)}:${na.format(e)}`}function k(){b.muted=!b.muted}function x(){null==
document.fullscreenElement?u.requestFullscreen():document.exitFullscreen()}function t(){b.paused?(b.play(),u.classList.remove("video-ended"),document.querySelector(".html5-endscreen-content").innerHTML="",M.style.display="block",ea.classList.add("html5-bezel-play"),ea.classList.remove("html5-bezel-pause"),M.setAttribute("aria-hidden","false"),setTimeout(function(){M.setAttribute("aria-hidden","true")},10),setTimeout(function(){M.style.display="none"},510)):b.paused?(b.play(),u.classList.remove("video-ended"),
document.querySelector(".html5-endscreen-content").innerHTML=""):(b.pause(),M.style.display="block",ea.classList.remove("html5-bezel-play"),ea.classList.add("html5-bezel-pause"),M.setAttribute("aria-hidden","false"),setTimeout(function(){M.setAttribute("aria-hidden","true")},10),setTimeout(function(){M.style.display="none"},510))}var v=(new URLSearchParams(window.location.search)).get("v");const A=document.querySelector(".play-pause-btn"),Z=document.querySelector(".full-screen-btn"),w=document.querySelector(".small-player-btn"),
V=document.querySelector(".settings-btn"),J=document.querySelector(".ytp-button-watch-later"),I=document.querySelector(".ytp-menu-container"),O=document.querySelector(".mute-btn"),ja=document.querySelector(".captions-btn"),xa=document.querySelector(".current-time"),ua=document.querySelector(".total-time");document.querySelector(".preview-img");document.querySelector(".thumbnail-img");const oa=document.querySelector(".volume-slider"),u=document.querySelector(".video-container"),L=document.querySelector(".timeline-container"),
b=document.querySelector("video");document.querySelector("audio");const pa=document.querySelector(".buffer"),ya=document.querySelector(".timeline-txttime");document.querySelector(".top-bar");const aa=document.getElementById("resolution-720p"),fa=document.getElementById("resolution-360p");document.getElementById("watch-container");const ha=document.getElementById("context-menu");var B=document.querySelector('#context-item[data-onclick="html5"]'),C=document.querySelector('#context-item[data-onclick="download"]');
const va=document.querySelector('#context-item[data-onclick="repeat"]');var X=document.querySelector('#context-item[data-onclick="copyurl"]');const za=document.querySelector("#watch-player");var qa=document.querySelector(".ytp-button-watch-on-youtube");const la=document.querySelector(".html5-info-bar"),M=document.querySelector(".html5-bezel"),ea=document.querySelector(".html5-bezel div");qa.onclick=function(){window.location.href=`https://www.youtube.com/watch?v=${v}`};waitForElm("#watch-related").then(a=>
{b.addEventListener("ended",function(){"true"===localStorage.getItem("v3-player-autoplay")?window.location.href="https://youtube.com/watch?v="+Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"playerOverlayRenderer"),"autoplay"),"videoId")):(u.classList.add("video-ended"),document.querySelector("#watch-related"),Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,
"endScreen"),"results").results.forEach(e=>{console.log("sheesh");const f=document.querySelector(".html5-endscreen-content"),z=document.createElement("a");z.className="videowall-still";z.href="https://www.youtube.com/watch?v="+e.endScreenVideoRenderer.videoId;z.style.backgroundImage=`url(https://i1.ytimg.com/vi/${e.endScreenVideoRenderer.videoId}/mqdefault.jpg)`;z.innerHTML=`
                        <span class="videowall-info"> <span class="videowall-info-title">${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(e,"title"),"simpleText"))}</span>
        <span class="videowall-info-author">${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(e,"shortBylineText"),"text"))}</span>
        <span class="videowall-info-duration">${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(e,"lengthText"),"simpleText"))}</span>
        <span class="videowall-info-view-count">${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(e,"shortViewCountText"),"simpleText"))}</span></span>`;f.appendChild(z)}))})});var ra=setTimeout(function(){b.readyState<b.HAVE_FUTURE_DATA&&(console.log("Video not loading within 10 seconds."),za.innerHTML='<div id="player-unavailable" class="    player-width player-height    player-unavailable ">\n                      <img class="icon meh" src="https://s.ytimg.com/yts/img/meh7-vflGevej7.png" alt="">\n              <div class="content">\n                <h1 id="unavailable-message" class="message">\n                        This video is unavailable.\n                </h1>\n                <div id="unavailable-submessage" class="submessage">The video could not be loaded. Check issue #1 in the extension popup for more info\n                </div>\n              </div>\n\n\n              </div>')},
15E3);b.addEventListener("loadeddata",function(){clearTimeout(ra);console.log("Video loaded successfully.")});const D=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(1) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(1)"),E=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(1) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(2)");"true"===localStorage.getItem("v3-player-autoplay")?
(E.classList.add("ytp-segmented-control-selected"),E.classList.add("ytp-segmented-control-other"),E.classList.remove("ytp-segmented-control-deselected"),D.classList.remove("ytp-segmented-control-selected"),D.classList.add("ytp-segmented-control-other"),D.classList.add("ytp-segmented-control-deselected")):(E.classList.remove("ytp-segmented-control-selected"),E.classList.add("ytp-segmented-control-other"),E.classList.add("ytp-segmented-control-deselected"),D.classList.add("ytp-segmented-control-selected"),
D.classList.remove("ytp-segmented-control-other"),D.classList.remove("ytp-segmented-control-deselected"));E.onclick=function(){localStorage.setItem("v3-player-autoplay","true");E.classList.add("ytp-segmented-control-selected");E.classList.add("ytp-segmented-control-other");E.classList.remove("ytp-segmented-control-deselected");D.classList.remove("ytp-segmented-control-selected");D.classList.add("ytp-segmented-control-other");D.classList.add("ytp-segmented-control-deselected")};D.onclick=function(){localStorage.setItem("v3-player-autoplay",
"false");E.classList.remove("ytp-segmented-control-selected");E.classList.add("ytp-segmented-control-other");E.classList.add("ytp-segmented-control-deselected");D.classList.add("ytp-segmented-control-selected");D.classList.remove("ytp-segmented-control-other");D.classList.remove("ytp-segmented-control-deselected")};const F=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(2) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(1)"),G=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(2) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(2)");
"true"===localStorage.getItem("v3-player-dash")?(G.classList.add("ytp-segmented-control-selected"),G.classList.add("ytp-segmented-control-other"),G.classList.remove("ytp-segmented-control-deselected"),F.classList.remove("ytp-segmented-control-selected"),F.classList.add("ytp-segmented-control-other"),F.classList.add("ytp-segmented-control-deselected")):(G.classList.remove("ytp-segmented-control-selected"),G.classList.add("ytp-segmented-control-other"),G.classList.add("ytp-segmented-control-deselected"),
F.classList.add("ytp-segmented-control-selected"),F.classList.remove("ytp-segmented-control-other"),F.classList.remove("ytp-segmented-control-deselected"));G.onclick=function(){localStorage.setItem("v3-player-dash","true");G.classList.add("ytp-segmented-control-selected");G.classList.add("ytp-segmented-control-other");G.classList.remove("ytp-segmented-control-deselected");F.classList.remove("ytp-segmented-control-selected");F.classList.add("ytp-segmented-control-other");F.classList.add("ytp-segmented-control-deselected");
clearTimeout(ra);PlayerInit();I.style.display="block"};F.onclick=function(){localStorage.setItem("v3-player-dash","false");G.classList.remove("ytp-segmented-control-selected");G.classList.add("ytp-segmented-control-other");G.classList.add("ytp-segmented-control-deselected");F.classList.add("ytp-segmented-control-selected");F.classList.remove("ytp-segmented-control-other");F.classList.remove("ytp-segmented-control-deselected");clearTimeout(ra);PlayerInit();I.style.display="block"};u.addEventListener("contextmenu",
a=>{a.preventDefault();const e=b.getBoundingClientRect(),f=a.pageY-e.top-window.scrollY;ha.style.left=`${a.pageX-e.left-window.scrollX}px`;ha.style.top=`${f}px`;ha.style.display="block"});B.addEventListener("click",()=>{window.location.href="html5.html"});X.addEventListener("click",()=>{g(window.location.href)});C.addEventListener("click",()=>{Date.now();window.location.href=b.getAttribute("src")});va.addEventListener("click",function(){b.loop=!b.loop;console.log("Loop toggled:",b.loop);va.textContent=
b.loop?"\u2713 Repeat":"Repeat"});document.addEventListener("click",()=>{ha.style.display="none"});J.onclick=function(){J.classList.add("html5-async-progress");c()};console.log(ytInitialPlayerResponse);C=new Date;B=C.getMonth()+1;C=C.getDate();if(12===B&&27===C)b.src="https://pixiecat-dev.github.io/media/laugh.mp4";else{B=document.querySelectorAll(".ytp-button.ytp-drop-down-label");var ia=document.querySelector(".ytp-settings-hd-quality-badge");B.forEach(function(a){a.addEventListener("click",function(){var e=
a.closest(".ytp-drop-down").querySelector(".ytp-drop-down-menu");e&&(e.style.display="none"===e.style.display||""===e.style.display?"block":"none")})});if(ytInitialPlayerResponse.streamingData){var ba=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(4) .ytp-menu-cell:nth-of-type(2) .ytp-button .ytp-drop-down-label-content span"),ca=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(4) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(1)"),
P=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(4) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(2)");if("true"===localStorage.getItem("v3-player-dash")){const a=dashjs.MediaPlayer().create();a.initialize(b,null,!0);a.attachSource("https://iv.datura.network/api/manifest/dash/id/hlZdjjIsnGE?local=true");function e(f){"auto"===f?a.updateSettings({streaming:{abr:{autoSwitchBitrate:!0}}}):a.setQualityFor("video",f,!0)}
e(6);ca.addEventListener("click",()=>{e(6)})}else if(ytInitialPlayerResponse.streamingData.formats)if(ytInitialPlayerResponse.streamingData.formats[1]){ia.style.display="block";ba.innerHTML='720p<sup style="font-size: 75%;font-weight: bold;">HD</sup>';UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[1],function(e){b.src=e.decodedUrl});b.play();aa.classList.add("selected");fa.classList.remove("selected");ca.addEventListener("click",()=>{a("720p")});P.addEventListener("click",()=>{a("360p")});
function a(e){const f=document.querySelector("video"),z=f.currentTime;var N=f.paused?!0:!1;"720p"===e?(f.src=null,UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[1],function(K){f.src=K.decodedUrl;f.currentTime=z;N?f.pause():f.play()}),ca.classList.add("ytp-drop-down-menu-button-checked"),P.classList.remove("ytp-drop-down-menu-button-checked"),ia.style.display="block",ba.innerHTML='720p<sup style="font-size: 75%;font-weight: bold;">HD</sup>'):"360p"===e?(f.src=null,UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0],
function(K){f.src=K.decodedUrl;f.currentTime=z;N?f.pause():f.play()}),P.classList.add("ytp-drop-down-menu-button-checked"),ca.classList.remove("ytp-drop-down-menu-button-checked"),ba.textContent="360p",ia.style.display="none"):"auto"===e&&(ba.innerHTML="Auto",f.src=null,e=navigator.connection.effectiveType,"4g"===e||"3g"===e?UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[1],function(K){f.src=K.decodedUrl;f.currentTime=z;N?f.pause():f.play()}):UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0],
function(K){f.src=K.decodedUrl;f.currentTime=z;N?f.pause():f.play()}));f.currentTime=z;N?f.pause():f.play();P.closest(".ytp-drop-down .ytp-drop-down-menu").style.display="none"}}else{ba.textContent="360p";ca.classList.add("hid");P.classList.add("ytp-drop-down-menu-button-checked");ia.style.display="none";UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0],function(e){b.src=e.decodedUrl});b.play();aa.classList.remove("selected");aa.style.display="none";fa.classList.add("selected");P.addEventListener("click",
()=>{a("360p")});function a(e){const f=document.querySelector("video"),z=f.currentTime;var N=f.paused?!0:!1;"720p"===e?(aa.classList.add("selected"),fa.classList.remove("selected")):"360p"===e&&(f.src=null,UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0],function(K){f.src=K.decodedUrl;f.currentTime=z;N?f.pause():f.play()}),fa.classList.add("selected"),aa.classList.remove("selected"));f.currentTime=z;N?f.pause():f.play();P.closest(".ytp-drop-down .ytp-drop-down-menu").style.display=
"none"}}else ytInitialPlayerResponse.streamingData.hlsManifestUrl&&(console.log(ytInitialPlayerResponse.streamingData.hlsManifestUrl),u.classList.add("live"),B=document.querySelector("video"),C=ytInitialPlayerResponse.streamingData.hlsManifestUrl,Hls.isSupported()?(X=new Hls,X.loadSource(C),X.attachMedia(B),B.play()):B.canPlayType("application/vnd.apple.mpegurl")&&(B.src=C,B.play()),Panda.document.utils.waitForElm("#watch7-sidebar").then(a=>{a=document.querySelector("#watch7-sidebar");const e=document.createElement("iframe");
e.src="https://www.youtube.com/live_chat?v="+v;e.style.width="100%";e.style.height="390px";a.insertBefore(e,a.firstChild);document.body.classList.add("playlist-exists")}))}else b.src="https://iv.datura.network/latest_version?id="+v+"&local=true"}C=document.querySelector(".html5-info-bar .html5-title");X=document.querySelector(".html5-info-bar .html5-description-text");qa=document.querySelector(".html5-info-bar .html5-author-name");B=document.querySelector(".html5-info-bar .html5-author-img img");
var Aa=document.querySelector(".html5-info-bar .html5-view-count"),Ba=parseInt(ytInitialPlayerResponse.videoDetails.viewCount,10);C.textContent=ytInitialPlayerResponse.videoDetails.title;X.textContent=Panda.document.utils.createStringFromObject(ytInitialPlayerResponse.microformat.playerMicroformatRenderer.description);qa.textContent=ytInitialPlayerResponse.videoDetails.author;Aa.textContent=Ba.toLocaleString("en-US",{useGrouping:!0});var sa="no";C=document.querySelector(".html5-more-info-button");
B.setAttribute("src",Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"videoSecondaryInfoRenderer"),"videoOwnerRenderer"),"thumbnails"),"url")));C.onclick=function(){var a=document.querySelector(".html5-info-bar");a.classList.contains("show-more-info")?(a.classList.remove("show-more-info"),"yes"===sa&&b.play()):(a.classList.add("show-more-info"),b.paused?sa=
"no":(b.pause(),sa="yes"))};waitForElm(".watch-extras-section #eow-category > a").then(a=>{a.textContent=ytInitialPlayerResponse.microformat.playerMicroformatRenderer.category});b.addEventListener("ended",function(){null!==Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"playerOverlayRenderer"),"autoplay")?"true"===localStorage.getItem("v3-player-autoplay")&&(window.location.href="https://youtube.com/watch?v="+Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,
"playerOverlayRenderer"),"autoplay"),"videoId"))):window.location.href="https://youtube.com/watch?v="+Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"playlist"),"contents").contents[Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"playlist"),"currentIndex").currentIndex+1].playlistPanelVideoRenderer.videoId+"&list="+Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,
"playlist"),"playlistId"))+"&index="+Number(Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"playlist"),"currentIndex")))+1});let da;var Y=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-button .ytp-drop-down-label-content");const Q=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(6)"),
R=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(5)"),S=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(4)"),H=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(3)"),
T=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(2)"),U=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(1)");Q.addEventListener("click",()=>{b.playbackRate=2;Q.classList.add("ytp-drop-down-menu-button-checked");R.classList.remove("ytp-drop-down-menu-button-checked");
S.classList.remove("ytp-drop-down-menu-button-checked");H.classList.remove("ytp-drop-down-menu-button-checked");T.classList.remove("ytp-drop-down-menu-button-checked");U.classList.remove("ytp-drop-down-menu-button-checked");Y.textContent="2";H.closest(".ytp-drop-down .ytp-drop-down-menu").style.display="none"});R.addEventListener("click",()=>{b.playbackRate=1.5;Q.classList.remove("ytp-drop-down-menu-button-checked");R.classList.add("ytp-drop-down-menu-button-checked");S.classList.remove("ytp-drop-down-menu-button-checked");
H.classList.remove("ytp-drop-down-menu-button-checked");T.classList.remove("ytp-drop-down-menu-button-checked");U.classList.remove("ytp-drop-down-menu-button-checked");var a=H.closest(".ytp-drop-down .ytp-drop-down-menu");Y.textContent="1.5";a.style.display="none"});S.addEventListener("click",()=>{b.playbackRate=1.25;Q.classList.remove("ytp-drop-down-menu-button-checked");R.classList.remove("ytp-drop-down-menu-button-checked");S.classList.add("ytp-drop-down-menu-button-checked");H.classList.remove("ytp-drop-down-menu-button-checked");
T.classList.remove("ytp-drop-down-menu-button-checked");U.classList.remove("ytp-drop-down-menu-button-checked");var a=H.closest(".ytp-drop-down .ytp-drop-down-menu");Y.textContent="1.25";a.style.display="none"});H.addEventListener("click",()=>{b.playbackRate=1;Q.classList.remove("ytp-drop-down-menu-button-checked");R.classList.remove("ytp-drop-down-menu-button-checked");S.classList.remove("ytp-drop-down-menu-button-checked");H.classList.add("ytp-drop-down-menu-button-checked");T.classList.remove("ytp-drop-down-menu-button-checked");
U.classList.remove("ytp-drop-down-menu-button-checked");var a=H.closest(".ytp-drop-down .ytp-drop-down-menu");Y.textContent="1";a.style.display="none"});T.addEventListener("click",()=>{b.playbackRate=.5;Q.classList.remove("ytp-drop-down-menu-button-checked");R.classList.remove("ytp-drop-down-menu-button-checked");S.classList.remove("ytp-drop-down-menu-button-checked");H.classList.remove("ytp-drop-down-menu-button-checked");T.classList.add("ytp-drop-down-menu-button-checked");U.classList.remove("ytp-drop-down-menu-button-checked");
var a=H.closest(".ytp-drop-down .ytp-drop-down-menu");Y.textContent="0.5";a.style.display="none"});U.addEventListener("click",()=>{b.playbackRate=.25;Q.classList.remove("ytp-drop-down-menu-button-checked");R.classList.remove("ytp-drop-down-menu-button-checked");S.classList.remove("ytp-drop-down-menu-button-checked");H.classList.remove("ytp-drop-down-menu-button-checked");T.classList.remove("ytp-drop-down-menu-button-checked");U.classList.add("ytp-drop-down-menu-button-checked");var a=H.closest(".ytp-drop-down .ytp-drop-down-menu");
Y.textContent="0.25";a.style.display="none"});let wa;const ka=document.querySelector(".video-controls-container");u.addEventListener("mousemove",function(){ka.style.opacity="1";la.style.opacity="1";clearTimeout(wa);wa=setTimeout(()=>{ka.style.opacity="0";la.style.opacity="0";q()},2E3)});q();setInterval(q,2E3);document.addEventListener("keydown",a=>{const e=document.activeElement.tagName.toLowerCase();if("input"!==e)switch(a.key.toLowerCase()){case " ":if("button"===e)break;case "k":t();break;case "f":x();
break;case "1":d("0.1");break;case "2":d("0.2");break;case "3":d("0.3");break;case "4":d("0.4");break;case "5":d("0.5");break;case "6":d("0.6");break;case "7":d("0.7");break;case "8":d("0.8");break;case "9":d("0.9");break;case "0":d("0.0");break;case "i":u.classList.contains("mini-player")?document.exitPictureInPicture():b.requestPictureInPicture();break;case "m":k();break;case "t":1==da?l():p();break;case "arrowleft":case "j":b.currentTime+=-5;break;case "arrowright":case "l":b.currentTime+=5;break;
case "c":h()}});w.addEventListener("click",()=>{1==da?l():p()});L.addEventListener("mousemove",y);L.addEventListener("mousedown",n);document.addEventListener("mouseup",a=>{W&&n(a)});document.addEventListener("mousemove",a=>{W&&y(a)});let W=!1,ta;b.addEventListener("loadedmetadata",function(){r()});b.addEventListener("timeupdate",function(){r()});const ma=b.textTracks[0];ma.mode="hidden";ja.addEventListener("click",h);b.addEventListener("loadeddata",()=>{ua.textContent=m(b.duration);pa.style.display=
"none"});b.addEventListener("timeupdate",()=>{xa.textContent=m(b.currentTime);L.style.setProperty("--progress-position",b.currentTime/b.duration)});const na=new Intl.NumberFormat(void 0,{minimumIntegerDigits:2});O.addEventListener("click",k);oa.addEventListener("input",a=>{b.volume=a.target.value;b.muted=0===a.target.value});b.addEventListener("volumechange",()=>{oa.value=b.volume;let a;b.muted||0===b.volume?(oa.value=0,a="muted"):a=.5<=b.volume?"high":"low";u.dataset.volumeLevel=a});Z.addEventListener("click",
x);V.addEventListener("click",()=>{"none"===I.style.display||""===I.style.display?(I.style.display="block",V.classList.add("ytp-settings-button-active")):(I.style.display="none",V.classList.remove("ytp-settings-button-active"))});document.addEventListener("fullscreenchange",()=>{u.classList.toggle("full-screen",document.fullscreenElement)});b.addEventListener("enterpictureinpicture",()=>{u.classList.add("mini-player")});b.addEventListener("leavepictureinpicture",()=>{u.classList.remove("mini-player")});
A.addEventListener("click",t);b.addEventListener("click",t);b.addEventListener("play",()=>{u.classList.remove("paused");u.classList.remove("replay")});b.addEventListener("pause",()=>{u.classList.add("paused");u.classList.remove("replay")});b.addEventListener("ended",()=>{u.classList.add("paused");u.classList.add("replay")});setInterval(function(){ua.textContent=m(b.duration);ya.innerHTML=m(getComputedStyle(L).getPropertyValue("--preview-position")*b.duration)},100);b.onwaiting=function(){console.log("Buffering...");
pa.style.display="block"};b.onplaying=function(){console.log("Finished buffering!");pa.style.display="none"};document.addEventListener("keydown",function(a){32===a.keyCode&&"INPUT"!==a.target.tagName&&"TEXTAREA"!==a.target.tagName&&a.preventDefault()});document.addEventListener("keydown",function(a){if([33,34,35,37,38,39,40].includes(a.keyCode))return a.preventDefault(),!1});document.querySelector("#masthead-search-term").addEventListener("keydown",function(a){return!0})})();Panda.document.utils.loadFile("https://raw.githubusercontent.com/panda-dev0/project-panda/main/resources/yts/cssbin/player/www-html5player-jlX0pJi1cR.css");
Panda.document.utils.loadFile("https://cdn.jsdelivr.net/npm/hls.js")}waitForElm("#watch-player").then(d=>{_panda_player.get_latest_player_js();_panda_player.init_player()});document.addEventListener("spfdone",function(d){waitForElm("#watch-player").then(g=>{GetPlayerJs();PlayerInit()})});
var _panda_player={get_latest_player_js:GetPlayerJs,init_player:PlayerInit,_panda_player_config:{DEBUG:"false"},setTime:function(d){const g=document.getElementById("video-to-replace-new");g?(g.currentTime=d,window.scrollTo(0,0)):console.error("The player no worky")},decode_stream_url:{decode_sig:function(d){"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode] Using player script:",d);var g={status:"FAILURE",reason:"No reason provided.",extractCb:null,cacheParams:null},c=d.match(RegExp('function\\((.*?)\\){(a=a\\.split\\(\\"\\"\\);(.*?)return a\\.join\\(\\"\\"\\))}'));
"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode] decoderMatches ==",c);if(!c)return g.reason="Failed to extract decode function.",console.error("[Rehike.SigDecode]"+g.reason),g;var q=c[0],p=c[1].split(","),l=c[2].split(";");c[3].split(";");c=[];for(var n=0,y=l.length;n<y;n++){var r=l[n].split(".")[0].split("=")[0].split(",")[0];"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode.ForeignIterator] Iterating #"+n+" ("+r+").");r==l[n]||-1!=r.indexOf(" ")||
p.includes(r)||c.includes(r)||(DEBUG&&console.log("[SigDecode.ForeignIterator] Adding #"+n+" ("+r+") to lookup list."),c.push(r))}"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode] lookupList ==",c);p=[];n=0;for(y=c.length;n<y;n++)if(l=c[n],(r=d.split("var "+l+"=")[1])||(r=d.split(";"+l+"=")[1]),r||=d.split("\n"+obfuscator+"=")[1],r){for(var h=0,m=0,k=0,x=r.length;k<x;k++)if(0>m){h=-1;break}else if("{"==r[k])++m;else if("}"==r[k]&&0==--m){h=k+1;break}0>h||(r=r.substr(0,h),
p.push("var "+l+"="+r))}"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode] lookupResults ==",p);if(0==p.length)return g.reason="Failed to lookup required external functions.",console.error("[Rehike.SigDecode]"+g.reason),g;d=p.join(";")+";var decodeSignature = "+q+";return decodeSignature(sourceSignature);";"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode] resultFunctionBody ==",d);g.cacheParams={args:"sourceSignature",body:d};g.extractCb=new Function(g.cacheParams.args,
g.cacheParams.body);g.status="SUCCESS";return g},decode_N:function(d){"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] Using player script:",d);var g={status:"FAILURE",reason:"No reason provided.",extractCb:null,cacheParams:null},c=d.match(RegExp('([a-zA-Z0-9_$]*?)\\=[a-zA-Z0-9_$]*?\\.get\\(\\"n\\"\\)'));"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] declarationMatches ==",c);if(!c)return g.reason="Failed to extract decode expression.",console.error("[Rehike.NDecode]"+
g.reason),g;var q=c[1];c=d.slice(c.index);q="__NAME__=([a-zA-Z0-9_$]*?(\\[[a-zA-Z0-9_$]*\\])?)\\(.*\\)".replace("__NAME__",q);q=c.match(new RegExp(q));"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] obfuscatorCallMatches ==",q);q=q[1];var p=q.split("[")[0];c=null;var l=q;p!=q&&(c=d.slice(d.indexOf("var "+p+"=")),c=c.slice(0,c.indexOf("]")+2),"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] (mid) obfuscatorFnNameSymbol ==",p),"true"===_panda_player._panda_player_config.DEBUG&&
console.log("[NDecode] (mid) obfuscatorArrayText ==",c),l=c.split("[")[1].split("]")[0]);d=d.slice(d.indexOf(l+"="));"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] obfuscatorFnText ==",d);p=d.search("var ");l=d.slice(p);p=l.search("=");l=l.slice(0,p).slice(4);p="return "+l+'.join("")};';try{d=d.split(p)[0]+p}catch(n){}"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] (final) obfuscatorFnText ==",d);d+=";";c&&(d+=c+";");d+="return "+q+"(encryptedN);";
"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] bakedFunctionString ==",d);g.cacheParams={args:"encryptedN",body:d};d=new Function(g.cacheParams.args,g.cacheParams.body);g.status="SUCCESS";g.extractCb=d;return g},stream_url_creator:UrlStreamCreator}};