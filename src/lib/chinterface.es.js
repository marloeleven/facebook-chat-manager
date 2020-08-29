/* eslint-disable */import tmi from'twitch-js';import axios from'axios';import HtmlEntities from'html-entities';var LOG_INFO='LOG_INFO',LOG_ERROR='LOG_ERROR',MESSAGE='message',URL_REGEX=/^(https?:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?\S*$/,WHISPER='whisper',SKILL='skill',_typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e},asyncToGenerator=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function o(r,a){try{var s=t[r](a),i=s.value}catch(e){return void n(e)}return s.done?void e(i):Promise.resolve(i).then(function(e){o('next',e)},function(e){o('throw',e)})}return o('next')})}},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},createClass=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_extends=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},inherits=function(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e},Helpers=function(){function e(){classCallCheck(this,e)}return e.applyDefaults=function(e,t){return Object.keys(e).forEach(function(n){t[n]=e[n]}),t},e.parseUriData=function(e){var t=!0,n='';return Object.keys(e).forEach(function(o){if(null!==e[o]){var r=t?'?':'&';n+=''+r+o+'='+e[o],t=!1}}),n},e.isBrowser=function(){return'undefined'!=typeof document},e.isObj=function(e){return null!==e&&'object'===('undefined'==typeof e?'undefined':_typeof(e))},e.isFunc=function(e){return null!==e&&'function'==typeof e},e.isString=function(e){return null!==e&&'string'==typeof e},e.prefixZero=function(e){return 10>e?'0'+e:e},e.getBaseUrl=function(){var e=window.location;return e.protocol+'//'+e.host},e}(),Debug=function(){function e(){classCallCheck(this,e)}return e.log=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:LOG_INFO,n=new Date,o=Helpers.prefixZero(n.getDate()),r=Helpers.prefixZero(n.getMonth()+1),a=n.getFullYear(),s=Helpers.prefixZero(n.getHours()),i=Helpers.prefixZero(n.getMinutes()),p=Helpers.prefixZero(n.getSeconds()),c='';t===LOG_ERROR&&(c=' Error');var l='['+(o+'/'+r+'/'+a+' '+s+':'+i+':'+p)+'] Chinterface'+c+': '+e;t===LOG_ERROR?console.error(l):console.log(l)},e}();function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}var runtime=createCommonjsModule(function(e){!function(t){'use strict';function n(e,t,n,o){var a=t&&t.prototype instanceof r?t:r,s=Object.create(a.prototype),i=new m(o||[]);return s._invoke=c(e,n,i),s}function o(e,t,n){try{return{type:'normal',arg:e.call(t,n)}}catch(e){return{type:'throw',arg:e}}}function r(){}function a(){}function s(){}function i(e){['next','throw','return'].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function p(e){function t(n,r,a,s){var i=o(e[n],e,r);if('throw'===i.type)s(i.arg);else{var p=i.arg,c=p.value;return c&&'object'==typeof c&&f.call(c,'__await')?Promise.resolve(c.__await).then(function(e){t('next',e,a,s)},function(e){t('throw',e,a,s)}):Promise.resolve(c).then(function(e){p.value=e,a(p)},s)}}var n;this._invoke=function(e,o){function r(){return new Promise(function(n,r){t(e,o,n,r)})}return n=n?n.then(r,r):r()}}function c(e,t,n){var r=w;return function(a,s){if(r==I)throw new Error('Generator is already running');if(r==S){if('throw'===a)throw s;return y()}for(n.method=a,n.arg=s;;){var i=n.delegate;if(i){var p=l(i,n);if(p){if(p===_)continue;return p}}if('next'===n.method)n.sent=n._sent=n.arg;else if('throw'===n.method){if(r==w)throw r=S,n.arg;n.dispatchException(n.arg)}else'return'===n.method&&n.abrupt('return',n.arg);r=I;var c=o(e,t,n);if('normal'===c.type){if(r=n.done?S:E,c.arg===_)continue;return{value:c.arg,done:n.done}}'throw'===c.type&&(r=S,n.method='throw',n.arg=c.arg)}}}function l(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,'throw'===t.method){if(e.iterator.return&&(t.method='return',t.arg=void 0,l(e,t),'throw'===t.method))return _;t.method='throw',t.arg=new TypeError('The iterator does not provide a \'throw\' method')}return _}var r=o(n,e.iterator,t.arg);if('throw'===r.type)return t.method='throw',t.arg=r.arg,t.delegate=null,_;var a=r.arg;if(!a)return t.method='throw',t.arg=new TypeError('iterator result is not an object'),t.delegate=null,_;if(a.done)t[e.resultName]=a.value,t.next=e.nextLoc,'return'!==t.method&&(t.method='next',t.arg=void 0);else return a;return t.delegate=null,_}function d(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function g(e){var t=e.completion||{};t.type='normal',delete t.arg,e.completion=t}function m(e){this.tryEntries=[{tryLoc:'root'}],e.forEach(d,this),this.reset(!0)}function u(e){if(e){var t=e[x];if(t)return t.call(e);if('function'==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(f.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:y}}function y(){return{value:void 0,done:!0}}var h=Object.prototype,f=h.hasOwnProperty,v='function'==typeof Symbol?Symbol:{},x=v.iterator||'@@iterator',k=v.asyncIterator||'@@asyncIterator',C=v.toStringTag||'@@toStringTag',b=t.regeneratorRuntime;if(b)return void(e.exports=b);b=t.regeneratorRuntime=e.exports,b.wrap=n;var w='suspendedStart',E='suspendedYield',I='executing',S='completed',_={},U={};U[x]=function(){return this};var L=Object.getPrototypeOf,T=L&&L(L(u([])));T&&T!==h&&f.call(T,x)&&(U=T);var R=s.prototype=r.prototype=Object.create(U);a.prototype=R.constructor=s,s.constructor=a,s[C]=a.displayName='GeneratorFunction',b.isGeneratorFunction=function(e){var t='function'==typeof e&&e.constructor;return!!t&&(t===a||'GeneratorFunction'===(t.displayName||t.name))},b.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,s):(e.__proto__=s,!(C in e)&&(e[C]='GeneratorFunction')),e.prototype=Object.create(R),e},b.awrap=function(e){return{__await:e}},i(p.prototype),p.prototype[k]=function(){return this},b.AsyncIterator=p,b.async=function(e,t,o,r){var a=new p(n(e,t,o,r));return b.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},i(R),R[C]='Generator',R[x]=function(){return this},R.toString=function(){return'[object Generator]'},b.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var o=t.pop();if(o in e)return n.value=o,n.done=!1,n}return n.done=!0,n}},b.values=u,m.prototype={constructor:m,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method='next',this.arg=void 0,this.tryEntries.forEach(g),!e)for(var t in this)'t'===t.charAt(0)&&f.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if('throw'===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,o){return a.type='throw',a.arg=e,n.next=t,o&&(n.method='next',n.arg=void 0),!!o}if(this.done)throw e;for(var n=this,o=this.tryEntries.length-1;0<=o;--o){var r=this.tryEntries[o],a=r.completion;if('root'===r.tryLoc)return t('end');if(r.tryLoc<=this.prev){var s=f.call(r,'catchLoc'),i=f.call(r,'finallyLoc');if(s&&i){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);}else if(!i)throw new Error('try statement without catch or finally');else if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}},abrupt:function(e,t){for(var n,o=this.tryEntries.length-1;0<=o;--o)if(n=this.tryEntries[o],n.tryLoc<=this.prev&&f.call(n,'finallyLoc')&&this.prev<n.finallyLoc){var r=n;break}r&&('break'===e||'continue'===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=e,a.arg=t,r?(this.method='next',this.next=r.finallyLoc,_):this.complete(a)},complete:function(e,t){if('throw'===e.type)throw e.arg;return'break'===e.type||'continue'===e.type?this.next=e.arg:'return'===e.type?(this.rval=this.arg=e.arg,this.method='return',this.next='end'):'normal'===e.type&&t&&(this.next=t),_},finish:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if(t=this.tryEntries[n],t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),g(t),_},catch:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if(t=this.tryEntries[n],t.tryLoc===e){var o=t.completion;if('throw'===o.type){var r=o.arg;g(t)}return r}throw new Error('illegal catch attempt')},delegateYield:function(e,t,n){return this.delegate={iterator:u(e),resultName:t,nextLoc:n},'next'===this.method&&(this.arg=void 0),_}}}(function(){return this}()||Function('return this')())}),g=function(){return this}()||Function('return this')(),hadRuntime=g.regeneratorRuntime&&0<=Object.getOwnPropertyNames(g).indexOf('regeneratorRuntime'),oldRuntime=hadRuntime&&g.regeneratorRuntime;g.regeneratorRuntime=void 0;var runtimeModule=runtime;if(hadRuntime)g.regeneratorRuntime=oldRuntime;else try{delete g.regeneratorRuntime}catch(t){g.regeneratorRuntime=void 0}var regenerator=runtimeModule,Interface=function(){function e(){classCallCheck(this,e),this.config={},this.required=[],this.callbacks={},this.connected=!1,this.reconnectCurrentInterval=1e3,this.reconnectDefaultInterval=1e3,this.reconnectMultiplier=1.8,this.reconnectMaxInterval=6e4,this.reconnectAttempt=0}return e.prototype.connect=function(){this.isConnected||this.requiredConfigSet()},e.prototype.disconnect=function(){!this.isConnected},e.prototype.send=function(){return Promise.resolve()},e.prototype.parseMessage=function(){},e.prototype.loadUser=function(){return Promise.resolve()},e.prototype.on=function(e,t){this.callbacks[e]=t},e.prototype.emit=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.callbacks.hasOwnProperty(e)&&this.callbacks[e](t)},e.prototype.destroy=function(e){delete this.callbacks[e]},e.prototype.setConfig=function(){var e=asyncToGenerator(regenerator.mark(function e(t){var n=this,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Helpers.isObj(t)?Object.keys(t).forEach(function(e){n.setConfig(e,t[e])}):this.config[t]=o,e.abrupt('return',this);case 2:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),e.prototype.getConfig=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return null===e?this.config:void 0===this.config[e]||Helpers.isString(this.config[e])&&!this.config[e].length?t:this.config[e]},e.prototype.requiredConfigSet=function(){var e=this;this.required.forEach(function(t){if(!e.getConfig(t))throw new Error('Required config options not set.')})},e.prototype.getName=function(){return'Undefined'},e.prototype.getKey=function(){return'undefined'},e.prototype.hasEmoticons=function(){return!1},e.prototype.hasWriting=function(){return!1},e.prototype.isLive=function(){return!1},e.prototype.increaseReconnect=function(){this.reconnectCurrentInterval>=this.reconnectMaxInterval?this.reconnectCurrentInterval=this.reconnectMaxInterval:this.reconnectCurrentInterval*=this.reconnectMultiplier,this.reconnectAttempt++},e.prototype.resetReconnect=function(){this.reconnectCurrentInterval=this.reconnectDefaultInterval,this.reconnectAttempt=0},e.prototype.filterXSS=function(e){return HtmlEntities.AllHtmlEntities.encode(e)},e.prototype.isValidURL=function(e){var t=new RegExp(URL_REGEX,'gi');return t.test(e)},createClass(e,[{key:'shouldParseEmoticons',get:function(){return this.getConfig('parseEmoticon')}},{key:'shouldParseUrl',get:function(){return this.getConfig('parseUrl')}},{key:'shouldReconnect',get:function(){return this.getConfig('reconnect')}},{key:'isConnected',get:function(){return this.connected}}]),e}(),EMOTICON$1='emoticon',Twitch=function(e){function t(){classCallCheck(this,t);var n=possibleConstructorReturn(this,e.call(this));return n.client=null,n.required=['clientId','channel','userId'],n.setConfig({parseEmoticon:!0,reconnect:!0,formatMessages:!0}),n}return inherits(t,e),t.prototype.connect=function(){var t=this;return e.prototype.connect.call(this),new Promise(function(e){var n=t.getConfig('clientId'),o=t.getConfig('channel'),r=t.getConfig('username'),a=t.getConfig('accessToken'),s={};r&&a&&(s={username:r,password:a}),t.client=new tmi.client({channels:[o],identity:s,options:{clientId:n,debug:!1},connection:{reconnect:t.shouldReconnect,secure:!0}}),t.client.on('connected',function(){t.connected=!0,t.emit('connected'),e()}),t.client.connect()})},t.prototype.disconnect=function(){e.prototype.disconnect.call(this),null!==this.client&&this.client.disconnect(),this.client=null,this.connected=!1},t.prototype.send=function(){var e=asyncToGenerator(regenerator.mark(function e(t){return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.say(this.getConfig('channel'),t);case 2:return e.abrupt('return',e.sent);case 3:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.on=function(t,n){e.prototype.on.call(this,t,n),null!==this.client&&'message'===t&&this.client.on('chat',this.msgEvnt.bind(this))},t.prototype.destroy=function(t){e.prototype.destroy.call(this,t),null!==this.client&&'message'===t&&this.client.removeListener('chat',this.msgEvnt.bind(this))},t.prototype.parseMessage=function(e){var t=e.channel,n=e.user,o=e.message,r=e.self,a=this.getConfig('formatMessages'),s=!1,i=null,p=null;null!==n.emotes&&Object.keys(n.emotes).length&&(i=n.emotes),null!==n.badges&&-1!==Object.keys(n.badges).indexOf('broadcaster')&&'1'===n.badges.broadcaster+''&&(s=!0),p=a&&this.shouldParseEmoticons?this.parseEmoticonsAndUrl(o,n):this.filterXSS(o),this.emit('message',{id:n.id||null,username:n['display-name']||n.username,body:p,raw:o,timestamp:n['tmi-sent-ts']?parseInt(n['tmi-sent-ts'],10):new Date().getTime(),extra:{colour:n.color,badges:n.badges||{},subscriber:n.subscriber,mod:n.mod,turbo:n.turbo,broadcaster:s,emotes:i,"message-type":n['message-type']}})},t.prototype.getEmoticonObject=function(e){var t={};for(var n in e)for(var o=e[n],r=0;r<o.length;r++){var a=o[r].split('-'),s=a[0],i=a[1],p=parseInt(s,10),c=parseInt(i,10);t[p]={key:n,start:p,end:c,type:EMOTICON$1}}return t},t.prototype.getUrlObject=function(e,t,n){for(var o={},r=n.split(','),a=0;a<r.length;a++){var s=r[a].slice(0,-1).split('-'),i=s[0],p=s[1],c=parseInt(i,10),l=parseInt(p,10),d=e.slice(c,l);this.isValidKey(t,c)&&this.isValidURL(d)&&(o[c]={start:c,end:l,type:'url'})}return o},t.prototype.parseEmoticonsAndUrl=function(e,t){var n=this,o=t.emotes,r=t.flags,a={};if(this.shouldParseEmoticons&&o&&Object.assign(a,this.getEmoticonObject(o)),this.shouldParseUrl&&r&&Object.assign(a,this.getUrlObject(e,a,r)),Object.keys(a).length){var s=0,i=[];return Object.keys(a).forEach(function(t){var o=a[t],r=o.key,p=o.end,c=o.type,l=e.substring(s,t),d=e.substring(t,p+1);i.push([].concat(n.parseRawMessage(l),n.parseString(c,d,r))),s=p+1}),i.push(this.parseRawMessage(e.substring(s))),i}return this.parseRawMessage(e)},t.prototype.parseUrl=function(e){return this.isValidURL(e)?'<a href="'+e+' class="link">'+e+'</a>':e},t.prototype.parseEmoticon=function(e){return'<image class="emoticon" src="'+('https://static-cdn.jtvnw.net/emoticons/v1/'+e+'/1.0')+'" alt="Emoticon: '+e+'" />'},t.prototype.parseString=function(e,t,n){return e===EMOTICON$1?this.parseEmoticon(n):this.parseUrl(t)},t.prototype.parseRawMessage=function(e){var t=this;return e.split(' ').map(function(e){return t.isValidURL(e)?t.parseUrl(e):e}).join(' ')},t.prototype.getBadges=function(){var e=asyncToGenerator(regenerator.mark(function e(){var t;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getConfig('userId'),t){e.next=3;break}throw new Error('userId is not set.');case 3:return e.next=5,this.api('get','chat/'+t+'/badges');case 5:return e.abrupt('return',e.sent);case 6:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.loadUser=function(){var e=asyncToGenerator(regenerator.mark(function e(){var t,n,o,r,a,s;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getConfig('accessToken'),t){e.next=3;break}throw new Error('accessToken not set.');case 3:return e.next=5,this.api('get','user');case 5:n=e.sent,o=n.data,r=this.getConfig('channel',o.name),a=this.getConfig('username',o.name),s=this.getConfig('userId',parseInt(o._id,10)),this.setConfig({channel:r,username:a,userId:s});case 11:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.setConfig=function(){var t=asyncToGenerator(regenerator.mark(function t(n){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return regenerator.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.prototype.setConfig.call(this,n,o),this.http=axios.create({baseURL:'https://api.twitch.tv/kraken/',headers:{"Client-ID":this.getConfig('clientId'),Accept:'application/vnd.twitchtv.v5+json',Authorization:'OAuth '+this.getConfig('accessToken')}});case 2:case'end':return t.stop();}},t,this)}));return function(){return t.apply(this,arguments)}}(),t.prototype.getClient=function(){return this.client},t.prototype.getName=function(){return'Twitch'},t.prototype.getKey=function(){return'twitch'},t.prototype.hasEmoticons=function(){return!0},t.prototype.hasWriting=function(){return!0},t.prototype.isLive=function(){return!0},t.prototype.clientOn=function(e,t){return this.client.on(e,t),this},t.prototype.api=function(){var e=asyncToGenerator(regenerator.mark(function e(t,n){var o,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.getConfig('clientId'),o){e.next=3;break}throw new Error('clientId not set.');case 3:return e.next=5,this.http.request({method:t,url:n,data:r});case 5:return e.abrupt('return',e.sent);case 6:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.msgEvnt=function(e,t,n,o){this.parseMessage({channel:e,user:t,message:n,self:o})},t}(Interface),Mixer=function(e){function t(){classCallCheck(this,t);var n=possibleConstructorReturn(this,e.call(this));return n.http=axios.create({baseURL:'https://mixer.com/api/v1/'}),n.canSend=!1,n.endpoints=[],n.activeEndpoint=0,n.required=['channelId'],n.setConfig({parseEmoticon:!0,parseUrl:!0,reconnect:!0,formatMessages:!0}),n}return inherits(t,e),t.prototype.connect=function(){var t=asyncToGenerator(regenerator.mark(function t(){var n,o,r,a,s,i,p;return regenerator.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.prototype.connect.call(this),n=this.getConfig('channelId'),o=this.getConfig('accessToken'),t.next=5,axios.get('https://mixer.com/api/v1/chats/'+n,{headers:{Authorization:'Bearer '+o}});case 5:return r=t.sent,a=r.data,s=a.authkey,i=a.endpoints,this.endpoints=i,s&&this.setConfig('authKey',s),t.next=11,this.getChatServer();case 11:return p=t.sent,t.next=14,this.connectToChat(p);case 14:case'end':return t.stop();}},t,this)}));return function(){return t.apply(this,arguments)}}(),t.prototype.disconnect=function(){var t=asyncToGenerator(regenerator.mark(function t(){return regenerator.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.prototype.disconnect.call(this),null!==this.ws&&this.ws.close();case 2:case'end':return t.stop();}},t,this)}));return function(){return t.apply(this,arguments)}}(),t.prototype.send=function(){var e=asyncToGenerator(regenerator.mark(function e(t){return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if('string'!=typeof t){e.next=6;break}if(this.isConnected){e.next=3;break}throw new Error('Unable to send message. No connection to WebSocket.');case 3:if(this.canSend){e.next=5;break}throw new Error('Unable to send message. userId or authKey is not set.');case 5:t={arguments:[t]};case 6:this.ws.send(JSON.stringify(_extends({id:+new Date,type:'method',method:'msg'},t)));case 7:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.parseMessage=function(e){var t=this,n=e.data,o=this.getConfig('formatMessages'),r=n.id,a=n.user_roles,s=n.user_level,i=n.user_id,p=n.user_avatar,c=n.message,l=n.user_name,d=c.meta,g=null;if(!(d.hasOwnProperty('censored')&&d.censored)){o&&(g=JSON.parse(JSON.stringify(c.message)),g=g.map(function(e){switch(e.type){case'emoticon':if(t.shouldParseEmoticons)return t.parseEmoticon(e);break;case'link':if(t.shouldParseUrl)return t.parseUrl(e);break;case'tag':return t.parseTag(e);case'image':return t.shouldParseSkill&&d.is_skill?t.parseSkill(e,d):t.shouldParseImage?t.parseImage(e):e.text;default:return t.filterXSS(e.text);}return e.text}),g=g.join(''));var m={username:l,id:r,body:g,raw:c.message,timestamp:new Date().getTime(),extra:{user_roles:a,user_level:s,user_id:i,user_avatar:p}};return d.is_skill&&Object.assign(m.extra,{type:SKILL,cost:d.skill.cost}),d.hasOwnProperty(WHISPER)&&d.whisper?void this.emit(WHISPER,m):void this.emit(MESSAGE,m)}},t.prototype.setWebSocket=function(){var e=asyncToGenerator(regenerator.mark(function e(t){return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.websocket=t,e.abrupt('return',this);case 2:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.connectToChat=function(){var e=asyncToGenerator(regenerator.mark(function e(t){var n,o,r,a=this;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.ws=new this.websocket(t)||new WebSocket(t),this.ws){e.next=3;break}throw new Error('WebSocket not defined.');case 3:n=[this.getConfig('channelId')],o=this.getConfig('userId'),r=this.getConfig('authKey'),o&&r&&(n.push(o),n.push(r),this.canSend=!0),this.ws.onopen=function(){a.connected=!0,a.emit('connected'),a.resetReconnect(),a.send({method:'auth',arguments:n})},this.ws.onmessage=this.msgEvent.bind(this),this.ws.onerror=function(){var e=asyncToGenerator(regenerator.mark(function t(n){var e;return regenerator.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.canSend=!1,!a.shouldReconnect){t.next=8;break}return a.increaseReconnect(),a.emit('reconnect',a.reconnectAttempt),t.next=6,a.getChatServer();case 6:return e=t.sent,t.abrupt('return',setTimeout(asyncToGenerator(regenerator.mark(function t(){return regenerator.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.connectToChat(e);case 2:return t.abrupt('return',t.sent);case 3:case'end':return t.stop();}},t,a)})),a.reconnectCurrentInterval));case 8:a.emit('error',n);case 9:case'end':return t.stop();}},t,a)}));return function(){return e.apply(this,arguments)}}(),this.ws.onclose=function(){a.canSend=!1,a.emit('disconnected')};case 11:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.loadUser=function(){var e=asyncToGenerator(regenerator.mark(function e(){var t,n,o,r,a;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getConfig('username'),t){e.next=3;break}throw new Error('username not set.');case 3:return e.next=5,this.api('get','channels/'+t+'?fields=id,userId');case 5:n=e.sent,o=n.data,r=this.getConfig('channelId',o.id),a=this.getConfig('userId',o.userId),this.setConfig({channelId:r,userId:a});case 10:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.getChatServer=function(){var e=asyncToGenerator(regenerator.mark(function e(){var t,n;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.endpoints,n=t[this.activeEndpoint],this.activeEndpoint++,this.activeEndpoint===t.length&&(this.activeEndpoint=0),e.abrupt('return',n);case 5:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.getName=function(){return'Mixer'},t.prototype.getKey=function(){return'mixer'},t.prototype.hasEmoticons=function(){return!0},t.prototype.hasWriting=function(){return!0},t.prototype.isLive=function(){return!0},t.prototype.api=function(){var e=asyncToGenerator(regenerator.mark(function e(t,n){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.request({method:t,url:n,data:o});case 2:return e.abrupt('return',e.sent);case 3:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.msgEvent=function(e){var t=e.data;if(t=JSON.parse(t),t.originatingChannel&&t.username)return t.roles?void this.emit('user-join',{id:t.id,username:t.username,roles:t.roles}):void this.emit('user-leave',{id:t.id,username:t.username});switch(t.event){case'ChatMessage':this.parseMessage(t);break;case'DeleteMessage':this.emit('delete-message',t.data.id);break;case'PurgeMessage':this.emit('purge-message',t.data.user_id);break;case'ClearMessages':this.emit('clear-messages');break;case'UserTimeout':this.emit('user-timeout',{user:{id:t.data.user.user_id,username:t.data.user.user_name},duration:t.data.duration});break;case'UserUpdate':this.emit('user-update',{id:t.data.user,username:t.data.username,roles:t.data.roles});break;default:}},t.prototype.parseEmoticon=function(e){var t=(e.text||'').replace(/</g,'&lt;').replace(/>/g,'&gt;'),n=e.pack;return'builtin'===e.source&&(n='https://mixer.com/_latest/assets/emoticons/'+e.pack+'.png'),'<span style="\n          background-image: url('+n+');\n          background-repeat: no-repeat;\n          height: '+e.coords.height+'px;\n          width: '+e.coords.width+'px;\n          background-position-x: '+-1*e.coords.x+'px;\n          background-position-y: '+-1*e.coords.y+'px;\n          alt="'+t+'" class="'+e.type+'">\n        </span>'},t.prototype.parseUrl=function(e){return'<a href="'+e.url+'" class="'+e.type+'">'+e.text+'</a>'},t.prototype.parseTag=function(e){var t=e.text;return'<span class="tag">'+t+'</span>'},t.prototype.parseImage=function(e){var t=e.text,n=e.url;return'<img src="'+n+'" alt="'+t+'" title="'+t+'" class="image" />'},t.prototype.parseSkill=function(e,t){var n=e.url,o=t.skill,r=o.skill_name,a=o.cost;return'\n    <article class="skill">\n      <span>'+a+'</span>\n      <img src="'+n+'" title="'+r+'" class="image" height="50px" />\n    </article>\n    '},createClass(t,[{key:'shouldParseTag',get:function(){return this.getConfig('parseTag',!0)}},{key:'shouldParseSkill',get:function(){return this.getConfig('parseSkill',!0)}},{key:'shouldParseImage',get:function(){return this.getConfig('parseImage',!0)}}]),t}(Interface),Youtube=function(e){function t(){classCallCheck(this,t);var n=possibleConstructorReturn(this,e.call(this));return n.messagesId=[],n.required=['liveChatId','accessToken'],n.setConfig({maxResults:200,interval:5e3,profileImageSize:64,parseUrl:!0,formatMessages:!0,parseEmoticon:!0}),n}return inherits(t,e),t.prototype.connect=function(){var t=asyncToGenerator(regenerator.mark(function t(){return regenerator.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.prototype.connect.call(this),t.prev=1,this.connected=!0,this.emit('connected'),t.next=6,this.fetchMessages();case 6:t.next=11;break;case 8:throw t.prev=8,t.t0=t['catch'](1),new Error(t.t0);case 11:case'end':return t.stop();}},t,this,[[1,8]])}));return function(){return t.apply(this,arguments)}}(),t.prototype.disconnect=function(){e.prototype.disconnect.call(this),this.connected=!1,clearInterval(this.fetchInterval),this.emit('disconnected')},t.prototype.send=function(){var e=asyncToGenerator(regenerator.mark(function e(t){var n,o,r;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.length){e.next=2;break}throw new Error('A message cannot be empty!');case 2:return n=this.getConfig('liveChatId'),e.next=5,this.api('post','liveChat/messages?part=snippet,authorDetails',{snippet:{liveChatId:n,type:'textMessageEvent',textMessageDetails:{messageText:t}}});case 5:o=e.sent,r=o.data,this.handleMessages([r]);case 8:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.fetchMessages=function(){var e=asyncToGenerator(regenerator.mark(function e(){var t,n,o,r,a,s,i,p,c,l,d,g=this;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getConfig('liveChatId'),n=this.getConfig('maxResults'),o=this.getConfig('profileImageSize'),r=this.nextPageToken?this.nextPageToken:'',e.next=6,this.api('get','liveChat/messages',{part:'snippet,authorDetails',profileImageSize:o,liveChatId:t,maxResults:n,pageToken:r});case 6:a=e.sent,s=a.data,i=s.items,p=s.nextPageToken,c=s.pollingIntervalMillis,this.nextPageToken=p,this.handleMessages(i),l=parseInt(this.getConfig('interval'),10),d=c>l?c:l,this.connected&&(this.fetchInterval=setTimeout(function(){g.fetchMessages()},d));case 14:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.handleMessages=function(e){var t=this;e.forEach(function(e){var n=e.id,o=e.snippet,r=e.authorDetails;if(!t.messagesId.includes(n)){t.messagesId.push(n);var a=o.displayMessage||'',s={type:o.type,authorChannelId:r.channelId,image:r.profileImageUrl||'',moderator:r.isChatModerator,owner:r.isChatOwner,sponsor:r.isChatSponsor,verified:r.isVerified};switch(o.type){case'superChatEvent':return a=o.superChatDetails.userComment,s.amount=o.superChatDetails.amountDisplayString,s.amountMicros=o.superChatDetails.amountMicros,s.tier=o.superChatDetails.tier,s.currency=o.superChatDetails.currency,void t.emit('super-chat',o.superChatDetails);case'messageDeletedEvent':return void t.emit('delete-message',o.messageDeletedDetails.deletedMessageId);case'userBannedEvent':return void t.emit('user-banned',o.userBannedDetails);case'chatEndedEvent':return void t.emit('chat-ended');default:}var i=t.filterXSS(a);t.getConfig('formatMessages')&&(i=t.parseUrl(a)),t.emit('message',{id:n,body:i,username:r.displayName,raw:a,timestamp:new Date(o.publishedAt).getTime()||new Date().getTime(),extra:s})}})},t.prototype.parseUrl=function(e){var t=this;return e.split(' ').map(function(e){return t.isValidURL(e)?'<a href="'+e+' class="link">'+e+'<a>':e}).join(' ')},t.prototype.setConfig=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;e.prototype.setConfig.call(this,t,n),this.http=axios.create({baseURL:'https://www.googleapis.com/youtube/v3/',headers:{Authorization:'Bearer '+this.getConfig('accessToken')}})},t.prototype.loadChatId=function(){var e=asyncToGenerator(regenerator.mark(function e(){var t,n,o;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api('get','liveBroadcasts',{part:'snippet',broadcastStatus:'active',broadcastType:'all',maxResults:1});case 2:if(t=e.sent,n=t.data,!n.items.length){e.next=9;break}o=this.getConfig('liveChatId',n.items[0].snippet.liveChatId||null),this.setConfig({liveChatId:o}),e.next=10;break;case 9:throw new Error('No live broadcasts available.');case 10:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.api=function(){var e=asyncToGenerator(regenerator.mark(function e(t,n){var o,r,a,s,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.getConfig('accessToken'),r={method:t,url:n},o){e.next=4;break}throw new Error('accessToken not set.');case 4:return'get'===t?r.params=i:r.data=i,e.prev=5,e.next=8,this.http.request(r);case 8:return e.abrupt('return',e.sent);case 11:throw e.prev=11,e.t0=e['catch'](5),a=e.t0.response,s=a.data.error,this.checkError(s),new Error(s.errors[0].reason);case 17:case'end':return e.stop();}},e,this,[[5,11]])}));return function(){return e.apply(this,arguments)}}(),t.prototype.checkError=function(e){switch(parseInt(e.code,10)){case 401:this.emit('refresh-token',e);break;default:this.emit('error',e);}},t.prototype.getName=function(){return'YouTube'},t.prototype.getKey=function(){return'youtube'},t.prototype.hasEmoticons=function(){return!0},t.prototype.hasWriting=function(){return!0},t.prototype.isLive=function(){return!1},t}(Interface),CODE_500_SERVER_ERROR=500,Facebook=function(e){function t(){classCallCheck(this,t);var n=possibleConstructorReturn(this,e.call(this));return n.canSend=!1,n.setConfig({version:'v3.0',parseUrl:!0,reconnect:!0}),n.required=['liveVideoId','accessToken'],n.fields=['id','attachment','created_time','from','message','message_tags'],n.reConnectionTimeOut='',n}return inherits(t,e),t.prototype.connect=function(){var t=asyncToGenerator(regenerator.mark(function t(){var n,o,r,a,s,i,p;return regenerator.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.prototype.connect.call(this),n=this.getConfig('liveVideoId'),o=this.getConfig('accessToken'),r=this.getConfig('commentRate','one_hundred_per_second'),a=this.fields.join(','),s=['https://streaming-graph.facebook.com',n,'live_comments'].join('/'),i=['access_token='+o,'comment_rate='+r,'fields='+a].join('&'),p=s+'?'+i,this.tryConnect(p);case 9:case'end':return t.stop();}},t,this)}));return function(){return t.apply(this,arguments)}}(),t.prototype.tryConnect=function(t){var n=this,o=new EventSource(t);o.onopen=function(){n.connected=!0,n.emit('connected'),n.resetReconnect()},o.onmessage=this.msgEvent.bind(this),o.onerror=function(r){return r.target.readyState===o.CLOSED?void axios.get(t).catch(function(e){var o=e.response;+o.status==CODE_500_SERVER_ERROR&&n.shouldReconnect&&(n.increaseReconnect(),n.emit('reconnect',n.reconnectAttempt),n.reConnectionTimeOut=setTimeout(function(){return n.tryConnect(t)},n.reconnectCurrentInterval)),n.emit('error',o)}):void n.emit('error',r)},this.es=o},t.prototype.disconnect=function(){clearTimeout(this.reConnectionTimeOut),this.es&&this.es.close&&this.es.close(),this.canSend=!1,this.emit('disconnected')},t.prototype.send=function(){var e=asyncToGenerator(regenerator.mark(function e(t){var n,o;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isConnected){e.next=2;break}throw new Error('Unable to send message. No connection to Event Source.');case 2:if(this.canSend){e.next=4;break}throw new Error('Unable to send message. Sending is only available for page access tokens');case 4:return n=this.getConfig('liveVideoId'),o=this.getConfig('accessToken'),e.prev=6,e.next=9,this.api('post',n+'/comments?access_token='+o,{message:t});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e['catch'](6),this.emit('error',e.t0);case 14:case'end':return e.stop();}},e,this,[[6,11]])}));return function(){return e.apply(this,arguments)}}(),t.prototype.msgEvent=function(e){var t=e.data,n=JSON.parse(t),o=n.id,r=n.from,a=n.message,s=n.created_time;if(a.length){var i=this.getUserInfo(r),p=i.username,c=i.user_id,l=i.image,d=this.filterXSS(a);d=this.parseMessage(d);var g=this.getConfig('userId');this.emit('message',{id:o,body:d,username:p,raw:a,timestamp:new Date(s).getTime(),extra:{user_id:c,image:l,broadcaster:+c==+g}})}},t.prototype.getUserInfo=function(e){var t=e.id,n=e.name,o={user_id:t||0,username:n||'Anonymous',image:''};return t&&(o.image=''+this.http.defaults.baseURL+t+'/picture'),o},t.prototype.parseMessage=function(e){var t=this;return this.shouldParseUrl||this.shouldParseEmoticons?e.split(' ').map(function(e){return t.isEmoticon(e)?t.parseEmoticon(e):t.isValidURL(e)?t.parseUrl(e):e}).join(' '):e},t.prototype.parseUrl=function(e){return'<a href=\''+e+'\' class=\'link\'>'+e+'</a>'},t.prototype.parseEmoticon=function(e){return e},t.prototype.isEmoticon=function(){return!1},t.prototype.loadUser=function(){var e=asyncToGenerator(regenerator.mark(function e(){var t,n,o,r,a,s;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getConfig('accessToken'),t){e.next=3;break}throw new Error('accessToken not set.');case 3:return e.next=5,this.api('get','me',{fields:'id,name,metadata{type}',metadata:1,access_token:t});case 5:n=e.sent,o=n.data,r=o.id,a=o.name,s=o.metadata,'page'===s.type&&(this.canSend=!0),this.setConfig({userId:r,username:a});case 10:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.setConfig=function(){var t=asyncToGenerator(regenerator.mark(function t(n){var o,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return regenerator.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.prototype.setConfig.call(this,n,r),o=this.getConfig('version','v3.0'),o&&(this.http=axios.create({baseURL:'https://graph.facebook.com/'+o+'/'})),t.abrupt('return',this);case 4:case'end':return t.stop();}},t,this)}));return function(){return t.apply(this,arguments)}}(),t.prototype.api=function(){var e=asyncToGenerator(regenerator.mark(function e(t,n){var o,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return'get'===t&&(o=Object.keys(r).reduce(function(e,t){var n=r[t];return e.push(t+'='+n),e},[]).join('&'),n=n+'?'+o,r={}),e.next=3,this.http.request({method:t,url:n,data:r});case 3:return e.abrupt('return',e.sent);case 4:case'end':return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.prototype.getName=function(){return'Facebook'},t.prototype.getKey=function(){return'facebook'},t.prototype.hasEmoticons=function(){return!0},t.prototype.hasWriting=function(){return!0},t.prototype.isLive=function(){return!0},t}(Interface),Interfaces=Object.freeze({twitch:Twitch,mixer:Mixer,youtube:Youtube,facebook:Facebook}),Chat=function(){function e(){classCallCheck(this,e),this.debug=!1}return e.prototype.service=function(e){return this.isServiceExisting(e)?new Interfaces[e]:(Debug.log('The requested service "'+e+'" does not exist.'),null)},e.prototype.isServiceExisting=function(e){return-1!==Object.keys(Interfaces).indexOf(e)},e.prototype.setDebug=function(e){return this.debug=e,this.isDebug()},e.prototype.isDebug=function(){return this.debug},e}(),chat=new Chat;export default chat;
//# sourceMappingURL=chinterface.es.js.map
