!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};e[n].call(s.exports,s,s.exports,i);s.l=!0;return s.exports}i.m=e;i.c=t;i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})};i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:!0})};i.t=function(e,t){1&t&&(e=i(e));if(8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);i.r(n);Object.defineProperty(n,"default",{enumerable:!0,value:e});if(2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n};i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};i.d(t,"a",t);return t};i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};i.p="//static.hsappstatic.net/web-interactives-container/static-2.1426/";i(i.s=0)}([function(e,t,i){"use strict";i.r(t);const n={RECEIVED_ANALYTICS:"HS_CTA_PARENT_RECEIVED_ANALYTICS",DEVICE_TYPE:"HS_CTA_PARENT_DEVICE_TYPE",PROXY_ANALYTICS_FN_CALLBACK:"HS_CTA_PARENT_PROXY_ANALYTICS_FN",INIT:"HS_CTA_PARENT_INIT",SHOWING_CTA:"HS_CTA_SHOWING_CTA",SEND_EXTRACTED_STYLES:"HS_SEND_EXTRACTED_STYLES",STARTED:"HS_CTA_STARTED",NAVIGATE_PAGE:"HS_CTA_NAVIGATE_PAGE",CLICK_EVENT:"HS_CTA_CLICK_EVENT",CLOSE_INTERACTIVE:"HS_CTA_CLOSE_INTERACTIVE",HAS_CLOSED:"HS_CTA_HAS_CLOSED",NEW_HEIGHT:"HS_CTA_NEW_HEIGHT",DISPLAY_CALL_TO_ACTION:"HS_DISPLAY_CALL_TO_ACTION",PROXY_ANALYTICS:"HS_CTA_PROXY_ANALYTICS",PROXY_ANALYTICS_FN:"HS_CTA_PROXY_ANALYTICS_FN",SEND_FORM_DEFINITION:"HS_SEND_FORM_DEFINITION",SEND_CTA_CONFIG:"HS_SEND_CTA_CONFIG",SEND_EMBED_CONTEXT:"HS_SEND_EMBED_CONTEXT",RECEIVE_FILTERED_STYLESHEETS:"RECEIVE_FILTERED_STYLESHEETS",SEND_STYLESHEETS:"SEND_STYLESHEETS",RENDER_RECAPTCHA:"RENDER_RECAPTCHA",EXECUTE_RECAPTCHA:"EXECUTE_RECAPTCHA",RESET_RECAPTCHA:"RESET_RECAPTCHA",RECAPTCHA_SUCCESS:"RECAPTCHA_SUCCESS",RECAPTCHA_EXPIRED:"RECAPTCHA_EXPIRED",TRIGGER_CTA:"HS_CTA_TRIGGER_CTA",CTA_FORM_SUBMITTED:"HS_CTA_FORM_SUBMITTED"};function s(...e){if(window.location.search.indexOf("hs_debug_interactive")>-1||window.location.host.includes("local.hsappstatic")){console.log("[web-interactives-embed]",...e);window.location.search.indexOf("hs_is_selenium")>-1&&console.log(...[...e].map(e=>JSON.stringify(e)))}}class r{constructor(){this.listeners=new Map}on(e,t){if(!this.listeners.has(e)){this.listeners.set(e,[t]);return}const i=this.listeners.get(e);this.listeners.set(e,[...i,t])}off(e){this.listeners.delete(e)}emit(e,t){const i=this.listeners.get(e);i&&i.length&&i.forEach(e=>e(t))}reset(){this.listeners=new Map}}function o(){return new r}const a=(...e)=>{s("[GlobalIframeCommunication]",...e)};class l{constructor(){this.iframeCommunicators=new Map;this.eventEmitter=o();this.reset=()=>{this.eventEmitter.reset();this.iframeCommunicators=new Map}}registerHandler(e,t){this.eventEmitter.on(e,t)}registerHandlers(e){a("Registering handlers",e);Object.keys(e).forEach(t=>{const i=t,n=e[i];n&&this.registerHandler(i,n)})}registerCommunicator(e,t){a("Registering communicator",t);const i=this.iframeCommunicators.get(t)||[];this.iframeCommunicators.set(t,[...i,e])}removeCommunicator(e){a("Removing Iframe Communicator from GlobalCommunication: ",e);this.iframeCommunicators.delete(e)}emit(e,t){a("Emitting event",{event:e,messagePayload:t});this.eventEmitter.emit(e,t)}broadcast(e,t){const i=this.iframeCommunicators.get(e);if(i){a("Broadcasting",i);i.forEach(e=>{e.sendMessage(t)})}else a("Cannot find communcators array, not broadcasting",e,t)}broadcastAll(e){a("Broadcasting",e,"to all",this.iframeCommunicators);for(const[t,i]of this.iframeCommunicators)this.broadcast(t,e)}}new l;class c{constructor(e,t){this.listeners=new Set;this.batching=!1;this.queue=[];this.subscribe=e=>{this.listeners.add(e);let t=()=>{};this.options&&this.options.onSubscribe&&(t=this.options.onSubscribe(e,this));return()=>{this.listeners.delete(e);t()}};this.setState=e=>{const t=this.state;this.options&&this.options.updateFn?this.state=this.options.updateFn(t)(e):this.state=e(t);if(this.state!==t){this.queue.push(()=>{this.listeners.forEach(e=>e(this.state,t));this.options&&this.options.onUpdate&&this.options.onUpdate(this.state,t)});this._flush()}};this._flush=()=>{if(!this.batching){this.queue.forEach(e=>e());this.queue=[]}};this.batch=e=>{this.batching=!0;e();this.batching=!1;this._flush()};this.state=e;this.options=t}}class h{constructor(){this.storage=[]}enqueue(e){this.storage.push(e)}dequeue(){return this.storage.shift()}peek(){return this.storage[0]}size(){return this.storage.length}}function d(){return new h}const p="addIdentityListener";class u{constructor({applicationController:e}){this.trackerCallbacks=d();this.identityListenerCallbacks=d();this.parentAnalytics=null;this.handleAnalyticsRecieved=e=>{this.parentAnalytics=e;this.flushQueues()};this.handlePushToHSQ=e=>{if("function"!=typeof e){Array.isArray(e)&&(e[0]===p&&"function"==typeof e[1]?this.identityListenerCallbacks.enqueue(e[1]):this.applicationController.sendMessage({type:n.PROXY_ANALYTICS,payload:{analytics:e}}));this.parentAnalytics&&this.flushQueues()}else this.trackerCallbacks.enqueue(e)};window._hsq=window._hsq||[];this.applicationController=e;this.registerAnalyticsHandler();this.proxyHsq()}registerAnalyticsHandler(){this.applicationController.registerHandler(n.RECEIVED_ANALYTICS,this.handleAnalyticsRecieved)}flushQueues(){if(this.parentAnalytics){do{const e=this.trackerCallbacks.dequeue();e&&e(this.tracker)}while(this.trackerCallbacks.peek());do{const e=this.identityListenerCallbacks.dequeue();e&&e(this.parentAnalytics.hstc,this.parentAnalytics.hssc,this.parentAnalytics.hsfp)}while(this.identityListenerCallbacks.peek())}}get tracker(){return this.parentAnalytics?{path:this.parentAnalytics.path,referrerPath:this.parentAnalytics.referrerPath,utk:{visitor:this.parentAnalytics.hutk,get:()=>this.parentAnalytics.hutk},pageId:this.parentAnalytics.pageId,_getFingerprint:()=>this.parentAnalytics.hsfp,canonicalUrl:this.parentAnalytics.canonicalUrl,contentType:this.parentAnalytics.contentType,session:{get:()=>this.parentAnalytics.hssc}}:null}proxyHsq(){window._hsq.push=this.handlePushToHSQ;window._hsq.forEach(this.handlePushToHSQ)}}function m(e){window.open(e,"_blank","noopener")}function g(e){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}const C="data-container-navigation-controller";function y(){return Array.from(document.getElementsByTagName("a"))}function E(e){let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol||"tel:"===t.protocol||"mailto:"===t.protocol}class f{constructor({applicationController:e}){this.overrideAnchorTags=()=>{new MutationObserver(()=>{y().forEach(e=>{if(!e.hasAttribute(C)){e.setAttribute(C,"true");e.addEventListener("click",this.handleAnchorClick)}})}).observe(document.body,{childList:!0,subtree:!0});y().forEach(e=>{e.setAttribute(C,"true");e.addEventListener("click",this.handleAnchorClick)})};this.handleAnchorClick=e=>{e.preventDefault();if(!e.target)return;const t=e.currentTarget,i=E(t.href);this.applicationController.onLinkClick(t);if(!i)return;const n="_blank"===t.target||"blank"===t.target;this.navigatePage(t.href,n)};this.applicationController=e;g(this.overrideAnchorTags)}navigatePage(e,t=!1){t&&m(e);this.applicationController.sendMessage({type:n.NAVIGATE_PAGE,payload:{url:e,openNewTab:t}})}}function S(e){new ResizeObserver(e).observe(document.body)}class _{constructor({applicationController:e}){this.listenForResize=()=>{S(()=>this.handleResize())};this.getNewHeight=()=>document.body.scrollHeight;this.handleResize=(e=this.getNewHeight())=>{this.applicationController.sendMessage({type:n.NEW_HEIGHT,payload:{height:e}})};this.applicationController=e;g(this.listenForResize)}}const T="web-interactives-external-style";class A{constructor({applicationController:e}){this.handleExtractedStyles=({extractedStyles:e})=>{let t="";for(const[i,n]of Object.entries(e.rules)){t+=i+" { ";for(const[e,i]of Object.entries(n))t+=`${e}: ${i}; `;t+="} "}for(const[i,n]of Object.entries(e.keyframes)){t+=`@keyframes ${i} { `;for(const e of n){t+=e.keyText+" { ";for(const[i,n]of Object.entries(e.style))t+=`${i}: ${n}; `;t+="} "}t+="} "}this.styleElement.innerHTML=t};this.applicationController=e;this.styleElement=document.getElementById(T)||document.createElement("style");this.styleElement.id=T;this.registerExternalStylesHandler();g(()=>{document.head.appendChild(this.styleElement)})}registerExternalStylesHandler(){this.applicationController.registerHandler(n.SEND_EXTRACTED_STYLES,this.handleExtractedStyles)}}class b{constructor({ContainerResizeControllerClass:e=_}={}){this.queue=d();this.gates=[];this.gatesHydrated=!1;this.gatedCallbackQueue=[];this.eventEmitter=o();this.initPort=e=>{if(e.data.type===n.INIT){this.port=e.ports[0];this.port.onmessage=this.handleMessage;window.removeEventListener("message",this.initPort);this.flushQueue()}};this.handleMessage=e=>{const t=e.data;this.receivedMessage(t);this.eventEmitter.emit(t.type,t.payload)};this.handleIfUngated=(e,t)=>{const i=()=>{this.isUngatedFor(e)&&t()};this.gatesHydrated?i():this.gatedCallbackQueue.push(i)};this.isUngatedFor=e=>this.gates.includes(e);this.listenForPort();this.setRegisterHandlers();this.analyticsController=new u({applicationController:this});this.navigationController=new f({applicationController:this});this.resizeController=new e({applicationController:this});this.externalStylesController=new A({applicationController:this})}listenForPort(){window.addEventListener("message",this.initPort)}setGates(e=[]){this.gates=e;this.gatesHydrated=!0;this.gatedCallbackQueue.forEach(e=>e())}sendMessage(e){this.port?this.port.postMessage(e):this.queue.enqueue(e)}fireContainerReady(){this.sendMessage({type:n.STARTED,payload:{}})}navigatePage(e){this.navigationController.navigatePage(e)}setRegisterHandlers(){const e=this.registerMessageHandlers();Object.keys(e).forEach(t=>{const i=t,n=e[i];n&&this.registerHandler(i,n)})}flushQueue(){do{const e=this.queue.dequeue();e&&this.sendMessage(e)}while(this.queue.peek())}registerHandler(e,t){this.eventEmitter.on(e,t)}receivedMessage(e){}registerMessageHandlers(){return{}}onLinkClick(e){}}const I="hubspotutk",w="__hstc",v="__hssc",F=e=>{const t=document.cookie.match(`(^|[^;]+)\\s*${e}\\s*=\\s*([^;]+)`);return t?t.pop():""},H=()=>F(I),R=()=>F(w),N=()=>F(v),k=(...e)=>{s("[models/Analytics]",...e)};class L{constructor(){this._handleFetchSucceded=e=>{this.store.setState(t=>{const i={};i.path=e.path;i.referrerPath=e.referrerPath;i.referrer="";i.analyticsPageId=e.pageId;i.hsfp=e._getFingerprint();i.canonicalUrl=e.canonicalUrl;i.contentType=e.contentType;i.pageId=L.getPageId()||e.pageId;e.session&&(i.hssc=e.session.get());if(e.utk){i.hstc=e.utk.get();i.hutk=e.utk.visitor}return Object.assign({},t,i,{isLoaded:!0})})};window._hsq=window._hsq||[];const e={isLoaded:!1,pageUrl:window.location.href,pageTitle:window.document.title,referrer:window.document.referrer,userAgent:window.navigator.userAgent,hutk:H(),hssc:N(),hstc:R(),pageId:L.getPageId()};this.store=new c(e);this.fetchAnalytics()}fetchAnalytics(){this._analyticsQueue.push(this._handleFetchSucceded)}subscribe(e){return this.store.subscribe(e)}get analytics(){return this.store.state}track(e){k("Tracking analytics",e);this._analyticsQueue.push(e)}get _analyticsQueue(){return window._hsq}static getPageId(){const e=window.hsVars;return e&&e.analytics_page_id?e.analytics_page_id:e&&e.page_id?e.page_id:null}static getLanguage(){const e=window.hsVars;return e&&e.language?e.language:null}}new L;function P(e){const t=t=>{"Escape"===t.key&&e()};document.addEventListener("keydown",t);return()=>{document.removeEventListener("keydown",t)}}const O=(...e)=>{s("[clipboardUtils]",...e)};function M(e){return new Promise((t,i)=>{if(navigator.clipboard)navigator.clipboard.writeText(e).then(()=>{O("Text successfully copied to clipboard");t()}).catch(e=>{O("Error copying text to clipboard:",e);i(e)});else{O("Not supported on browser");i(new Error("Clipboard API not available"))}})}const x=e=>null===e,D=e=>void 0===e,U=e=>"object"==typeof e,q=e=>"string"==typeof e,V=e=>U(e)&&0===Object.keys(e).length,Y=e=>q(e)&&0===e.trim().length,B=e=>x(e)||D(e)||Y(e)||V(e),G="interactive-close-button";function W(){return document.getElementById(G)}function $(){try{return Array.from(document.querySelectorAll("a[href*='closeInteractive()'"))}catch(e){return[]}}class j{constructor({applicationController:e}){this.listenForCloseClick=()=>{const e=W();e&&e.addEventListener("click",()=>{this.applicationController.closeCTA()});$().forEach(e=>{e.addEventListener("click",()=>{this.applicationController.closeCTA()})})};this.applicationController=e;g(this.listenForCloseClick)}}const z={ON_FORM_SUBMITTED:"onFormSubmitted",ON_FORM_SUBMIT:"onFormSubmit",ON_FORM_READY:"onFormReady"},Q="0-91";class X{constructor({applicationController:e}){this.analyticsForForm={};this.callToActionId="";this.handleReceiveAnalytics=e=>{this.analyticsForForm=["hutk","canonicalUrl","contentType","pageId","path","referrerPath","referrer","pageUrl","pageTitle","userAgent"].reduce((t,i)=>e[i]&&!B(e[i])?Object.assign({},t,{[i]:e[i]}):t,{})};this.handleFormReady=()=>{this.applicationController.fireContainerReady()};this.handlePresubmit=()=>{this.setFormContext()};this.handleFormSubmit=(e,{redirectUrl:t,submissionValues:i})=>{this.applicationController.sendMessage({type:n.CTA_FORM_SUBMITTED,payload:{formId:this.getFormId(),submissionValues:i}});t&&this.applicationController.navigatePage(t)};this.applicationController=e;this.listenForForm();this.listenForConfig()}listenForForm(){const e=window.HubSpotForms.getForms()[0];this.formInstance=e;this.registerFormInstanceEvents();this.listenForAnalytics()}listenForAnalytics(){this.applicationController.registerHandler(n.RECEIVED_ANALYTICS,this.handleReceiveAnalytics)}listenForConfig(){this.applicationController.registerHandler(n.SEND_CTA_CONFIG,({webInteractiveId:e,portalId:t,pageUrl:i,pageTitle:n,pageId:s})=>{this.setCallToActionId(e,t);i&&!this.analyticsForForm.pageUrl&&(this.analyticsForForm.pageUrl=i);n&&!this.analyticsForForm.pageTitle&&(this.analyticsForForm.pageTitle=n);s&&!this.analyticsForForm.pageId&&(this.analyticsForForm.pageId=s)})}setCallToActionId(e,t){this.callToActionId=`${t}-${Q}-${e}`}registerFormInstanceEvents(){if(this.formInstance){this.formInstance.on(z.ON_FORM_READY,this.handleFormReady);this.formInstance.on(z.ON_FORM_SUBMITTED,this.handleFormSubmit);this.formInstance.on(z.ON_FORM_SUBMIT,this.handlePresubmit)}}setFormContext(){const e=this.callToActionId;this.formInstance.setContext(Object.assign({},this.formInstance.getContext(),this.analyticsForForm,{extraSubmissionMetadata:{callToActionId:e},getExtraMetaDataBeforeSubmit:()=>({callToActionId:e})}))}getFormId(){return this.formInstance?this.formInstance.id:""}}function K(e,t){if(!e||!e.parentElement)return null;const i=document.createElement(t);Array.from(e.attributes).forEach(e=>{i.setAttribute(e.name,e.value)});i.innerHTML=e.innerHTML;e.parentElement.replaceChild(i,e);return i}const J=(...e)=>{s("[ContainerVideoController",...e)};class Z{constructor({applicationController:e}){this.updateHubspotPlayerContainerStyles=()=>{const e=document.querySelector(".hs-video-container"),t=document.querySelector(".hs-video-wrapper"),i=document.querySelector(".hs-video-wrapper iframe");if(!t||!i)return;this.videoFrame=i;this.videoWrapper=t;let n=Number(i.dataset.hsvHeight),s=Number(i.dataset.hsvWidth);const r=e.style.maxWidth;let o=this.determineMaxWidthContainer(t);if(r){const e=Number(r.replace("px",""));o=o?Math.min(o,e):e}s=s?Math.min(o,s):o;n=n||this.determineHeightFromWidth(s);e.style.margin="0";t.style.height="100%";t.style.paddingBottom="0px";i.style.position="static";s&&(i.style.width=s+"px");n&&(i.style.height=n+"px")};this.determineMaxWidthContainer=e=>{let t=e,i=0;for(;t&&!i;){t.clientWidth&&(i=t.clientWidth);t=t.parentElement}return i};this.determineHeightFromWidth=e=>{const t=this.videoWrapper.style.paddingBottom;if(t){return e*(Number(t.replace("%",""))/100)}return 0};this.updateOembedPlayerContainerStyles=()=>{const e=document.createElement("style"),t=document.querySelector(".oembed_container, .embed_container");if(!t)return;t.classList.add("with-alignment","hs-video-dimension-override");const i=t.querySelector(".iframe_wrapper"),n=i.querySelector("iframe");n&&(this.videoFrame=n);const s=Number(n.height)/Number(n.width);let r,o,a=this.determineMaxWidthContainer(t.parentElement);const l=a*s;if(t.classList.contains("oembed_container--full-size")){r=l;o=a}else{const e=i.dataset.maxHeight||i.dataset.height||n.height;r=e?Number(e):0;const l=i.dataset.maxWidth||i.dataset.width||n.width;o=l?Number(l):0;const c=t.style.maxWidth,h=t.style.maxHeight;if(c&&h){const e=Number(c.replace("px",""));a=a?Math.min(a,e):e;o=o?Math.min(a,Number(o)):a;r=o*s}o=o?Math.min(a,Number(o)):a}let c="";o&&(c=`width: ${o}px!important;`);r&&(c=`${c}height:${r}px!important;`);e.innerHTML=`\n      .oembed_custom-thumbnail {\n        ${c};\n        padding-bottom: 0px !important;\n        padding-top: 0px !important;\n      }\n      .hs-video-dimension-override .iframe_wrapper {\n        padding-bottom: 0px !important;\n        padding-top: 0px !important;\n        max-width: 100%!important;\n        ${c}\n      }\n      .hs-video-dimension-override iframe {\n        ${c}\n        padding-bottom: 0px !important;\n        padding-top: 0px !important;\n        max-width: 100%!important\n      }\n    `;document.head.appendChild(e)};this.handleClose=()=>{if(window.hsVideoApi&&"function"==typeof window.hsVideoApi.pauseAllPlayers)window.hsVideoApi.pauseAllPlayers();else if(this.videoFrame){const e=K(this.videoFrame,"div");this.videoFrame=e}};this.handleShowing=()=>{if(this.videoFrame&&"DIV"===this.videoFrame.tagName){const e=K(this.videoFrame,"iframe");this.videoFrame=e}};this.applicationController=e;this.listenForCloseEvent();this.listenForShowingEvent();g(()=>{if(this.needsStyleUpdate()){J("Using flex styling, so need to override relative styling for video");this.listenForVideoPlayer();this.updateOembedPlayerContainerStyles()}else J("No need to override relative styling for video");this.isHubspotVideo()||this.setOEmbedElements()})}needsStyleUpdate(){const e=1e3;let t=0;const i=document.querySelector(".oembed_container, .embed_container, .hs-video-wrapper");if(!i)return!1;let n=i;for(;n&&t<e;){if(n.className.split(" ").some(e=>e.includes("-flexbox-positioning")))return!0;n=n.parentElement;t++}return!1}listenForCloseEvent(){this.applicationController.registerHandler(n.HAS_CLOSED,this.handleClose)}listenForShowingEvent(){this.applicationController.registerHandler(n.SHOWING_CTA,this.handleShowing)}listenForVideoPlayer(){window._hsVideoReady=window._hsVideoReady||[];window._hsVideoReady.push(this.updateHubspotPlayerContainerStyles)}setOEmbedElements(){if(this.videoFrame)return;const e=document.querySelector(".oembed_container, .embed_container");if(!e)return;const t=e.querySelector(".iframe_wrapper").querySelector("iframe");t&&(this.videoFrame=t)}isHubspotVideo(){return Boolean(window.hsVideoApi)}}class ee{constructor({applicationController:e}){this.handleClose=()=>{document.querySelectorAll("audio").forEach(e=>{e.pause()})};this.applicationController=e;this.listenForCloseEvent()}listenForCloseEvent(){this.applicationController.registerHandler(n.HAS_CLOSED,this.handleClose)}}var te="  @media (max-width: 767px) {\n    .row-depth-1 .row-fluid {\n      width: 100%;\n      flex-direction: column!important;\n    }\n\n    .row-depth-1 .row-fluid > .dnd-column {\n      width: 100%;\n      margin-left: 0;\n    }\n\n    .row-depth-1 .row-fluid > .dnd-column + .dnd-column {\n      margin-top: 10px!important;\n    }\n  }\n";const ie=(...e)=>{s("[ContainerVideoController",...e)};class ne{constructor({applicationController:e,handleResize:t}){this.handleSendStylesheets=()=>{const e={media:te};ie("Sending stylesheets",e);this.applicationController.sendMessage({type:n.SEND_STYLESHEETS,payload:{stylesheetsHtml:e}})};this.handleReceiveUpdatedStylesheets=e=>{ie("Stylesheets updated",e);Object.keys(this.initialStylesheets).forEach(t=>{const i=document.querySelector(`style[data-hs-id="${t}"]`);i&&(i.innerHTML=e.stylesheets[t]||this.initialStylesheets[t])});const t=document.querySelector(".hs-web-interactive");t?this.handleResize(Math.max(document.body.scrollHeight,Math.ceil(t.getBoundingClientRect().height))):this.handleResize()};this.applicationController=e;this.initialStylesheets={media:""};this.createMediaQueryStyle();this.handleResize=t;this.listenForStylesheetUpdates()}init(){g(this.handleSendStylesheets)}listenForStylesheetUpdates(){this.applicationController.registerHandler(n.RECEIVE_FILTERED_STYLESHEETS,this.handleReceiveUpdatedStylesheets)}createMediaQueryStyle(){ie("Adding media query stylesheet");const e=document.createElement("style");e.dataset.hsId="media";document.head.appendChild(e)}}class se extends _{constructor({applicationController:e}){super({applicationController:e});this.getNewHeight=()=>{let e=document.body.scrollHeight;const t=document.querySelector(".hs-web-interactive");t&&(e=Math.max(e,t.scrollHeight,Math.ceil(t.getBoundingClientRect().height)));return e};this.applicationController=e;const t=window.location.search.indexOf("enableResponsiveStyles")>-1;this.stylesheetSyncer=new ne({applicationController:this.applicationController,handleResize:this.handleResize});t&&this.stylesheetSyncer.init();this.listenForConfigs()}listenForConfigs(){this.applicationController.registerHandler(n.SEND_CTA_CONFIG,e=>{se.isCtaResponsive(e)&&this.stylesheetSyncer.init();se.shouldSetBodyDimensions(e)&&this.setBodyDimensions(e);this.hideScrollbar(e)})}hideScrollbar(e){if(e&&e.gates&&e.containerStyles&&e.containerStyles.scaleHeightToFitContent){const e=document.createElement("style");e.id="web-interactives-scroll-hide";e.innerHTML="body::-webkit-scrollbar{ display: none; }.body-wrapper::-webkit-scrollbar{ display: none; }";document.head.appendChild(e)}}setBodyDimensions(e){const t=e.containerStyles.height.value,i=e.containerStyles.width.value;if(window.frameElement){const e=getComputedStyle(window.frameElement);document.body.style.minHeight=`calc(${t}px - ${e.borderBottomWidth} - ${e.borderTopWidth})`;document.body.style.minWidth=`calc(${i}px - ${e.borderLeftWidth} - ${e.borderRightWidth})`}else{document.body.style.minHeight=t+"px";document.body.style.minWidth=i+"px"}}static isCtaResponsive(e){return Boolean(e&&e.containerStyles&&e.containerStyles.useResponsiveStyling)}static shouldSetBodyDimensions(e){return!!(e&&e.containerStyles&&e.gates)&&!e.containerStyles.scaleHeightToFitContent}}class re{constructor({handleClose:e}){this.listenForClose=()=>{P(this.handleClose)};this.handleClose=e;this.listenForClose()}}const oe=(...e)=>{s("[populateLinksWithTrackingParams]",...e)},ae=["currentUrl","referrer","canon","canonicalUrl","pageUrl","contentType","encryptedPayload","pageId","analyticsPageId","hutk","hstc","hssc","hsfp","utk","containerType","webInteractiveId","webInteractiveContentId","audienceId","campaignGuid","campaignId","userAgent","timeStarted","timeFinished","redirectUrl","skip","includeInitial","pageTitle","contentGroupId","portalId"],le=`https://${(new Date).getTime()}-dummy.com`,ce=(e,t)=>{let i,n=!1;try{i=new URL(e)}catch(t){oe("[populateLinksWithTrackingParams]","Checking for relative URL",e);n=!0}if(n)try{i=new URL(`${le}${e.startsWith("/"),""}${e}`)}catch(t){oe("Could not parse url for link",t);return e}Object.entries(t).forEach(([e,t])=>{ae.includes(e)?null!=t&&i.searchParams.set(e,String(t)):oe("Invalid analytics parameter passed",e)});const s=i.href;return n?s.replace(le,""):s};var he=(e,t=[...document.querySelectorAll(".hs-web-interactive a")])=>{t.length&&t.forEach(t=>{const i=t.getAttribute("href");i&&!i.startsWith("javascript")&&t.setAttribute("href",ce(i,e))})};function de(){return Boolean(window.HubSpotForms)}class pe extends b{constructor(){super({ContainerResizeControllerClass:se});this.shouldPopulateLinks=!0;this.closeCTA=()=>{this.sendMessage({type:n.CLOSE_INTERACTIVE,payload:{}})};this.overrideBodyHeight=()=>{document.body.style.height="fit-content"};this.closeButtonController=new j({applicationController:this});g(()=>{this.setupForms();this.overrideBodyHeight()});this.listenForConfigs();this.listenForAnalytics();this.keyPressController=new re({handleClose:this.closeCTA});this.ContainerVideoController=new Z({applicationController:this});this.containerAudioController=new ee({applicationController:this})}triggerClickCTA(e){this.sendMessage({type:n.TRIGGER_CTA,payload:{triggerCTA:e}})}listenForConfigs(){this.registerHandler(n.SEND_CTA_CONFIG,e=>{this.setGates(e.gates);e.shouldUseJsTracking?this.shouldPopulateLinks=!1:he({webInteractiveId:e.webInteractiveId,webInteractiveContentId:e.contentModelId,audienceId:e.audienceId,containerType:e.containerType,campaignId:e.campaignGuid,pageUrl:e.pageUrl,portalId:e.portalId},[...document.querySelectorAll("a")])})}listenForAnalytics(){this.registerHandler(n.RECEIVED_ANALYTICS,e=>{this.shouldPopulateLinks&&he(e)})}setupForms(){de()?this.containerFormController=new X({applicationController:this}):this.fireContainerReady()}onLinkClick(e){e.dataset.ctaTrigger&&this.triggerClickCTA(parseInt(e.dataset.ctaTrigger,10));if(e.dataset.clickCopyValue)M(e.dataset.clickCopyValue);else if(e.parentNode&&e.parentNode.parentNode){const t=e.parentNode.parentNode;t&&t instanceof HTMLElement&&t.dataset.ctaTrigger&&this.triggerClickCTA(parseInt(t.dataset.ctaTrigger,10))}}}function ue(){return new pe}ue()}]);