!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";var e=function(n){var e,o=[],t=window.document,c=t.documentElement,r=c.doScroll,a="DOMContentLoaded",i="addEventListener",d="onreadystatechange",u="readyState",s=(r?/^loaded|^c/:/^loaded|c/).test(t[u]);function f(e){for(s=1,e=o.shift();e;)e(),e=o.shift()}return t[i]&&t[i](a,e=function(){t.removeEventListener(a,e,!1),f()},!1),r&&t.attachEvent(d,e=function(){/^c/.test(t[u])&&(t.detachEvent(d,e),f())}),n=r?function(t){self!=top?s?t():o.push(t):function(){try{c.doScroll("left")}catch(e){return setTimeout(function(){n(t)},50)}t()}()}:function(e){s?e():o.push(e)}}();function o(e,t){var n=document.createElement("script");n.type="text/javascript",n.setAttribute("data-cfasync",!1),n.charset="UTF-8",n.async=!0,n.defer=!0,n.src=e,t&&(n.onload=t);var o=document.getElementsByTagName("script");0<o.length?o[0].parentNode.insertBefore(n,o[0]):document.head.appendChild(n)}function c(){switch("production".toLowerCase()){case"local":return"http://localhost:8887/";case"development":return window.location.protocol+"//cdn-dev.userty.com/libs/latest/";case"production":return window.location.protocol+"//cdn.userty.com/libs/latest/";default:return""}}!function(e){var baseConfig={},feedbackConfig={},recordConfig={},ruleengineConfig={},behaviorConfig={};baseConfig.enabled=!0,feedbackConfig.enabled=!0,recordConfig.enabled=!0,ruleengineConfig.enabled=!0,behaviorConfig.enabled=!0,
baseConfig={"enabled": true,"siteid": "118-httpscrederacom","siteToken": "ac5ff6fb36ed1cb01bd5fae7a99c6df4","browser_cutoff":{"IE":9,"Safari":5.1,"Firefox":11,"Chrome":20,"Chrome Mobile":20,"Opera":1000},"platform_cutoff":{"Android":4.1,"Winphone":8,"iPod":7,"iPhone":7,"iPad":7}};
feedbackConfig={"siteid":"118-httpscrederacom","instances":[{"icon":"aspark100.png","delay":0,"template":"default","label":"Feedback","fblocation":"middleright","popup":false,"fbtype":"badge","disabled":true,"fbanimate":false,"fbfixed":false,"fbdirection":"horizontal","saved":"","topics":[{"order":0,"id":"628","answerId":"LOC0012580A001","whitelistActive":false,"whitelistData":"","topicText":"New Question Group 1"}],"backgroundColor":"#81AAF0","fontColor":"#FFFFFF","triggerbehavior":"I","brand":"show","triggerdelayseconds":"10","triggerhalfwaydownpage":false,"targetingdevicedesktop":true,"targetingdevicemobile":true,"triggerpagefilter":"A","filterpages":[""],"filterpagesInclude":[""],"targetingcap":"100","popupDelayEnabled":false,"popupDelaySeconds":"30","specificFormEnable":false,"feedbackThrottles":{"cookie":"auryc.fbt","abandoned":7,"submitted":90,"sampling":100},"version":2,"mid":"2kyKIMkZA6htA2QTYzWlOR63nmZSu6ag","projectId":432,"datauri":"https://feedback-api.auryc.com/view/feedback-json","posturi":"https://feedback-api.auryc.com/submit-feedback"},{"backgroundColor":"#A3232A","fontColor":"#FFFFFF","triggerbehavior":"I","brand":"show","triggerdelayseconds":"10","triggerhalfwaydownpage":false,"targetingdevicedesktop":true,"targetingdevicemobile":true,"triggerpagefilter":"A","filterpages":[""],"filterpagesInclude":[""],"fbdirection":"vertical","targetingcap":"100","popupDelayEnabled":true,"popupDelaySeconds":"60","specificFormEnable":false,"surveyThrottles":{"cookie":"auryc.fbt","abandoned":7,"submitted":90,"sampling":100},"projectId":423,"icon":"aspark100.png","delay":0,"template":"default","label":"Feedback","fblocation":"middleright","popup":false,"fbtype":"badge","disabled":true,"fbanimate":false,"fbfixed":false,"saved":"","topics":[{"order":0,"id":"619","answerId":"MOR0012526A001","whitelistActive":false,"whitelistData":"","topicText":"General Feedback"}],"feedbackThrottles":{"cookie":"auryc.fbt","abandoned":7,"submitted":90,"sampling":100},"version":4,"mid":"7AoAgKdybaZkRrZ8NiuFuiDrLl6UAQuK","datauri":"https://feedback-api.auryc.com/view/feedback-json","posturi":"https://feedback-api.auryc.com/submit-feedback"}]};
recordConfig={"enabled":true,"throttles":{"sampling":100},"filters":{},"layout":"CENTERFIXED","exclude":{"urls":[],"referrers":[],"userAgents":[],"browsers":[],"cookies":[],"variables":[]},"browser_cutoff":{"IE":9,"Safari":5.1,"Firefox":11,"Chrome":20,"Chrome Mobile":20,"Opera":1000},"platform_cutoff":{"Android":4.1,"Winphone":8,"iPod":7,"iPhone":7,"iPad":7},"device_type_support":{"desktop":true,"phone":true,"tablet":true},"device_blacklist":["HTC_Rezound","blackberry"],"pii":{"staticBlockEls":{},"dynamicBlockEls":{},"staticVisibleEls":{".*":["select","text","textarea","input"]},"dynamicVisibleEls":{".*":["select","text","textarea","input"]},"assetBlockEls":{},"removeVisibilityEls":{},"obscureEls":{}},"svgCaptureEnabled":false,"scrollEls":null,"regexScrub":[],"watchNodeList":"","shortenedDomRewrites":false,"keepComments":false,"keepInputs":true,"useEleMutation":false,"saved":"true","disabled":false};
ruleengineConfig={"siteid":"118-httpscrederacom","creatives":[{"id":1,"template":"signup","display":{"color":"#ffffff"},"content":{"img":"https://s3.amazonaws.com/public-assets.auryc.com/creatives/test/teec.png"},"triggers":{"serialized":"f.pv > 2 and f.pageload"},"goal":{"event":"click","target":"#goal1"}},{"id":2,"template":"fblike","display":{"color":"#ffffff"},"content":{"img":"https://s3.amazonaws.com/public-assets.auryc.com/creatives/test/fblike_teec.jpg"},"triggers":{"serialized":"f.pv > 2 and f.halfwaydown and f.url = 'teammember' "},"goal":{"event":"click","target":"#goal1"}}]};
behaviorConfig={"enabled":true,"siteid":"118-httpscrederacom","autotracking":true,"sessionDuration":1800,"trackingMode":"new","sampling":100, "max":100};window.aurycStartTS=e.performance&&e.performance.timing?e.performance.timing.responseStart:(new Date).getTime();var t={base:baseConfig,feedback:feedbackConfig,record:recordConfig,ruleengine:ruleengineConfig,behavior:behaviorConfig};window.aurycJsLibConfig=t}(window),e(function(){for(var e=["auryc.lib"],t=e.length,n=0;n<t;n++)o(c()+e[n]+".js")})});