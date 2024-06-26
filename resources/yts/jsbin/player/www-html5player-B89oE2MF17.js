function waitForElm(e){return new Promise(g=>{if(document.querySelector(e))return g(document.querySelector(e));const c=new MutationObserver(q=>{document.querySelector(e)&&(c.disconnect(),g(document.querySelector(e)))});c.observe(document.body,{childList:!0,subtree:!0})})}var playerScript=null;let signatureTimestamp=null;var DEBUG=!1;
function GetPlayerJs(){console.log("Result from XHR:",yt.config_.PLAYER_JS_URL);var e="https://www.youtube.com"+yt.config_.PLAYER_JS_URL,g={status:"FAILURE",reason:"No reason provided.",content:null};DEBUG&&console.log("[FetchContent] Fetching content from:",e);try{var c=new XMLHttpRequest;c.open("GET",e,!1);c.send();if(200<=c.status&&300>c.status){var q=c.responseText,n=q.match(/signatureTimestamp:\s*(\d+)/);n&&(signatureTimestamp=parseInt(n[1],10),localStorage.panda_player_sigTimestamp=parseInt(n[1],
10),window[localStorage.panda_player_sigTimestamp]=parseInt(n[1],10));g.content=q;g.status="SUCCESS";DEBUG&&console.log("[FetchContent] Content fetched successfully:",g.content);playerScript=window[playerScript]=g.content;localStorage.panda_player_js=g.content;window[localStorage.panda_player_js]=g.content}else throw Error("Network response was not ok");}catch(m){throw g.reason="Failed to fetch content: "+m.message,console.error("[FetchContent]"+g.reason),g;}}
function UrlStreamCreator(e,g){e=async function(c){function q(h){DEBUG&&console.log("[SigDecode] Using player script:",h);var l={status:"FAILURE",reason:"No reason provided.",extractCb:null,cacheParams:null},k=h.match(RegExp('function\\((.*?)\\){(a=a\\.split\\(\\"\\"\\);(.*?)return a\\.join\\(\\"\\"\\))}'));DEBUG&&console.log("[SigDecode] decoderMatches ==",k);if(!k)return l.reason="Failed to extract decode function.",console.error("[Rehike.SigDecode]"+l.reason),l;var x=k[0],t=k[1].split(","),u=k[2].split(";");
k[3].split(";");k=[];for(var y=0,Z=u.length;y<Z;y++){var w=u[y].split(".")[0].split("=")[0].split(",")[0];DEBUG&&console.log("[SigDecode.ForeignIterator] Iterating #"+y+" ("+w+").");w==u[y]||-1!=w.indexOf(" ")||t.includes(w)||k.includes(w)||(DEBUG&&console.log("[SigDecode.ForeignIterator] Adding #"+y+" ("+w+") to lookup list."),k.push(w))}DEBUG&&console.log("[SigDecode] lookupList ==",k);t=[];y=0;for(Z=k.length;y<Z;y++)if(u=k[y],(w=h.split("var "+u+"=")[1])||(w=h.split(";"+u+"=")[1]),w||=h.split("\n"+
obfuscator+"=")[1],w){for(var V=0,O=0,I=0,K=w.length;I<K;I++)if(0>O){V=-1;break}else if("{"==w[I])++O;else if("}"==w[I]&&0==--O){V=I+1;break}0>V||(w=w.substr(0,V),t.push("var "+u+"="+w))}DEBUG&&console.log("[SigDecode] lookupResults ==",t);if(0==t.length)return l.reason="Failed to lookup required external functions.",console.error("[Rehike.SigDecode]"+l.reason),l;h=t.join(";")+";var decodeSignature = "+x+";return decodeSignature(sourceSignature);";DEBUG&&console.log("[SigDecode] resultFunctionBody ==",
h);l.cacheParams={args:"sourceSignature",body:h};l.extractCb=new Function(l.cacheParams.args,l.cacheParams.body);l.status="SUCCESS";return l}function n(h){DEBUG&&console.log("[NDecode] Using player script:",h);var l={status:"FAILURE",reason:"No reason provided.",extractCb:null,cacheParams:null},k=h.match(RegExp('([a-zA-Z0-9_$]*?)\\=[a-zA-Z0-9_$]*?\\.get\\(\\"n\\"\\)'));DEBUG&&console.log("[NDecode] declarationMatches ==",k);if(!k)return l.reason="Failed to extract decode expression.",console.error("[Rehike.NDecode]"+
l.reason),l;var x=k[1];k=h.slice(k.index);x="__NAME__=([a-zA-Z0-9_$]*?(\\[[a-zA-Z0-9_$]*\\])?)\\(.*\\)".replace("__NAME__",x);x=k.match(new RegExp(x));DEBUG&&console.log("[NDecode] obfuscatorCallMatches ==",x);x=x[1];var t=x.split("[")[0];k=null;var u=x;t!=x&&(k=h.slice(h.indexOf("var "+t+"=")),k=k.slice(0,k.indexOf("]")+2),DEBUG&&console.log("[NDecode] (mid) obfuscatorFnNameSymbol ==",t),DEBUG&&console.log("[NDecode] (mid) obfuscatorArrayText ==",k),u=k.split("[")[1].split("]")[0]);h=h.slice(h.indexOf(u+
"="));DEBUG&&console.log("[NDecode] obfuscatorFnText ==",h);t=h.search("var ");u=h.slice(t);t=u.search("=");u=u.slice(0,t).slice(4);t="return "+u+'.join("")};';try{h=h.split(t)[0]+t}catch(y){}DEBUG&&console.log("[NDecode] (final) obfuscatorFnText ==",h);h+=";";k&&(h+=k+";");h+="return "+x+"(encryptedN);";DEBUG&&console.log("[NDecode] bakedFunctionString ==",h);l.cacheParams={args:"encryptedN",body:h};h=new Function(l.cacheParams.args,l.cacheParams.body);l.status="SUCCESS";l.extractCb=h;return l}if(c.signatureCipher){var m=
c.signatureCipher.indexOf("s=")+2,p=c.signatureCipher.indexOf("&",m);m=c.signatureCipher.substring(m,p);p=decodeURIComponent(m);var z=c.signatureCipher.indexOf("url=");z=c.signatureCipher.substring(z+4);const h=decodeURIComponent(z);c=h.indexOf("&n=");const l=-1!==c?h.substring(c+3,h.indexOf("&",c+3)):null;var r=q(playerScript).extractCb(p);c=n(playerScript);c=c.extractCb(l);const k=h.replace(`&n=${l}`,`&n=${c}`)+"&alr=yes&sig="+r;g({encodedSignature:m,encodedUrl:z,URIdecodedUrl:h,nParamValue:l,URIdecodedSignature:p,
decodedSignature:r,decodedN:c,decodedUrl:k})}else c.url&&(m=c.url,p=m.indexOf("&n="),p=-1!==p?m.substring(p+3,m.indexOf("&",p+3)):null,c=n(playerScript),c=c.extractCb(p),z=m.replace(`&n=${p}`,`&n=${c}`),g({encodedUrl:m,decodedUrl:z,nParamValue:p,decodedN:c}))}(e,function(c){console.log(c);g&&g({decodedUrl:c.decodedUrl})});console.log(e)}function PlayerInit(){containerplayer=document.getElementById("watch-player");containerplayer.innerHTML=`<div class="video-container paused" style="position: relative;
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
  </div>`;(function(){function e(a){b.currentTime=b.duration*a}function g(a){navigator.clipboard.writeText(a).then(()=>{}).catch(d=>{console.error("Failed to copy URL to clipboard: ",d)})}function c(){const a={context:yt.config_.INNERTUBE_CONTEXT,actions:[{addedVideoId:u,action:"ACTION_ADD_VIDEO"}],playlistId:"WL"};let d={};d=!1===yt.config_.LOGGED_IN?{}:{authorization:Panda.document.Account.getSapisidhash(),"x-goog-authuser":yt.config_.SESSION_INDEX,"x-goog-pageid":yt.config_.DELEGATED_SESSION_ID,
"x-goog-visitor-id":yt.config_.VISITOR_DATA};console.log(d);fetch("https://www.youtube.com/youtubei/v1/browse/edit_playlist?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false",{method:"POST",headers:d,body:JSON.stringify(a)}).then(f=>f.json()).then(f=>{console.log(f);I.classList.add("html5-async-success");I.classList.remove("html5-async-progress")})}function q(){v.classList.contains("full-screen")||(ja.style.opacity="1",ka.style.opacity="0")}function n(){da=!0;document.body.classList.add("watch-wide");
setTimeout(function(){document.body.classList.add("theater-mode")},300)}function m(){document.body.classList.remove("theater-mode");document.body.classList.remove("watch-wide");da=!1}function p(a){var d=L.getBoundingClientRect();d=Math.min(Math.max(0,a.x-d.x),d.width)/d.width;W=1===(a.buttons&1);v.classList.toggle("scrubbing",W);W?(sa=b.paused,b.pause()):(b.currentTime=d*b.duration,sa||b.play());z(a)}function z(a){var d=L.getBoundingClientRect();d=Math.min(Math.max(0,a.x-d.x),d.width)/d.width;L.style.setProperty("--preview-position",
d);W&&(a.preventDefault(),L.style.setProperty("--progress-position",d))}function r(){var a=b.buffered;0<a.length&&(a=a.end(0)/b.duration,document.documentElement.style.setProperty("--loaded-position",a+"%"))}function h(){const a="hidden"===la.mode;la.mode=a?"showing":"hidden";v.classList.toggle("captions",a)}function l(a){const d=Math.floor(a%60),f=Math.floor(a/60)%60;a=Math.floor(a/3600);return 0===a?`${f}:${ma.format(d)}`:`${a}:${ma.format(f)}:${ma.format(d)}`}function k(){b.muted=!b.muted}function x(){null==
document.fullscreenElement?v.requestFullscreen():document.exitFullscreen()}function t(){b.paused?(b.play(),v.classList.remove("video-ended"),document.querySelector(".html5-endscreen-content").innerHTML="",M.style.display="block",ea.classList.add("html5-bezel-play"),ea.classList.remove("html5-bezel-pause"),M.setAttribute("aria-hidden","false"),setTimeout(function(){M.setAttribute("aria-hidden","true")},10),setTimeout(function(){M.style.display="none"},510)):b.paused?(b.play(),v.classList.remove("video-ended"),
document.querySelector(".html5-endscreen-content").innerHTML=""):(b.pause(),M.style.display="block",ea.classList.remove("html5-bezel-play"),ea.classList.add("html5-bezel-pause"),M.setAttribute("aria-hidden","false"),setTimeout(function(){M.setAttribute("aria-hidden","true")},10),setTimeout(function(){M.style.display="none"},510))}var u=(new URLSearchParams(window.location.search)).get("v");const y=u,Z=document.querySelector(".play-pause-btn"),w=document.querySelector(".full-screen-btn"),V=document.querySelector(".small-player-btn"),
O=document.querySelector(".settings-btn"),I=document.querySelector(".ytp-button-watch-later"),K=document.querySelector(".ytp-menu-container"),wa=document.querySelector(".mute-btn"),xa=document.querySelector(".captions-btn"),ya=document.querySelector(".current-time"),ta=document.querySelector(".total-time");document.querySelector(".preview-img");document.querySelector(".thumbnail-img");const na=document.querySelector(".volume-slider"),v=document.querySelector(".video-container"),L=document.querySelector(".timeline-container"),
b=document.querySelector("video");document.querySelector("audio");const oa=document.querySelector(".buffer"),za=document.querySelector(".timeline-txttime");document.querySelector(".top-bar");const aa=document.getElementById("resolution-720p"),fa=document.getElementById("resolution-360p");document.getElementById("watch-container");const ha=document.getElementById("context-menu");var B=document.querySelector('#context-item[data-onclick="html5"]'),C=document.querySelector('#context-item[data-onclick="download"]');
const ua=document.querySelector('#context-item[data-onclick="repeat"]');var X=document.querySelector('#context-item[data-onclick="copyurl"]');const Aa=document.querySelector("#watch-player");var pa=document.querySelector(".ytp-button-watch-on-youtube");const ka=document.querySelector(".html5-info-bar"),M=document.querySelector(".html5-bezel"),ea=document.querySelector(".html5-bezel div");pa.onclick=function(){window.location.href=`https://www.youtube.com/watch?v=${u}`};waitForElm("#watch-related").then(a=>
{b.addEventListener("ended",function(){"true"===localStorage.getItem("v3-player-autoplay")?window.location.href="https://youtube.com/watch?v="+Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"playerOverlayRenderer"),"autoplay"),"videoId")):(v.classList.add("video-ended"),document.querySelector("#watch-related"),Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,
"endScreen"),"results").results.forEach(d=>{console.log("sheesh");const f=document.querySelector(".html5-endscreen-content"),A=document.createElement("a");A.className="videowall-still";A.href="https://www.youtube.com/watch?v="+d.endScreenVideoRenderer.videoId;A.style.backgroundImage=`url(https://i1.ytimg.com/vi/${d.endScreenVideoRenderer.videoId}/mqdefault.jpg)`;A.innerHTML=`
                        <span class="videowall-info"> <span class="videowall-info-title">${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(d,"title"),"simpleText"))}</span>
        <span class="videowall-info-author">${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(d,"shortBylineText"),"text"))}</span>
        <span class="videowall-info-duration">${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(d,"lengthText"),"simpleText"))}</span>
        <span class="videowall-info-view-count">${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(d,"shortViewCountText"),"simpleText"))}</span></span>`;f.appendChild(A)}))})});var qa=setTimeout(function(){b.readyState<b.HAVE_FUTURE_DATA&&(console.log("Video not loading within 10 seconds."),Aa.innerHTML='<div id="player-unavailable" class="    player-width player-height    player-unavailable ">\n                      <img class="icon meh" src="https://s.ytimg.com/yts/img/meh7-vflGevej7.png" alt="">\n              <div class="content">\n                <h1 id="unavailable-message" class="message">\n                        This video is unavailable.\n                </h1>\n                <div id="unavailable-submessage" class="submessage">The video could not be loaded. Check issue #1 in the extension popup for more info\n                </div>\n              </div>\n\n\n              </div>')},
15E3);b.addEventListener("loadeddata",function(){clearTimeout(qa);console.log("Video loaded successfully.")});const D=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(1) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(1)"),E=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(1) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(2)");"true"===localStorage.getItem("v3-player-autoplay")?
(E.classList.add("ytp-segmented-control-selected"),E.classList.add("ytp-segmented-control-other"),E.classList.remove("ytp-segmented-control-deselected"),D.classList.remove("ytp-segmented-control-selected"),D.classList.add("ytp-segmented-control-other"),D.classList.add("ytp-segmented-control-deselected")):(E.classList.remove("ytp-segmented-control-selected"),E.classList.add("ytp-segmented-control-other"),E.classList.add("ytp-segmented-control-deselected"),D.classList.add("ytp-segmented-control-selected"),
D.classList.remove("ytp-segmented-control-other"),D.classList.remove("ytp-segmented-control-deselected"));E.onclick=function(){localStorage.setItem("v3-player-autoplay","true");E.classList.add("ytp-segmented-control-selected");E.classList.add("ytp-segmented-control-other");E.classList.remove("ytp-segmented-control-deselected");D.classList.remove("ytp-segmented-control-selected");D.classList.add("ytp-segmented-control-other");D.classList.add("ytp-segmented-control-deselected")};D.onclick=function(){localStorage.setItem("v3-player-autoplay",
"false");E.classList.remove("ytp-segmented-control-selected");E.classList.add("ytp-segmented-control-other");E.classList.add("ytp-segmented-control-deselected");D.classList.add("ytp-segmented-control-selected");D.classList.remove("ytp-segmented-control-other");D.classList.remove("ytp-segmented-control-deselected")};const F=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(2) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(1)"),G=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(2) .ytp-menu-cell:nth-of-type(2) .ytp-segmented-control .ytp-button:nth-of-type(2)");
"true"===localStorage.getItem("v3-player-dash")?(G.classList.add("ytp-segmented-control-selected"),G.classList.add("ytp-segmented-control-other"),G.classList.remove("ytp-segmented-control-deselected"),F.classList.remove("ytp-segmented-control-selected"),F.classList.add("ytp-segmented-control-other"),F.classList.add("ytp-segmented-control-deselected")):(G.classList.remove("ytp-segmented-control-selected"),G.classList.add("ytp-segmented-control-other"),G.classList.add("ytp-segmented-control-deselected"),
F.classList.add("ytp-segmented-control-selected"),F.classList.remove("ytp-segmented-control-other"),F.classList.remove("ytp-segmented-control-deselected"));G.onclick=function(){localStorage.setItem("v3-player-dash","true");G.classList.add("ytp-segmented-control-selected");G.classList.add("ytp-segmented-control-other");G.classList.remove("ytp-segmented-control-deselected");F.classList.remove("ytp-segmented-control-selected");F.classList.add("ytp-segmented-control-other");F.classList.add("ytp-segmented-control-deselected");
clearTimeout(qa);PlayerInit();K.style.display="block"};F.onclick=function(){localStorage.setItem("v3-player-dash","false");G.classList.remove("ytp-segmented-control-selected");G.classList.add("ytp-segmented-control-other");G.classList.add("ytp-segmented-control-deselected");F.classList.add("ytp-segmented-control-selected");F.classList.remove("ytp-segmented-control-other");F.classList.remove("ytp-segmented-control-deselected");clearTimeout(qa);PlayerInit();K.style.display="block"};v.addEventListener("contextmenu",
a=>{a.preventDefault();const d=b.getBoundingClientRect(),f=a.pageY-d.top-window.scrollY;ha.style.left=`${a.pageX-d.left-window.scrollX}px`;ha.style.top=`${f}px`;ha.style.display="block"});B.addEventListener("click",()=>{window.location.href="html5.html"});X.addEventListener("click",()=>{g(window.location.href)});C.addEventListener("click",()=>{Date.now();window.location.href=b.getAttribute("src")});ua.addEventListener("click",function(){b.loop=!b.loop;console.log("Loop toggled:",b.loop);ua.textContent=
b.loop?"\u2713 Repeat":"Repeat"});document.addEventListener("click",()=>{ha.style.display="none"});I.onclick=function(){I.classList.add("html5-async-progress");c()};console.log(ytInitialPlayerResponse);C=new Date;B=C.getMonth()+1;C=C.getDate();if(12===B&&27===C)b.src="https://pixiecat-dev.github.io/media/laugh.mp4";else{B=document.querySelectorAll(".ytp-button.ytp-drop-down-label");var ia=document.querySelector(".ytp-settings-hd-quality-badge");B.forEach(function(a){a.addEventListener("click",function(){var d=
a.closest(".ytp-drop-down").querySelector(".ytp-drop-down-menu");d&&(d.style.display="none"===d.style.display||""===d.style.display?"block":"none")})});if(ytInitialPlayerResponse.streamingData){var ba=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(4) .ytp-menu-cell:nth-of-type(2) .ytp-button .ytp-drop-down-label-content span"),ca=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(4) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(1)"),
P=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(4) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(2)");if("true"===localStorage.getItem("v3-player-dash")){const a=dashjs.MediaPlayer().create();a.initialize(b,null,!0);a.attachSource("https://iv.datura.network/api/manifest/dash/id/hlZdjjIsnGE?local=true");function d(f){"auto"===f?a.updateSettings({streaming:{abr:{autoSwitchBitrate:!0}}}):a.setQualityFor("video",f,!0)}
d(6);ca.addEventListener("click",()=>{d(6)})}else if(ytInitialPlayerResponse.streamingData.formats)if(ytInitialPlayerResponse.streamingData.formats[1]){ia.style.display="block";ba.innerHTML='720p<sup style="font-size: 75%;font-weight: bold;">HD</sup>';UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[1],function(d){b.src=d.decodedUrl});b.play();aa.classList.add("selected");fa.classList.remove("selected");ca.addEventListener("click",()=>{a("720p")});P.addEventListener("click",()=>{a("360p")});
function a(d){const f=document.querySelector("video"),A=f.currentTime;var N=f.paused?!0:!1;"720p"===d?(f.src=null,UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[1],function(J){f.src=J.decodedUrl;f.currentTime=A;N?f.pause():f.play()}),ca.classList.add("ytp-drop-down-menu-button-checked"),P.classList.remove("ytp-drop-down-menu-button-checked"),ia.style.display="block",ba.innerHTML='720p<sup style="font-size: 75%;font-weight: bold;">HD</sup>'):"360p"===d?(f.src=null,UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0],
function(J){f.src=J.decodedUrl;f.currentTime=A;N?f.pause():f.play()}),P.classList.add("ytp-drop-down-menu-button-checked"),ca.classList.remove("ytp-drop-down-menu-button-checked"),ba.textContent="360p",ia.style.display="none"):"auto"===d&&(ba.innerHTML="Auto",f.src=null,d=navigator.connection.effectiveType,"4g"===d||"3g"===d?UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[1],function(J){f.src=J.decodedUrl;f.currentTime=A;N?f.pause():f.play()}):UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0],
function(J){f.src=J.decodedUrl;f.currentTime=A;N?f.pause():f.play()}));f.currentTime=A;N?f.pause():f.play();P.closest(".ytp-drop-down .ytp-drop-down-menu").style.display="none"}}else{ba.textContent="360p";ca.classList.add("hid");P.classList.add("ytp-drop-down-menu-button-checked");ia.style.display="none";UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0],function(d){b.src=d.decodedUrl});b.play();aa.classList.remove("selected");aa.style.display="none";fa.classList.add("selected");P.addEventListener("click",
()=>{a("360p")});function a(d){const f=document.querySelector("video"),A=f.currentTime;var N=f.paused?!0:!1;"720p"===d?(f.src=ytInitialPlayerResponse.streamingData.formats[1].url?"https://"+config_.apiurl+"/latest_version?id="+y+"&itag=22":"https://"+config_.apiurl+"/latest_version?id="+y+"&itag=22&local=true",aa.classList.add("selected"),fa.classList.remove("selected")):"360p"===d&&(f.src=null,UrlStreamCreator(ytInitialPlayerResponse.streamingData.formats[0],function(J){f.src=J.decodedUrl;f.currentTime=
A;N?f.pause():f.play()}),fa.classList.add("selected"),aa.classList.remove("selected"));f.currentTime=A;N?f.pause():f.play();P.closest(".ytp-drop-down .ytp-drop-down-menu").style.display="none"}}else ytInitialPlayerResponse.streamingData.hlsManifestUrl&&(console.log(ytInitialPlayerResponse.streamingData.hlsManifestUrl),v.classList.add("live"),B=document.querySelector("video"),C=ytInitialPlayerResponse.streamingData.hlsManifestUrl,Hls.isSupported()?(X=new Hls,X.loadSource(C),X.attachMedia(B),B.play()):
B.canPlayType("application/vnd.apple.mpegurl")&&(B.src=C,B.play()),Panda.document.utils.waitForElm("#watch7-sidebar").then(a=>{a=document.querySelector("#watch7-sidebar");const d=document.createElement("iframe");d.src="https://www.youtube.com/live_chat?v="+u;d.style.width="100%";d.style.height="390px";a.insertBefore(d,a.firstChild);document.body.classList.add("playlist-exists")}))}else b.src="https://iv.datura.network/latest_version?id="+u+"&local=true"}C=document.querySelector(".html5-info-bar .html5-title");
X=document.querySelector(".html5-info-bar .html5-description-text");pa=document.querySelector(".html5-info-bar .html5-author-name");B=document.querySelector(".html5-info-bar .html5-author-img img");var Ba=document.querySelector(".html5-info-bar .html5-view-count"),Ca=parseInt(ytInitialPlayerResponse.videoDetails.viewCount,10);C.textContent=ytInitialPlayerResponse.videoDetails.title;X.textContent=Panda.document.utils.createStringFromObject(ytInitialPlayerResponse.microformat.playerMicroformatRenderer.description);
pa.textContent=ytInitialPlayerResponse.videoDetails.author;Ba.textContent=Ca.toLocaleString("en-US",{useGrouping:!0});var ra="no";C=document.querySelector(".html5-more-info-button");B.setAttribute("src",Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"videoSecondaryInfoRenderer"),"videoOwnerRenderer"),"thumbnails"),"url")));C.onclick=function(){var a=document.querySelector(".html5-info-bar");
a.classList.contains("show-more-info")?(a.classList.remove("show-more-info"),"yes"===ra&&b.play()):(a.classList.add("show-more-info"),b.paused?ra="no":(b.pause(),ra="yes"))};waitForElm(".watch-extras-section #eow-category > a").then(a=>{a.textContent=ytInitialPlayerResponse.microformat.playerMicroformatRenderer.category});b.addEventListener("ended",function(){null!==Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"playerOverlayRenderer"),"autoplay")?"true"===localStorage.getItem("v3-player-autoplay")&&
(window.location.href="https://youtube.com/watch?v="+Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"playerOverlayRenderer"),"autoplay"),"videoId"))):window.location.href="https://youtube.com/watch?v="+Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"playlist"),"contents").contents[Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,
"playlist"),"currentIndex").currentIndex+1].playlistPanelVideoRenderer.videoId+"&list="+Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"playlist"),"playlistId"))+"&index="+Number(Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData,"playlist"),"currentIndex")))+1});let da;var Y=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-button .ytp-drop-down-label-content");
const Q=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(6)"),R=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(5)"),S=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(4)"),
H=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(3)"),T=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(2)"),U=document.querySelector(".ytp-menu-container .ytp-menu-content .ytp-menu-row:nth-of-type(3) .ytp-menu-cell:nth-of-type(2) .ytp-drop-down-menu .ytp-drop-down-menu-button:nth-of-type(1)");
Q.addEventListener("click",()=>{b.playbackRate=2;Q.classList.add("ytp-drop-down-menu-button-checked");R.classList.remove("ytp-drop-down-menu-button-checked");S.classList.remove("ytp-drop-down-menu-button-checked");H.classList.remove("ytp-drop-down-menu-button-checked");T.classList.remove("ytp-drop-down-menu-button-checked");U.classList.remove("ytp-drop-down-menu-button-checked");Y.textContent="2";H.closest(".ytp-drop-down .ytp-drop-down-menu").style.display="none"});R.addEventListener("click",()=>
{b.playbackRate=1.5;Q.classList.remove("ytp-drop-down-menu-button-checked");R.classList.add("ytp-drop-down-menu-button-checked");S.classList.remove("ytp-drop-down-menu-button-checked");H.classList.remove("ytp-drop-down-menu-button-checked");T.classList.remove("ytp-drop-down-menu-button-checked");U.classList.remove("ytp-drop-down-menu-button-checked");var a=H.closest(".ytp-drop-down .ytp-drop-down-menu");Y.textContent="1.5";a.style.display="none"});S.addEventListener("click",()=>{b.playbackRate=1.25;
Q.classList.remove("ytp-drop-down-menu-button-checked");R.classList.remove("ytp-drop-down-menu-button-checked");S.classList.add("ytp-drop-down-menu-button-checked");H.classList.remove("ytp-drop-down-menu-button-checked");T.classList.remove("ytp-drop-down-menu-button-checked");U.classList.remove("ytp-drop-down-menu-button-checked");var a=H.closest(".ytp-drop-down .ytp-drop-down-menu");Y.textContent="1.25";a.style.display="none"});H.addEventListener("click",()=>{b.playbackRate=1;Q.classList.remove("ytp-drop-down-menu-button-checked");
R.classList.remove("ytp-drop-down-menu-button-checked");S.classList.remove("ytp-drop-down-menu-button-checked");H.classList.add("ytp-drop-down-menu-button-checked");T.classList.remove("ytp-drop-down-menu-button-checked");U.classList.remove("ytp-drop-down-menu-button-checked");var a=H.closest(".ytp-drop-down .ytp-drop-down-menu");Y.textContent="1";a.style.display="none"});T.addEventListener("click",()=>{b.playbackRate=.5;Q.classList.remove("ytp-drop-down-menu-button-checked");R.classList.remove("ytp-drop-down-menu-button-checked");
S.classList.remove("ytp-drop-down-menu-button-checked");H.classList.remove("ytp-drop-down-menu-button-checked");T.classList.add("ytp-drop-down-menu-button-checked");U.classList.remove("ytp-drop-down-menu-button-checked");var a=H.closest(".ytp-drop-down .ytp-drop-down-menu");Y.textContent="0.5";a.style.display="none"});U.addEventListener("click",()=>{b.playbackRate=.25;Q.classList.remove("ytp-drop-down-menu-button-checked");R.classList.remove("ytp-drop-down-menu-button-checked");S.classList.remove("ytp-drop-down-menu-button-checked");
H.classList.remove("ytp-drop-down-menu-button-checked");T.classList.remove("ytp-drop-down-menu-button-checked");U.classList.add("ytp-drop-down-menu-button-checked");var a=H.closest(".ytp-drop-down .ytp-drop-down-menu");Y.textContent="0.25";a.style.display="none"});let va;const ja=document.querySelector(".video-controls-container");v.addEventListener("mousemove",function(){ja.style.opacity="1";ka.style.opacity="1";clearTimeout(va);va=setTimeout(()=>{ja.style.opacity="0";ka.style.opacity="0";q()},2E3)});
q();setInterval(q,2E3);document.addEventListener("keydown",a=>{const d=document.activeElement.tagName.toLowerCase();if("input"!==d)switch(a.key.toLowerCase()){case " ":if("button"===d)break;case "k":t();break;case "f":x();break;case "1":e("0.1");break;case "2":e("0.2");break;case "3":e("0.3");break;case "4":e("0.4");break;case "5":e("0.5");break;case "6":e("0.6");break;case "7":e("0.7");break;case "8":e("0.8");break;case "9":e("0.9");break;case "0":e("0.0");break;case "i":v.classList.contains("mini-player")?
document.exitPictureInPicture():b.requestPictureInPicture();break;case "m":k();break;case "t":1==da?m():n();break;case "arrowleft":case "j":b.currentTime+=-5;break;case "arrowright":case "l":b.currentTime+=5;break;case "c":h()}});V.addEventListener("click",()=>{1==da?m():n()});L.addEventListener("mousemove",z);L.addEventListener("mousedown",p);document.addEventListener("mouseup",a=>{W&&p(a)});document.addEventListener("mousemove",a=>{W&&z(a)});let W=!1,sa;b.addEventListener("loadedmetadata",function(){r()});
b.addEventListener("timeupdate",function(){r()});const la=b.textTracks[0];la.mode="hidden";xa.addEventListener("click",h);b.addEventListener("loadeddata",()=>{ta.textContent=l(b.duration);oa.style.display="none"});b.addEventListener("timeupdate",()=>{ya.textContent=l(b.currentTime);L.style.setProperty("--progress-position",b.currentTime/b.duration)});const ma=new Intl.NumberFormat(void 0,{minimumIntegerDigits:2});wa.addEventListener("click",k);na.addEventListener("input",a=>{b.volume=a.target.value;
b.muted=0===a.target.value});b.addEventListener("volumechange",()=>{na.value=b.volume;let a;b.muted||0===b.volume?(na.value=0,a="muted"):a=.5<=b.volume?"high":"low";v.dataset.volumeLevel=a});w.addEventListener("click",x);O.addEventListener("click",()=>{"none"===K.style.display||""===K.style.display?(K.style.display="block",O.classList.add("ytp-settings-button-active")):(K.style.display="none",O.classList.remove("ytp-settings-button-active"))});document.addEventListener("fullscreenchange",()=>{v.classList.toggle("full-screen",
document.fullscreenElement)});b.addEventListener("enterpictureinpicture",()=>{v.classList.add("mini-player")});b.addEventListener("leavepictureinpicture",()=>{v.classList.remove("mini-player")});Z.addEventListener("click",t);b.addEventListener("click",t);b.addEventListener("play",()=>{v.classList.remove("paused");v.classList.remove("replay")});b.addEventListener("pause",()=>{v.classList.add("paused");v.classList.remove("replay")});b.addEventListener("ended",()=>{v.classList.add("paused");v.classList.add("replay")});
setInterval(function(){ta.textContent=l(b.duration);za.innerHTML=l(getComputedStyle(L).getPropertyValue("--preview-position")*b.duration)},100);b.onwaiting=function(){console.log("Buffering...");oa.style.display="block"};b.onplaying=function(){console.log("Finished buffering!");oa.style.display="none"};document.addEventListener("keydown",function(a){32===a.keyCode&&"INPUT"!==a.target.tagName&&"TEXTAREA"!==a.target.tagName&&a.preventDefault()});document.addEventListener("keydown",function(a){if([33,
34,35,37,38,39,40].includes(a.keyCode))return a.preventDefault(),!1});document.querySelector("#masthead-search-term").addEventListener("keydown",function(a){return!0})})();Panda.document.utils.loadFile("//panda-dev0.github.io/project-panda/resources/yts/cssbin/player/www-html5player-B89oE2MF17.css");Panda.document.utils.loadFile("//cdn.jsdelivr.net/npm/hls.js")}waitForElm("#watch-player").then(e=>{_panda_player.get_latest_player_js();_panda_player.init_player()});
document.addEventListener("spfdone",function(e){waitForElm("#watch-player").then(g=>{GetPlayerJs();PlayerInit()})});
var _panda_player={get_latest_player_js:GetPlayerJs,init_player:PlayerInit,_panda_player_config:{DEBUG:"false"},setTime:function(e){const g=document.getElementById("video-to-replace-new");g?(g.currentTime=e,window.scrollTo(0,0)):console.error("The player no worky")},decode_stream_url:{decode_sig:function(e){"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode] Using player script:",e);var g={status:"FAILURE",reason:"No reason provided.",extractCb:null,cacheParams:null},c=e.match(RegExp('function\\((.*?)\\){(a=a\\.split\\(\\"\\"\\);(.*?)return a\\.join\\(\\"\\"\\))}'));
"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode] decoderMatches ==",c);if(!c)return g.reason="Failed to extract decode function.",console.error("[Rehike.SigDecode]"+g.reason),g;var q=c[0],n=c[1].split(","),m=c[2].split(";");c[3].split(";");c=[];for(var p=0,z=m.length;p<z;p++){var r=m[p].split(".")[0].split("=")[0].split(",")[0];"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode.ForeignIterator] Iterating #"+p+" ("+r+").");r==m[p]||-1!=r.indexOf(" ")||
n.includes(r)||c.includes(r)||(DEBUG&&console.log("[SigDecode.ForeignIterator] Adding #"+p+" ("+r+") to lookup list."),c.push(r))}"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode] lookupList ==",c);n=[];p=0;for(z=c.length;p<z;p++)if(m=c[p],(r=e.split("var "+m+"=")[1])||(r=e.split(";"+m+"=")[1]),r||=e.split("\n"+obfuscator+"=")[1],r){for(var h=0,l=0,k=0,x=r.length;k<x;k++)if(0>l){h=-1;break}else if("{"==r[k])++l;else if("}"==r[k]&&0==--l){h=k+1;break}0>h||(r=r.substr(0,h),
n.push("var "+m+"="+r))}"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode] lookupResults ==",n);if(0==n.length)return g.reason="Failed to lookup required external functions.",console.error("[Rehike.SigDecode]"+g.reason),g;e=n.join(";")+";var decodeSignature = "+q+";return decodeSignature(sourceSignature);";"true"===_panda_player._panda_player_config.DEBUG&&console.log("[SigDecode] resultFunctionBody ==",e);g.cacheParams={args:"sourceSignature",body:e};g.extractCb=new Function(g.cacheParams.args,
g.cacheParams.body);g.status="SUCCESS";return g},decode_N:function(e){"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] Using player script:",e);var g={status:"FAILURE",reason:"No reason provided.",extractCb:null,cacheParams:null},c=e.match(RegExp('([a-zA-Z0-9_$]*?)\\=[a-zA-Z0-9_$]*?\\.get\\(\\"n\\"\\)'));"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] declarationMatches ==",c);if(!c)return g.reason="Failed to extract decode expression.",console.error("[Rehike.NDecode]"+
g.reason),g;var q=c[1];c=e.slice(c.index);q="__NAME__=([a-zA-Z0-9_$]*?(\\[[a-zA-Z0-9_$]*\\])?)\\(.*\\)".replace("__NAME__",q);q=c.match(new RegExp(q));"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] obfuscatorCallMatches ==",q);q=q[1];var n=q.split("[")[0];c=null;var m=q;n!=q&&(c=e.slice(e.indexOf("var "+n+"=")),c=c.slice(0,c.indexOf("]")+2),"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] (mid) obfuscatorFnNameSymbol ==",n),"true"===_panda_player._panda_player_config.DEBUG&&
console.log("[NDecode] (mid) obfuscatorArrayText ==",c),m=c.split("[")[1].split("]")[0]);e=e.slice(e.indexOf(m+"="));"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] obfuscatorFnText ==",e);n=e.search("var ");m=e.slice(n);n=m.search("=");m=m.slice(0,n).slice(4);n="return "+m+'.join("")};';try{e=e.split(n)[0]+n}catch(p){}"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] (final) obfuscatorFnText ==",e);e+=";";c&&(e+=c+";");e+="return "+q+"(encryptedN);";
"true"===_panda_player._panda_player_config.DEBUG&&console.log("[NDecode] bakedFunctionString ==",e);g.cacheParams={args:"encryptedN",body:e};e=new Function(g.cacheParams.args,g.cacheParams.body);g.status="SUCCESS";g.extractCb=e;return g},stream_url_creator:UrlStreamCreator}};