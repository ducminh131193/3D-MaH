/*!
 * VERSION: 1.7.5
 * DATE: 2015-02-26
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,r){var s="x"===r?"Width":"Height",n="scroll"+s,o="client"+s,a=document.body;return i===e||i===t||i===a?Math.max(t[n],a[n])-(e["inner"+s]||t[o]||a[o]):i[n]-i["offset"+s]},r=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.5",init:function(t,r,s){return this._wdw=t===e,this._target=t,this._tween=s,"object"!=typeof r&&(r={y:r}),this.vars=r,this._autoKill=r.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=r.x?(this._addTween(this,"x",this.x,"max"===r.x?i(t,"x"):r.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=r.y?(this._addTween(this,"y",this.y,"max"===r.y?i(t,"y"):r.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var r=this._wdw||!this.skipX?this.getX():this.xPrev,s=this._wdw||!this.skipY?this.getY():this.yPrev,n=s-this.yPrev,o=r-this.xPrev;this._autoKill&&(!this.skipX&&(o>7||-7>o)&&i(this._target,"x")>r&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>s&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?e.scrollTo(this.skipX?r:this.x,this.skipY?s:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),s=r.prototype;r.max=i,s.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},s.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},s._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();



var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.17.0",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._time;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._time>0||n){this._initted=!1,this._init();for(var o,h=1/(1-r),l=this._firstPT;l;)o=l.s+l.c,l.c*=h,l.s=o-l.c,l=l._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,_,u,c,f=this._dirty?this.totalDuration():this._totalDuration,p=this._time,m=this._totalTime,d=this._cycle,g=this._duration,v=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===g&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>v||v===n)&&v!==t&&(i=!0,v>n&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||v===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&v>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===g&&(this._initted||!this.vars.lazy||i)&&(v>=0&&(i=!0),this._rawPrevTime=c=!e||t||v===t?t:n)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=g+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(l=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&l>=.5)&&(l=1-l),3===_&&(l*=2),1===u?l*=l:2===u?l*=l*l:3===u?l*=l*l*l:4===u&&(l*=l*l*l*l),this.ratio=1===_?1-l:2===_?l:.5>this._time/g?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/g)),p===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=p,this._totalTime=m,this._rawPrevTime=v,this._cycle=d,a.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==p&&t>=0&&(this._active=!0),0===m&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this._callback("onStart"))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||s)&&this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===g&&this._rawPrevTime===n&&c!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,c){a=a||0;var f,p,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(c||n.callbackScope||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),t=t||[],0>a&&(t=s(t),t.reverse(),a*=-1),f=t.length-1,m=0;f>=m;m++){p={};for(d in n)p[d]=n[d];p.delay=g,m===f&&l&&(p.onComplete=y),v[m]=new r(t[m],e,p),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},c=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=c(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,c,f=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in f)for(l=f[_].target.parentNode;l;)l===t&&(n=n.concat(f[_].tweens)),l=l.parentNode;for(c=n.length,u=0;c>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var f=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=c(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){f(!0,t,e,i)},r.resumeAll=function(t,e,i){f(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],c=_gsScope._gsDefine.globals,f=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,c=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=c,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a.vars.callbackScope||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.17.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&c.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&c.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&c.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,c=new s({onComplete:h,onCompleteParams:l,callbackScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=f(r.startAt)),c.to(t[u],e,f(r),u*n);return this.add(c,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,c,f,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(c=r[u])&&(c=new s({tweens:c})),this.add(c,l),"string"!=typeof c&&"function"!=typeof c&&("sequence"===a?l=c._startTime+c.totalDuration()/c._timeScale:"start"===a&&(c._startTime-=c.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(f=this,p=f.rawTime()>r._startTime;f._timeline;)p&&f._timeline.smoothChildTiming?f.totalTime(f._totalTime,!0):f._gc&&f._enabled(!0,!1),f=f._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,u=this._dirty?this.totalDuration():this._totalDuration,c=this._time,f=this._startTime,p=this._timeScale,m=this._paused;if(t>=u)this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==c&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||m);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||m);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(f===this._startTime||p!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=e._internals,a=n.lazyTweens,o=n.lazyRender,h=new i(null,null,1,0),l=s.prototype=new t;return l.constructor=s,l.kill()._gc=!1,s.version="1.17.0",l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},l.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},l.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},l.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},l.tweenTo=function(t,i){i=i||{};var s,r,n,a={ease:h,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)a[r]=i[r];return a.time=this._parseTimeOrLabel(t),s=Math.abs(Number(a.time)-this._time)/this._timeScale||.001,n=new e(this,s,a),a.onStart=function(){n.target.paused(!0),n.vars.time!==n.target.time()&&s===n.duration()&&n.duration(Math.abs(n.vars.time-n.target.time())/n.target._timeScale),i.onStart&&n._callback("onStart")},n},l.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},l.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,h,l,_,u,c=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,p=this._time,m=this._totalTime,d=this._startTime,g=this._timeScale,v=this._rawPrevTime,y=this._paused,T=this._cycle;if(t>=c)this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,l="onComplete",_=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>v||v===r)&&v!==t&&this._first&&(_=!0,v>r&&(l="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==p||0===f&&v!==r&&(v>0||0>t&&v>=0)&&!this._locked)&&(l="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(_=n=!0,l="onReverseComplete"):v>=0&&this._first&&(_=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(_=!0)}else 0===f&&0>v&&(_=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(u=f+this._repeatDelay,this._cycle=this._totalTime/u>>0,0!==this._cycle&&this._cycle===this._totalTime/u&&this._cycle--,this._time=this._totalTime-this._cycle*u,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):0>this._time?this._time=t=0:t=this._time));if(this._cycle!==T&&!this._locked){var x=this._yoyo&&0!==(1&T),w=x===(this._yoyo&&0!==(1&this._cycle)),b=this._totalTime,P=this._cycle,k=this._rawPrevTime,S=this._time;if(this._totalTime=T*f,T>this._cycle?x=!x:this._totalTime+=f,this._time=p,this._rawPrevTime=0===f?v-1e-4:v,this._cycle=T,this._locked=!0,p=x?0:f,this.render(p,e,0===f),e||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),w&&(p=x?f+1e-4:-1e-4,this.render(p,!0,!1)),this._locked=!1,this._paused&&!y)return;this._time=S,this._totalTime=b,this._cycle=P,this._rawPrevTime=k}if(!(this._time!==p&&this._first||i||_))return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==m&&t>0&&(this._active=!0),0===m&&this.vars.onStart&&0!==this._totalTime&&(e||this._callback("onStart")),this._time>=p)for(s=this._first;s&&(h=s._next,!this._paused||y);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=h;else for(s=this._last;s&&(h=s._prev,!this._paused||y);)(s._active||p>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=h;this._onUpdate&&(e||(a.length&&o(),this._callback("onUpdate"))),l&&(this._locked||this._gc||(d===this._startTime||g!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(a.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[l]&&this._callback(l)))},l.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},l.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},l.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},l.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},l.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},l.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},l.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},l.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,c=(l+_)/2,f=(c-u)/8;return r.b=h+(t-h)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+c)/2,a.b=c-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},l=function(t,r,n,a,o){var l,_,u,c,f,p,m,d,g,v,y,T,x,w=t.length-1,b=0,P=t[0].a;for(l=0;w>l;l++)f=t[b],_=f.a,u=f.d,c=t[b+1].d,o?(y=e[l],T=i[l],x=.25*(T+y)*r/(a?.5:s[l]||.5),p=u-(u-_)*(a?.5*r:0!==y?x/y:0),m=u+(c-u)*(a?.5*r:0!==T?x/T:0),d=u-(p+((m-p)*(3*y/(y+T)+.5)/4||0))):(p=u-.5*(u-_)*r,m=u+.5*(c-u)*r,d=u-(p+m)/2),p+=d,m+=d,f.c=g=p,f.b=0!==l?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=h(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=h(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,h,l,_,u,c,f=[];if(n)for(t=[n].concat(t),h=t.length;--h>-1;)"string"==typeof(c=t[h][s])&&"="===c.charAt(1)&&(t[h][s]=n[s]+Number(c.charAt(0)+c.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),f;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],f[h]=new a(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return f[h]=new a(t[h][s],0,0,t[h+1][s]),f},u=function(t,n,a,h,u,c){var f,p,m,d,g,v,y,T,x={},w=[],b=c||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(p in t[0])w.push(p);if(t.length>1){for(T=t[t.length-1],y=!0,f=w.length;--f>-1;)if(p=w[f],Math.abs(b[p]-T[p])>.05){y=!1;break}y&&(t=t.concat(),c&&t.unshift(c),t.push(t[1]),c=t[t.length-3])}for(e.length=i.length=s.length=0,f=w.length;--f>-1;)p=w[f],r[p]=-1!==u.indexOf(","+p+","),x[p]=_(t,p,r[p],c);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!h){for(f=w.length;--f>-1;)if(r[p])for(m=x[w[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(f=s.length;--f>-1;)s[f]=Math.sqrt(s[f])}for(f=w.length,d=a?4:1;--f>-1;)p=w[f],m=x[p],l(m,n,a,h,r[p]),y&&(m.splice(0,d),m.splice(m.length-d,d));return x},c=function(t,e,i){e=e||"soft";var s,r,n,o,h,l,_,u,c,f,p,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(c in t[0])v.push(c);for(l=v.length;--l>-1;){for(c=v[l],m[c]=h=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][c]:"string"==typeof(p=t[_][c])&&"="===p.charAt(1)?i[c]+Number(p.charAt(0)+p.substr(2)):Number(p),g&&_>1&&u-1>_&&(h[f++]=(s+h[f-2])/2),h[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],n=h[_+2],o=2===d?0:h[_+3],h[f++]=p=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);h.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,c,f,p=1/i,m=t.length;--m>-1;)for(c=t[m],n=c.a,a=c.d-n,o=c.c-n,h=c.b-n,s=r=0,_=1;i>=_;_++)l=p*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),f=m*i+_-1,e[f]=(e[f]||0)+s*s},p=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},_=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):c(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=p(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,c=this._segCount,f=this._func,p=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&c-1>r){for(l=c-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]
}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?c-1:c*e>>0,o=(e-i*(1/c))*c;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),f[n]?p[n](h):p[n]=h;if(this._autoRotate){var d,g,v,y,T,x,w,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],x=b[r][3]||0,w=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*w+x:this._initialRotations[r],f[n]?p[n](h):p[n]=h)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=h,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new m;var l,_,u,c=e.values,f=c.length-1,p=[],d={};if(0>f)return o;for(l=0;f>=l;l++)u=i(t,c[l],a,o,h,f!==l),p[l]=u.end;for(_ in e)d[_]=e[_];return d.values=p,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,h={},l=a.prototype=new t("css");l.constructor=a,a.version="1.17.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var _,u,c,f,p,m,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,k=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,O=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,I=180/Math.PI,F={},N=document,E=function(t){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",t):N.createElement(t)},L=E("div"),X=E("img"),B=a._internals={_specialProps:h},Y=navigator.userAgent,j=function(){var t=Y.indexOf("Android"),e=E("a");return c=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===t||Number(Y.substr(t+8,1))>3),p=c&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),f=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),U=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},V="",G="",W=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(G=3===s?"ms":i[s],V="-"+G.toLowerCase()+"-",G+t):null},Z=N.defaultView?N.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return j||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(k,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},$=B.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=A.test(i),u=t,c=L.style,f=0>s;if(f&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(c.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild)c[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||N.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;c[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return f?-o:o},H=B.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(T,""))||0)},K=function(t,e){var i,s,r,n={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r=e[i],(-1===r.indexOf("-transform")||Pe===r)&&(n[r.replace(S,O)]=e.getPropertyValue(r));else for(i in e)(-1===i.indexOf("Transform")||be===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(S,O)]=e[i]);return j||(n.opacity=U(t)),s=Ne(t,e,!1),n.rotation=s.rotation,n.skewX=s.skewX,n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.x=s.x,n.y=s.y,Se&&(n.z=s.z,n.rotationX=s.rotationX,n.rotationY=s.rotationY,n.scaleZ=s.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:H(t,a),void 0!==l[a]&&(o=new fe(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=te[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},se=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="center"===s?"50%":"0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+r+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(y,"")),e.oy=parseFloat(r.replace(y,"")),e.v=t),e||t},re=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,s){var r,n,a,o,h,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),h="="===t.charAt(1),a=(h?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:I)-(h?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},he=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},le=a.parseColor=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t]?oe[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=he(r+1/3,e,i),t[1]=he(r,e,i),t[2]=he(r-1/3,e,i),t):(t=t.match(d)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},_e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in oe)_e+="|"+l+"\\b";_e=RegExp(_e+")","gi");var ue=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(_e)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,c,f,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(p=t.replace(M,"|").split("|"),f=0;p.length>f;f++)p[f]=r(p[f]);return p.join(",")}if(e=(t.match(_e)||[n])[0],c=t.split(e).join("").match(v)||[],f=c.length,_>f--)for(;_>++f;)c[f]=i?c[0|(f-1)/2]:a[f];return o+c.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,c;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),c=0;n.length>c;c++)n[c]=r(n[c]);return n.join(",")}if(e=t.match(v)||[],c=e.length,_>c--)for(;_>++c;)e[c]=i?e[0|(c-1)/2]:a[c];return o+e.join(l)+h}:function(t){return t}},ce=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},fe=(B._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(B._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,c={},f={},p=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=p,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,c[o]=s.s,n||(l=new fe(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,f[o]=s.data[h],c[o]=s[h],n||(l=new fe(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:c,end:f,firstMPT:l,pt:_}},B.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,c){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===c?s+r:c,a&&(this._next=a,a._prev=this)}),me=function(t,e,i,s,r,n){var a=new pe(t,e,i,s-i,r,-1,n);return a.b=i,a.e=a.xs0=s,a},de=a.parseComplex=function(t,e,i,s,r,n,a,o,h,l){i=i||n||"",a=new pe(t,e,0,0,a,l?2:1,null,!1,o,i,s),s+="";var u,c,f,p,m,v,y,T,x,w,b,k,S=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),O=S.length,A=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(S=S.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),O=S.length),O!==R.length&&(S=(n||"").split(" "),O=S.length),a.plugin=h,a.setRatio=l,u=0;O>u;u++)if(p=S[u],m=R[u],T=parseFloat(p),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),A&&-1!==m.indexOf("px"),!0);else if(r&&("#"===p.charAt(0)||oe[p]||P.test(p)))k=","===m.charAt(m.length-1)?"),":")",p=le(p),m=le(m),x=p.length+m.length>6,x&&!j&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(j||(x=!1),a.appendXtra(x?"rgba(":"rgb(",p[0],m[0]-p[0],",",!0,!0).appendXtra("",p[1],m[1]-p[1],",",!0).appendXtra("",p[2],m[2]-p[2],x?",":k,!0),x&&(p=4>p.length?1:p[3],a.appendXtra("",p,(4>m.length?1:m[3])-p,k,!1)));else if(v=p.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(f=0,c=0;v.length>c;c++)b=v[c],w=p.indexOf(b,f),a.appendXtra(p.substr(f,w-f),Number(b),re(y[c],b),"",A&&"px"===p.substr(w+b.length,2),0===c),f=w+b.length;a["xs"+a.l]+=p.substr(f)}else a["xs"+a.l]+=a.l?" "+p:p;if(-1!==s.indexOf("=")&&a.data){for(k=a.xs0+a.data.s,u=1;a.l>u;u++)k+=a["xs"+u]+a.data["xn"+u];a.e=k+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ge=9;for(l=pe.prototype,l.l=l.pr=0;--ge>0;)l["xn"+ge]=0,l["xs"+ge]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ve=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,h[t]=h[this.p]=this,this.format=e.formatter||ue(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},ye=B._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ve(n[s],e)},Te=function(t){if(!h[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";ye(t,{parser:function(t,i,s,r,n,a,l){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),h[s].parse(t,i,s,r,n,a,l)):(q("Error: "+e+" js file not loaded."),n)}})}};l=ve.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,c=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),h=i.replace(M,"|").split("|")):c&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,c&&(_=e.indexOf(c),u=i.indexOf(c),_!==u&&(-1===u?o[a]=o[a].split(c).join(""):-1===_&&(o[a]+=" "+c)));e=o.join(", "),i=h.join(", ")}return de(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){ye(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})},a.useSVGTransformAttr=c||f;var xe,we="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),be=W("transform"),Pe=V+"transform",ke=W("transformOrigin"),Se=null!==W("perspective"),Re=B.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Se?a.defaultForce3D||"auto":!1},Oe=window.SVGElement,Ae=function(t,e,i){var s,r=N.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},Ce=N.documentElement,De=function(){var t,e,i,s=m||/Android/i.test(Y)&&!window.chrome;return N.createElementNS&&!s&&(t=Ae("svg",Ce),e=Ae("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[ke]="50% 50%",e.style[be]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(f&&Se),Ce.removeChild(t)),s}(),Me=function(t,e,i,s,r){var n,o,h,l,_,u,c,f,p,m,d,g,v,y,T=t._gsTransform,x=Fe(t,!0);T&&(v=T.xOrigin,y=T.yOrigin),(!s||2>(n=s.split(" ")).length)&&(c=t.getBBox(),e=se(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=l=parseFloat(n[0]),i.yOrigin=_=parseFloat(n[1]),s&&x!==Ie&&(u=x[0],c=x[1],f=x[2],p=x[3],m=x[4],d=x[5],g=u*p-c*f,o=l*(p/g)+_*(-f/g)+(f*d-p*m)/g,h=l*(-c/g)+_*(u/g)-(u*d-c*m)/g,l=i.xOrigin=n[0]=o,_=i.yOrigin=n[1]=h),T&&(r||r!==!1&&a.defaultSmoothOrigin!==!1?(o=l-v,h=_-y,T.xOffset+=o*x[0]+h*x[2]-o,T.yOffset+=o*x[1]+h*x[3]-h):T.xOffset=T.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},ze=function(t){return!!(Oe&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Ie=[1,0,0,1,0,0],Fe=function(t,e){var i,s,r,n,a,o=t._gsTransform||new Re,h=1e5;if(be?s=Q(t,Pe,null,!0):t.currentStyle&&(s=t.currentStyle.filter.match(C),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),o.x||0,o.y||0].join(","):""),i=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,(o.svg||t.getBBox&&ze(t))&&(i&&-1!==(t.style[be]+"").indexOf("matrix")&&(s=t.style[be],i=0),r=t.getAttribute("transform"),i&&r&&(-1!==r.indexOf("matrix")?(s=r,i=0):-1!==r.indexOf("translate")&&(s="matrix(1,0,0,1,"+r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Ie;for(r=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ge=r.length;--ge>-1;)n=Number(r[ge]),r[ge]=(a=n-(n|=0))?(0|a*h+(0>a?-.5:.5))/h+n:n;return e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r},Ne=B.getTransform=function(t,i,s,n){if(t._gsTransform&&s&&!n)return t._gsTransform;var o,h,l,_,u,c,f=s?t._gsTransform||new Re:new Re,p=0>f.scaleX,m=2e-5,d=1e5,g=Se?parseFloat(Q(t,ke,i,!1,"0 0 0").split(" ")[2])||f.zOrigin||0:0,v=parseFloat(a.defaultTransformPerspective)||0;if(f.svg=!(!t.getBBox||!ze(t)),f.svg&&(Me(t,Q(t,ke,r,!1,"50% 50%")+"",f,t.getAttribute("data-svg-origin")),xe=a.useSVGTransformAttr||De),o=Fe(t),o!==Ie){if(16===o.length){var y,T,x,w,b,P=o[0],k=o[1],S=o[2],R=o[3],O=o[4],A=o[5],C=o[6],D=o[7],M=o[8],z=o[9],F=o[10],N=o[12],E=o[13],L=o[14],X=o[11],B=Math.atan2(C,F);f.zOrigin&&(L=-f.zOrigin,N=M*L-o[12],E=z*L-o[13],L=F*L+f.zOrigin-o[14]),f.rotationX=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),y=O*w+M*b,T=A*w+z*b,x=C*w+F*b,M=O*-b+M*w,z=A*-b+z*w,F=C*-b+F*w,X=D*-b+X*w,O=y,A=T,C=x),B=Math.atan2(M,F),f.rotationY=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),y=P*w-M*b,T=k*w-z*b,x=S*w-F*b,z=k*b+z*w,F=S*b+F*w,X=R*b+X*w,P=y,k=T,S=x),B=Math.atan2(k,P),f.rotation=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),P=P*w+O*b,T=k*w+A*b,A=k*-b+A*w,C=S*-b+C*w,k=T),f.rotationX&&Math.abs(f.rotationX)+Math.abs(f.rotation)>359.9&&(f.rotationX=f.rotation=0,f.rotationY+=180),f.scaleX=(0|Math.sqrt(P*P+k*k)*d+.5)/d,f.scaleY=(0|Math.sqrt(A*A+z*z)*d+.5)/d,f.scaleZ=(0|Math.sqrt(C*C+F*F)*d+.5)/d,f.skewX=0,f.perspective=X?1/(0>X?-X:X):0,f.x=N,f.y=E,f.z=L,f.svg&&(f.x-=f.xOrigin-(f.xOrigin*P-f.yOrigin*O),f.y-=f.yOrigin-(f.yOrigin*k-f.xOrigin*A))}else if(!(Se&&!n&&o.length&&f.x===o[4]&&f.y===o[5]&&(f.rotationX||f.rotationY)||void 0!==f.x&&"none"===Q(t,"display",i))){var Y=o.length>=6,j=Y?o[0]:1,U=o[1]||0,q=o[2]||0,V=Y?o[3]:1;f.x=o[4]||0,f.y=o[5]||0,l=Math.sqrt(j*j+U*U),_=Math.sqrt(V*V+q*q),u=j||U?Math.atan2(U,j)*I:f.rotation||0,c=q||V?Math.atan2(q,V)*I+u:f.skewX||0,Math.abs(c)>90&&270>Math.abs(c)&&(p?(l*=-1,c+=0>=u?180:-180,u+=0>=u?180:-180):(_*=-1,c+=0>=c?180:-180)),f.scaleX=l,f.scaleY=_,f.rotation=u,f.skewX=c,Se&&(f.rotationX=f.rotationY=f.z=0,f.perspective=v,f.scaleZ=1),f.svg&&(f.x-=f.xOrigin-(f.xOrigin*j+f.yOrigin*q),f.y-=f.yOrigin-(f.xOrigin*U+f.yOrigin*V))}f.zOrigin=g;for(h in f)m>f[h]&&f[h]>-m&&(f[h]=0)}return s&&(t._gsTransform=f,f.svg&&(xe&&t.style[be]?e.delayedCall(.001,function(){Be(t.style,be)}):!xe&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),f},Ee=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,c=this.t.currentStyle;if(c){i=h,h=-l,l=-i,e=c.filter,u.filter="";var f,p,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==c.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,w=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,p=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+p*h),b+=p-(f*l+p*_)),v?(f=d/2,p=g/2,y+=", Dx="+(f-(f*o+p*h)+w)+", Dy="+(p-(f*l+p*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,k,S,R=8>m?1:-1;for(f=s.ieOffsetX||0,p=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+w),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),ge=0;4>ge;ge++)k=ee[ge],P=c[k],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,k,parseFloat(P),P.replace(T,""))||0,S=i!==s[k]?2>ge?-s.ieOffsetX:-s.ieOffsetY:2>ge?f-s.ieOffsetX:p-s.ieOffsetY,u[k]=(s[k]=Math.round(i-S*(0===ge||2===ge?1:R)))+"px"}}},Le=B.set3DTransformRatio=B.setTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,c,p,m,d,g,v,y,T,x,w,b,P,k=this.data,S=this.t.style,R=k.rotation,O=k.rotationX,A=k.rotationY,C=k.scaleX,D=k.scaleY,M=k.scaleZ,I=k.x,F=k.y,N=k.z,E=k.svg,L=k.perspective,X=k.force3D;if(!(((1!==t&&0!==t||"auto"!==X||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&X||N||L||A||O)&&(!xe||!E)&&Se))return R||k.skewX||E?(R*=z,b=k.skewX*z,P=1e5,e=Math.cos(R)*C,r=Math.sin(R)*C,i=Math.sin(R-b)*-D,n=Math.cos(R-b)*D,b&&"simple"===k.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,k.skewY&&(e*=v,r*=v)),E&&(I+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,F+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset,xe&&(k.xPercent||k.yPercent)&&(m=this.t.getBBox(),I+=.01*k.xPercent*m.width,F+=.01*k.yPercent*m.height),m=1e-6,m>I&&I>-m&&(I=0),m>F&&F>-m&&(F=0)),T=(0|e*P)/P+","+(0|r*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+I+","+F+")",E&&xe?this.t.setAttribute("transform","matrix("+T):S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+T):S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+C+",0,0,"+D+","+I+","+F+")",void 0;if(f&&(m=1e-4,m>C&&C>-m&&(C=M=2e-5),m>D&&D>-m&&(D=M=2e-5),!L||k.z||k.rotationX||k.rotationY||(L=0)),R||k.skewX)R*=z,d=e=Math.cos(R),g=r=Math.sin(R),k.skewX&&(R-=k.skewX*z,d=Math.cos(R),g=Math.sin(R),"simple"===k.skewType&&(v=Math.tan(k.skewX*z),v=Math.sqrt(1+v*v),d*=v,g*=v,k.skewY&&(e*=v,r*=v))),i=-g,n=d;else{if(!(A||O||1!==M||L||E))return S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) translate3d(":"translate3d(")+I+"px,"+F+"px,"+N+"px)"+(1!==C||1!==D?" scale("+C+","+D+")":""),void 0;e=n=1,i=r=0}l=1,s=a=o=h=_=u=0,c=L?-1/L:0,p=k.zOrigin,m=1e-6,x=",",w="0",R=A*z,R&&(d=Math.cos(R),g=Math.sin(R),o=-g,_=c*-g,s=e*g,a=r*g,l=d,c*=d,e*=d,r*=d),R=O*z,R&&(d=Math.cos(R),g=Math.sin(R),v=i*d+s*g,y=n*d+a*g,h=l*g,u=c*g,s=i*-g+s*d,a=n*-g+a*d,l*=d,c*=d,i=v,n=y),1!==M&&(s*=M,a*=M,l*=M,c*=M),1!==D&&(i*=D,n*=D,h*=D,u*=D),1!==C&&(e*=C,r*=C,o*=C,_*=C),(p||E)&&(p&&(I+=s*-p,F+=a*-p,N+=l*-p+p),E&&(I+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,F+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset),m>I&&I>-m&&(I=w),m>F&&F>-m&&(F=w),m>N&&N>-m&&(N=0)),T=k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?w:e)+x+(m>r&&r>-m?w:r)+x+(m>o&&o>-m?w:o),T+=x+(m>_&&_>-m?w:_)+x+(m>i&&i>-m?w:i)+x+(m>n&&n>-m?w:n),O||A?(T+=x+(m>h&&h>-m?w:h)+x+(m>u&&u>-m?w:u)+x+(m>s&&s>-m?w:s),T+=x+(m>a&&a>-m?w:a)+x+(m>l&&l>-m?w:l)+x+(m>c&&c>-m?w:c)+x):T+=",0,0,0,0,1,0,",T+=I+x+F+x+N+x+(L?1+-N/L:1)+")",S[be]=T};l=Re.prototype,l.x=l.y=l.z=l.skewX=l.skewY=l.rotation=l.rotationX=l.rotationY=l.zOrigin=l.xPercent=l.yPercent=l.xOffset=l.yOffset=0,l.scaleX=l.scaleY=l.scaleZ=1,ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,s,n,o,h){if(s._lastParsedTransform===h)return n;s._lastParsedTransform=h;var l,_,u,c,f,p,m,d,g,v=t._gsTransform,y=s._transform=Ne(t,r,!0,h.parseTransform),T=t.style,x=1e-6,w=we.length,b=h,P={},k="transformOrigin";if("string"==typeof b.transform&&be)u=L.style,u[be]=b.transform,u.display="block",u.position="absolute",N.body.appendChild(L),l=Ne(L,null,!1),N.body.removeChild(L),null!=b.xPercent&&(l.xPercent=ne(b.xPercent,y.xPercent)),null!=b.yPercent&&(l.yPercent=ne(b.yPercent,y.yPercent));else if("object"==typeof b){if(l={scaleX:ne(null!=b.scaleX?b.scaleX:b.scale,y.scaleX),scaleY:ne(null!=b.scaleY?b.scaleY:b.scale,y.scaleY),scaleZ:ne(b.scaleZ,y.scaleZ),x:ne(b.x,y.x),y:ne(b.y,y.y),z:ne(b.z,y.z),xPercent:ne(b.xPercent,y.xPercent),yPercent:ne(b.yPercent,y.yPercent),perspective:ne(b.transformPerspective,y.perspective)},m=b.directionalRotation,null!=m)if("object"==typeof m)for(u in m)b[u]=m[u];else b.rotation=m;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(l.x=0,l.xPercent=ne(b.x,y.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(l.y=0,l.yPercent=ne(b.y,y.yPercent)),l.rotation=ae("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:y.rotation,y.rotation,"rotation",P),Se&&(l.rotationX=ae("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":y.rotationX||0,y.rotationX,"rotationX",P),l.rotationY=ae("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":y.rotationY||0,y.rotationY,"rotationY",P)),l.skewX=null==b.skewX?y.skewX:ae(b.skewX,y.skewX),l.skewY=null==b.skewY?y.skewY:ae(b.skewY,y.skewY),(_=l.skewY-y.skewY)&&(l.skewX+=_,l.rotation+=_)}for(Se&&null!=b.force3D&&(y.force3D=b.force3D,p=!0),y.skewType=b.skewType||y.skewType||a.defaultSkewType,f=y.force3D||y.z||y.rotationX||y.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,f||null==b.scale||(l.scaleZ=1);--w>-1;)i=we[w],c=l[i]-y[i],(c>x||-x>c||null!=b[i]||null!=F[i])&&(p=!0,n=new pe(y,i,y[i],c,n),i in P&&(n.e=P[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return c=b.transformOrigin,y.svg&&(c||b.svgOrigin)&&(d=y.xOffset,g=y.yOffset,Me(t,se(c),l,b.svgOrigin,b.smoothOrigin),n=me(y,"xOrigin",(v?y:l).xOrigin,l.xOrigin,n,k),n=me(y,"yOrigin",(v?y:l).yOrigin,l.yOrigin,n,k),(d!==y.xOffset||g!==y.yOffset)&&(n=me(y,"xOffset",v?d:y.xOffset,y.xOffset,n,k),n=me(y,"yOffset",v?g:y.yOffset,y.yOffset,n,k)),c=xe?null:"0px 0px"),(c||Se&&f&&y.zOrigin)&&(be?(p=!0,i=ke,c=(c||Q(t,i,r,!1,"50% 50%"))+"",n=new pe(T,i,0,0,n,-1,k),n.b=T[i],n.plugin=o,Se?(u=y.zOrigin,c=c.split(" "),y.zOrigin=(c.length>2&&(0===u||"0px"!==c[2])?parseFloat(c[2]):u)||0,n.xs0=n.e=c[0]+" "+(c[1]||"50%")+" 0px",n=new pe(y,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=y.zOrigin):n.xs0=n.e=c):se(c+"",y)),p&&(s._transformType=y.svg&&xe||!f&&3!==this._transformType?2:3),n},prefix:!0}),ye("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ye("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,c,f,p,m,d,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=W(b[h])),u=_=Q(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),c=l=o[h],f=parseFloat(u),v=u.substr((f+"").length),y="="===c.charAt(1),y?(p=parseInt(c.charAt(0)+"1",10),c=c.substr(2),p*=parseFloat(c),g=c.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(c),g=c.substr((p+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),x=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(x/d)+"%"):"em"===g?(w=$(t,"borderLeft",1,"em"),u=T/w+"em",_=x/w+"em"):(u=T+"px",_=x+"px"),y&&(c=parseFloat(u)+p+g,l=parseFloat(_)+p+g)),a=de(P,b[h],u+" "+_,c+" "+l,!1,"0px",a);return a},prefix:!0,formatter:ue("0px 0px 0px 0px",!1,!0)}),ye("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,c,f="background-position",p=r||Z(t,null),d=this.format((p?m?p.getPropertyValue(f+"-x")+" "+p.getPropertyValue(f+"-y"):p.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(c=Q(t,"backgroundImage").replace(R,""),c&&"none"!==c)){for(o=d.split(" "),h=g.split(" "),X.setAttribute("src",c),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-X.width:t.offsetHeight-X.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),ye("backgroundSize",{defaultValue:"0 0",formatter:se}),ye("perspective",{defaultValue:"0px",prefix:!0}),ye("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ye("transformStyle",{prefix:!0}),ye("backfaceVisibility",{prefix:!0}),ye("userSelect",{prefix:!0}),ye("margin",{parser:ce("marginTop,marginRight,marginBottom,marginLeft")}),ye("padding",{parser:ce("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ye("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>m?(h=t.currentStyle,l=8>m?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),ye("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ye("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),ye("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(_e)||["#000"])[0]}}),ye("borderWidth",{parser:ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ye("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Xe=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(x,"opacity="+r))};ye("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),j?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Xe),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n
}});var Be=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(k,"-$1").toLowerCase())):t.removeAttribute(e))},Ye=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Be(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ye("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,c,f,p=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ye,a.pr=-11,i=!0,a.b=p,_=K(t,r),u=t._gsClassPT){for(c={},f=u.data;f;)c[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:p.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),l=J(t,_,K(t),h,c),t.setAttribute("class",p),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)}});var je=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n,a=this.t.style,o=h.transform.parse;if("all"===this.e)a.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],h[i]&&(h[i].parse===o?r=!0:i="transformOrigin"===i?ke:h[i].p),Be(a,i);r&&(Be(a,be),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(ye("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=je,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ge=l.length;ge--;)Te(l[ge]);l=a.prototype,l._firstPT=l._lastParsedTransform=l._transform=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var l,f,m,d,g,v,y,T,x,b=t.style;if(u&&""===b.zIndex&&(l=Q(t,"zIndex",r),("auto"===l||""===l)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(d=b.cssText,l=K(t,r),b.cssText=d+";"+e,l=J(t,l,K(t)).difs,!j&&w.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,b.cssText=d),this._firstPT=f=e.className?h.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(x=3===this._transformType,be?c&&(u=!0,""===b.zIndex&&(y=Q(t,"zIndex",r),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),p&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):b.zoom=1,m=f;m&&m._next;)m=m._next;T=new pe(t,"transform",0,0,null,2),this._linkCSSP(T,null,m),T.setRatio=be?Le:Ee,T.data=this._transform||Ne(t,r,!0),T.tween=o,T.pr=-1,n.pop()}if(i){for(;f;){for(v=f._next,m=d;m&&m.pr>f.pr;)m=m._next;(f._prev=m?m._prev:g)?f._prev._next=f:d=f,(f._next=m)?m._prev=f:g=f,f=v}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,o,l,u,c,f,p,m,d,g,v=t.style;for(a in e)f=e[a],o=h[a],o?i=o.parse(t,f,a,this,i,n,e):(c=Q(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(f)?(d||(f=le(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=de(v,a,c,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(l=parseFloat(c),p=l||0===l?c.substr((l+"").length):"",(""===c||"auto"===c)&&("width"===a||"height"===a?(l=ie(t,a,r),p="px"):"left"===a||"top"===a?(l=H(t,a,r),p="px"):(l="opacity"!==a?0:1,p="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(T,"")):(u=parseFloat(f),m=d?f.replace(T,""):""),""===m&&(m=a in s?s[a]:p),f=u||0===u?(g?u+l:u)+m:e[a],p!==m&&""!==m&&(u||0===u)&&l&&(l=$(t,a,l,p),"%"===m?(l/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(c=l+"%")):"em"===m?l/=$(t,a,1,"em"):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+l+m)),g&&(u+=l),!l&&0!==l||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,u||l||0,0,i,-1,a,!1,0,c,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:c):q("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,l,u-l,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,c,f),i.xs0=m)):i=de(v,a,c,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;){if(2!==r.type)if(r.r&&-1!==r.type)if(e=Math.round(r.s+r.c),r.type){if(1===r.type){for(s=r.l,i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}}else r.t[r.p]=e+r.xs0;else r.t[r.p]=r.e;else r.setRatio(t);r=r._next}},l._enableTransforms=function(t){this._transform=this._transform||Ne(this._target,r,!0),this._transformType=this._transform.svg&&xe||!t&&3!==this._transformType?2:3};var Ue=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var s=this._firstPT=new pe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Ue,s.data=this},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var qe=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)qe(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||qe(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o,h=e.to(t,i,s),l=[h],_=[],u=[],c=[],f=e._internals.reservedProps;for(t=h._targets||h.target,qe(t,_,c),h.render(i,!0,!0),qe(t,u),h.render(0,!0,!0),h._enabled(!0),r=c.length;--r>-1;)if(n=J(c[r],_[r],u[r]),n.firstMPT){n=n.difs;for(a in s)f[a]&&(n[a]=s[a]);o={};for(a in n)o[a]=_[r][a];l.push(e.fromTo(c[r],i,o,n))}return l},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),function(){var t=/(?:\d|\-|\+|=|#|\.)*/g,e=/[A-Za-z%]/g;_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.4.0",init:function(i,s){var r,n,a,o,h;if("function"!=typeof i.setAttribute)return!1;this._target=i,this._proxy={},this._start={},this._end={},this._suffix={};for(r in s)this._start[r]=this._proxy[r]=n=i.getAttribute(r)+"",this._end[r]=a=s[r]+"",this._suffix[r]=o=e.test(a)?a.replace(t,""):e.test(n)?n.replace(t,""):"",o&&(h=a.indexOf(o),-1!==h&&(a=a.substr(0,h))),this._addTween(this._proxy,r,parseFloat(n),a,r)||(this._suffix[r]=""),"="===a.charAt(1)&&(this._end[r]=this._firstPT.s+this._firstPT.c+o),this._overwriteProps.push(r);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start,n=r===this._proxy;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+(n?this._suffix[e]:""))}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=l[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},c=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),p={},m=function(s,r,n,a){this.sc=p[s]?p[s].sc:[],p[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,c,f,d=r.length,g=d;--d>-1;)(_=p[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),c=u.pop(),f=h(u.join("."))[c]=this.gsClass=n.apply(n,o),a&&(i[c]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),x=T.map={},w=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],x[n+"."+o]=x[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,w(new T(null,null,1,r),n,"easeOut",!0),w(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),w(new T(null,null,3,r),n,"easeInOut");x.linear=l.easing.Linear.easeIn,x.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,k=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},R=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],k=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=S(),f=e!==!1&&P,p=500,m=33,d="tick",g=function(t){var e,a,o=S()-R;o>p&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&l.dispatchEvent(d)};b.call(l),l.time=l.frame=0,l.tick=function(){g(!0)},l.lagSmoothing=function(t,e){p=t||1/_,m=Math.min(e,p,0)},l.sleep=function(){null!=r&&(f&&k?k(r):clearTimeout(r),s=c,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=S()-p+5),s=0===i?c:f&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),g(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),f=t,l.fps(i),void 0):f},l.fps(t),setTimeout(function(){f&&5>l.frame&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var O=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,U){o||a.wake();var i=this.vars.useFrames?j:U;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=O.ticker=new l.Ticker,n=O.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var A=function(){o&&S()-R>2e3&&a.wake(),setTimeout(A,2e3)};A(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||y)},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&V())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&this.render(s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,!0,!0)),this._gc&&!t&&this._enabled(!0,!1),this};var C=g("core.SimpleTimeline",function(t){O.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=C.prototype=new O,n.constructor=C,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(O.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=G(n,this,!1),1===h&&this._siblings[r].length>1&&Z(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=G(e,this,!1),1===h&&this._siblings.length>1&&Z(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)B[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!E[i]||E[i]&&E[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new O,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.17.0",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=120,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],F={},N=D._internals={isArray:f,isSelector:M,lazyTweens:I},E=D._plugins={},L=N.tweenLookup={},X=0,B=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},j=O._rootFramesTimeline=new C,U=O._rootTimeline=new C,q=30,V=N.lazyRender=function(){var t,e=I.length;for(F={};--e>-1;)t=I[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);I.length=0};U._startTime=a.time,j._startTime=a.frame,U._active=j._active=!0,setTimeout(V,1),O._updateRoot=D.render=function(){var t,e,i;if(I.length&&V(),U.render((a.time-U._startTime)*U._timeScale,!1,!1),j.render((a.frame-j._startTime)*j._timeScale,!1,!1),I.length&&V(),a.frame>=q){q=a.frame+(parseInt(D.autoSleep,10)||120);for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=U._first,(!i||i._paused)&&D.autoSleep&&!j._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",O._updateRoot);var G=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+X++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},W=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},Z=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var l,u=e._startTime+_,c=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Q(e,0,p),0===Q(o,l,p)&&(c[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(c[f++]=o)));for(n=f;--n>-1;)if(o=c[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!W(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Q=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)B[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):x[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;F[e._gsTweenID]&&V(),this.vars.css||e.style&&e!==t&&e.nodeType&&E.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],B[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(E[n]&&(h=new E[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&Z(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(F[e._gsTweenID]=!0),o)
},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_&&"isPause"!==this.data)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(l!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,c=this._easeType,f=this._easePower;(1===c||3===c&&u>=.5)&&(u=1-u),3===c&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===c?1-u:2===c?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._callback("onUpdate")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,h,l,_,u,c=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((f(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(h=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(l=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in l)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!W(this,i,e,u))return!1}for(n in l)(a=o[n])&&(c&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,h=!0),a.pg&&a.t._kill(l)&&(h=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return h},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],O.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=G(s[i],this,!0);else this._siblings=G(this.target,this,!0)}return O.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((f(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=G(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var $=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=$.prototype},!0);if(n=$.prototype,$.version="1.10.1",$.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-Number(i):parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},$.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===$.API&&(E[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){$.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new $(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,$.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in p)p[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
;; (function (_0x96e6x0) {"use strict"; (jQuery["browser"] = jQuery["browser"] || {})["mobile"] = /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i["test"](_0x96e6x0) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i["test"](_0x96e6x0["substr"](0, 4)); })(navigator["userAgent"] || navigator["vendor"] || window["opera"]);;; (function (_0x96e6x1, _0x96e6x2, _0x96e6x3, _0x96e6x4) { if (!_0x96e6x2["console"]) { _0x96e6x2["console"] = {}; }; if (!_0x96e6x2["console"]["log"]) { _0x96e6x2["console"]["log"] = function () { }; }; _0x96e6x1["fn"]["extend"]({ hasClasses: function (_0x96e6x5) { var _0x96e6x6 = this; for (i in _0x96e6x5) { if (_0x96e6x1(_0x96e6x6)["hasClass"](_0x96e6x5[i])) { return true; }; }; return false; } }); _0x96e6x1["zozo"] = {}; _0x96e6x1["zozo"]["core"] = {}; _0x96e6x1["zozo"]["core"]["console"] = { debug: false, log: function (_0x96e6x7) { if (_0x96e6x1("#zozo-console")["length"] != 0) { _0x96e6x1("\x3Cdiv/\x3E")["css"]({ marginTop: -24 })["html"](_0x96e6x7)["prependTo"]("#zozo-console")["animate"]({ marginTop: 0 }, 300)["animate"]({ backgroundColor: "#ffffff" }, 800); } else { if (console && this["debug"] === true) { console["log"](_0x96e6x7); }; }; } }; _0x96e6x1["zozo"]["core"]["content"] = { debug: false, video: function (_0x96e6x8) { if (_0x96e6x8) { _0x96e6x8["find"]("iframe")["each"](function () { var _0x96e6x9 = _0x96e6x1(this)["attr"]("src"); var _0x96e6xa = "wmode=transparent"; if (_0x96e6x9 && _0x96e6x9["indexOf"](_0x96e6xa) === -1) { if (_0x96e6x9["indexOf"]("?") != -1) { _0x96e6x1(this)["attr"]("src", _0x96e6x9 + "\x26" + _0x96e6xa); } else { _0x96e6x1(this)["attr"]("src", _0x96e6x9 + "?" + _0x96e6xa); }; }; }); }; }, check: function (_0x96e6x8) { this["video"](_0x96e6x8); } }; _0x96e6x1["zozo"]["core"]["keyCodes"] = { tab: 9, enter: 13, esc: 27, space: 32, pageup: 33, pagedown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 }; _0x96e6x1["zozo"]["core"]["debug"] = { startTime: new Date(), log: function (_0x96e6xb) { if (console) { console["log"](_0x96e6xb); }; }, start: function () { this["startTime"] = +new Date(); this["log"]("start: " + this["startTime"]); }, stop: function () { var _0x96e6xc = +new Date(); var _0x96e6xd = _0x96e6xc - this["startTime"]; this["log"]("end: " + _0x96e6xc); this["log"]("diff: " + _0x96e6xd); var _0x96e6xe = _0x96e6xd / 1000; var _0x96e6xf = Math["abs"](_0x96e6xe); } }; _0x96e6x1["zozo"]["core"]["support"] = { is_mouse_present: function () { return (("onmousedown" in _0x96e6x2) && ("onmouseup" in _0x96e6x2) && ("onmousemove" in _0x96e6x2) && ("onclick" in _0x96e6x2) && ("ondblclick" in _0x96e6x2) && ("onmousemove" in _0x96e6x2) && ("onmouseover" in _0x96e6x2) && ("onmouseout" in _0x96e6x2) && ("oncontextmenu" in _0x96e6x2)); }, is_touch_device: function () { return (("ontouchstart" in _0x96e6x2) || (navigator["maxTouchPoints"] > 0) || (navigator["msMaxTouchPoints"] > 0)) && (jQuery["browser"]["mobile"]); }, html5_storage: function () { try { return "localStorage" in _0x96e6x2 && _0x96e6x2["localStorage"] !== null; } catch (e) { return false; }; }, supportsCss: (function () { var _0x96e6x10 = _0x96e6x3["createElement"]("div"), _0x96e6x11 = "khtml ms o moz webkit"["split"](" "), _0x96e6x12 = false; return function (_0x96e6x13) { (_0x96e6x13 in _0x96e6x10["style"]) && (_0x96e6x12 = _0x96e6x13); var _0x96e6x14 = _0x96e6x13["replace"](/^[a-z]/, function (_0x96e6x15) { return _0x96e6x15["toUpperCase"](); }); _0x96e6x1["each"](_0x96e6x11, function (_0x96e6x16, _0x96e6x17) { (_0x96e6x17 + _0x96e6x14 in _0x96e6x10["style"]) && (_0x96e6x12 = "-" + _0x96e6x17 + "-" + _0x96e6x13); }); return _0x96e6x12; }; })(), css: { transition: false } }; _0x96e6x1["zozo"]["core"]["utils"] = { toArray: function (_0x96e6x18) { return _0x96e6x1["map"](_0x96e6x18, function (_0x96e6x17, _0x96e6x19) { return _0x96e6x17; }); }, createHeader: function (_0x96e6x1a, _0x96e6x1b) { var _0x96e6x1c = _0x96e6x1("\x3Cli\x3E\x3Ca\x3E" + _0x96e6x1a + "\x3C/a\x3E\x3C/li\x3E"); var _0x96e6x8 = _0x96e6x1("\x3Cdiv\x3E" + _0x96e6x1b + "\x3C/div\x3E"); return { tab: _0x96e6x1c, content: _0x96e6x8 }; }, isEmpty: function (_0x96e6x1d) { return (!_0x96e6x1d || 0 === _0x96e6x1d["length"]); }, isNumber: function (_0x96e6x1e) { return typeof _0x96e6x1e === "number" && isFinite(_0x96e6x1e); }, isEven: function (_0x96e6x1f) { return _0x96e6x1f % 2 === 0; }, isOdd: function (_0x96e6x1e) { return !(_number % 2 === 0); }, animate: function (_0x96e6x6, _0x96e6x20, _0x96e6x21, _0x96e6x22, _0x96e6x23, _0x96e6x24) { var _0x96e6x25 = (_0x96e6x6["settings"]["animation"]["effects"] === "none") ? 0 : _0x96e6x6["settings"]["animation"]["duration"]; var _0x96e6x26 = _0x96e6x6["settings"]["animation"]["easing"]; var _0x96e6x27 = _0x96e6x1["zozo"]["core"]["support"]["css"]["transition"]; if (_0x96e6x20 && _0x96e6x22) { if (_0x96e6x21) { _0x96e6x20["css"](_0x96e6x21); }; var _0x96e6x28 = _0x96e6x20["css"]("left"); var _0x96e6x29 = _0x96e6x20["css"]("top"); if (_0x96e6x6["settings"]["animation"]["type"] === "css") { _0x96e6x22[_0x96e6x27] = "all " + _0x96e6x25 + "ms ease-in-out"; setTimeout(function () { _0x96e6x20["css"](_0x96e6x22); }); setTimeout(function () { if (_0x96e6x23) { _0x96e6x20["css"](_0x96e6x23); }; _0x96e6x20["css"](_0x96e6x27, ""); }, _0x96e6x25); } else { _0x96e6x20["animate"](_0x96e6x22, { duration: _0x96e6x25, easing: _0x96e6x26, complete: function () { if (_0x96e6x23) { _0x96e6x20["css"](_0x96e6x23); }; if (_0x96e6x24) { _0x96e6x20["hide"](); }; } }); }; }; return _0x96e6x6; } }; _0x96e6x1["zozo"]["core"]["plugins"] = { easing: function (_0x96e6x6) { var _0x96e6x2a = false; if (_0x96e6x6) { if (_0x96e6x6["settings"]) { var _0x96e6x2b = "swing"; if (_0x96e6x1["easing"]["def"]) { _0x96e6x2a = true; } else { if (_0x96e6x6["settings"]["animation"]["easing"] != "swing" && _0x96e6x6["settings"]["animation"]["easing"] != "linear") { _0x96e6x6["settings"]["animation"]["easing"] = _0x96e6x2b; }; }; }; }; return _0x96e6x2a; } }; _0x96e6x1["zozo"]["core"]["browser"] = { init: function () { this["browser"] = this["searchString"](this["dataBrowser"]) || "An unknown browser"; this["version"] = this["searchVersion"](navigator["userAgent"]) || this["searchVersion"](navigator["appVersion"]) || "an unknown version"; _0x96e6x1["zozo"]["core"]["console"]["log"]("init: " + this["browser"] + " : " + this["version"]); if (this["browser"] === "Explorer") { var _0x96e6x2c = _0x96e6x1("html"); var _0x96e6x2d = parseInt(this["version"]); if (_0x96e6x2d === 6) { _0x96e6x2c["addClass"]("ie ie7"); } else { if (_0x96e6x2d === 7) { _0x96e6x2c["addClass"]("ie ie7"); } else { if (_0x96e6x2d === 8) { _0x96e6x2c["addClass"]("ie ie8"); } else { if (_0x96e6x2d === 9) { _0x96e6x2c["addClass"]("ie ie9"); }; }; }; }; }; }, isIE: function (_0x96e6x2e) { if (_0x96e6x1["zozo"]["core"]["utils"]["isNumber"](_0x96e6x2e)) { return (this["browser"] === "Explorer" && this["version"] <= _0x96e6x2e); } else { return (this["browser"] === "Explorer"); }; }, isChrome: function (_0x96e6x2e) { if (_0x96e6x1["zozo"]["core"]["utils"]["isNumber"](_0x96e6x2e)) { return (this["browser"] === "Chrome" && this["version"] <= _0x96e6x2e); } else { return (this["browser"] === "Chrome"); }; }, searchString: function (_0x96e6x2f) { for (var _0x96e6x30 = 0; _0x96e6x30 < _0x96e6x2f["length"]; _0x96e6x30++) { var _0x96e6x31 = _0x96e6x2f[_0x96e6x30]["string"]; var _0x96e6x32 = _0x96e6x2f[_0x96e6x30]["prop"]; this["versionSearchString"] = _0x96e6x2f[_0x96e6x30]["versionSearch"] || _0x96e6x2f[_0x96e6x30]["identity"]; if (_0x96e6x31) { if (_0x96e6x31["indexOf"](_0x96e6x2f[_0x96e6x30]["subString"]) != -1) { return _0x96e6x2f[_0x96e6x30]["identity"]; }; } else { if (_0x96e6x32) { return _0x96e6x2f[_0x96e6x30]["identity"]; }; }; }; }, searchVersion: function (_0x96e6x31) { var _0x96e6x16 = _0x96e6x31["indexOf"](this["versionSearchString"]); if (_0x96e6x16 == -1) { return; }; return parseFloat(_0x96e6x31["substring"](_0x96e6x16 + this["versionSearchString"]["length"] + 1)); }, dataBrowser: [{ string: navigator["userAgent"], subString: "Chrome", identity: "Chrome" }, { string: navigator["vendor"], subString: "Apple", identity: "Safari", versionSearch: "Version" }, { prop: _0x96e6x2["opera"], identity: "Opera" }, { string: navigator["userAgent"], subString: "Firefox", identity: "Firefox" }, { string: navigator["userAgent"], subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" }] }; _0x96e6x1["zozo"]["core"]["hashHelper"] = { mode: "single", separator: null, all: function (_0x96e6x33) { var _0x96e6x34 = []; var _0x96e6x35 = _0x96e6x3["location"]["hash"]; if (!this["hasHash"]()) { return _0x96e6x34; }; if (this["isSimple"](_0x96e6x33)) { return _0x96e6x35["substring"](1); } else { _0x96e6x35 = _0x96e6x35["substring"](1)["split"]("\x26"); for (var _0x96e6x30 = 0; _0x96e6x30 < _0x96e6x35["length"]; _0x96e6x30++) { var _0x96e6x36 = _0x96e6x35[_0x96e6x30]["split"](_0x96e6x33); if (_0x96e6x36["length"] != 2 || _0x96e6x36[0] in _0x96e6x34) { _0x96e6x36[1] = "none"; }; _0x96e6x34[_0x96e6x36[0]] = _0x96e6x36[1]; }; }; return _0x96e6x34; }, get: function (_0x96e6x19, _0x96e6x33) { var _0x96e6x37 = this["all"](_0x96e6x33); if (this["isSimple"](_0x96e6x33)) { return _0x96e6x37; } else { if (typeof _0x96e6x37 === "undefined" || typeof _0x96e6x37["length"] < 0) { return null; } else { if (typeof _0x96e6x37[_0x96e6x19] !== "undefined" && _0x96e6x37[_0x96e6x19] !== null) { return _0x96e6x37[_0x96e6x19]; } else { return null; }; }; }; }, set: function (_0x96e6x19, _0x96e6x17, _0x96e6x33, _0x96e6x38) { if (this["isSimple"](_0x96e6x33)) { _0x96e6x3["location"]["hash"] = _0x96e6x17; } else { if (_0x96e6x38 === "multiple") { var _0x96e6x37 = this["all"](_0x96e6x33); var _0x96e6x35 = []; _0x96e6x37[_0x96e6x19] = _0x96e6x17; for (var _0x96e6x19 in _0x96e6x37) { _0x96e6x35["push"](_0x96e6x19 + _0x96e6x33 + _0x96e6x37[_0x96e6x19]); }; _0x96e6x3["location"]["hash"] = _0x96e6x35["join"]("\x26"); } else { _0x96e6x3["location"]["hash"] = _0x96e6x19 + _0x96e6x33 + _0x96e6x17; }; }; }, isSimple: function (_0x96e6x33) { if (!_0x96e6x33 || _0x96e6x33 === "none") { return true; } else { return false; }; }, hasHash: function () { var _0x96e6x35 = _0x96e6x3["location"]["hash"]; if (_0x96e6x35["length"] > 0) { return true; } else { return false; }; } }; _0x96e6x1["zozo"]["core"]["support"]["css"]["transition"] = _0x96e6x1["zozo"]["core"]["support"]["supportsCss"]("transition"); _0x96e6x1["zozo"]["core"]["browser"]["init"](); })(jQuery, window, document);;; (function (_0x96e6x1) { _0x96e6x1["event"]["special"]["ztap"] = { distanceThreshold: 10, timeThreshold: 500, isTouchSupported: jQuery["zozo"]["core"]["support"]["is_touch_device"](), setup: function (_0x96e6x39) { var _0x96e6x3a = this, _0x96e6x6 = _0x96e6x1(_0x96e6x3a); var _0x96e6x3b = "click"; if (_0x96e6x39) { if (_0x96e6x39["data"]) { _0x96e6x3b = _0x96e6x39["data"]; }; }; if (_0x96e6x1["event"]["special"]["ztap"]["isTouchSupported"]) { _0x96e6x6["on"]("touchstart", function (_0x96e6x3c) { var _0x96e6x3d = _0x96e6x3c["target"], _0x96e6x3e = _0x96e6x3c["originalEvent"]["touches"][0], _0x96e6x3f = _0x96e6x3e["pageX"], _0x96e6x40 = _0x96e6x3e["pageY"], _0x96e6x41 = _0x96e6x1["event"]["special"]["ztap"]["distanceThreshold"], _0x96e6x42; function _0x96e6x43() { clearTimeout(_0x96e6x42); _0x96e6x6["off"]("touchmove", _0x96e6x46)["off"]("touchend", _0x96e6x44); }; function _0x96e6x44(_0x96e6x45) { _0x96e6x43(); if (_0x96e6x3d == _0x96e6x45["target"]) { _0x96e6x1["event"]["simulate"]("ztap", _0x96e6x3a, _0x96e6x45); }; }; function _0x96e6x46(_0x96e6x47) { var _0x96e6x48 = _0x96e6x47["originalEvent"]["touches"][0], _0x96e6x49 = _0x96e6x48["pageX"], _0x96e6x4a = _0x96e6x48["pageY"]; if (Math["abs"](_0x96e6x49 - _0x96e6x3f) > _0x96e6x41 || Math["abs"](_0x96e6x4a - _0x96e6x40) > _0x96e6x41) { _0x96e6x43(); }; }; _0x96e6x42 = setTimeout(_0x96e6x43, _0x96e6x1["event"]["special"]["ztap"]["timeThreshold"]); _0x96e6x6["on"]("touchmove", _0x96e6x46)["on"]("touchend", _0x96e6x44); }); } else { _0x96e6x6["on"](_0x96e6x3b, function (_0x96e6x45) { _0x96e6x1["event"]["simulate"]("ztap", _0x96e6x3a, _0x96e6x45); }); }; } }; })(jQuery);;; (function (_0x96e6x1, _0x96e6x2, _0x96e6x3, _0x96e6x4) { if (_0x96e6x2["zozo"] == null) { _0x96e6x2["zozo"] = {}; }; var _0x96e6x4b = function (_0x96e6x4c, _0x96e6x4d) { this["elem"] = _0x96e6x4c; this["$elem"] = _0x96e6x1(_0x96e6x4c); this["options"] = _0x96e6x4d; this["metadata"] = (this["$elem"]["data"]("options")) ? this["$elem"]["data"]("options") : {}; this["attrdata"] = (this["$elem"]["data"]()) ? this["$elem"]["data"]() : {}; this["tabID"]; this["$tabGroup"]; this["$mobileNav"]; this["$mobileDropdownArrow"]; this["$tabs"]; this["$container"]; this["$contents"]; this["autoplayIntervalId"]; this["resizeWindowIntervalId"]; this["currentTab"]; this["BrowserDetection"] = _0x96e6x1["zozo"]["core"]["browser"]; this["Deeplinking"] = _0x96e6x1["zozo"]["core"]["hashHelper"]; this["lastWindowHeight"]; this["lastWindowWidth"]; this["responsive"]; }; var _0x96e6x4e = { pluginName: "zozoTabs", elementSpacer: "\x3Cspan class=\x27z-tab-spacer\x27 style=\x27clear: both;display: block;\x27\x3E\x3C/span\x3E", commaRegExp: /,/g, space: " ", responsive: { largeDesktop: 1200, desktop: 960, tablet: 720, phone: 480 }, modes: { tabs: "tabs", stacked: "stacked", menu: "menu", slider: "slider" }, states: { closed: "z-state-closed", open: "z-state-open", active: "z-state-active" }, events: { click: "click", mousover: "mouseover", touchend: "touchend", touchstart: "touchstart", touchmove: "touchmove" }, animation: { effects: { fade: "fade", none: "none", slideH: "slideH", slideV: "slideV", slideLeft: "slideLeft", slideRight: "slideRight", slideUp: "slideUp", slideUpDown: "slideUpDown", slideDown: "slideDown" }, types: { css: "css", jquery: "jquery" } }, classes: { prefix: "z-", wrapper: "z-tabs", tabGroup: "z-tabs-nav", tab: "z-tab", first: "z-first", last: "z-last", left: "z-left", right: "z-right", firstCol: "z-first-col", lastCol: "z-last-col", firstRow: "z-first-row", lastRow: "z-last-row", active: "z-active", link: "z-link", container: "z-container", content: "z-content", shadows: "z-shadows", bordered: "z-bordered", dark: "z-dark", spaced: "z-spaced", rounded: "z-rounded", themes: ["gray", "black", "blue", "crystal", "green", "silver", "red", "orange", "deepblue", "white"], flatThemes: ["flat-turquoise", "flat-emerald", "flat-peter-river", "flat-amethyst", "flat-wet-asphalt", "flat-green-sea", "flat-nephritis", "flat-belize-hole", "flat-wisteria", "flat-midnight-blue", "flat-sun-flower", "flat-carrot", "flat-alizarin", "flat-graphite", "flat-concrete", "flat-orange", "flat-pumpkin", "flat-pomegranate", "flat-silver", "flat-asbestos", "flat-zozo-red"], styles: ["contained", "pills", "underlined", "clean", "minimal"], orientations: ["vertical", "horizontal"], sizes: ["mini", "small", "medium", "large", "xlarge", "xxlarge"], positions: { top: "top", topLeft: "top-left", topCenter: "top-center", topRight: "top-right", topCompact: "top-compact", bottom: "bottom", bottomLeft: "bottom-left", bottomCenter: "bottom-center", bottomRight: "bottom-right", bottomCompact: "bottom-compact" } } }, _0x96e6x4f = "flat", _0x96e6x50 = "ready", _0x96e6x51 = "error", _0x96e6x52 = "select", _0x96e6x53 = "activate", _0x96e6x54 = "deactivate", _0x96e6x55 = "hover", _0x96e6x56 = "beforeSend", _0x96e6x57 = "contentLoad", _0x96e6x58 = "contentUrl", _0x96e6x59 = "contentType", _0x96e6x5a = "disabled", _0x96e6x5b = "z-icon-menu", _0x96e6x5c = "z-disabled", _0x96e6x5d = "z-stacked", _0x96e6x5e = "z-icons-light", _0x96e6x5f = "z-icons-dark", _0x96e6x60 = "z-spinner", _0x96e6x61 = "underlined", _0x96e6x62 = "contained", _0x96e6x63 = "clean", _0x96e6x64 = "pills", _0x96e6x65 = "vertical", _0x96e6x66 = "horizontal", _0x96e6x67 = "top-left", _0x96e6x68 = "top-right", _0x96e6x69 = "top", _0x96e6x6a = "bottom", _0x96e6x6b = "bottom-right", _0x96e6x6c = "bottom-left", _0x96e6x6d = "mobile", _0x96e6x6e = "z-multiline", _0x96e6x6f = "transition", _0x96e6x70 = "z-animating", _0x96e6x71 = "z-dropdown-arrow", _0x96e6x72 = "responsive", _0x96e6x73 = "z-content-inner"; _0x96e6x4b["prototype"] = { defaults: { delayAjax: 50, animation: { duration: 600, effects: "slideH", easing: "easeInQuad", type: "css", mobileDuration: 0 }, autoContentHeight: true, autoplay: { interval: 0, smart: true }, bordered: true, dark: false, cacheAjax: true, contentUrls: null, deeplinking: false, deeplinkingAutoScroll: false, deeplinkingMode: "single", deeplinkingPrefix: null, deeplinkingSeparator: "", defaultTab: "tab1", event: _0x96e6x4e["events"]["click"], maxRows: 3, minWidth: 200, minWindowWidth: 480, mobileAutoScrolling: null, mobileNav: true, mobileMenuIcon: null, mode: _0x96e6x4e["modes"]["tabs"], multiline: false, hashAttribute: "data-link", position: _0x96e6x4e["classes"]["positions"]["topLeft"], orientation: _0x96e6x66, ready: function () { }, responsive: true, responsiveDelay: 0, rounded: false, shadows: true, theme: "silver", scrollToContent: false, select: function () { }, spaced: false, deactivate: function () { }, beforeSend: function () { }, contentLoad: function () { }, next: null, prev: null, error: function () { }, noTabs: false, rememberState: false, size: "medium", style: _0x96e6x62, tabRatio: 1.03, tabRatioCompact: 1.031, original: { itemWidth: 0, itemMinWidth: null, itemMaxWidth: null, groupWidth: 0, initGroupWidth: 0, itemD: 0, itemM: 0, firstRowWidth: 0, lastRowItems: 0, count: 0, contentMaxHeight: null, contentMaxWidth: null, navHeight: null, position: null, bottomLeft: null, tabGroupWidth: 0 }, animating: false }, init: function () { var _0x96e6x6 = this; _0x96e6x6["settings"] = _0x96e6x1["extend"](true, {}, _0x96e6x6["defaults"], _0x96e6x6["options"], _0x96e6x6["metadata"], _0x96e6x6["attrdata"]); _0x96e6x6["$elem"]["find"]("\x3E." + _0x96e6x60)["remove"](); _0x96e6x6["$elem"]["removeClass"]("z-tabs-loading"); if (_0x96e6x6["settings"]["contentUrls"] != null) { _0x96e6x6["$elem"]["find"]("\x3E div \x3E div")["each"](function (_0x96e6x16, _0x96e6x74) { _0x96e6x1(_0x96e6x74)["data"](_0x96e6x58, _0x96e6x6["settings"]["contentUrls"][_0x96e6x16]); }); }; _0x96e6x86["initAnimation"](_0x96e6x6, true); _0x96e6x86["updateClasses"](_0x96e6x6); _0x96e6x86["checkWidth"](_0x96e6x6, true); _0x96e6x86["bindEvents"](_0x96e6x6); _0x96e6x86["initAutoPlay"](_0x96e6x6); _0x96e6x1["zozo"]["core"]["plugins"]["easing"](_0x96e6x6); if (_0x96e6x6["settings"]["rememberState"] === true && _0x96e6x1["zozo"]["core"]["support"]["html5_storage"]()) { var _0x96e6x75 = localStorage["getItem"](_0x96e6x6["tabID"] + "_defaultTab"); if (_0x96e6x86["tabExist"](_0x96e6x6, _0x96e6x75)) { _0x96e6x6["settings"]["defaultTab"] = _0x96e6x75; }; }; if (_0x96e6x6["settings"]["deeplinking"] === true) { var _0x96e6x76 = (_0x96e6x6["settings"]["deeplinkingPrefix"]) ? _0x96e6x6["settings"]["deeplinkingPrefix"] : _0x96e6x6["tabID"]; if (_0x96e6x3["location"]["hash"]) { var _0x96e6x75 = _0x96e6x6["Deeplinking"]["get"](_0x96e6x76, _0x96e6x6["settings"]["deeplinkingSeparator"]); if (_0x96e6x86["tabExist"](_0x96e6x6, _0x96e6x75)) { _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x75); if (_0x96e6x6["settings"]["deeplinkingAutoScroll"] === true) { _0x96e6x1("html, body")["animate"]({ scrollTop: _0x96e6x6["$elem"]["offset"]()["top"] - 150 }, 2000); }; } else { _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x6["settings"]["defaultTab"]); }; } else { _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x6["settings"]["defaultTab"]); }; if (typeof (_0x96e6x1(_0x96e6x2)["hashchange"]) != "undefined") { _0x96e6x1(_0x96e6x2)["hashchange"](function () { var _0x96e6x77 = _0x96e6x6["Deeplinking"]["get"](_0x96e6x76, _0x96e6x6["settings"]["deeplinkingSeparator"]); if (!_0x96e6x6["currentTab"] || _0x96e6x6["currentTab"]["attr"](_0x96e6x6["settings"]["hashAttribute"]) !== _0x96e6x77) { _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x77); }; }); } else { _0x96e6x1(_0x96e6x2)["bind"]("hashchange", function () { var _0x96e6x77 = _0x96e6x6["Deeplinking"]["get"](_0x96e6x76, _0x96e6x6["settings"]["deeplinkingSeparator"]); if (!_0x96e6x6["currentTab"] || _0x96e6x6["currentTab"]["attr"](_0x96e6x6["settings"]["hashAttribute"]) !== _0x96e6x77) { _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x77); }; }); }; } else { if (_0x96e6x6["settings"]["noTabs"] === true) { _0x96e6x86["showContent"](_0x96e6x6, _0x96e6x86["getActive"](_0x96e6x6, 0)); } else { _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x6["settings"]["defaultTab"]); }; }; _0x96e6x86["checkWidth"](_0x96e6x6); _0x96e6x6["$elem"]["trigger"](_0x96e6x50, _0x96e6x6.$elem); return _0x96e6x6; }, setOptions: function (_0x96e6x78) { var _0x96e6x6 = this; _0x96e6x6["settings"] = _0x96e6x1["extend"](true, _0x96e6x6["settings"], _0x96e6x78); _0x96e6x86["initAnimation"](_0x96e6x6); _0x96e6x86["updateClasses"](_0x96e6x6, true); _0x96e6x86["checkWidth"](_0x96e6x6, false, true); _0x96e6x86["initAutoPlay"](_0x96e6x6); return _0x96e6x6; }, add: function (_0x96e6x74, _0x96e6x79, _0x96e6x7a) { var _0x96e6x6 = this; var _0x96e6x7b = {}; if (_0x96e6x74 != null && typeof _0x96e6x74 === "object") { if (_0x96e6x74["tab"]) { _0x96e6x7b["tab"] = _0x96e6x1(_0x96e6x74["tab"]); (_0x96e6x74["tabID"] && _0x96e6x6["settings"]["deeplinking"] === true) && (_0x96e6x7b["tab"]["attr"](_0x96e6x6["settings"]["hashAttribute"], _0x96e6x74["tabID"])); }; if (_0x96e6x74["content"]) { _0x96e6x7b["content"] = _0x96e6x1(_0x96e6x74["content"]); }; } else { if (_0x96e6x74 && _0x96e6x79) { _0x96e6x7b["tab"] = _0x96e6x1("\x3Cli\x3E\x3Ca\x3E" + _0x96e6x74 + "\x3C/a\x3E\x3C/li\x3E"); _0x96e6x7b["content"] = _0x96e6x1("\x3Cdiv\x3E" + _0x96e6x79 + "\x3C/div\x3E"); (_0x96e6x7a && _0x96e6x6["settings"]["deeplinking"] === true) && (_0x96e6x7b["tab"]["attr"](_0x96e6x6["settings"]["hashAttribute"], _0x96e6x7a)); }; }; if (_0x96e6x7b["tab"] && _0x96e6x7b["content"]) { _0x96e6x7b["tab"]["appendTo"](_0x96e6x6.$tabGroup)["hide"]()["fadeIn"](300)["css"]("display", ""); _0x96e6x7b["content"]["appendTo"](_0x96e6x6.$container); _0x96e6x86["updateClasses"](_0x96e6x6); _0x96e6x86["bindEvent"](_0x96e6x6, _0x96e6x7b["tab"]); setTimeout(function () { _0x96e6x86["checkWidth"](_0x96e6x6, false, true); }, 350); }; return _0x96e6x6; }, insertAfter: function (_0x96e6x1a, _0x96e6x1b, _0x96e6x7c) { var _0x96e6x6 = this; return _0x96e6x6; }, insertBefore: function (_0x96e6x1a, _0x96e6x1b, _0x96e6x7c) { var _0x96e6x6 = this; return _0x96e6x6; }, remove: function (_0x96e6x7d) { var _0x96e6x6 = this; var _0x96e6x7e = (_0x96e6x7d - 1); var _0x96e6x7f = _0x96e6x6["$tabs"]["eq"](_0x96e6x7e); var _0x96e6x80 = _0x96e6x6["$contents"]["eq"](_0x96e6x7e); _0x96e6x80["remove"](); _0x96e6x7f["fadeOut"](300, function () { _0x96e6x1(this)["remove"](); _0x96e6x86["updateClasses"](_0x96e6x6); }); setTimeout(function () { _0x96e6x86["checkWidth"](_0x96e6x6, false, true); }, 350); return _0x96e6x6; }, enable: function (_0x96e6x7d) { var _0x96e6x6 = this; var _0x96e6x81 = _0x96e6x6["$tabs"]["eq"](_0x96e6x7d); if (_0x96e6x81["length"]) { _0x96e6x81["removeClass"](_0x96e6x5c); _0x96e6x81["data"](_0x96e6x5a, false); }; return _0x96e6x6; }, disable: function (_0x96e6x7d) { var _0x96e6x6 = this; var _0x96e6x82 = _0x96e6x6["$tabs"]["eq"](_0x96e6x7d); if (_0x96e6x82["length"]) { _0x96e6x82["addClass"](_0x96e6x5c); _0x96e6x82["data"](_0x96e6x5a, true); }; return _0x96e6x6; }, select: function (_0x96e6x7d) { var _0x96e6x6 = this; if (_0x96e6x6["settings"]["animating"] !== true) { if (_0x96e6x6["settings"]["noTabs"] === true) { _0x96e6x86["showContent"](_0x96e6x6, _0x96e6x86["getActive"](_0x96e6x6, _0x96e6x7d)); } else { _0x96e6x86["changeHash"](_0x96e6x6, _0x96e6x6["$tabs"]["eq"](_0x96e6x7d)["attr"](_0x96e6x6["settings"]["hashAttribute"])); }; }; return _0x96e6x6; }, first: function () { var _0x96e6x6 = this; _0x96e6x6["select"](_0x96e6x86["getFirst"]()); return _0x96e6x6; }, prev: function () { var _0x96e6x6 = this; var _0x96e6x83 = _0x96e6x86["getActiveIndex"](_0x96e6x6); if (_0x96e6x83 <= _0x96e6x86["getFirst"](_0x96e6x6)) { _0x96e6x6["select"](_0x96e6x86["getLast"](_0x96e6x6)); } else { _0x96e6x6["select"](_0x96e6x83 - 1); _0x96e6x1["zozo"]["core"]["debug"]["log"]("prev tab : " + (_0x96e6x83 - 1)); }; return _0x96e6x6; }, next: function (_0x96e6x6) { _0x96e6x6 = (_0x96e6x6) ? _0x96e6x6 : this; var _0x96e6x83 = _0x96e6x86["getActiveIndex"](_0x96e6x6); var _0x96e6x84 = parseInt(_0x96e6x86["getLast"](_0x96e6x6)); if (_0x96e6x83 >= _0x96e6x84) { _0x96e6x6["select"](_0x96e6x86["getFirst"]()); } else { _0x96e6x6["select"](_0x96e6x83 + 1); _0x96e6x1["zozo"]["core"]["debug"]["log"]("next tab : " + (_0x96e6x83 + 1)); }; return _0x96e6x6; }, last: function () { var _0x96e6x6 = this; _0x96e6x6["select"](_0x96e6x86["getLast"](_0x96e6x6)); return _0x96e6x6; }, play: function (_0x96e6x85) { var _0x96e6x6 = this; if (_0x96e6x85 == null || _0x96e6x85 < 0) { _0x96e6x85 = 2000; }; _0x96e6x6["settings"]["autoplay"]["interval"] = _0x96e6x85; _0x96e6x6["stop"](); _0x96e6x6["autoplayIntervalId"] = setInterval(function () { _0x96e6x6["next"](_0x96e6x6); }, _0x96e6x6["settings"]["autoplay"]["interval"]); return _0x96e6x6; }, stop: function (_0x96e6x6) { _0x96e6x6 = (_0x96e6x6) ? _0x96e6x6 : this; clearInterval(_0x96e6x6["autoplayIntervalId"]); return _0x96e6x6; }, refresh: function () { var _0x96e6x6 = this; _0x96e6x6["$contents"]["filter"](".z-active")["css"]({ "display": "block" })["show"](); _0x96e6x86["checkWidth"](_0x96e6x6); return _0x96e6x6; } }; var _0x96e6x86 = { initAnimation: function (_0x96e6x6, _0x96e6x87) { var _0x96e6x88 = _0x96e6x1["zozo"]["core"]["utils"]["toArray"](_0x96e6x4e["animation"]["effects"]); if (_0x96e6x1["inArray"](_0x96e6x6["settings"]["animation"]["effects"], _0x96e6x88) < 0) { _0x96e6x6["settings"]["animation"]["effects"] = _0x96e6x4e["animation"]["effects"]["slideH"]; }; if (jQuery["browser"]["mobile"]) { _0x96e6x6["settings"]["shadows"] = false; }; if (_0x96e6x1["zozo"]["core"]["support"]["css"]["transition"] === false) { _0x96e6x6["settings"]["animation"]["type"] = _0x96e6x4e["animation"]["types"]["jquery"]; if (jQuery["browser"]["mobile"]) { _0x96e6x6["settings"]["animation"]["duration"] = 0; }; }; if (_0x96e6x6["settings"]["animation"]["effects"] === _0x96e6x4e["animation"]["effects"]["none"] && _0x96e6x87 === true) { _0x96e6x6["settings"]["animation"]["duration"] = 0; }; }, updateClasses: function (_0x96e6x6, _0x96e6x89) { _0x96e6x6["$elem"]["find"]("*")["stop"](true, true); _0x96e6x6["tabID"] = _0x96e6x6["$elem"]["attr"]("id"); _0x96e6x6["$tabGroup"] = _0x96e6x6["$elem"]["find"]("\x3E ul")["addClass"](_0x96e6x4e["classes"]["tabGroup"])["not"](".z-tabs-mobile")["addClass"]("z-tabs-desktop"); _0x96e6x6["$tabs"] = _0x96e6x6["$tabGroup"]["find"]("\x3E li"); _0x96e6x6["$container"] = _0x96e6x6["$elem"]["find"]("\x3E div"); _0x96e6x6["$contents"] = _0x96e6x6["$container"]["find"]("\x3E div"); if (_0x96e6x6["$tabGroup"]["length"] <= 0) { _0x96e6x6["settings"]["noTabs"] = true; }; var _0x96e6x27 = _0x96e6x1["zozo"]["core"]["support"]["css"]["transition"]; var _0x96e6x8a = _0x96e6x6["settings"]["noTabs"]; _0x96e6x6["$container"]["addClass"](_0x96e6x4e["classes"]["container"])["css"]({ _transition: "" }); _0x96e6x6["$contents"]["addClass"](_0x96e6x4e["classes"]["content"]); _0x96e6x6["$contents"]["each"](function (_0x96e6x16, _0x96e6x74) { var _0x96e6x8b = _0x96e6x1(_0x96e6x74); _0x96e6x8b["css"]({ "left": "", "top": "", "opacity": "", "display": "", _transition: "" }); (_0x96e6x8b["hasClass"](_0x96e6x4e["classes"]["active"])) && _0x96e6x8b["show"]()["css"]({ "display": "block", _transition: "" }); }); if (_0x96e6x8a != true) { _0x96e6x6["$tabs"]["each"](function (_0x96e6x16, _0x96e6x74) { var _0x96e6x1c = _0x96e6x1(_0x96e6x74); _0x96e6x1c["removeClass"](_0x96e6x4e["classes"]["first"])["removeClass"](_0x96e6x4e["classes"]["last"])["removeClass"](_0x96e6x4e["classes"]["left"])["removeClass"](_0x96e6x4e["classes"]["right"])["removeClass"](_0x96e6x4e["classes"]["firstCol"])["removeClass"](_0x96e6x4e["classes"]["lastCol"])["removeClass"](_0x96e6x4e["classes"]["firstRow"])["removeClass"](_0x96e6x4e["classes"]["lastRow"])["css"]({ "width": "", "float": "" })["addClass"](_0x96e6x4e["classes"]["tab"])["find"]("a")["addClass"](_0x96e6x4e["classes"]["link"]); (_0x96e6x86["isTabDisabled"](_0x96e6x1c)) && (_0x96e6x6["disable"](_0x96e6x16)); (_0x96e6x6["settings"]["deeplinking"] === false) && _0x96e6x1(_0x96e6x74)["attr"](_0x96e6x6["settings"]["hashAttribute"], "tab" + (_0x96e6x16 + 1)); }); _0x96e6x6["$tabs"]["filter"]("li:first-child")["addClass"](_0x96e6x4e["classes"]["first"]); _0x96e6x6["$tabs"]["filter"]("li:last-child")["addClass"](_0x96e6x4e["classes"]["last"]); }; var _0x96e6x8c = _0x96e6x1["zozo"]["core"]["utils"]["toArray"](_0x96e6x4e["classes"]["positions"]); _0x96e6x6["$elem"]["removeClass"](_0x96e6x4e["classes"]["wrapper"])["removeClass"](_0x96e6x4e["classes"]["rounded"])["removeClass"](_0x96e6x4e["classes"]["shadows"])["removeClass"](_0x96e6x4e["classes"]["spaced"])["removeClass"](_0x96e6x4e["classes"]["bordered"])["removeClass"](_0x96e6x4e["classes"]["dark"])["removeClass"](_0x96e6x6e)["removeClass"](_0x96e6x5e)["removeClass"](_0x96e6x5f)["removeClass"](_0x96e6x5d)["removeClass"](_0x96e6x4f)["removeClass"](_0x96e6x4e["classes"]["styles"]["join"](_0x96e6x4e["space"]))["removeClass"](_0x96e6x4e["classes"]["orientations"]["join"](_0x96e6x4e["space"]))["removeClass"](_0x96e6x8c["join"]()["replace"](_0x96e6x4e["commaRegExp"], _0x96e6x4e["space"]))["removeClass"](_0x96e6x4e["classes"]["sizes"]["join"](_0x96e6x4e["space"]))["removeClass"](_0x96e6x4e["classes"]["themes"]["join"](_0x96e6x4e["space"]))["removeClass"](_0x96e6x4e["classes"]["flatThemes"]["join"](_0x96e6x4e["space"]))["addClass"](_0x96e6x55)["addClass"](_0x96e6x6["settings"]["style"])["addClass"](_0x96e6x6["settings"]["size"])["addClass"](_0x96e6x6["settings"]["theme"]); (_0x96e6x86["isFlatTheme"](_0x96e6x6)) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4f); (_0x96e6x86["isLightTheme"](_0x96e6x6)) ? _0x96e6x6["$elem"]["addClass"](_0x96e6x5f) : _0x96e6x6["$elem"]["addClass"](_0x96e6x5e); (_0x96e6x6["settings"]["rounded"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["rounded"]); (_0x96e6x6["settings"]["shadows"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["shadows"]); (_0x96e6x6["settings"]["bordered"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["bordered"]); (_0x96e6x6["settings"]["dark"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["dark"]); (_0x96e6x6["settings"]["spaced"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["spaced"]); (_0x96e6x6["settings"]["multiline"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x6e); _0x96e6x86["checkPosition"](_0x96e6x6); if (_0x96e6x6["$elem"]["find"]("\x3E ul." + "z-tabs-mobile")["length"]) { _0x96e6x6["$mobileNav"] = _0x96e6x6["$elem"]["find"]("\x3E ul." + "z-tabs-mobile"); } else { _0x96e6x6["$mobileNav"] = _0x96e6x1("\x3Cul class=\x27z-tabs-nav z-tabs-mobile\x27\x3E\x3Cli\x3E\x3Ca class=\x27z-link\x27 style=\x27text-align: left;\x27\x3E\x3Cspan class=\x27z-title\x27\x3EOverview\x3C/span\x3E\x3Cspan class=\x27z-arrow\x27\x3E\x3C/span\x3E\x3C/a\x3E\x3C/li\x3E\x3C/ul\x3E"); }; if (_0x96e6x6["$mobileNav"]) { _0x96e6x6["$tabGroup"]["before"](_0x96e6x6.$mobileNav); if (_0x96e6x6["$elem"]["find"]("\x3E i." + _0x96e6x71)["length"]) { _0x96e6x6["$mobileDropdownArrow"] = _0x96e6x6["$elem"]["find"]("\x3E i." + _0x96e6x71); } else { _0x96e6x6["$mobileDropdownArrow"] = _0x96e6x1("\x3Ci class=\x27z-dropdown-arrow\x27\x3E\x3C/i\x3E"); }; _0x96e6x6["$tabGroup"]["before"](_0x96e6x6.$mobileDropdownArrow); }; (jQuery["browser"]["mobile"]) && (_0x96e6x6["$elem"]["removeClass"](_0x96e6x55)); }, checkPosition: function (_0x96e6x6) { _0x96e6x6["$container"]["appendTo"](_0x96e6x6.$elem); _0x96e6x6["$tabGroup"]["prependTo"](_0x96e6x6.$elem); _0x96e6x6["$elem"]["find"]("\x3E span.z-tab-spacer")["remove"](); _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["wrapper"]); var _0x96e6x8d = _0x96e6x86["isTop"](_0x96e6x6); _0x96e6x6["$contents"]["each"](function (_0x96e6x16, _0x96e6x74) { var _0x96e6x8 = _0x96e6x1(_0x96e6x74); var _0x96e6x8e = _0x96e6x73; if (!_0x96e6x8["find"]("\x3E div." + _0x96e6x73)["length"]) { if (_0x96e6x8["hasClass"]("z-row")) { _0x96e6x8["removeClass"]("z-row"); _0x96e6x8e = "z-row " + _0x96e6x73; }; _0x96e6x8["wrapInner"]("\x3Cdiv class=\x27" + _0x96e6x8e + "\x27\x3E\x3C/div\x3E"); _0x96e6x1["zozo"]["core"]["content"]["check"](_0x96e6x8); }; }); if (_0x96e6x6["settings"]["orientation"] === _0x96e6x65) { if (_0x96e6x6["settings"]["position"] !== _0x96e6x68) { _0x96e6x6["settings"]["position"] = _0x96e6x67; }; } else { _0x96e6x6["settings"]["orientation"] = _0x96e6x66; if (_0x96e6x8d === false) { _0x96e6x6["$tabGroup"]["appendTo"](_0x96e6x6.$elem); _0x96e6x1(_0x96e6x4e["elementSpacer"])["appendTo"](_0x96e6x6.$elem); _0x96e6x6["$container"]["prependTo"](_0x96e6x6.$elem); }; }; _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["orientation"]); _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["position"]); if (_0x96e6x8d) { _0x96e6x6["$elem"]["addClass"](_0x96e6x69); } else { _0x96e6x6["$elem"]["addClass"](_0x96e6x6a); }; }, bindEvents: function (_0x96e6x6) { var _0x96e6x25 = (_0x96e6x6["settings"]["animation"]["effects"] === _0x96e6x4e["animation"]["effects"]["none"]) ? 0 : _0x96e6x6["settings"]["animation"]["duration"]; _0x96e6x6["$tabs"]["each"](function () { var _0x96e6x1c = _0x96e6x1(this); var _0x96e6x8f = _0x96e6x1c["find"]("a")["attr"]("href"); var _0x96e6x3d = _0x96e6x1c["find"]("a")["attr"]("target"); if (!_0x96e6x1["trim"](_0x96e6x8f)["length"]) { _0x96e6x86["bindEvent"](_0x96e6x6, _0x96e6x1c); } else { _0x96e6x1c["on"]("ztap", { data: _0x96e6x6["settings"]["event"] }, function (_0x96e6x39) { (_0x96e6x1["trim"](_0x96e6x3d)["length"]) ? _0x96e6x2["open"](_0x96e6x8f, _0x96e6x3d) : _0x96e6x2["location"] = _0x96e6x8f; _0x96e6x39["preventDefault"](); }); }; }); _0x96e6x1(_0x96e6x2)["resize"](function () { if (_0x96e6x6["lastWindowWidth"] !== _0x96e6x1(_0x96e6x2)["width"]()) { clearInterval(_0x96e6x6["resizeWindowIntervalId"]); _0x96e6x6["resizeWindowIntervalId"] = setTimeout(function () { _0x96e6x6["lastWindowHeight"] = _0x96e6x1(_0x96e6x2)["height"](); _0x96e6x6["lastWindowWidth"] = _0x96e6x1(_0x96e6x2)["width"](); _0x96e6x86["checkWidth"](_0x96e6x6); }, _0x96e6x6["settings"]["responsiveDelay"]); }; }); var _0x96e6x90 = _0x96e6x6["settings"]["next"]; if (_0x96e6x90 != null) { _0x96e6x1(_0x96e6x90)["on"](_0x96e6x4e["events"]["click"], function (_0x96e6x39) { _0x96e6x39["preventDefault"](); _0x96e6x6["next"](); }); }; var _0x96e6x91 = _0x96e6x6["settings"]["prev"]; if (_0x96e6x91 != null) { _0x96e6x1(_0x96e6x91)["on"](_0x96e6x4e["events"]["click"], function (_0x96e6x39) { _0x96e6x39["preventDefault"](); _0x96e6x6["prev"](); }); }; if (_0x96e6x6["$mobileNav"]) { _0x96e6x6["$mobileNav"]["find"]("li")["on"]("ztap", { data: _0x96e6x6["settings"]["event"] }, function (_0x96e6x39) { _0x96e6x39["preventDefault"](); if (_0x96e6x6["$mobileNav"]["hasClass"](_0x96e6x4e["states"]["closed"])) { _0x96e6x6["$mobileNav"]["removeClass"](_0x96e6x4e["states"]["closed"]); _0x96e6x6["$tabGroup"]["removeClass"]("z-hide-menu"); _0x96e6x86["mobileNavAutoScroll"](_0x96e6x6); } else { _0x96e6x6["$mobileNav"]["addClass"](_0x96e6x4e["states"]["closed"]); _0x96e6x6["$tabGroup"]["addClass"]("z-hide-menu"); }; _0x96e6x86["refreshParents"](_0x96e6x6, _0x96e6x25); }); }; _0x96e6x6["lastWindowHeight"] = _0x96e6x1(_0x96e6x2)["height"](); _0x96e6x6["lastWindowWidth"] = _0x96e6x1(_0x96e6x2)["width"](); _0x96e6x6["$elem"]["bind"](_0x96e6x50, _0x96e6x6["settings"]["ready"]); _0x96e6x6["$elem"]["bind"](_0x96e6x52, _0x96e6x6["settings"]["select"]); _0x96e6x6["$elem"]["bind"](_0x96e6x54, _0x96e6x6["settings"]["deactivate"]); _0x96e6x6["$elem"]["bind"](_0x96e6x51, _0x96e6x6["settings"]["error"]); _0x96e6x6["$elem"]["bind"](_0x96e6x57, _0x96e6x6["settings"]["contentLoad"]); }, bindEvent: function (_0x96e6x6, _0x96e6x1c) { _0x96e6x1c["on"]("ztap", { data: _0x96e6x6["settings"]["event"] }, function (_0x96e6x39) { _0x96e6x39["preventDefault"](); if (_0x96e6x6["settings"]["autoplay"] !== false && _0x96e6x6["settings"]["autoplay"] != null) { if (_0x96e6x6["settings"]["autoplay"]["smart"] === true) { _0x96e6x6["stop"](); }; }; _0x96e6x86["changeHash"](_0x96e6x6, _0x96e6x1c["attr"](_0x96e6x6["settings"]["hashAttribute"])); if (_0x96e6x86["allowAutoScrolling"](_0x96e6x6) === true && _0x96e6x86["isMobile"](_0x96e6x6)) { _0x96e6x1(_0x96e6x2["opera"] ? "html" : "html, body")["animate"]({ scrollTop: _0x96e6x6["$elem"]["offset"]()["top"] + _0x96e6x6["settings"]["mobileAutoScrolling"]["contentTopOffset"] }, 0); }; }); }, mobileNavAutoScroll: function (_0x96e6x6) { if (_0x96e6x86["allowAutoScrolling"](_0x96e6x6) === true) { _0x96e6x1(_0x96e6x2["opera"] ? "html" : "html, body")["animate"]({ scrollTop: _0x96e6x6["$mobileNav"]["offset"]()["top"] + _0x96e6x6["settings"]["mobileAutoScrolling"]["navTopOffset"] }, 0); }; return _0x96e6x6; }, showTab: function (_0x96e6x6, _0x96e6x75) { if (_0x96e6x86["tabExist"](_0x96e6x6, _0x96e6x75) && _0x96e6x75 != null && _0x96e6x6["settings"]["animating"] !== true) { var _0x96e6x92 = _0x96e6x6["$tabs"]["filter"]("li[" + _0x96e6x6["settings"]["hashAttribute"] + "=\x27" + _0x96e6x75 + "\x27]"); var _0x96e6x93 = _0x96e6x6["$tabs"]["index"](_0x96e6x92); var _0x96e6x94 = _0x96e6x86["getActive"](_0x96e6x6, _0x96e6x93); if (_0x96e6x94["enabled"] && _0x96e6x94["preIndex"] !== _0x96e6x94["index"] && _0x96e6x6["settings"]["noTabs"] !== true) { _0x96e6x6["currentTab"] = _0x96e6x92; _0x96e6x6["$tabs"]["removeClass"](_0x96e6x4e["classes"]["active"]); _0x96e6x6["currentTab"]["addClass"](_0x96e6x4e["classes"]["active"]); if (_0x96e6x6["settings"]["rememberState"] === true && _0x96e6x1["zozo"]["core"]["support"]["html5_storage"]()) { localStorage["setItem"](_0x96e6x6["tabID"] + "_defaultTab", _0x96e6x92["data"]("link")); }; _0x96e6x86["mobileNav"](_0x96e6x6, false, _0x96e6x94["index"]); if (_0x96e6x94["contentUrl"]) { if (_0x96e6x94["preIndex"] === -1) { _0x96e6x94["content"]["css"]({ "opacity": "", "left": "", "top": "", "position": "relative" })["show"](); }; if (_0x96e6x94["contentType"] === "iframe") { _0x96e6x86["iframeContent"](_0x96e6x6, _0x96e6x94); } else { _0x96e6x86["ajaxRequest"](_0x96e6x6, _0x96e6x94); }; } else { _0x96e6x86["showContent"](_0x96e6x6, _0x96e6x94); }; }; }; }, getActiveIndex: function (_0x96e6x6) { var _0x96e6x7e; if (_0x96e6x6["settings"]["noTabs"] === true) { _0x96e6x7e = _0x96e6x6["$container"]["find"]("\x3Ediv." + _0x96e6x4e["classes"]["active"])["index"](); } else { if (_0x96e6x6["currentTab"]) { _0x96e6x7e = parseInt(_0x96e6x6["currentTab"]["index"]()); } else { _0x96e6x7e = _0x96e6x6["$tabGroup"]["find"]("li." + _0x96e6x4e["classes"]["active"])["index"](); }; }; return _0x96e6x7e; }, getActive: function (_0x96e6x6, _0x96e6x7e) { var _0x96e6x95 = _0x96e6x86["getActiveIndex"](_0x96e6x6); var _0x96e6x96 = _0x96e6x6["$contents"]["eq"](_0x96e6x7e); var _0x96e6x97 = _0x96e6x6["$tabs"]["eq"](_0x96e6x7e); var _0x96e6x98 = _0x96e6x6["$tabs"]["eq"](_0x96e6x95); var _0x96e6x27 = _0x96e6x1["zozo"]["core"]["support"]["css"]["transition"]; var _0x96e6x25 = (_0x96e6x6["settings"]["animation"]["effects"] === _0x96e6x4e["animation"]["effects"]["none"]) ? 0 : _0x96e6x6["settings"]["animation"]["duration"]; var _0x96e6x94 = { index: _0x96e6x7e, tab: _0x96e6x97, content: _0x96e6x96, contentInner: _0x96e6x96["find"]("\x3E .z-content-inner"), enabled: _0x96e6x86["isTabDisabled"](_0x96e6x97) === false, contentUrl: _0x96e6x96["data"](_0x96e6x58), contentType: _0x96e6x96["data"](_0x96e6x59), noAnimation: false, transition: _0x96e6x27, duration: _0x96e6x25, preIndex: _0x96e6x95, preTab: _0x96e6x98, preContent: _0x96e6x6["$contents"]["eq"](_0x96e6x95) }; return _0x96e6x94; }, iframeContent: function (_0x96e6x6, _0x96e6x94) { var _0x96e6x99 = _0x96e6x94["contentInner"]["find"]("\x3E div \x3E.z-iframe"); if (!_0x96e6x99["length"]) { _0x96e6x86["showLoading"](_0x96e6x6); _0x96e6x94["contentInner"]["append"]("\x3Cdiv class=\x22z-video\x22\x3E\x3Ciframe src=\x22" + _0x96e6x94["contentUrl"] + "\x22 frameborder=\x220\x22 scrolling=\x22auto\x22 height=\x221400\x22 class=\x22z-iframe\x22\x3E\x3C/iframe\x3E\x3C/div\x3E"); console["log"]("add iframe"); } else { _0x96e6x86["hideLoading"](_0x96e6x6); }; _0x96e6x86["showContent"](_0x96e6x6, _0x96e6x94); _0x96e6x94["contentInner"]["find"](".z-iframe")["load"](function () { _0x96e6x86["hideLoading"](_0x96e6x6); }); return _0x96e6x6; }, showLoading: function (_0x96e6x6) { _0x96e6x6["$container"]["append"]("\x3Cspan class=\x22" + _0x96e6x60 + "\x22\x3E\x3C/span\x3E"); return _0x96e6x6; }, hideLoading: function (_0x96e6x6) { _0x96e6x6["$container"]["find"]("\x3E." + _0x96e6x60)["remove"](); return _0x96e6x6; }, ajaxRequest: function (_0x96e6x6, _0x96e6x94) { var _0x96e6x2f = {}; var _0x96e6x9a = { tab: _0x96e6x94["tab"], content: _0x96e6x94["contentInner"], index: _0x96e6x94["index"], xhr: null, message: "" }; _0x96e6x1["ajax"]({ type: "GET", cache: (_0x96e6x6["settings"]["cacheAjax"] === true), url: _0x96e6x94["contentUrl"], dataType: "html", data: _0x96e6x2f, beforeSend: function (_0x96e6x9b, _0x96e6x9c) { _0x96e6x86["showLoading"](_0x96e6x6); _0x96e6x6["settings"]["animating"] = true; }, error: function (_0x96e6x9b, _0x96e6x9d, _0x96e6x9e) { if (_0x96e6x9b["status"] == 404) { _0x96e6x9a["message"] = "\x3Ch4 style=\x27color:red;\x27\x3ESorry, error: 404 - the requested content could not be found.\x3C/h4\x3E"; } else { _0x96e6x9a["message"] = "\x3Ch4 style=\x27color:red;\x27\x3EAn error occurred: " + _0x96e6x9d + "\x0AError: " + _0x96e6x9b + " code: " + _0x96e6x9b["status"] + "\x3C/h4\x3E"; }; _0x96e6x9a["xhr"] = _0x96e6x9b; (_0x96e6x6["settings"]["error"] && typeof (_0x96e6x6["settings"]["error"]) == typeof (Function)) && _0x96e6x6["$elem"]["trigger"](_0x96e6x51, _0x96e6x9a); _0x96e6x94["contentInner"]["html"](_0x96e6x9a["message"]); }, complete: function (_0x96e6x9b, _0x96e6x9d) { setTimeout(function () { _0x96e6x6["settings"]["animating"] = false; _0x96e6x86["showContent"](_0x96e6x6, _0x96e6x94); _0x96e6x86["hideLoading"](_0x96e6x6); }, _0x96e6x6["settings"]["delayAjax"]); }, success: function (_0x96e6x2f, _0x96e6x9d, _0x96e6x9b) { setTimeout(function () { _0x96e6x94["contentInner"]["html"](_0x96e6x2f); _0x96e6x9a["xhr"] = _0x96e6x9b; _0x96e6x6["$elem"]["trigger"](_0x96e6x57, _0x96e6x9a); }, _0x96e6x6["settings"]["delayAjax"]); } }); return _0x96e6x6; }, showContent: function (_0x96e6x6, _0x96e6x94) { if (_0x96e6x94["preIndex"] !== _0x96e6x94["index"] && _0x96e6x6["settings"]["animating"] !== true) { _0x96e6x6["settings"]["animating"] = true; _0x96e6x6["$contents"]["removeClass"](_0x96e6x4e["classes"]["active"]); _0x96e6x94["content"]["addClass"](_0x96e6x4e["classes"]["active"]); if (_0x96e6x94["preIndex"] === -1) { _0x96e6xd5["init"](_0x96e6x6, _0x96e6x94); } else { var _0x96e6x88 = _0x96e6x6["settings"]["animation"]["effects"]; var _0x96e6x9f = _0x96e6x86["getContentHeight"](_0x96e6x6, _0x96e6x94["preContent"], true)["height"]; var _0x96e6xa0 = _0x96e6x86["getContentHeight"](_0x96e6x6, _0x96e6x94["content"], true)["height"]; var _0x96e6xa1 = _0x96e6x86["isLarger"](_0x96e6x9f, _0x96e6xa0); if (_0x96e6x6["settings"]["orientation"] === _0x96e6x66 && _0x96e6x6["settings"]["autoContentHeight"] === true) { _0x96e6xa1 = (_0x96e6x9f > _0x96e6xa0) ? _0x96e6x9f : _0x96e6xa0; }; var _0x96e6xa2 = (_0x96e6x88 === _0x96e6x4e["animation"]["effects"]["slideH"] || _0x96e6x88 === _0x96e6x4e["animation"]["effects"]["slideLeft"] || _0x96e6x88 === _0x96e6x4e["animation"]["effects"]["slideRight"]) ? _0x96e6x6["$container"]["width"]() : _0x96e6xa2 = _0x96e6xa1; if (_0x96e6x94["preIndex"] < _0x96e6x94["index"] && _0x96e6x88 === _0x96e6x4e["animation"]["effects"]["slideV"]) { var _0x96e6xa3 = _0x96e6x86["isLarger"](_0x96e6x9f, _0x96e6xa0); (_0x96e6xa3 > _0x96e6xa2) && (_0x96e6xa2 = _0x96e6xa3); }; var _0x96e6xa4 = -_0x96e6xa2; var _0x96e6xa5 = _0x96e6xa2; if (_0x96e6x94["preIndex"] > _0x96e6x94["index"]) { _0x96e6xa4 = _0x96e6xa2; _0x96e6xa5 = -_0x96e6xa2; }; _0x96e6xd5["before"](_0x96e6x6, _0x96e6x94); switch (_0x96e6x88) { case _0x96e6x4e["animation"]["effects"]["slideV"]: _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], null, { "left": 0, "top": _0x96e6xa4 + "px" }); _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], { "left": 0, "top": _0x96e6xa5 + "px" }, { "top": 0 }); break;; case _0x96e6x4e["animation"]["effects"]["slideUp"]: _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], { "opacity": 1 }, { "left": 0, "top": (-_0x96e6xa2) + "px" }); _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], { "left": 0, "top": (_0x96e6xa2 * 1) + "px" }, { "top": 0 }); break;; case _0x96e6x4e["animation"]["effects"]["slideDown"]: _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], { "opacity": 1 }, { "left": 0, "top": (_0x96e6xa2) + "px" }); _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], { "left": 0, "top": (-_0x96e6xa2) + "px" }, { "top": 0 }); break;; case _0x96e6x4e["animation"]["effects"]["slideUpDown"]: _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], { "opacity": 1 }, { "left": 0, "top": (-_0x96e6xa2 * 1) + "px" }); _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], { "left": 0, "top": (-(_0x96e6xa2 * 2)) + "px" }, { "top": 0 }); break;; case _0x96e6x4e["animation"]["effects"]["slideH"]: _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], null, { "left": _0x96e6xa4 + "px" }); _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], { "left": _0x96e6xa5 + "px" }, { "left": 0 }); break;; case _0x96e6x4e["animation"]["effects"]["slideRight"]: _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], { "opacity": 1 }, { "top": 0, "left": (_0x96e6xa2) + "px" }); _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], { "top": 0, "left": (-_0x96e6xa2) + "px" }, { "top": 0, "left": 0 }); break;; case _0x96e6x4e["animation"]["effects"]["slideLeft"]: _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], { "opacity": 1 }, { "top": 0, "left": (-_0x96e6xa2) + "px" }); _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], { "top": 0, "left": (_0x96e6xa2) + "px" }, { "top": 0, "left": 0 }); break;; case _0x96e6x4e["animation"]["effects"]["fade"]: _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], { "display": "block" }, { "opacity": 0 }); _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], { "display": "block", "opacity": 0 }, { "opacity": 1 }); break;; case _0x96e6x4e["animation"]["effects"]["none"]: _0x96e6x6["$contents"]["css"]({ "position": "absolute", "left": 0, "top": 0 })["removeClass"](_0x96e6x4e["classes"]["active"])["hide"]()["eq"](_0x96e6x94["index"])["addClass"](_0x96e6x4e["classes"]["active"])["css"]({ "position": "relative" })["show"](); break;; default:; }; _0x96e6xd5["after"](_0x96e6x6, _0x96e6x94); }; }; }, refreshParents: function (_0x96e6x6, _0x96e6x25) { setTimeout(function () { _0x96e6x6["$elem"]["parents"](".z-tabs")["each"](function (_0x96e6x16, _0x96e6x74) { _0x96e6x1(_0x96e6x74)["data"]("zozoTabs")["refresh"](); }); }, _0x96e6x25); }, animate: function (_0x96e6x6, _0x96e6x20, _0x96e6x21, _0x96e6x22, _0x96e6x23, _0x96e6x24) { _0x96e6x1["zozo"]["core"]["utils"]["animate"](_0x96e6x6, _0x96e6x20, _0x96e6x21, _0x96e6x22, _0x96e6x23, _0x96e6x24); }, mobileNav: function (_0x96e6x6, _0x96e6xa6, _0x96e6x93) { if (_0x96e6x93 !== null && _0x96e6x6["$mobileNav"]) { _0x96e6x6["$mobileNav"]["find"]("\x3E li \x3E a \x3E span.z-title")["html"](_0x96e6x6["$tabs"]["eq"](_0x96e6x93)["find"]("a")["html"]()); }; if (_0x96e6xa6 === true) { setTimeout(function () { _0x96e6x6["$mobileNav"]["removeClass"](_0x96e6x4e["states"]["closed"]); }, _0x96e6x6["settings"]["animation"]["mobileDuration"]); _0x96e6x6["$tabGroup"]["removeClass"]("z-hide-menu");;; } else { (_0x96e6x6["$mobileNav"]) && _0x96e6x6["$mobileNav"]["addClass"](_0x96e6x4e["states"]["closed"]); _0x96e6x6["$tabGroup"]["addClass"]("z-hide-menu"); }; }, setResponsiveDimension: function (_0x96e6x6, _0x96e6xa7, _0x96e6xa8) { var _0x96e6xa9 = _0x96e6x6["$container"]; _0x96e6x6["settings"]["original"]["count"] = parseInt(_0x96e6x6["$tabs"]["size"]()); if (!_0x96e6xa8) { _0x96e6x6["settings"]["original"]["itemD"] = parseInt(_0x96e6xa9["width"]() / _0x96e6x6["settings"]["original"]["itemWidth"]); _0x96e6x6["settings"]["original"]["itemM"] = _0x96e6x6["settings"]["original"]["itemWidth"] + _0x96e6x6["settings"]["original"]["itemM"]; }; _0x96e6x6["settings"]["original"]["firstRowWidth"] = (_0x96e6x6["settings"]["original"]["itemWidth"] / (parseInt(_0x96e6x6["settings"]["original"]["itemD"]) * _0x96e6x6["settings"]["original"]["itemWidth"]) * 100); _0x96e6x6["settings"]["original"]["itemCount"] = parseInt(_0x96e6x6["settings"]["original"]["itemD"]) * parseInt(_0x96e6x6["settings"]["original"]["count"] / (parseInt(_0x96e6x6["settings"]["original"]["itemD"]))); _0x96e6x6["settings"]["original"]["lastItem"] = 100 / (parseInt(_0x96e6x6["settings"]["original"]["count"]) - parseInt(_0x96e6x6["settings"]["original"]["itemCount"])); _0x96e6x6["settings"]["original"]["navHeight"] = _0x96e6x6["settings"]["original"]["itemD"] * (parseInt(_0x96e6x6["$tabs"]["eq"](0)["innerHeight"]())) + ((_0x96e6x6["settings"]["original"]["itemM"] > 0 ? _0x96e6x6["$tabs"]["eq"](0)["innerHeight"]() : 0)); _0x96e6x6["settings"]["original"]["bottomLeft"] = _0x96e6x6["settings"]["original"]["count"] - (_0x96e6x6["settings"]["original"]["count"] - _0x96e6x6["settings"]["original"]["itemCount"]); _0x96e6x6["settings"]["original"]["rows"] = _0x96e6x6["settings"]["original"]["count"] > _0x96e6x6["settings"]["original"]["itemCount"] ? parseInt(_0x96e6x6["settings"]["original"]["itemCount"] / _0x96e6x6["settings"]["original"]["itemD"]) + 1 : parseInt(_0x96e6x6["settings"]["original"]["itemCount"] / _0x96e6x6["settings"]["original"]["itemD"]); _0x96e6x6["settings"]["original"]["lastRowItems"] = _0x96e6x6["settings"]["original"]["count"] - (_0x96e6x6["settings"]["original"]["itemCount"] * (_0x96e6x6["settings"]["original"]["rows"] - 1)); _0x96e6x6["settings"]["original"]["itemsPerRow"] = _0x96e6x6["settings"]["original"]["itemCount"] / _0x96e6x6["settings"]["original"]["rows"]; if (_0x96e6xa9["width"]() > _0x96e6xa7 && !_0x96e6xa8) { _0x96e6x6["settings"]["original"]["itemD"] = _0x96e6x6["settings"]["original"]["count"]; _0x96e6x6["settings"]["original"]["itemM"] = 0; _0x96e6x6["settings"]["original"]["rows"] = 1; _0x96e6x6["settings"]["original"]["itemCount"] = _0x96e6x6["settings"]["original"]["count"]; }; return _0x96e6x6; }, checkWidth: function (_0x96e6x6, _0x96e6x87, _0x96e6x89) { var _0x96e6xa7 = 0; var _0x96e6xa9 = _0x96e6x6["$container"]; var _0x96e6xaa = _0x96e6x86["isCompact"](_0x96e6x6); var _0x96e6xab = 0; var _0x96e6xac = _0x96e6x6["settings"]["tabRatio"]; var _0x96e6xad = _0x96e6x6["settings"]["tabRatioCompact"]; _0x96e6x6["$tabs"]["each"](function (_0x96e6x16) { var _0x96e6xae = _0x96e6x1(this)["outerWidth"](true) * _0x96e6xac; (_0x96e6xaa) && (_0x96e6xae = (_0x96e6xae * _0x96e6xad)); if (_0x96e6x87 === true) { if (_0x96e6xae > _0x96e6x6["settings"]["original"]["itemWidth"]) { _0x96e6x6["settings"]["original"]["itemWidth"] = _0x96e6xae; _0x96e6x6["settings"]["original"]["itemMaxWidth"] = _0x96e6xae; }; if (_0x96e6xae < _0x96e6x6["settings"]["original"]["itemMinWidth"]) { _0x96e6x6["settings"]["original"]["itemMinWidth"] = _0x96e6xae; }; }; _0x96e6xab = _0x96e6xab + _0x96e6x1(this)["innerHeight"](); _0x96e6xa7 = _0x96e6xa7 + _0x96e6xae; }); if (_0x96e6x87 === true) { _0x96e6xa7 = _0x96e6xa7 + (_0x96e6x6["settings"]["original"]["itemWidth"] * 0); }; _0x96e6x6["settings"]["original"]["count"] = parseInt(_0x96e6x6["$tabs"]["size"]()); _0x96e6x6["settings"]["original"]["groupWidth"] = _0x96e6xa7; _0x96e6x86["setResponsiveDimension"](_0x96e6x6, _0x96e6x6["settings"]["original"]["groupWidth"]); if (_0x96e6x6["settings"]["original"]["count"] > 3 && _0x96e6x6["settings"]["original"]["lastRowItems"] === 1) { _0x96e6x6["settings"]["original"]["itemD"] = _0x96e6x6["settings"]["original"]["itemD"] - 1; _0x96e6x6["settings"]["original"]["itemM"] = _0x96e6xa9["width"]() % _0x96e6x6["settings"]["original"]["itemWidth"]; _0x96e6x86["setResponsiveDimension"](_0x96e6x6, _0x96e6x6["settings"]["original"]["groupWidth"], true); }; if (_0x96e6x87 === true || _0x96e6x89 === true) { _0x96e6x6["settings"]["original"]["initGroupWidth"] = _0x96e6x6["settings"]["original"]["groupWidth"]; if (_0x96e6x86["isCompact"](_0x96e6x6)) { var _0x96e6xaf = 100 / _0x96e6x6["settings"]["original"]["count"]; _0x96e6x6["$tabs"]["each"](function () { _0x96e6x1(this)["css"]({ "width": _0x96e6xaf + "%" }); }); }; _0x96e6x6["settings"]["original"]["position"] = _0x96e6x6["settings"]["position"]; }; if (_0x96e6x6["settings"]["responsive"] === true) { _0x96e6x86["responsive"](_0x96e6x6, _0x96e6x87); }; var _0x96e6xb0 = ((_0x96e6x86["isCompact"](_0x96e6x6) && !_0x96e6x86["isMobile"](_0x96e6x6))); var _0x96e6xb1 = (_0x96e6x86["isResponsive"](_0x96e6x6) && _0x96e6x6["BrowserDetection"]["isIE"](7)) ? { "float": "none", "width": "auto" } : { "float": "" }; var _0x96e6xb2 = _0x96e6x6["$elem"]["hasClass"](_0x96e6x72); _0x96e6x6["$tabs"]["each"](function (_0x96e6x16) { if (((_0x96e6xb2 === true && (_0x96e6x16 + 1) === _0x96e6x6["settings"]["original"]["itemD"]) || (_0x96e6x16 + 1) === _0x96e6x6["settings"]["original"]["count"]) && _0x96e6xb0) { _0x96e6x1(this)["css"](_0x96e6xb1); } else { _0x96e6x1(this)["css"]({ "float": "" }); }; }); if (_0x96e6x6["settings"]["orientation"] === _0x96e6x65) { _0x96e6x86["setContentHeight"](_0x96e6x6, null, true); }; }, checkModes: function (_0x96e6x6) { var _0x96e6xaa = _0x96e6x86["isCompact"](_0x96e6x6); if (_0x96e6x6["settings"]["mode"] === _0x96e6x4e["modes"]["stacked"]) { _0x96e6x6["$elem"]["addClass"](_0x96e6x5d); _0x96e6x6["$elem"]["addClass"](_0x96e6x72); _0x96e6x6["$tabs"]["css"]({ "width": "" }); (_0x96e6x6["$mobileNav"]) && _0x96e6x6["$mobileNav"]["hide"](); } else { if (_0x96e6xaa) { var _0x96e6xaf = 100 / _0x96e6x6["settings"]["original"]["count"]; _0x96e6x6["$tabs"]["each"](function () { _0x96e6x1(this)["css"]({ "float": "", "width": _0x96e6xaf + "%" }); }); } else { _0x96e6x6["$tabs"]["each"](function () { _0x96e6x1(this)["css"]({ "float": "", "width": "" }); }); }; }; }, getContentHeight: function (_0x96e6x6, _0x96e6xb3, _0x96e6xb4) { var _0x96e6xb5 = _0x96e6x6["settings"]["autoContentHeight"]; var _0x96e6xb6 = { width: 0, height: 0 }; if (_0x96e6xb5 != true) { _0x96e6x6["$contents"]["each"](function (_0x96e6x16, _0x96e6x74) { var _0x96e6x8 = _0x96e6x1(_0x96e6x74); var _0x96e6xb7 = _0x96e6x86["getElementSize"](_0x96e6x8); (_0x96e6xb7["height"] > _0x96e6xb6["height"]) && (_0x96e6xb6["height"] = _0x96e6xb7["height"]); (_0x96e6xb7["width"] > _0x96e6xb6["width"]) && (_0x96e6xb6["width"] = _0x96e6xb7["width"]); }); } else { var _0x96e6xb8 = _0x96e6x6["$elem"]["find"]("\x3E .z-container \x3E .z-content.z-active"); if (_0x96e6xb3 != null) { _0x96e6xb8 = _0x96e6xb3; }; _0x96e6xb6["height"] = _0x96e6x86["getElementSize"](_0x96e6xb8)["height"]; }; if (_0x96e6x6["settings"]["orientation"] === _0x96e6x65 && !_0x96e6x86["isMobile"](_0x96e6x6)) { var _0x96e6xb9 = 0; _0x96e6x6["$tabs"]["each"](function (_0x96e6x16) { _0x96e6xb9 = _0x96e6xb9 + parseInt(_0x96e6x1(this)["height"]()) + parseInt(_0x96e6x1(this)["css"]("border-top-width")) + parseInt(_0x96e6x1(this)["css"]("border-bottom-width")); }); _0x96e6xb6["height"] = _0x96e6x86["isLarger"](_0x96e6xb6["height"], _0x96e6x6["$tabGroup"]["innerHeight"]()); _0x96e6xb6["height"] = _0x96e6x86["isLarger"](_0x96e6xb6["height"], _0x96e6xb9); }; return _0x96e6xb6; }, setContentHeight: function (_0x96e6x6, _0x96e6xb3, _0x96e6xb4) { var _0x96e6xb6 = _0x96e6x86["getContentHeight"](_0x96e6x6, _0x96e6xb3, _0x96e6xb4); _0x96e6x6["settings"]["original"]["contentMaxHeight"] = _0x96e6xb6["height"]; _0x96e6x6["settings"]["original"]["contentMaxWidth"] = _0x96e6xb6["width"]; var _0x96e6x25 = (_0x96e6x6["settings"]["animation"]["effects"] === _0x96e6x4e["animation"]["effects"]["none"] || _0x96e6xb4 === true) ? 0 : _0x96e6x6["settings"]["animation"]["duration"]; var _0x96e6xb5 = _0x96e6x6["settings"]["autoContentHeight"]; var _0x96e6x27 = _0x96e6x1["zozo"]["core"]["support"]["css"]["transition"]; var _0x96e6xba = { _transition: "none", "min-height": _0x96e6x6["settings"]["original"]["contentMaxHeight"] + "px" }; if (_0x96e6xb4 === true) { _0x96e6x6["$container"]["css"](_0x96e6xba); } else { _0x96e6x86["animate"](_0x96e6x6, _0x96e6x6.$container, null, _0x96e6xba, {}); }; return _0x96e6x6; }, responsive: function (_0x96e6x6, _0x96e6x87) { var _0x96e6xbb = _0x96e6x1(_0x96e6x2)["width"](); var _0x96e6x8d = _0x96e6x86["isTop"](_0x96e6x6); var _0x96e6xaa = _0x96e6x86["isCompact"](_0x96e6x6); var _0x96e6xbc = _0x96e6x6["settings"]["original"]["initGroupWidth"] >= _0x96e6x6["$container"]["width"](); var _0x96e6xbd = _0x96e6x6["settings"]["original"]["rows"] > _0x96e6x6["settings"]["maxRows"]; var _0x96e6xbe = _0x96e6xbb <= _0x96e6x6["settings"]["minWindowWidth"]; var _0x96e6xbf = (!_0x96e6x6["BrowserDetection"]["isIE"](8) && _0x96e6x6["settings"]["mobileNav"] === true && _0x96e6x6["$mobileNav"] != null); var _0x96e6x84 = _0x96e6x6["settings"]["original"]["count"]; var _0x96e6xc0 = _0x96e6x6["settings"]["original"]["itemCount"]; var _0x96e6xc1 = _0x96e6x6["settings"]["original"]["itemD"]; var _0x96e6xc2 = _0x96e6x6["settings"]["original"]["rows"]; _0x96e6x6["$elem"]["removeClass"](_0x96e6x5d); _0x96e6x6["$tabs"]["removeClass"](_0x96e6x4e["classes"]["left"])["removeClass"](_0x96e6x4e["classes"]["right"])["removeClass"](_0x96e6x4e["classes"]["firstCol"])["removeClass"](_0x96e6x4e["classes"]["lastCol"])["removeClass"](_0x96e6x4e["classes"]["firstRow"])["removeClass"](_0x96e6x4e["classes"]["lastRow"]); if (_0x96e6x6["settings"]["orientation"] === _0x96e6x66) { var _0x96e6xc3 = (_0x96e6xaa && (parseInt(_0x96e6x6["settings"]["original"]["count"] * _0x96e6x6["settings"]["original"]["itemWidth"]) >= _0x96e6x6["$container"]["width"]())); var _0x96e6xc4 = (!_0x96e6xaa && _0x96e6xbc); var _0x96e6xc5 = _0x96e6xc3 || _0x96e6xc4; if (_0x96e6xc5) { (_0x96e6xc2 === _0x96e6x84 || (_0x96e6x6["settings"]["mode"] === _0x96e6x4e["modes"]["stacked"])) && (_0x96e6x6["$elem"]["addClass"](_0x96e6x5d)); _0x96e6x6["$tabs"]["each"](function (_0x96e6x16) { var _0x96e6xc6 = _0x96e6x1(this); var _0x96e6x83 = (_0x96e6x16 + 1); if (_0x96e6x6["settings"]["original"]["itemM"] > 0) { if (_0x96e6x83 <= _0x96e6xc0) { _0x96e6xc6["css"]({ "float": "", "width": _0x96e6x6["settings"]["original"]["firstRowWidth"] + "%" }); } else { _0x96e6xc6["css"]({ "float": "", "width": _0x96e6x6["settings"]["original"]["lastItem"] + "%" }); }; if (_0x96e6x8d === true) { (_0x96e6x16 === (_0x96e6xc1 - 1)) ? _0x96e6xc6["addClass"](_0x96e6x4e["classes"]["right"]) : _0x96e6xc6["removeClass"](_0x96e6x4e["classes"]["right"]); } else { (_0x96e6x83 === _0x96e6x84) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["right"])); (_0x96e6x16 === _0x96e6x6["settings"]["original"]["bottomLeft"]) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["left"])); }; if (_0x96e6xc2 > 1 && _0x96e6xc1 !== 1) { (_0x96e6x83 === 1 || (_0x96e6x83 > _0x96e6xc1 && (_0x96e6x83 % _0x96e6xc1 === 1))) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["firstCol"])); (_0x96e6x83 === _0x96e6x84 || (_0x96e6x83 >= _0x96e6xc1 && (_0x96e6x83 % _0x96e6xc1 === 0))) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["lastCol"])); (_0x96e6x83 <= _0x96e6xc1) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["firstRow"])); (_0x96e6x83 > (_0x96e6xc1 * (_0x96e6xc2 - 1))) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["lastRow"])); }; }; }); _0x96e6x86["switchResponsiveClasses"](_0x96e6x6, true); } else { if (_0x96e6xaa) { var _0x96e6xaf = 100 / _0x96e6x6["settings"]["original"]["count"]; _0x96e6x6["$tabs"]["each"](function () { _0x96e6x1(this)["css"]({ "float": "", "width": _0x96e6xaf + "%" }); }); } else { _0x96e6x6["$tabs"]["each"](function () { _0x96e6x1(this)["css"]({ "float": "", "width": "" }); }); }; _0x96e6x86["switchResponsiveClasses"](_0x96e6x6, false); }; if (_0x96e6xbb >= 1200 && _0x96e6x6["responsive"] != _0x96e6x4e["responsive"]["largeDesktop"]) { _0x96e6x6["responsive"] = _0x96e6x4e["responsive"]["largeDesktop"]; _0x96e6x86["switchMenu"](_0x96e6x6, false); }; if (_0x96e6x6["responsive"] != _0x96e6x4e["responsive"]["phone"] && _0x96e6xbf && ((_0x96e6xbe) || ((_0x96e6xbd)))) { _0x96e6x6["responsive"] = "auto"; _0x96e6x6["$elem"]["removeClass"](_0x96e6x72); _0x96e6x6["$tabs"]["each"](function () { _0x96e6x1(this)["css"]({ "width": "" }); }); _0x96e6x6["$tabs"]["filter"]("li:first-child")["addClass"](_0x96e6x4e["classes"]["first"]); _0x96e6x6["$tabs"]["filter"]("li:last-child")["addClass"](_0x96e6x4e["classes"]["last"]); _0x96e6x86["switchMenu"](_0x96e6x6, true); }; } else { if (_0x96e6xbf === true && (_0x96e6xbe || parseInt(_0x96e6x6["$elem"]["width"]() - _0x96e6x6["settings"]["original"]["itemWidth"]) < _0x96e6x6["settings"]["minWidth"])) { _0x96e6x86["switchMenu"](_0x96e6x6, true); } else { _0x96e6x86["switchMenu"](_0x96e6x6, false); }; }; _0x96e6x86["refreshParents"](_0x96e6x6, 0); }, switchResponsiveClasses: function (_0x96e6x6, _0x96e6xc7) { var _0x96e6x8d = _0x96e6x86["isTop"](_0x96e6x6); var _0x96e6xc8 = _0x96e6x6["settings"]["original"]["position"]; var _0x96e6xc9 = _0x96e6x4e["classes"]["positions"]["topLeft"]; var _0x96e6xca = _0x96e6x4e["classes"]["positions"]["bottomLeft"]; if (_0x96e6xc7 === true) { _0x96e6x6["$elem"]["addClass"](_0x96e6x72); _0x96e6x86["switchMenu"](_0x96e6x6, false); _0x96e6x6["$elem"]["removeClass"](_0x96e6xc8); } else { (_0x96e6x8d === true) ? _0x96e6x6["$elem"]["removeClass"](_0x96e6xc9)["addClass"](_0x96e6xc8) : _0x96e6x6["$elem"]["removeClass"](_0x96e6xca)["addClass"](_0x96e6xc8); _0x96e6x86["switchMenu"](_0x96e6x6, false); _0x96e6x6["$elem"]["removeClass"](_0x96e6x72); _0x96e6x6["$tabs"]["removeClass"](_0x96e6x4e["classes"]["last"])["filter"]("li:last-child")["addClass"](_0x96e6x4e["classes"]["last"]); }; }, switchMenu: function (_0x96e6x6, _0x96e6xcb) { var _0x96e6xcc = _0x96e6x4e["classes"]["themes"]; var _0x96e6xcd = _0x96e6x4e["classes"]["sizes"]; var _0x96e6x8c = _0x96e6x1["zozo"]["core"]["utils"]["toArray"](_0x96e6x4e["classes"]["positions"]); _0x96e6x6["$elem"]["removeClass"](_0x96e6xcc["join"](_0x96e6x4e["space"])); if (_0x96e6xcb === true) { (_0x96e6x6["$mobileNav"]) && _0x96e6x6["$mobileNav"]["addClass"](_0x96e6x4e["states"]["closed"])["show"](); _0x96e6x6["$tabGroup"]["addClass"]("z-hide-menu"); _0x96e6x6["$elem"]["addClass"](_0x96e6x6d); _0x96e6x6["$elem"]["removeClass"](_0x96e6x6["settings"]["orientation"]); _0x96e6x6["$elem"]["removeClass"](_0x96e6x6["settings"]["position"]); (_0x96e6x6["settings"]["style"] === _0x96e6x61) ? _0x96e6x6["$elem"]["addClass"]("m-" + _0x96e6x6["settings"]["theme"]) : _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["theme"]); } else { _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["orientation"]); _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["theme"]); _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["position"]); (_0x96e6x6["$mobileNav"]) && _0x96e6x6["$mobileNav"]["removeClass"](_0x96e6x4e["states"]["closed"]); _0x96e6x6["$tabGroup"]["removeClass"]("z-hide-menu"); _0x96e6x6["$tabs"]["filter"]("li:first-child")["addClass"](_0x96e6x4e["classes"]["first"]); _0x96e6x6["$elem"]["removeClass"](_0x96e6x6d); (_0x96e6x6["$mobileNav"]) && _0x96e6x6["$mobileNav"]["hide"](); }; }, initAutoPlay: function (_0x96e6x6) { if (_0x96e6x6["settings"]["autoplay"] !== false && _0x96e6x6["settings"]["autoplay"] != null) { if (_0x96e6x6["settings"]["autoplay"]["interval"] > 0) { _0x96e6x6["stop"](); _0x96e6x6["autoplayIntervalId"] = setInterval(function () { _0x96e6x6["next"](_0x96e6x6); }, _0x96e6x6["settings"]["autoplay"]["interval"]); } else { _0x96e6x6["stop"](); }; } else { _0x96e6x6["stop"](); }; }, changeHash: function (_0x96e6x6, _0x96e6x75) { var _0x96e6x76 = (_0x96e6x6["settings"]["deeplinkingPrefix"]) ? _0x96e6x6["settings"]["deeplinkingPrefix"] : _0x96e6x6["tabID"]; if (_0x96e6x6["settings"]["animating"] !== true) { if (_0x96e6x6["settings"]["deeplinking"] === true) { if (typeof (_0x96e6x1(_0x96e6x2)["hashchange"]) != "undefined") { _0x96e6x6["Deeplinking"]["set"](_0x96e6x76, _0x96e6x75, _0x96e6x6["settings"]["deeplinkingSeparator"], _0x96e6x6["settings"]["deeplinkingMode"]); } else { if (_0x96e6x6["BrowserDetection"]["isIE"](7)) { _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x75); } else { _0x96e6x6["Deeplinking"]["set"](_0x96e6x76, _0x96e6x75, _0x96e6x6["settings"]["deeplinkingSeparator"], _0x96e6x6["settings"]["deeplinkingMode"]); }; }; } else { _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x75); }; }; }, getFirst: function (_0x96e6x6) { return 0; }, getLast: function (_0x96e6x6) { if (_0x96e6x6["settings"]["noTabs"] === true) { return parseInt(_0x96e6x6["$container"]["children"]("div")["size"]() - 1); }; return parseInt(_0x96e6x6["$tabGroup"]["children"]("li")["size"]() - 1); }, isCompact: function (_0x96e6x6) { return (_0x96e6x6["settings"]["position"] === _0x96e6x4e["classes"]["positions"]["topCompact"] || _0x96e6x6["settings"]["position"] === _0x96e6x4e["classes"]["positions"]["bottomCompact"]); }, isTop: function (_0x96e6x6) { if (_0x96e6x6["settings"]["original"]["position"] === null) { _0x96e6x6["settings"]["original"]["position"] = _0x96e6x6["settings"]["position"]; }; return (_0x96e6x6["settings"]["original"]["position"]["indexOf"]("top") >= 0); }, isLightTheme: function (_0x96e6x6) { var _0x96e6xce = ["red", "deepblue", "blue", "green", "orange", "black"]; var _0x96e6xcf = true; var _0x96e6xd0 = _0x96e6x86["isFlatTheme"](_0x96e6x6); if (_0x96e6x6["settings"]["style"] !== _0x96e6x61) { (_0x96e6x1["inArray"](_0x96e6x6["settings"]["theme"], _0x96e6xce) > -1) && (_0x96e6xcf = false); (_0x96e6xd0) && (_0x96e6xcf = false); }; return _0x96e6xcf; }, isFlatTheme: function (_0x96e6x6) { return (_0x96e6x6["settings"]["theme"]["indexOf"]("flat") >= 0); }, isResponsive: function (_0x96e6x6) { return (_0x96e6x6["$elem"]["hasClass"](_0x96e6x72) === true); }, tabExist: function (_0x96e6x6, _0x96e6x75) { return (_0x96e6x6["$tabs"]["filter"]("li[" + _0x96e6x6["settings"]["hashAttribute"] + "=\x27" + _0x96e6x75 + "\x27]")["length"] > 0); }, isMobile: function (_0x96e6x6) { return (_0x96e6x6["$elem"]["hasClass"](_0x96e6x6d) === true); }, isTabDisabled: function (_0x96e6x1c) { return (_0x96e6x1c["hasClass"](_0x96e6x5c) || _0x96e6x1c["data"](_0x96e6x5a) === true); }, allowAutoScrolling: function (_0x96e6x6) { return (_0x96e6x6["settings"]["mobileAutoScrolling"] != null && _0x96e6x6["settings"]["mobileAutoScrolling"] != false); }, getElementSize: function (_0x96e6x8) { var _0x96e6xb6 = { width: 0, height: 0 }; if (_0x96e6x8 == null || _0x96e6x8["length"] == 0) { return _0x96e6xb6; }; if (_0x96e6x8["is"](":visible") === false) { _0x96e6xb6["height"] = _0x96e6x8["show"]()["find"]("\x3E.z-content-inner")["innerHeight"](); _0x96e6xb6["width"] = _0x96e6x8["show"]()["find"]("\x3E.z-content-inner")["outerWidth"](); if (_0x96e6xb6["height"] >= 0) { }; _0x96e6x8["hide"](); } else { _0x96e6xb6["height"] = _0x96e6x8["find"]("\x3E.z-content-inner")["innerHeight"](); _0x96e6xb6["width"] = _0x96e6x8["find"]("\x3E.z-content-inner")["outerWidth"](); if (_0x96e6xb6["height"] >= 0) { }; }; (_0x96e6x8["hasClass"]("z-video") && (_0x96e6xb6["height"] = _0x96e6x8["innerHeight"]())); return _0x96e6xb6; }, getWidth: function (_0x96e6xd1) { if (_0x96e6xd1 == null || _0x96e6xd1["length"] == 0) { return 0; }; _0x96e6xd1 = _0x96e6xd1["find"]("a"); var _0x96e6x17 = _0x96e6xd1["outerWidth"](); _0x96e6x17 += parseInt(_0x96e6xd1["css"]("margin-left"), 10) + parseInt(_0x96e6xd1["css"]("margin-right"), 10); _0x96e6x17 += parseInt(_0x96e6xd1["css"]("borderLeftWidth"), 10) + parseInt(_0x96e6xd1["css"]("borderRightWidth"), 10); return _0x96e6x17; }, isLarger: function (_0x96e6xd2, _0x96e6xd3) { var _0x96e6xd4 = _0x96e6xd2; if (_0x96e6xd2 < _0x96e6xd3) { _0x96e6xd4 = _0x96e6xd3; }; return _0x96e6xd4; } }; var _0x96e6xd5 = { init: function (_0x96e6x6, _0x96e6x94) { _0x96e6x6["$contents"]["hide"](); _0x96e6x94["content"]["css"]({ "opacity": "", "left": "", "top": "", "position": "relative" })["show"](); setTimeout(function () { _0x96e6x6["$container"]["find"](".z-tabs")["each"](function (_0x96e6x16, _0x96e6x74) { _0x96e6x1(_0x96e6x74)["data"]("zozoTabs")["refresh"](); }); _0x96e6x6["$elem"]["trigger"](_0x96e6x52, { tab: _0x96e6x94["tab"], content: _0x96e6x94["content"], index: _0x96e6x94["index"] }); _0x96e6x6["settings"]["animating"] = false; }, _0x96e6x94["duration"] >= 0 ? 200 : _0x96e6x94["duration"]); if (_0x96e6x6["settings"]["orientation"] === _0x96e6x65) { _0x96e6x86["setContentHeight"](_0x96e6x6, _0x96e6x94["content"], true); }; return _0x96e6x6; }, before: function (_0x96e6x6, _0x96e6x94) { setTimeout(function () { _0x96e6x94["content"]["find"](".z-tabs")["each"](function (_0x96e6x16, _0x96e6x74) { _0x96e6x1(_0x96e6x74)["data"]("zozoTabs")["refresh"](); }); }, 50); if (_0x96e6x6["settings"]["animation"]["effects"] !== _0x96e6x4e["animation"]["effects"]["none"]) { _0x96e6x86["setContentHeight"](_0x96e6x6, _0x96e6x94["preContent"], true); _0x96e6x86["setContentHeight"](_0x96e6x6, _0x96e6x94["content"]); }; _0x96e6x6["$container"]["addClass"](_0x96e6x70); _0x96e6x94["preContent"]["css"]({ "position": "absolute", "display": "block", "left": 0, "top": 0 }); _0x96e6x94["content"]["css"]({ "position": "absolute", "display": "block" }); return _0x96e6x6; }, after: function (_0x96e6x6, _0x96e6x94) { setTimeout(function () { _0x96e6x94["content"]["css"]({ "position": "relative" }); _0x96e6x94["preContent"]["css"]({ "display": "none" }); }, _0x96e6x94["duration"]); _0x96e6x6["$contents"]["each"](function (_0x96e6x16, _0x96e6x74) { if (_0x96e6x94["index"] != _0x96e6x16 && _0x96e6x94["preIndex"] != _0x96e6x16) { _0x96e6x1(_0x96e6x74)["css"]({ _transition: "", "position": "", "display": "", "left": "", "top": "" }); }; }); setTimeout(function () { _0x96e6x6["$elem"]["trigger"](_0x96e6x52, { tab: _0x96e6x94["tab"], content: _0x96e6x94["content"], index: _0x96e6x94["index"] }); _0x96e6x6["$elem"]["trigger"](_0x96e6x54, { tab: _0x96e6x94["preTab"], content: _0x96e6x94["preContent"], index: _0x96e6x94["preIndex"] }); var _0x96e6xba = (_0x96e6x6["settings"]["orientation"] === _0x96e6x65) ? { "height": "" } : { "height": "", "min-height": "", "overflow": "" }; _0x96e6x6["$container"]["css"](_0x96e6xba); _0x96e6x6["$container"]["removeClass"](_0x96e6x70); setTimeout(function () { _0x96e6x6["$contents"]["removeClass"](_0x96e6x4e["classes"]["active"])["eq"](_0x96e6x94["index"])["addClass"](_0x96e6x4e["classes"]["active"]); _0x96e6x6["settings"]["animating"] = false; _0x96e6x6["$contents"]["stop"](true, true); }); }, _0x96e6x94["duration"] + 50); return _0x96e6x6; } }; _0x96e6x4b["defaults"] = _0x96e6x4b["prototype"]["defaults"]; _0x96e6x1["fn"]["zozoTabs"] = function (_0x96e6x4d) { return this["each"](function () { if (_0x96e6x4 == _0x96e6x1(this)["data"](_0x96e6x4e["pluginName"])) { var _0x96e6xd6 = new _0x96e6x4b(this, _0x96e6x4d)["init"](); _0x96e6x1(this)["data"](_0x96e6x4e["pluginName"], _0x96e6xd6); }; }); }; _0x96e6x2["zozo"]["tabs"] = _0x96e6x4b; _0x96e6x1(_0x96e6x3)["ready"](function () { _0x96e6x1("[data-role=\x27z-tabs\x27]")["each"](function (_0x96e6x16, _0x96e6x74) { if (!_0x96e6x1(_0x96e6x74)["zozoTabs"]()) { _0x96e6x1(_0x96e6x74)["zozoTabs"](); }; }); }); })(jQuery, window, document);
/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

if (typeof Object.create !== "function") {
	'use strict';

    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {

    var Carousel = {
        init : function (options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn : function () {
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
            base.$elem.data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars : function () {
            var base = this;
            if (base.$elem.children().length === 0) {return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars : function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload : function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass : function () {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function () {
            var base = this, width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response : function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll : function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max : function () {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons : function () {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination : function () {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function () {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function () {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo : function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function () {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop : function () {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp : function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play : function () {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next(true);
            }, base.options.autoPlay);
        },

        swapSpeed : function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function (value) {
            var base = this;
            base.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base.options.slideSpeed,
                complete : function () {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                  "; -ms-transform:"     + translate3D +
                                  "; -o-transform:"      + translate3D +
                                  "; -webkit-transform:" + translate3D +
                                  "; transform:"         + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes : function () {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition : function () {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function () {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function () {
                    base.stop();
                });
                base.$elem.on("mouseout", function () {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        },

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function (className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function () {
            var base = this;
            base.owl = {
                "userOptions"   : base.userOptions,
                "baseElement"   : base.$elem,
                "userItems"     : base.$userItems,
                "owlItems"      : base.$owlItems,
                "currentItem"   : base.currentItem,
                "prevItem"      : base.prevItem,
                "visibleItems"  : base.visibleItems,
                "isTouch"       : base.browser.isTouch,
                "browser"       : base.browser,
                "dragDirection" : base.dragDirection
            };
        },

        clearEvents : function () {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) {return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function (targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [992, 2],
        itemsTablet : [600, 1],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));
/*!
 * Cube Portfolio - Responsive jQuery Grid Plugin
 *
 * version: 3.6.0 (18 March, 2016)
 * require: jQuery v1.7+
 *
 * Copyright 2013-2016, Mihai Buricea (http://scriptpie.com/cubeportfolio/live-preview/)
 * Licensed under CodeCanyon License (http://codecanyon.net/licenses)
 *
 */
!function(a,b,c,d){"use strict";function e(b,c,d){var f,g=this,h="cbp";if(a.data(b,"cubeportfolio"))throw new Error("cubeportfolio is already initialized. Destroy it before initialize again!");g.obj=b,g.$obj=a(b),a.data(g.obj,"cubeportfolio",g),g.options=a.extend({},a.fn.cubeportfolio.options,c,g.$obj.data("cbp-options")),g.isAnimating=!0,g.defaultFilter=g.options.defaultFilter,g.registeredEvents=[],g.queue=[],g.addedWrapp=!1,a.isFunction(d)&&g.registerEvent("initFinish",d,!0),f=g.$obj.children(),g.options.caption&&("expand"===g.options.caption||e["private"].modernBrowser||(g.options.caption="minimal"),h+=" cbp-caption-active cbp-caption-"+g.options.caption),g.$obj.addClass(h),(0===f.length||f.first().hasClass("cbp-item"))&&(g.wrapInner(g.obj,"cbp-wrapper"),g.addedWrapp=!0),g.$ul=g.$obj.children().addClass("cbp-wrapper"),g.wrapInner(g.obj,"cbp-wrapper-outer"),g.wrapper=g.$obj.children(".cbp-wrapper-outer"),g.blocks=g.$ul.children(".cbp-item"),g.blocksOn=g.blocks,g.wrapInner(g.blocks,"cbp-item-wrapper"),g.plugins=a.map(e.plugins,function(a){return a(g)}),g.triggerEvent("afterPlugins"),g.loadImages(g.$obj,g.display)}a.extend(e.prototype,{storeData:function(b,c){var d=this;c=c||0,b.each(function(b,e){var f=a(e),g=f.width(),h=f.height();f.data("cbp",{index:c+b,wrapper:f.children(".cbp-item-wrapper"),widthInitial:g,heightInitial:h,width:g,height:h,widthAndGap:g+d.options.gapVertical,heightAndGap:h+d.options.gapHorizontal,left:null,leftNew:null,top:null,topNew:null,pack:!1})})},wrapInner:function(a,b){var e,f,g;if(b=b||"",!(a.length&&a.length<1))for(a.length===d&&(a=[a]),f=a.length-1;f>=0;f--){for(e=a[f],g=c.createElement("div"),g.setAttribute("class",b);e.childNodes.length;)g.appendChild(e.childNodes[0]);e.appendChild(g)}},removeAttrImage:function(a){a.removeAttribute("width"),a.removeAttribute("height"),a.removeAttribute("style")},loadImages:function(b,c){var d=this;requestAnimationFrame(function(){var e=b.find("img").map(function(b,c){return c.hasAttribute("width")&&c.hasAttribute("height")?(c.style.width=c.getAttribute("width")+"px",c.style.height=c.getAttribute("height")+"px",c.hasAttribute("data-cbp-src")?null:(null===d.checkSrc(c.src)?d.removeAttrImage(c):a("<img>").on("load.cbp error.cbp",function(){d.removeAttrImage(c)}).attr("src",c.src),null)):d.checkSrc(c.src)}),f=e.length;return 0===f?void c.call(d):void a.each(e,function(b,e){a("<img>").on("load.cbp error.cbp",function(){f--,0===f&&c.call(d)}).attr("src",e)})})},checkSrc:function(a){if(""===a)return null;var b=new Image;return b.src=a,b.complete&&b.naturalWidth!==d&&0!==b.naturalWidth?null:a},display:function(){var a=this;a.width=a.$obj.outerWidth(),a.storeData(a.blocks),a.triggerEvent("initStartRead"),a.triggerEvent("initStartWrite"),a.layoutAndAdjustment(),a.triggerEvent("initEndRead"),a.triggerEvent("initEndWrite"),a.$obj.addClass("cbp-ready"),a.runQueue("delayFrame",a.delayFrame)},delayFrame:function(){var a=this;requestAnimationFrame(function(){a.resizeEvent(),a.triggerEvent("initFinish"),a.isAnimating=!1,a.$obj.trigger("initComplete.cbp")})},resizeEvent:function(){var a,b=this;e["private"].initResizeEvent({instance:b,fn:function(){var b=this;b.triggerEvent("beforeResizeGrid"),a=b.$obj.outerWidth(),b.width!==a&&("alignCenter"===b.options.gridAdjustment&&(b.wrapper[0].style.maxWidth=""),b.width=a,b.layoutAndAdjustment(),b.triggerEvent("resizeGrid")),b.triggerEvent("resizeWindow")}})},gridAdjust:function(){var b=this;"responsive"===b.options.gridAdjustment?b.responsiveLayout():(b.blocks.removeAttr("style"),b.blocks.each(function(c,d){var e=a(d).data("cbp"),f=d.getBoundingClientRect(),g=b.columnWidthTruncate(f.right-f.left),h=Math.round(f.bottom-f.top);e.height=h,e.heightAndGap=h+b.options.gapHorizontal,e.width=g,e.widthAndGap=g+b.options.gapVertical}),b.widthAvailable=b.width+b.options.gapVertical),b.triggerEvent("gridAdjust")},layoutAndAdjustment:function(){var a=this;a.gridAdjust(),a.layout()},layout:function(){var a=this;a.computeBlocks(a.filterConcat(a.defaultFilter)),"slider"===a.options.layoutMode?(a.sliderLayoutReset(),a.sliderLayout()):(a.mosaicLayoutReset(),a.mosaicLayout()),a.positionateItems(),a.resizeMainContainer()},computeFilter:function(a){var b=this;b.computeBlocks(a),b.mosaicLayoutReset(),b.mosaicLayout(),b.filterLayout()},filterLayout:function(){var b=this;b.blocksOff.addClass("cbp-item-off"),b.blocksOn.removeClass("cbp-item-off").each(function(b,c){var d=a(c).data("cbp");d.left=d.leftNew,d.top=d.topNew,c.style.left=d.left+"px",c.style.top=d.top+"px"}),b.resizeMainContainer(),b.filterFinish()},filterFinish:function(){var a=this;a.blocksAreSorted&&a.sortBlocks(a.blocks,"index"),a.isAnimating=!1,a.$obj.trigger("filterComplete.cbp"),a.triggerEvent("filterFinish")},computeBlocks:function(a){var b=this;b.blocksOnInitial=b.blocksOn,b.blocksOn=b.blocks.filter(a),b.blocksOff=b.blocks.not(a),b.triggerEvent("computeBlocksFinish",a)},responsiveLayout:function(){var b=this;b.cols=b[a.isArray(b.options.mediaQueries)?"getColumnsBreakpoints":"getColumnsAuto"](),b.columnWidth=b.columnWidthTruncate((b.width+b.options.gapVertical)/b.cols),b.widthAvailable=b.columnWidth*b.cols,"mosaic"===b.options.layoutMode&&b.getMosaicWidthReference(),b.blocks.each(function(c,d){var e,f=a(d).data("cbp"),g=1;"mosaic"===b.options.layoutMode&&(g=b.getColsMosaic(f.widthInitial)),e=b.columnWidth*g-b.options.gapVertical,d.style.width=e+"px",f.width=e,f.widthAndGap=e+b.options.gapVertical,d.style.height=""});var c=[];b.blocks.each(function(b,d){var e=a(d),f=e.data("cbp").width;a.each(e.find("img").filter("[width][height]"),function(a,b){var d=f/parseInt(b.getAttribute("width"),10);c.push({el:b,width:f,height:Math.floor(parseInt(b.getAttribute("height"),10)*d)})})}),a.each(c,function(a,b){b.el.width=b.width,b.el.height=b.height,b.el.style.width=b.width+"px",b.el.style.height=b.height+"px"}),b.blocks.each(function(c,d){var e=a(d).data("cbp"),f=d.getBoundingClientRect(),g=Math.round(f.bottom-f.top);e.height=g,e.heightAndGap=g+b.options.gapHorizontal})},getMosaicWidthReference:function(){var b=this,c=[];b.blocks.each(function(b,d){var e=a(d).data("cbp");c.push(e.widthInitial)}),c.sort(function(a,b){return a-b}),c[0]?b.mosaicWidthReference=c[0]:b.mosaicWidthReference=b.columnWidth},getColsMosaic:function(a){var b=this;if(a===b.width)return b.cols;var c=a/b.mosaicWidthReference;return c=c%1>=.79?Math.ceil(c):Math.floor(c),Math.min(Math.max(c,1),b.cols)},getColumnsAuto:function(){var a=this;if(0===a.blocks.length)return 1;var b=a.blocks.first().data("cbp").widthInitial+a.options.gapVertical;return Math.max(Math.round(a.width/b),1)},getColumnsBreakpoints:function(){var b,c=this,e=c.width;return a.each(c.options.mediaQueries,function(a,c){return e>=c.width?(b=c.cols,!1):void 0}),b===d&&(b=c.options.mediaQueries[c.options.mediaQueries.length-1].cols),b},columnWidthTruncate:function(a){return Math.floor(a)},positionateItems:function(){var b,c=this;c.blocksOn.removeClass("cbp-item-off").each(function(c,d){b=a(d).data("cbp"),b.left=b.leftNew,b.top=b.topNew,d.style.left=b.left+"px",d.style.top=b.top+"px"}),c.blocksOff.addClass("cbp-item-off"),c.blocksAreSorted&&c.sortBlocks(c.blocks,"index")},resizeMainContainer:function(){var b,c=this,f=Math.max(c.freeSpaces.slice(-1)[0].topStart-c.options.gapHorizontal,0);return"alignCenter"===c.options.gridAdjustment&&(b=0,c.blocksOn.each(function(c,d){var e=a(d).data("cbp"),f=e.left+e.width;f>b&&(b=f)}),c.wrapper[0].style.maxWidth=b+"px"),f===c.height?void c.triggerEvent("resizeMainContainer"):(c.obj.style.height=f+"px",c.height!==d&&(e["private"].modernBrowser?c.$obj.one(e["private"].transitionend,function(){c.$obj.trigger("pluginResize.cbp")}):c.$obj.trigger("pluginResize.cbp")),c.height=f,void c.triggerEvent("resizeMainContainer"))},filterConcat:function(a){return a.replace(/\|/gi,"")},pushQueue:function(a,b){var c=this;c.queue[a]=c.queue[a]||[],c.queue[a].push(b)},runQueue:function(b,c){var d=this,e=d.queue[b]||[];a.when.apply(a,e).then(a.proxy(c,d))},clearQueue:function(a){var b=this;b.queue[a]=[]},registerEvent:function(a,b,c){var d=this;d.registeredEvents[a]||(d.registeredEvents[a]=[]),d.registeredEvents[a].push({func:b,oneTime:c||!1})},triggerEvent:function(a,b){var c,d,e=this;if(e.registeredEvents[a])for(c=0,d=e.registeredEvents[a].length;d>c;c++)e.registeredEvents[a][c].func.call(e,b),e.registeredEvents[a][c].oneTime&&(e.registeredEvents[a].splice(c,1),c--,d--)},addItems:function(b,c,d){var f=this;f.wrapInner(b,"cbp-item-wrapper"),f.$ul[d](b.addClass("cbp-item-loading").css({top:"100%",left:0})),e["private"].modernBrowser?b.last().one(e["private"].animationend,function(){f.addItemsFinish(b,c)}):f.addItemsFinish(b,c),f.loadImages(b,function(){if(f.$obj.addClass("cbp-updateItems"),"append"===d)f.storeData(b,f.blocks.length),a.merge(f.blocks,b);else{f.storeData(b);var c=b.length;f.blocks.each(function(b,d){a(d).data("cbp").index=c+b}),f.blocks=a.merge(b,f.blocks)}f.triggerEvent("addItemsToDOM",b),f.layoutAndAdjustment(),f.elems&&e["public"].showCounter.call(f.obj,f.elems)})},addItemsFinish:function(b,c){var d=this;d.isAnimating=!1,d.$obj.removeClass("cbp-updateItems"),b.removeClass("cbp-item-loading"),a.isFunction(c)&&c.call(d,b)},removeItems:function(b,c){var d=this;d.$obj.addClass("cbp-updateItems"),e["private"].modernBrowser?b.last().one(e["private"].animationend,function(){d.removeItemsFinish(b,c)}):d.removeItemsFinish(b,c),b.each(function(b,c){d.blocks.each(function(b,f){if(c===f){var g=a(f);d.blocks.splice(b,1),e["private"].modernBrowser?(g.one(e["private"].animationend,function(){g.remove()}),g.addClass("cbp-removeItem")):g.remove()}})}),d.blocks.each(function(b,c){a(c).data("cbp").index=b}),d.layoutAndAdjustment(),d.elems&&e["public"].showCounter.call(d.obj,d.elems)},removeItemsFinish:function(b,c){var d=this;d.isAnimating=!1,d.$obj.removeClass("cbp-updateItems"),a.isFunction(c)&&c.call(d,b)}}),a.fn.cubeportfolio=function(a,b,c){return this.each(function(){if("object"==typeof a||!a)return e["public"].init.call(this,a,b);if(e["public"][a])return e["public"][a].call(this,b,c);throw new Error("Method "+a+" does not exist on jquery.cubeportfolio.js")})},e.plugins={},a.fn.cubeportfolio.constructor=e}(jQuery,window,document),function(a,b,c,d){"use strict";var e=a.fn.cubeportfolio.constructor;a.extend(e.prototype,{mosaicLayoutReset:function(){var b=this;b.blocksAreSorted=!1,b.blocksOn.each(function(b,c){a(c).data("cbp").pack=!1})},mosaicLayout:function(){var a,b=this,c=b.blocksOn.length,d={};for(b.freeSpaces=[{leftStart:0,leftEnd:b.widthAvailable,topStart:0,topEnd:Math.pow(2,18)}],a=0;c>a;a++){if(d=b.getSpaceIndexAndBlock(),null===d)return b.sortBlocksToPreventGaps(),void b.mosaicLayout();b.generateF1F2(d.spaceIndex,d.dataBlock),b.generateG1G2G3G4(d.dataBlock),b.cleanFreeSpaces(),b.addHeightToBlocks()}b.blocksAreSorted&&b.sortBlocks(b.blocksOn,"topNew")},getSpaceIndexAndBlock:function(){var b=this,c=null;return a.each(b.freeSpaces,function(d,e){var f=e.leftEnd-e.leftStart,g=e.topEnd-e.topStart;return b.blocksOn.each(function(b,h){var i=a(h).data("cbp");if(i.pack!==!0)return i.widthAndGap<=f&&i.heightAndGap<=g?(i.pack=!0,c={spaceIndex:d,dataBlock:i},i.leftNew=e.leftStart,i.topNew=e.topStart,!1):void 0}),!b.blocksAreSorted&&b.options.sortToPreventGaps&&d>0?(c=null,!1):null!==c?!1:void 0}),c},generateF1F2:function(a,b){var c=this,d=c.freeSpaces[a],e={leftStart:d.leftStart+b.widthAndGap,leftEnd:d.leftEnd,topStart:d.topStart,topEnd:d.topEnd},f={leftStart:d.leftStart,leftEnd:d.leftEnd,topStart:d.topStart+b.heightAndGap,topEnd:d.topEnd};c.freeSpaces.splice(a,1),e.leftEnd>e.leftStart&&e.topEnd>e.topStart&&(c.freeSpaces.splice(a,0,e),a++),f.leftEnd>f.leftStart&&f.topEnd>f.topStart&&c.freeSpaces.splice(a,0,f)},generateG1G2G3G4:function(b){var c=this,d=[];a.each(c.freeSpaces,function(a,e){var f=c.intersectSpaces(e,b);return null===f?void d.push(e):(c.generateG1(e,f,d),c.generateG2(e,f,d),c.generateG3(e,f,d),void c.generateG4(e,f,d))}),c.freeSpaces=d},intersectSpaces:function(a,b){var c={leftStart:b.leftNew,leftEnd:b.leftNew+b.widthAndGap,topStart:b.topNew,topEnd:b.topNew+b.heightAndGap};if(a.leftStart===c.leftStart&&a.leftEnd===c.leftEnd&&a.topStart===c.topStart&&a.topEnd===c.topEnd)return null;var d=Math.max(a.leftStart,c.leftStart),e=Math.min(a.leftEnd,c.leftEnd),f=Math.max(a.topStart,c.topStart),g=Math.min(a.topEnd,c.topEnd);return d>=e||f>=g?null:{leftStart:d,leftEnd:e,topStart:f,topEnd:g}},generateG1:function(a,b,c){a.topStart!==b.topStart&&c.push({leftStart:a.leftStart,leftEnd:a.leftEnd,topStart:a.topStart,topEnd:b.topStart})},generateG2:function(a,b,c){a.leftEnd!==b.leftEnd&&c.push({leftStart:b.leftEnd,leftEnd:a.leftEnd,topStart:a.topStart,topEnd:a.topEnd})},generateG3:function(a,b,c){a.topEnd!==b.topEnd&&c.push({leftStart:a.leftStart,leftEnd:a.leftEnd,topStart:b.topEnd,topEnd:a.topEnd})},generateG4:function(a,b,c){a.leftStart!==b.leftStart&&c.push({leftStart:a.leftStart,leftEnd:b.leftStart,topStart:a.topStart,topEnd:a.topEnd})},cleanFreeSpaces:function(){var a=this;a.freeSpaces.sort(function(a,b){return a.topStart>b.topStart?1:a.topStart<b.topStart?-1:a.leftStart>b.leftStart?1:a.leftStart<b.leftStart?-1:0}),a.correctSubPixelValues(),a.removeNonMaximalFreeSpaces()},correctSubPixelValues:function(){var a,b,c,d,e=this;for(a=0,b=e.freeSpaces.length-1;b>a;a++)c=e.freeSpaces[a],d=e.freeSpaces[a+1],d.topStart-c.topStart<=1&&(d.topStart=c.topStart)},removeNonMaximalFreeSpaces:function(){var b=this;b.uniqueFreeSpaces(),b.freeSpaces=a.map(b.freeSpaces,function(c,d){return a.each(b.freeSpaces,function(a,b){return d!==a&&b.leftStart<=c.leftStart&&b.leftEnd>=c.leftEnd&&b.topStart<=c.topStart&&b.topEnd>=c.topEnd?(c=null,!1):void 0}),c})},uniqueFreeSpaces:function(){var b=this,c=[];a.each(b.freeSpaces,function(b,d){a.each(c,function(a,b){return b.leftStart===d.leftStart&&b.leftEnd===d.leftEnd&&b.topStart===d.topStart&&b.topEnd===d.topEnd?(d=null,!1):void 0}),null!==d&&c.push(d)}),b.freeSpaces=c},addHeightToBlocks:function(){var b=this;if(!(b.freeSpaces.length>1)){var c=b.freeSpaces[0].topStart;b.blocksOn.each(function(b,d){var e=a(d).data("cbp");if(e.pack===!0){var f=c-e.topNew-e.heightAndGap;0>f&&(d.style.height=e.height+f+"px")}})}},sortBlocksToPreventGaps:function(){var b=this;b.blocksAreSorted=!0,b.blocksOn.sort(function(b,c){var d=a(b).data("cbp"),e=a(c).data("cbp");return d.widthAndGap<e.widthAndGap?1:d.widthAndGap>e.widthAndGap?-1:d.heightAndGap<e.heightAndGap?1:d.heightAndGap>e.heightAndGap?-1:d.index>e.index?1:d.index<e.index?-1:void 0}),b.blocksOn.each(function(b,c){a(c).data("cbp").pack=!1,c.style.height=""})},sortBlocks:function(b,c){b.sort(function(b,d){var e=a(b).data("cbp"),f=a(d).data("cbp");return e[c]>f[c]?1:e[c]<f[c]?-1:e.leftNew>f.leftNew?1:e.leftNew<f.leftNew?-1:0})}})}(jQuery,window,document),jQuery.fn.cubeportfolio.options={filters:"",loadMore:"",loadMoreAction:"click",search:"",layoutMode:"grid",sortToPreventGaps:!1,drag:!0,auto:!1,autoTimeout:5e3,autoPauseOnHover:!0,showNavigation:!0,showPagination:!0,rewindNav:!0,scrollByPage:!1,defaultFilter:"*",filterDeeplinking:!1,animationType:"fadeOut",gridAdjustment:"responsive",mediaQueries:!1,gapHorizontal:10,gapVertical:10,caption:"pushTop",displayType:"fadeIn",displayTypeSpeed:400,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',singlePageDelegate:".cbp-singlePage",singlePageDeeplinking:!0,singlePageStickyNavigation:!0,singlePageCounter:'<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',singlePageAnimation:"left",singlePageCallback:null,singlePageInlineDelegate:".cbp-singlePageInline",singlePageInlineDeeplinking:!1,singlePageInlinePosition:"top",singlePageInlineInFocus:!0,singlePageInlineCallback:null,plugins:{}},function(a,b,c,d){"use strict";var e=a.fn.cubeportfolio.constructor;e["private"]={resizeEventArray:[],initResizeEvent:function(a){var b=e["private"];0===b.resizeEventArray.length&&b.resizeEvent(),b.resizeEventArray.push(a)},destroyResizeEvent:function(c){var d=e["private"],f=a.map(d.resizeEventArray,function(a,b){return a.instance!==c?a:void 0});d.resizeEventArray=f,0===d.resizeEventArray.length&&a(b).off("resize.cbp")},resizeEvent:function(){var c,d=e["private"];a(b).on("resize.cbp",function(){clearTimeout(c),c=setTimeout(function(){b.innerHeight!=screen.height&&a.each(d.resizeEventArray,function(a,b){b.fn.call(b.instance)})},50)})},checkInstance:function(b){var c=a.data(this,"cubeportfolio");if(!c)throw new Error("cubeportfolio is not initialized. Initialize it before calling "+b+" method!");return c.triggerEvent("publicMethod"),c},browserInfo:function(){var a,c,f,g=e["private"],h=navigator.appVersion;-1!==h.indexOf("MSIE 8.")?g.browser="ie8":-1!==h.indexOf("MSIE 9.")?g.browser="ie9":-1!==h.indexOf("MSIE 10.")?g.browser="ie10":b.ActiveXObject||"ActiveXObject"in b?g.browser="ie11":/android/gi.test(h)?g.browser="android":/iphone|ipad|ipod/gi.test(h)?g.browser="ios":/chrome/gi.test(h)?g.browser="chrome":g.browser="",f=g.styleSupport("perspective"),typeof f!==d&&(a=g.styleSupport("transition"),g.transitionend={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],c=g.styleSupport("animation"),g.animationend={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"}[c],g.animationDuration={WebkitAnimation:"webkitAnimationDuration",animation:"animationDuration"}[c],g.animationDelay={WebkitAnimation:"webkitAnimationDelay",animation:"animationDelay"}[c],g.transform=g.styleSupport("transform"),a&&c&&g.transform&&(g.modernBrowser=!0))},styleSupport:function(a){var b,d="Webkit"+a.charAt(0).toUpperCase()+a.slice(1),e=c.createElement("div");return a in e.style?b=a:d in e.style&&(b=d),e=null,b}},e["private"].browserInfo()}(jQuery,window,document),function(a,b,c,d){"use strict";var e=a.fn.cubeportfolio.constructor;e["public"]={init:function(a,b){new e(this,a,b)},destroy:function(b){var c=e["private"].checkInstance.call(this,"destroy");c.triggerEvent("beforeDestroy"),a.removeData(this,"cubeportfolio"),c.blocks.removeData("cbp"),c.$obj.removeClass("cbp-ready").removeAttr("style"),c.$ul.removeClass("cbp-wrapper"),e["private"].destroyResizeEvent(c),c.$obj.off(".cbp"),c.blocks.removeClass("cbp-item-off").removeAttr("style"),c.blocks.find(".cbp-item-wrapper").children().unwrap(),c.options.caption&&c.$obj.removeClass("cbp-caption-active cbp-caption-"+c.options.caption),c.destroySlider(),c.$ul.unwrap(),c.addedWrapp&&c.blocks.unwrap(),a.each(c.plugins,function(a,b){"function"==typeof b.destroy&&b.destroy()}),a.isFunction(b)&&b.call(c),c.triggerEvent("afterDestroy")},filter:function(b,c){var f,g=e["private"].checkInstance.call(this,"filter");if(!g.isAnimating){if(g.isAnimating=!0,a.isFunction(c)&&g.registerEvent("filterFinish",c,!0),a.isFunction(b)){if(f=b.call(g,g.blocks),f===d)throw new Error("When you call cubeportfolio API `filter` method with a param of type function you must return the blocks that will be visible.")}else{if(g.options.filterDeeplinking){var h=location.href.replace(/#cbpf=(.*?)([#\?&]|$)/gi,"");location.href=h+"#cbpf="+encodeURIComponent(b),g.singlePage&&g.singlePage.url&&(g.singlePage.url=location.href)}g.defaultFilter=b,f=g.filterConcat(g.defaultFilter)}g.singlePageInline&&g.singlePageInline.isOpen?g.singlePageInline.close("promise",{callback:function(){g.computeFilter(f)}}):g.computeFilter(f)}},showCounter:function(b,c){var d=e["private"].checkInstance.call(this,"showCounter");a.isFunction(c)&&d.registerEvent("showCounterFinish",c,!0),d.elems=b,b.each(function(){var b=a(this),c=d.blocks.filter(b.data("filter")).length;b.find(".cbp-filter-counter").text(c)}),d.triggerEvent("showCounterFinish",b)},appendItems:function(a,b){e["public"].append.call(this,a,b)},append:function(b,c){var d=e["private"].checkInstance.call(this,"append"),f=a(b).filter(".cbp-item");return d.isAnimating||f.length<1?void(a.isFunction(c)&&c.call(d,f)):(d.isAnimating=!0,void(d.singlePageInline&&d.singlePageInline.isOpen?d.singlePageInline.close("promise",{callback:function(){d.addItems(f,c,"append")}}):d.addItems(f,c,"append")))},prepend:function(b,c){var d=e["private"].checkInstance.call(this,"prepend"),f=a(b).filter(".cbp-item");return d.isAnimating||f.length<1?void(a.isFunction(c)&&c.call(d,f)):(d.isAnimating=!0,void(d.singlePageInline&&d.singlePageInline.isOpen?d.singlePageInline.close("promise",{callback:function(){d.addItems(f,c,"prepend")}}):d.addItems(f,c,"prepend")))},remove:function(b,c){var d=e["private"].checkInstance.call(this,"remove"),f=a(b).filter(".cbp-item");return d.isAnimating||f.length<1?void(a.isFunction(c)&&c.call(d,f)):(d.isAnimating=!0,void(d.singlePageInline&&d.singlePageInline.isOpen?d.singlePageInline.close("promise",{callback:function(){d.removeItems(f,c)}}):d.removeItems(f,c)))}}}(jQuery,window,document),function(a,b,c,d){"use strict";var e=a.fn.cubeportfolio.constructor;a.extend(e.prototype,{updateSliderPagination:function(){var b,c,d=this;if(d.options.showPagination){for(b=Math.ceil(d.blocksOn.length/d.cols),d.navPagination.empty(),c=b-1;c>=0;c--)a("<div/>",{"class":"cbp-nav-pagination-item","data-slider-action":"jumpTo"}).appendTo(d.navPagination);d.navPaginationItems=d.navPagination.children()}d.enableDisableNavSlider()},destroySlider:function(){var b=this;"slider"===b.options.layoutMode&&(b.$obj.removeClass("cbp-mode-slider"),b.$ul.removeAttr("style"),b.$ul.off(".cbp"),a(c).off(".cbp"),b.options.auto&&b.stopSliderAuto())},nextSlider:function(a){var b=this;if(b.isEndSlider()){if(!b.isRewindNav())return;b.sliderActive=0}else b.options.scrollByPage?b.sliderActive=Math.min(b.sliderActive+b.cols,b.blocksOn.length-b.cols):b.sliderActive+=1;b.goToSlider()},prevSlider:function(a){var b=this;if(b.isStartSlider()){if(!b.isRewindNav())return;b.sliderActive=b.blocksOn.length-b.cols}else b.options.scrollByPage?b.sliderActive=Math.max(0,b.sliderActive-b.cols):b.sliderActive-=1;b.goToSlider()},jumpToSlider:function(a){var b=this,c=Math.min(a.index()*b.cols,b.blocksOn.length-b.cols);c!==b.sliderActive&&(b.sliderActive=c,b.goToSlider())},jumpDragToSlider:function(a){var b,c,d,e=this,f=a>0?!0:!1;e.options.scrollByPage?(b=e.cols*e.columnWidth,c=e.cols):(b=e.columnWidth,c=1),a=Math.abs(a),d=Math.floor(a/b)*c,a%b>20&&(d+=c),f?e.sliderActive=Math.min(e.sliderActive+d,e.blocksOn.length-e.cols):e.sliderActive=Math.max(0,e.sliderActive-d),e.goToSlider()},isStartSlider:function(){return 0===this.sliderActive},isEndSlider:function(){var a=this;return a.sliderActive+a.cols>a.blocksOn.length-1},goToSlider:function(){var a=this;a.enableDisableNavSlider(),a.updateSliderPosition()},startSliderAuto:function(){var a=this;return a.isDrag?void a.stopSliderAuto():void(a.timeout=setTimeout(function(){a.nextSlider(),a.startSliderAuto()},a.options.autoTimeout))},stopSliderAuto:function(){clearTimeout(this.timeout)},enableDisableNavSlider:function(){var a,b,c=this;c.isRewindNav()||(b=c.isStartSlider()?"addClass":"removeClass",c.navPrev[b]("cbp-nav-stop"),b=c.isEndSlider()?"addClass":"removeClass",c.navNext[b]("cbp-nav-stop")),c.options.showPagination&&(a=c.options.scrollByPage?Math.ceil(c.sliderActive/c.cols):c.isEndSlider()?c.navPaginationItems.length-1:Math.floor(c.sliderActive/c.cols),c.navPaginationItems.removeClass("cbp-nav-pagination-active").eq(a).addClass("cbp-nav-pagination-active")),c.customPagination&&(a=c.options.scrollByPage?Math.ceil(c.sliderActive/c.cols):c.isEndSlider()?c.customPaginationItems.length-1:Math.floor(c.sliderActive/c.cols),c.customPaginationItems.removeClass(c.customPaginationClass).eq(a).addClass(c.customPaginationClass))},isRewindNav:function(){var a=this;return a.options.showNavigation?a.blocksOn.length<=a.cols?!1:a.options.rewindNav?!0:!1:!0},sliderItemsLength:function(){return this.blocksOn.length<=this.cols},sliderLayout:function(){var b=this;b.blocksOn.each(function(c,d){var e=a(d).data("cbp");e.leftNew=b.columnWidth*c,e.topNew=0,b.sliderFreeSpaces.push({topStart:e.heightAndGap})}),b.getFreeSpacesForSlider(),b.$ul.width(b.columnWidth*b.blocksOn.length-b.options.gapVertical)},getFreeSpacesForSlider:function(){var a=this;a.freeSpaces=a.sliderFreeSpaces.slice(a.sliderActive,a.sliderActive+a.cols),a.freeSpaces.sort(function(a,b){return a.topStart>b.topStart?1:a.topStart<b.topStart?-1:void 0})},updateSliderPosition:function(){var a=this,b=-a.sliderActive*a.columnWidth;e["private"].modernBrowser?a.$ul[0].style[e["private"].transform]="translate3d("+b+"px, 0px, 0)":a.$ul[0].style.left=b+"px",a.getFreeSpacesForSlider(),a.resizeMainContainer()},dragSlider:function(){function f(b){if(!q.sliderItemsLength()){if(u?p=b:b.preventDefault(),q.options.auto&&q.stopSliderAuto(),s)return void a(m).one("click.cbp",function(){return!1});m=a(b.target),k=j(b).x,l=0,n=-q.sliderActive*q.columnWidth,o=q.columnWidth*(q.blocksOn.length-q.cols),r.on(t.move,h),r.on(t.end,g),q.$obj.addClass("cbp-mode-slider-dragStart")}}function g(a){q.$obj.removeClass("cbp-mode-slider-dragStart"),s=!0,0!==l?(m.one("click.cbp",function(a){return!1}),requestAnimationFrame(function(){q.jumpDragToSlider(l),q.$ul.one(e["private"].transitionend,i)})):i.call(q),r.off(t.move),r.off(t.end)}function h(a){l=k-j(a).x,(l>8||-8>l)&&a.preventDefault(),q.isDrag=!0;var b=n-l;0>l&&n>l?b=(n-l)/5:l>0&&-o>n-l&&(b=-o+(o+n-l)/5),e["private"].modernBrowser?q.$ul[0].style[e["private"].transform]="translate3d("+b+"px, 0px, 0)":q.$ul[0].style.left=b+"px"}function i(){if(s=!1,q.isDrag=!1,q.options.auto){if(q.mouseIsEntered)return;q.startSliderAuto()}}function j(a){return a.originalEvent!==d&&a.originalEvent.touches!==d&&(a=a.originalEvent.touches[0]),{x:a.pageX,y:a.pageY}}var k,l,m,n,o,p,q=this,r=a(c),s=!1,t={},u=!1;q.isDrag=!1,"ontouchstart"in b||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?(t={start:"touchstart.cbp",move:"touchmove.cbp",end:"touchend.cbp"},u=!0):t={start:"mousedown.cbp",move:"mousemove.cbp",end:"mouseup.cbp"},q.$ul.on(t.start,f)},sliderLayoutReset:function(){var a=this;a.freeSpaces=[],a.sliderFreeSpaces=[]}})}(jQuery,window,document),"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(){for(var a=0,b=["moz","webkit"],c=0;c<b.length&&!window.requestAnimationFrame;c++)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b,c){var d=(new Date).getTime(),e=Math.max(0,16-(d-a)),f=window.setTimeout(function(){b(d+e)},e);return a=d+e,f}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}(),function(a,b,c,d){"use strict";function e(a){var b=this;b.parent=a,a.filterLayout=b.filterLayout,a.registerEvent("computeBlocksFinish",function(b){a.blocksOn2On=a.blocksOnInitial.filter(b),a.blocksOn2Off=a.blocksOnInitial.not(b)})}var f=a.fn.cubeportfolio.constructor;e.prototype.filterLayout=function(){function b(){c.blocks.removeClass("cbp-item-on2off cbp-item-off2on cbp-item-on2on").each(function(b,c){var d=a(c).data("cbp");d.left=d.leftNew,d.top=d.topNew,c.style.left=d.left+"px",c.style.top=d.top+"px",c.style[f["private"].transform]=""}),c.blocksOff.addClass("cbp-item-off"),c.$obj.removeClass("cbp-animation-"+c.options.animationType),c.filterFinish()}var c=this;c.$obj.addClass("cbp-animation-"+c.options.animationType),c.blocksOn2On.addClass("cbp-item-on2on").each(function(b,c){var d=a(c).data("cbp");c.style[f["private"].transform]="translate3d("+(d.leftNew-d.left)+"px, "+(d.topNew-d.top)+"px, 0)"}),c.blocksOn2Off.addClass("cbp-item-on2off"),c.blocksOff2On=c.blocksOn.filter(".cbp-item-off").removeClass("cbp-item-off").addClass("cbp-item-off2on").each(function(b,c){var d=a(c).data("cbp");c.style.left=d.leftNew+"px",c.style.top=d.topNew+"px"}),c.blocksOn2Off.length?c.blocksOn2Off.last().data("cbp").wrapper.one(f["private"].animationend,b):c.blocksOff2On.length?c.blocksOff2On.last().data("cbp").wrapper.one(f["private"].animationend,b):b(),c.resizeMainContainer()},e.prototype.destroy=function(){var a=this.parent;a.$obj.removeClass("cbp-animation-"+a.options.animationType)},f.plugins.animationClassic=function(b){return!f["private"].modernBrowser||a.inArray(b.options.animationType,["boxShadow","fadeOut","flipBottom","flipOut","quicksand","scaleSides","skew"])<0?null:new e(b)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(a){var b=this;b.parent=a,a.filterLayout=b.filterLayout}var f=a.fn.cubeportfolio.constructor;e.prototype.filterLayout=function(){function b(){c.wrapper[0].removeChild(d),"sequentially"===c.options.animationType&&c.blocksOn.each(function(b,c){a(c).data("cbp").wrapper[0].style[f["private"].animationDelay]=""}),c.$obj.removeClass("cbp-animation-"+c.options.animationType),c.filterFinish()}var c=this,d=c.$ul[0].cloneNode(!0);d.setAttribute("class","cbp-wrapper-helper"),c.wrapper[0].insertBefore(d,c.$ul[0]),requestAnimationFrame(function(){c.$obj.addClass("cbp-animation-"+c.options.animationType),c.blocksOff.addClass("cbp-item-off"),c.blocksOn.removeClass("cbp-item-off").each(function(b,d){var e=a(d).data("cbp");e.left=e.leftNew,e.top=e.topNew,d.style.left=e.left+"px",d.style.top=e.top+"px","sequentially"===c.options.animationType&&(e.wrapper[0].style[f["private"].animationDelay]=60*b+"ms")}),c.blocksOn.length?c.blocksOn.last().data("cbp").wrapper.one(f["private"].animationend,b):c.blocksOnInitial.length?c.blocksOnInitial.last().data("cbp").wrapper.one(f["private"].animationend,b):b(),c.resizeMainContainer()})},e.prototype.destroy=function(){var a=this.parent;a.$obj.removeClass("cbp-animation-"+a.options.animationType)},f.plugins.animationClone=function(b){return!f["private"].modernBrowser||a.inArray(b.options.animationType,["fadeOutTop","slideLeft","sequentially"])<0?null:new e(b)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(a){var b=this;b.parent=a,a.filterLayout=b.filterLayout}var f=a.fn.cubeportfolio.constructor;e.prototype.filterLayout=function(){function b(){c.wrapper[0].removeChild(d[0]),c.$obj.removeClass("cbp-animation-"+c.options.animationType),c.blocks.each(function(b,c){a(c).data("cbp").wrapper[0].style[f["private"].animationDelay]=""}),c.filterFinish()}var c=this,d=c.$ul.clone(!0,!0);d[0].setAttribute("class","cbp-wrapper-helper"),c.wrapper[0].insertBefore(d[0],c.$ul[0]);var e=d.find(".cbp-item").not(".cbp-item-off");c.sortBlocks(e,"top"),e.children(".cbp-item-wrapper").each(function(a,b){b.style[f["private"].animationDelay]=50*a+"ms"}),requestAnimationFrame(function(){c.$obj.addClass("cbp-animation-"+c.options.animationType),c.blocksOff.addClass("cbp-item-off"),c.blocksOn.removeClass("cbp-item-off").each(function(b,c){var d=a(c).data("cbp");d.left=d.leftNew,d.top=d.topNew,c.style.left=d.left+"px",c.style.top=d.top+"px",d.wrapper[0].style[f["private"].animationDelay]=50*b+"ms"});var d=c.blocksOn.length,g=e.length;0===d&&0===g?b():g>d?e.last().children(".cbp-item-wrapper").one(f["private"].animationend,b):c.blocksOn.last().data("cbp").wrapper.one(f["private"].animationend,b),c.resizeMainContainer()})},e.prototype.destroy=function(){var a=this.parent;a.$obj.removeClass("cbp-animation-"+a.options.animationType)},f.plugins.animationCloneDelay=function(b){return!f["private"].modernBrowser||a.inArray(b.options.animationType,["3dflip","flipOutDelay","foldLeft","frontRow","rotateRoom","rotateSides","scaleDown","slideDelay","unfold"])<0?null:new e(b)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(a){var b=this;b.parent=a,a.filterLayout=b.filterLayout}var f=a.fn.cubeportfolio.constructor;e.prototype.filterLayout=function(){function b(){c.wrapper[0].removeChild(d),c.$obj.removeClass("cbp-animation-"+c.options.animationType),c.filterFinish()}var c=this,d=c.$ul[0].cloneNode(!0);d.setAttribute("class","cbp-wrapper-helper"),c.wrapper[0].insertBefore(d,c.$ul[0]),requestAnimationFrame(function(){c.$obj.addClass("cbp-animation-"+c.options.animationType),c.blocksOff.addClass("cbp-item-off"),c.blocksOn.removeClass("cbp-item-off").each(function(b,c){
var d=a(c).data("cbp");d.left=d.leftNew,d.top=d.topNew,c.style.left=d.left+"px",c.style.top=d.top+"px"}),c.blocksOn.length?c.$ul.one(f["private"].animationend,b):c.blocksOnInitial.length?a(d).one(f["private"].animationend,b):b(),c.resizeMainContainer()})},e.prototype.destroy=function(){var a=this.parent;a.$obj.removeClass("cbp-animation-"+a.options.animationType)},f.plugins.animationWrapper=function(b){return!f["private"].modernBrowser||a.inArray(b.options.animationType,["bounceBottom","bounceLeft","bounceTop","moveLeft"])<0?null:new e(b)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,b.registerEvent("initFinish",function(){b.$obj.on("click.cbp",".cbp-caption-defaultWrap",function(c){if(c.preventDefault(),!b.isAnimating){b.isAnimating=!0;var d=a(this),e=d.next(),f=d.parent(),g={position:"relative",height:e.outerHeight(!0)},h={position:"relative",height:0};if(b.$obj.addClass("cbp-caption-expand-active"),f.hasClass("cbp-caption-expand-open")){var i=h;h=g,g=i,f.removeClass("cbp-caption-expand-open")}e.css(g),b.$obj.one("pluginResize.cbp",function(){b.isAnimating=!1,b.$obj.removeClass("cbp-caption-expand-active"),0===g.height&&(f.removeClass("cbp-caption-expand-open"),e.attr("style",""))}),b.layoutAndAdjustment(),e.css(h),requestAnimationFrame(function(){f.addClass("cbp-caption-expand-open"),e.css(g),b.triggerEvent("gridAdjust"),b.triggerEvent("resizeGrid")})}})},!0)}var f=a.fn.cubeportfolio.constructor;e.prototype.destroy=function(){this.parent.$obj.find(".cbp-caption-defaultWrap").off("click.cbp").parent().removeClass("cbp-caption-expand-active")},f.plugins.captionExpand=function(a){return"expand"!==a.options.caption?null:new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=a.Deferred();b.pushQueue("delayFrame",c),b.registerEvent("initEndWrite",function(){b.blocksOn.each(function(a,c){c.style[f["private"].animationDelay]=a*b.options.displayTypeSpeed+"ms"}),b.$obj.addClass("cbp-displayType-bottomToTop"),b.blocksOn.last().one(f["private"].animationend,function(){b.$obj.removeClass("cbp-displayType-bottomToTop"),b.blocksOn.each(function(a,b){b.style[f["private"].animationDelay]=""}),c.resolve()})},!0)}var f=a.fn.cubeportfolio.constructor;f.plugins.displayBottomToTop=function(a){return f["private"].modernBrowser&&"bottomToTop"===a.options.displayType&&0!==a.blocksOn.length?new e(a):null}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=a.Deferred();b.pushQueue("delayFrame",c),b.registerEvent("initEndWrite",function(){b.obj.style[f["private"].animationDuration]=b.options.displayTypeSpeed+"ms",b.$obj.addClass("cbp-displayType-fadeIn"),b.$obj.one(f["private"].animationend,function(){b.$obj.removeClass("cbp-displayType-fadeIn"),b.obj.style[f["private"].animationDuration]="",c.resolve()})},!0)}var f=a.fn.cubeportfolio.constructor;f.plugins.displayFadeIn=function(a){return!f["private"].modernBrowser||"lazyLoading"!==a.options.displayType&&"fadeIn"!==a.options.displayType||0===a.blocksOn.length?null:new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=a.Deferred();b.pushQueue("delayFrame",c),b.registerEvent("initEndWrite",function(){b.obj.style[f["private"].animationDuration]=b.options.displayTypeSpeed+"ms",b.$obj.addClass("cbp-displayType-fadeInToTop"),b.$obj.one(f["private"].animationend,function(){b.$obj.removeClass("cbp-displayType-fadeInToTop"),b.obj.style[f["private"].animationDuration]="",c.resolve()})},!0)}var f=a.fn.cubeportfolio.constructor;f.plugins.displayFadeInToTop=function(a){return f["private"].modernBrowser&&"fadeInToTop"===a.options.displayType&&0!==a.blocksOn.length?new e(a):null}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=a.Deferred();b.pushQueue("delayFrame",c),b.registerEvent("initEndWrite",function(){b.blocksOn.each(function(a,c){c.style[f["private"].animationDelay]=a*b.options.displayTypeSpeed+"ms"}),b.$obj.addClass("cbp-displayType-sequentially"),b.blocksOn.last().one(f["private"].animationend,function(){b.$obj.removeClass("cbp-displayType-sequentially"),b.blocksOn.each(function(a,b){b.style[f["private"].animationDelay]=""}),c.resolve()})},!0)}var f=a.fn.cubeportfolio.constructor;f.plugins.displaySequentially=function(a){return f["private"].modernBrowser&&"sequentially"===a.options.displayType&&0!==a.blocksOn.length?new e(a):null}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,c.filters=a(b.options.filters),c.filterData=[],b.registerEvent("afterPlugins",function(a){c.filterFromUrl(),c.registerFilter()}),b.registerEvent("resetFiltersVisual",function(){var d=b.options.defaultFilter.split("|");c.filters.each(function(b,c){var e=a(c).find(".cbp-filter-item");a.each(d,function(a,b){var c=e.filter('[data-filter="'+b+'"]');return c.length?(c.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active"),d.splice(a,1),!1):void 0})}),b.defaultFilter=b.options.defaultFilter})}var f=a.fn.cubeportfolio.constructor;e.prototype.registerFilter=function(){var b=this,c=b.parent,d=c.defaultFilter.split("|");b.wrap=b.filters.find(".cbp-l-filters-dropdownWrap").on({"mouseover.cbp":function(){a(this).addClass("cbp-l-filters-dropdownWrap-open")},"mouseleave.cbp":function(){a(this).removeClass("cbp-l-filters-dropdownWrap-open")}}),b.filters.each(function(e,f){var g=a(f),h="*",i=g.find(".cbp-filter-item"),j={};g.hasClass("cbp-l-filters-dropdown")&&(j.wrap=g.find(".cbp-l-filters-dropdownWrap"),j.header=g.find(".cbp-l-filters-dropdownHeader"),j.headerText=j.header.text()),c.$obj.cubeportfolio("showCounter",i),a.each(d,function(a,b){return i.filter('[data-filter="'+b+'"]').length?(h=b,d.splice(a,1),!1):void 0}),a.data(f,"filterName",h),b.filterData.push(f),b.filtersCallback(j,i.filter('[data-filter="'+h+'"]')),i.on("click.cbp",function(){var d=a(this);if(!d.hasClass("cbp-filter-item-active")&&!c.isAnimating){b.filtersCallback(j,d),a.data(f,"filterName",d.data("filter"));var e=a.map(b.filterData,function(b,c){var d=a.data(b,"filterName");return""!==d&&"*"!==d?d:null});e.length<1&&(e=["*"]);var g=e.join("|");c.defaultFilter!==g&&c.$obj.cubeportfolio("filter",g)}})})},e.prototype.filtersCallback=function(b,c){a.isEmptyObject(b)||(b.wrap.trigger("mouseleave.cbp"),b.headerText?b.headerText="":b.header.html(c.html())),c.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active")},e.prototype.filterFromUrl=function(){var a=/#cbpf=(.*?)([#\?&]|$)/gi.exec(location.href);null!==a&&(this.parent.defaultFilter=decodeURIComponent(a[1]))},e.prototype.destroy=function(){var a=this;a.filters.find(".cbp-filter-item").off(".cbp"),a.wrap.off(".cbp")},f.plugins.filters=function(a){return""===a.options.filters?null:new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,c.options=a.extend({},g,c.parent.options.plugins.inlineSlider),c.runInit(),b.registerEvent("addItemsToDOM",function(){c.runInit()})}function f(a){var b=this;a.hasClass("cbp-slider-inline-ready")||(a.addClass("cbp-slider-inline-ready"),b.items=a.find(".cbp-slider-wrapper").children(".cbp-slider-item"),b.active=b.items.filter(".cbp-slider-item--active").index(),b.total=b.items.length-1,b.updateLeft(),a.find(".cbp-slider-next").on("click.cbp",function(a){a.preventDefault(),b.active<b.total?(b.active++,b.updateLeft()):b.active===b.total&&(b.active=0,b.updateLeft())}),a.find(".cbp-slider-prev").on("click.cbp",function(a){a.preventDefault(),b.active>0?(b.active--,b.updateLeft()):0===b.active&&(b.active=b.total,b.updateLeft())}))}var g={},h=a.fn.cubeportfolio.constructor;f.prototype.updateLeft=function(){var a=this;a.items.removeClass("cbp-slider-item--active"),a.items.eq(a.active).addClass("cbp-slider-item--active"),a.items.each(function(b,c){c.style.left=b-a.active+"00%"})},e.prototype.runInit=function(){var b=this;b.parent.$obj.find(".cbp-slider-inline").not(".cbp-slider-inline-ready").each(function(c,d){var e=a(d),g=e.find(".cbp-slider-item--active").find("img")[0];g.hasAttribute("data-cbp-src")?b.parent.$obj.on("lazyLoad.cbp",function(a,b){b.src===g.src&&new f(e)}):new f(e)})},e.prototype.destroy=function(){var b=this;b.parent.$obj.find(".cbp-slider-next").off("click.cbp"),b.parent.$obj.find(".cbp-slider-prev").off("click.cbp"),b.parent.$obj.off("lazyLoad.cbp"),b.parent.$obj.find(".cbp-slider-inline").each(function(b,c){var d=a(c);d.removeClass("cbp-slider-inline-ready");var e=d.find(".cbp-slider-item");e.removeClass("cbp-slider-item--active"),e.removeAttr("style"),e.eq(0).addClass("cbp-slider-item--active")})},h.plugins.inlineSlider=function(a){return new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(c){var d=this;d.window=a(b),d.parent=c,d.options=a.extend({},f,d.parent.options.plugins.lazyLoad),c.registerEvent("initEndWrite",function(){var a;d.triggerImg(),c.registerEvent("resizeMainContainer",function(){d.triggerImg()}),d.window.on("scroll.cbp",function(){clearTimeout(a),a=setTimeout(function(){d.triggerImg()},300)})},!0)}var f={loadingClass:"cbp-lazyload",threshold:0},g=a.fn.cubeportfolio.constructor;e.prototype.triggerImg=function(){var b=this,c=b.parent.$obj.find("img").filter("[data-cbp-src]");0!==c.length&&(b.screenHeight=b.window.height(),c.each(function(c,d){var e=a(d.parentNode);if(!b.isElementInScreen(d))return void e.addClass(b.options.loadingClass);var f=d.getAttribute("data-cbp-src");null===b.parent.checkSrc(f)?(b.removeLazy(d,f),e.removeClass(b.options.loadingClass)):(e.addClass(b.options.loadingClass),a("<img>").on("load.cbp error.cbp",function(){b.removeLazy(d,f,e)}).attr("src",f))}))},e.prototype.removeLazy=function(b,c,d){var e=this;b.src=c,b.removeAttribute("data-cbp-src"),e.parent.removeAttrImage(b),e.parent.$obj.trigger("lazyLoad.cbp",b),d&&(g["private"].modernBrowser?a(b).one(g["private"].transitionend,function(){d.removeClass(e.options.loadingClass)}):d.removeClass(e.options.loadingClass))},e.prototype.isElementInScreen=function(a){var b=this,c=a.getBoundingClientRect(),d=c.bottom+b.options.threshold,e=b.screenHeight+d-(c.top-b.options.threshold);return d>=0&&e>=d},e.prototype.destroy=function(){var a=this;a.window.off("scroll.cbp")},g.plugins.lazyLoad=function(a){return new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,c.loadMore=a(b.options.loadMore).find(".cbp-l-loadMore-link"),c.loadMore.length&&c[b.options.loadMoreAction]()}var f=a.fn.cubeportfolio.constructor;e.prototype.click=function(){var b=this,c=0;b.loadMore.on("click.cbp",function(d){var e=a(this);d.preventDefault(),b.parent.isAnimating||e.hasClass("cbp-l-loadMore-stop")||(e.addClass("cbp-l-loadMore-loading"),c++,a.ajax({url:b.loadMore.attr("href")+"?block="+c,type:"GET",dataType:"HTML"}).done(function(a){var d=a.replace(/(\r\n|\n|\r)/gm,""),f=d.indexOf("cbp-loadMore-block"+c);if(-1===f)return void e.addClass("cbp-l-loadMore-stop");var g,h=d.indexOf(">",f)+1,i=d.indexOf("cbp-loadMore-block"+(c+1));g=-1===i?d.lastIndexOf("</"):d.lastIndexOf("</",i),b.parent.$obj.cubeportfolio("append",d.substring(h,g),function(){e.removeClass("cbp-l-loadMore-loading"),-1===i&&e.addClass("cbp-l-loadMore-stop")})}).fail(function(){}))})},e.prototype.auto=function(){var c=this;c.parent.$obj.on("initComplete.cbp",function(){Object.create({init:function(){var d=this;d.isActive=!1,d.numberOfClicks=0,c.loadMore.addClass("cbp-l-loadMore-loading"),d.window=a(b),d.addEvents(),d.getNewItems()},addEvents:function(){var a,b=this;c.loadMore.on("click.cbp",function(a){a.preventDefault()}),b.window.on("scroll.loadMoreObject",function(){clearTimeout(a),a=setTimeout(function(){c.parent.isAnimating||b.getNewItems()},80)}),c.parent.$obj.on("filterComplete.cbp",function(){b.getNewItems()})},getNewItems:function(){var b,d,e=this;e.isActive||c.loadMore.hasClass("cbp-l-loadMore-stop")||(b=c.loadMore.offset().top-200,d=e.window.scrollTop()+e.window.height(),b>d||(e.isActive=!0,e.numberOfClicks++,a.ajax({url:c.loadMore.attr("href")+"?block="+e.numberOfClicks,type:"GET",dataType:"HTML",cache:!0}).done(function(a){var b=a.replace(/(\r\n|\n|\r)/gm,""),d=b.indexOf("cbp-loadMore-block"+e.numberOfClicks);if(-1===d)return void c.loadMore.addClass("cbp-l-loadMore-stop");var f,g=b.indexOf(">",d)+1,h=b.indexOf("cbp-loadMore-block"+(e.numberOfClicks+1));f=-1===h?b.lastIndexOf("</"):b.lastIndexOf("</",h),c.parent.$obj.cubeportfolio("append",b.substring(g,f),function(){-1===h?(c.loadMore.addClass("cbp-l-loadMore-stop"),e.window.off("scroll.loadMoreObject"),c.parent.$obj.off("filterComplete.cbp")):(e.isActive=!1,e.window.trigger("scroll.loadMoreObject"))})}).fail(function(){e.isActive=!1})))}}).init()})},e.prototype.destroy=function(){var c=this;c.loadMore.off(".cbp"),a(b).off("scroll.loadMoreObject")},f.plugins.loadMore=function(a){return""===a.options.loadMore?null:new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(a){var b=this;b.parent=a,a.options.lightboxShowCounter===!1&&(a.options.lightboxCounter=""),a.options.singlePageShowCounter===!1&&(a.options.singlePageCounter=""),a.registerEvent("initStartRead",function(){b.run()},!0)}var f=a.fn.cubeportfolio.constructor,g={init:function(b,d){var e,f=this;if(f.cubeportfolio=b,f.type=d,f.isOpen=!1,f.options=f.cubeportfolio.options,"lightbox"===d&&f.cubeportfolio.registerEvent("resizeWindow",function(){f.resizeImage()}),"singlePageInline"!==d){if(f.createMarkup(),"singlePage"===d&&(f.cubeportfolio.registerEvent("resizeWindow",function(){if(f.options.singlePageStickyNavigation){var a=f.wrap[0].clientWidth;a>0&&(f.navigationWrap.width(a),f.navigation.width(a))}}),f.options.singlePageDeeplinking)){f.url=location.href,"#"===f.url.slice(-1)&&(f.url=f.url.slice(0,-1));var g=f.url.split("#cbp="),h=g.shift();if(a.each(g,function(b,c){return f.cubeportfolio.blocksOn.each(function(b,d){var g=a(d).find(f.options.singlePageDelegate+'[href="'+c+'"]');return g.length?(e=g,!1):void 0}),e?!1:void 0}),e){f.url=h;var i=e,j=i.attr("data-cbp-singlePage"),k=[];j?k=i.closest(a(".cbp-item")).find('[data-cbp-singlePage="'+j+'"]'):f.cubeportfolio.blocksOn.each(function(b,c){var d=a(c);d.not(".cbp-item-off")&&d.find(f.options.singlePageDelegate).each(function(b,c){a(c).attr("data-cbp-singlePage")||k.push(c)})}),f.openSinglePage(k,e[0])}else if(g.length){var l=c.createElement("a");l.setAttribute("href",g[0]),f.openSinglePage([l],l)}}}else if(f.height=0,f.createMarkupSinglePageInline(),f.cubeportfolio.registerEvent("resizeGrid",function(){f.isOpen&&f.close()}),f.options.singlePageInlineDeeplinking){f.url=location.href,"#"===f.url.slice(-1)&&(f.url=f.url.slice(0,-1));var g=f.url.split("#cbpi="),h=g.shift();a.each(g,function(b,c){return f.cubeportfolio.blocksOn.each(function(b,d){var g=a(d).find(f.options.singlePageInlineDelegate+'[href="'+c+'"]');return g.length?(e=g,!1):void 0}),e?!1:void 0}),e&&f.cubeportfolio.registerEvent("initFinish",function(){f.openSinglePageInline(f.cubeportfolio.blocksOn,e[0])},!0)}},createMarkup:function(){var b=this,d="";"singlePage"===b.type&&"left"!==b.options.singlePageAnimation&&(d=" cbp-popup-singlePage-"+b.options.singlePageAnimation),b.wrap=a("<div/>",{"class":"cbp-popup-wrap cbp-popup-"+b.type+d,"data-action":"lightbox"===b.type?"close":""}).on("click.cbp",function(c){if(!b.stopEvents){var d=a(c.target).attr("data-action");b[d]&&(b[d](),c.preventDefault())}}),b.content=a("<div/>",{"class":"cbp-popup-content"}).appendTo(b.wrap),a("<div/>",{"class":"cbp-popup-loadingBox"}).appendTo(b.wrap),"ie8"===f["private"].browser&&(b.bg=a("<div/>",{"class":"cbp-popup-ie8bg","data-action":"lightbox"===b.type?"close":""}).appendTo(b.wrap)),b.navigationWrap=a("<div/>",{"class":"cbp-popup-navigation-wrap"}).appendTo(b.wrap),b.navigation=a("<div/>",{"class":"cbp-popup-navigation"}).appendTo(b.navigationWrap),b.closeButton=a("<div/>",{"class":"cbp-popup-close",title:"Close (Esc arrow key)","data-action":"close"}).appendTo(b.navigation),b.nextButton=a("<div/>",{"class":"cbp-popup-next",title:"Next (Right arrow key)","data-action":"next"}).appendTo(b.navigation),b.prevButton=a("<div/>",{"class":"cbp-popup-prev",title:"Previous (Left arrow key)","data-action":"prev"}).appendTo(b.navigation),"singlePage"===b.type&&(b.options.singlePageCounter&&(b.counter=a(b.options.singlePageCounter).appendTo(b.navigation),b.counter.text("")),b.content.on("click.cbp",b.options.singlePageDelegate,function(a){a.preventDefault();var c,d=b.dataArray.length,e=this.getAttribute("href");for(c=0;d>c&&b.dataArray[c].url!==e;c++);b.singlePageJumpTo(c-b.current)}),b.wrap.on("mousewheel.cbp DOMMouseScroll.cbp",function(a){a.stopImmediatePropagation()})),a(c).on("keydown.cbp",function(a){b.isOpen&&(b.stopEvents||(37===a.keyCode?b.prev():39===a.keyCode?b.next():27===a.keyCode&&b.close()))})},createMarkupSinglePageInline:function(){var b=this;b.wrap=a("<div/>",{"class":"cbp-popup-singlePageInline"}).on("click.cbp",function(c){if(!b.stopEvents){var d=a(c.target).attr("data-action");d&&b[d]&&(b[d](),c.preventDefault())}}),b.content=a("<div/>",{"class":"cbp-popup-content"}).appendTo(b.wrap),b.navigation=a("<div/>",{"class":"cbp-popup-navigation"}).appendTo(b.wrap),b.closeButton=a("<div/>",{"class":"cbp-popup-close",title:"Close (Esc arrow key)","data-action":"close"}).appendTo(b.navigation)},destroy:function(){var b=this,d=a("body");a(c).off("keydown.cbp"),d.off("click.cbp",b.options.lightboxDelegate),d.off("click.cbp",b.options.singlePageDelegate),b.content.off("click.cbp",b.options.singlePageDelegate),b.cubeportfolio.$obj.off("click.cbp",b.options.singlePageInlineDelegate),b.cubeportfolio.$obj.off("click.cbp",b.options.lightboxDelegate),b.cubeportfolio.$obj.off("click.cbp",b.options.singlePageDelegate),b.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"),b.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"),b.wrap.remove()},openLightbox:function(d,e){var f,g,h=this,i=0,j=[];if(!h.isOpen){if(h.isOpen=!0,h.stopEvents=!1,h.dataArray=[],h.current=null,f=e.getAttribute("href"),null===f)throw new Error("HEI! Your clicked element doesn't have a href attribute.");a.each(d,function(b,c){var d,e=c.getAttribute("href"),g=e,k="isImage";if(-1===a.inArray(e,j)){if(f===e)h.current=i;else if(!h.options.lightboxGallery)return;/youtube/i.test(e)?(d=e.substring(e.lastIndexOf("v=")+2),/autoplay=/i.test(d)||(d+="&autoplay=1"),d=d.replace(/\?|&/,"?"),g="//www.youtube.com/embed/"+d,k="isYoutube"):/vimeo\.com/i.test(e)?(d=e.substring(e.lastIndexOf("/")+1),/autoplay=/i.test(d)||(d+="&autoplay=1"),d=d.replace(/\?|&/,"?"),g="//player.vimeo.com/video/"+d,k="isVimeo"):/www\.ted\.com/i.test(e)?(g="http://embed.ted.com/talks/"+e.substring(e.lastIndexOf("/")+1)+".html",k="isTed"):/soundcloud\.com/i.test(e)?(g=e,k="isSoundCloud"):/(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(e)?(g=-1!==e.indexOf("|")?e.split("|"):e.split("%7C"),k="isSelfHostedVideo"):/\.mp3$/i.test(e)&&(g=e,k="isSelfHostedAudio"),h.dataArray.push({src:g,title:c.getAttribute(h.options.lightboxTitleSrc),type:k}),i++}j.push(e)}),h.counterTotal=h.dataArray.length,1===h.counterTotal?(h.nextButton.hide(),h.prevButton.hide(),h.dataActionImg=""):(h.nextButton.show(),h.prevButton.show(),h.dataActionImg='data-action="next"'),h.wrap.appendTo(c.body),h.scrollTop=a(b).scrollTop(),h.originalStyle=a("html").attr("style"),a("html").css({overflow:"hidden",marginRight:b.innerWidth-a(c).width()}),h.wrap.addClass("cbp-popup-transitionend"),h.wrap.show(),g=h.dataArray[h.current],h[g.type](g)}},openSinglePage:function(d,e){var g,h=this,i=0,j=[];if(!h.isOpen){if(h.cubeportfolio.singlePageInline&&h.cubeportfolio.singlePageInline.isOpen&&h.cubeportfolio.singlePageInline.close(),h.isOpen=!0,h.stopEvents=!1,h.dataArray=[],h.current=null,g=e.getAttribute("href"),null===g)throw new Error("HEI! Your clicked element doesn't have a href attribute.");a.each(d,function(b,c){var d=c.getAttribute("href");-1===a.inArray(d,j)&&(g===d&&(h.current=i),h.dataArray.push({url:d,element:c}),i++),j.push(d)}),h.counterTotal=h.dataArray.length,1===h.counterTotal?(h.nextButton.hide(),h.prevButton.hide()):(h.nextButton.show(),h.prevButton.show()),h.wrap.appendTo(c.body),h.scrollTop=a(b).scrollTop(),h.wrap.scrollTop(0),h.wrap.show(),h.finishOpen=2,h.navigationMobile=a(),h.wrap.one(f["private"].transitionend,function(){a("html").css({overflow:"hidden",marginRight:b.innerWidth-a(c).width()}),h.wrap.addClass("cbp-popup-transitionend"),h.options.singlePageStickyNavigation&&(h.wrap.addClass("cbp-popup-singlePage-sticky"),h.navigationWrap.width(h.wrap[0].clientWidth),("android"===f["private"].browser||"ios"===f["private"].browser)&&(h.navigationMobile=a("<div/>",{"class":"cbp-popup-singlePage cbp-popup-singlePage-sticky",id:h.wrap.attr("id")}).on("click.cbp",function(b){if(!h.stopEvents){var c=a(b.target).attr("data-action");h[c]&&(h[c](),b.preventDefault())}}),h.navigationMobile.appendTo(c.body).append(h.navigationWrap))),h.finishOpen--,h.finishOpen<=0&&h.updateSinglePageIsOpen.call(h)}),("ie8"===f["private"].browser||"ie9"===f["private"].browser)&&(h.options.singlePageStickyNavigation&&(h.navigationWrap.width(h.wrap[0].clientWidth),setTimeout(function(){h.wrap.addClass("cbp-popup-singlePage-sticky")},1e3)),h.finishOpen--),h.wrap.addClass("cbp-popup-loading"),h.wrap.offset(),h.wrap.addClass("cbp-popup-singlePage-open"),h.options.singlePageDeeplinking&&(h.url=h.url.split("#cbp=")[0],location.href=h.url+"#cbp="+h.dataArray[h.current].url),a.isFunction(h.options.singlePageCallback)&&h.options.singlePageCallback.call(h,h.dataArray[h.current].url,h.dataArray[h.current].element)}},openSinglePageInline:function(c,d,e){var f,g,h,i,j=this;if(e=e||!1,j.fromOpen=e,j.storeBlocks=c,j.storeCurrentBlock=d,j.isOpen)return g=a(d).closest(".cbp-item").index(),void(j.dataArray[j.current].url!==d.getAttribute("href")||j.current!==g?j.cubeportfolio.singlePageInline.close("open",{blocks:c,currentBlock:d,fromOpen:!0}):j.close());if(j.isOpen=!0,j.stopEvents=!1,j.dataArray=[],j.current=null,f=d.getAttribute("href"),null===f)throw new Error("HEI! Your clicked element doesn't have a href attribute.");if(h=a(d).closest(".cbp-item")[0],c.each(function(a,b){h===b&&(j.current=a)}),j.dataArray[j.current]={url:f,element:d},i=a(j.dataArray[j.current].element).parents(".cbp-item").addClass("cbp-singlePageInline-active"),j.counterTotal=c.length,j.wrap.insertBefore(j.cubeportfolio.wrapper),"top"===j.options.singlePageInlinePosition)j.blocksToMove=c,j.top=0;else if("bottom"===j.options.singlePageInlinePosition)j.blocksToMove=a(),j.top=j.cubeportfolio.height;else if("above"===j.options.singlePageInlinePosition)j.top=a(c[j.current]).data("cbp").top,j.blocksToMove=a(),c.each(function(b,c){var d=a(c).data("cbp");d.top+d.height>=j.top&&(j.blocksToMove=j.blocksToMove.add(c))}),j.top=Math.max(j.top-j.options.gapHorizontal,0);else{var k=a(c[j.current]).data("cbp");j.top=k.top+k.height,j.blocksToMove=a(),c.each(function(b,c){var d=a(c).data("cbp");d.top+d.height>j.top&&(j.blocksToMove=j.blocksToMove.add(c))})}if(j.wrap[0].style.height=j.wrap.outerHeight(!0)+"px",j.deferredInline=a.Deferred(),j.options.singlePageInlineInFocus){j.scrollTop=a(b).scrollTop();var l=j.cubeportfolio.$obj.offset().top+j.top-100;j.scrollTop!==l?a("html,body").animate({scrollTop:l},350).promise().then(function(){j.resizeSinglePageInline(),j.deferredInline.resolve()}):(j.resizeSinglePageInline(),j.deferredInline.resolve())}else j.resizeSinglePageInline(),j.deferredInline.resolve();j.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-open"),j.wrap.css({top:j.top}),j.options.singlePageInlineDeeplinking&&(j.url=j.url.split("#cbpi=")[0],location.href=j.url+"#cbpi="+j.dataArray[j.current].url),a.isFunction(j.options.singlePageInlineCallback)&&j.options.singlePageInlineCallback.call(j,j.dataArray[j.current].url,j.dataArray[j.current].element)},resizeSinglePageInline:function(){var a=this;a.height=0===a.top||a.top===a.cubeportfolio.height?a.wrap.outerHeight(!0):a.wrap.outerHeight(!0)-a.options.gapHorizontal,a.storeBlocks.each(function(a,b){f["private"].modernBrowser?b.style[f["private"].transform]="":b.style.marginTop=""}),a.blocksToMove.each(function(b,c){f["private"].modernBrowser?c.style[f["private"].transform]="translate3d(0px, "+a.height+"px, 0)":c.style.marginTop=a.height+"px"}),a.cubeportfolio.obj.style.height=a.cubeportfolio.height+a.height+"px"},revertResizeSinglePageInline:function(){var b=this;b.deferredInline=a.Deferred(),b.storeBlocks.each(function(a,b){f["private"].modernBrowser?b.style[f["private"].transform]="":b.style.marginTop=""}),b.cubeportfolio.obj.style.height=b.cubeportfolio.height+"px"},appendScriptsToWrap:function(a){var b=this,d=0,e=function(f){var g=c.createElement("script"),h=f.src;g.type="text/javascript",g.readyState?g.onreadystatechange=function(){("loaded"==g.readyState||"complete"==g.readyState)&&(g.onreadystatechange=null,d++,a[d]&&e(a[d]))}:g.onload=function(){d++,a[d]&&e(a[d])},h?g.src=h:g.text=f.text,b.content[0].appendChild(g)};e(a[0])},updateSinglePage:function(b,c,d){var e,f=this;f.content.addClass("cbp-popup-content").removeClass("cbp-popup-content-basic"),d===!1&&f.content.removeClass("cbp-popup-content").addClass("cbp-popup-content-basic"),f.counter&&(e=a(f.getCounterMarkup(f.options.singlePageCounter,f.current+1,f.counterTotal)),f.counter.text(e.text())),f.fromAJAX={html:b,scripts:c},f.finishOpen--,f.finishOpen<=0&&f.updateSinglePageIsOpen.call(f)},updateSinglePageIsOpen:function(){var b,c=this;c.wrap.addClass("cbp-popup-ready"),c.wrap.removeClass("cbp-popup-loading"),c.content.html(c.fromAJAX.html),c.fromAJAX.scripts&&c.appendScriptsToWrap(c.fromAJAX.scripts),c.fromAJAX={},c.cubeportfolio.$obj.trigger("updateSinglePageStart.cbp"),b=c.content.find(".cbp-slider"),b?(b.find(".cbp-slider-item").addClass("cbp-item"),c.slider=b.cubeportfolio({layoutMode:"slider",mediaQueries:[{width:1,cols:1}],gapHorizontal:0,gapVertical:0,caption:"",coverRatio:""})):c.slider=null,c.checkForSocialLinks(c.content),("android"===f["private"].browser||"ios"===f["private"].browser)&&a("html").css({position:"fixed"}),c.cubeportfolio.$obj.trigger("updateSinglePageComplete.cbp")},checkForSocialLinks:function(a){var b=this;b.createFacebookShare(a.find(".cbp-social-fb")),b.createTwitterShare(a.find(".cbp-social-twitter")),b.createGooglePlusShare(a.find(".cbp-social-googleplus")),b.createPinterestShare(a.find(".cbp-social-pinterest"))},createFacebookShare:function(a){a.length&&!a.attr("onclick")&&a.attr("onclick","window.open('http://www.facebook.com/sharer.php?u="+encodeURIComponent(b.location.href)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;")},createTwitterShare:function(a){a.length&&!a.attr("onclick")&&a.attr("onclick","window.open('https://twitter.com/intent/tweet?source="+encodeURIComponent(b.location.href)+"&text="+encodeURIComponent(c.title)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=300'); return false;")},createGooglePlusShare:function(a){a.length&&!a.attr("onclick")&&a.attr("onclick","window.open('https://plus.google.com/share?url="+encodeURIComponent(b.location.href)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=450'); return false;")},createPinterestShare:function(a){if(a.length&&!a.attr("onclick")){var c="",d=this.content.find("img")[0];d&&(c=d.src),a.attr("onclick","window.open('http://pinterest.com/pin/create/button/?url="+encodeURIComponent(b.location.href)+"&media="+c+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;")}},updateSinglePageInline:function(a,b){var c=this;c.content.html(a),b&&c.appendScriptsToWrap(b),c.cubeportfolio.$obj.trigger("updateSinglePageInlineStart.cbp"),c.singlePageInlineIsOpen.call(c)},singlePageInlineIsOpen:function(){function a(){b.wrap.addClass("cbp-popup-singlePageInline-ready"),b.wrap[0].style.height="",b.resizeSinglePageInline(),b.cubeportfolio.$obj.trigger("updateSinglePageInlineComplete.cbp")}var b=this;b.cubeportfolio.loadImages(b.wrap,function(){var c=b.content.find(".cbp-slider");c.length?(c.find(".cbp-slider-item").addClass("cbp-item"),c.one("initComplete.cbp",function(){b.deferredInline.done(a)}),c.on("pluginResize.cbp",function(){b.deferredInline.done(a)}),b.slider=c.cubeportfolio({layoutMode:"slider",displayType:"default",mediaQueries:[{width:1,cols:1}],gapHorizontal:0,gapVertical:0,caption:"",coverRatio:""})):(b.slider=null,b.deferredInline.done(a)),b.checkForSocialLinks(b.content)})},isImage:function(b){var c=this;new Image;c.tooggleLoading(!0),c.cubeportfolio.loadImages(a('<div><img src="'+b.src+'"></div>'),function(){c.updateImagesMarkup(b.src,b.title,c.getCounterMarkup(c.options.lightboxCounter,c.current+1,c.counterTotal)),c.tooggleLoading(!1)})},isVimeo:function(a){var b=this;b.updateVideoMarkup(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isYoutube:function(a){var b=this;b.updateVideoMarkup(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isTed:function(a){var b=this;b.updateVideoMarkup(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isSoundCloud:function(a){var b=this;b.updateVideoMarkup(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isSelfHostedVideo:function(a){var b=this;b.updateSelfHostedVideo(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},isSelfHostedAudio:function(a){var b=this;b.updateSelfHostedAudio(a.src,a.title,b.getCounterMarkup(b.options.lightboxCounter,b.current+1,b.counterTotal))},getCounterMarkup:function(a,b,c){if(!a.length)return"";var d={current:b,total:c};return a.replace(/\{\{current}}|\{\{total}}/gi,function(a){return d[a.slice(2,-2)]})},updateSelfHostedVideo:function(a,b,c){var d,e=this;e.wrap.addClass("cbp-popup-lightbox-isIframe");var f='<div class="cbp-popup-lightbox-iframe"><video controls="controls" height="auto" style="width: 100%">';for(d=0;d<a.length;d++)/(\.mp4)/i.test(a[d])?f+='<source src="'+a[d]+'" type="video/mp4">':/(\.ogg)|(\.ogv)/i.test(a[d])?f+='<source src="'+a[d]+'" type="video/ogg">':/(\.webm)/i.test(a[d])&&(f+='<source src="'+a[d]+'" type="video/webm">');f+='Your browser does not support the video tag.</video><div class="cbp-popup-lightbox-bottom">'+(b?'<div class="cbp-popup-lightbox-title">'+b+"</div>":"")+c+"</div></div>",e.content.html(f),e.wrap.addClass("cbp-popup-ready"),e.preloadNearbyImages()},updateSelfHostedAudio:function(a,b,c){var d=this;d.wrap.addClass("cbp-popup-lightbox-isIframe");var e='<div class="cbp-popup-lightbox-iframe"><div class="cbp-misc-video"><audio controls="controls" height="auto" style="width: 75%"><source src="'+a+'" type="audio/mpeg">Your browser does not support the audio tag.</audio></div><div class="cbp-popup-lightbox-bottom">'+(b?'<div class="cbp-popup-lightbox-title">'+b+"</div>":"")+c+"</div></div>";d.content.html(e),d.wrap.addClass("cbp-popup-ready"),d.preloadNearbyImages()},updateVideoMarkup:function(a,b,c){var d=this;d.wrap.addClass("cbp-popup-lightbox-isIframe");var e='<div class="cbp-popup-lightbox-iframe"><iframe src="'+a+'" frameborder="0" allowfullscreen scrolling="no"></iframe><div class="cbp-popup-lightbox-bottom">'+(b?'<div class="cbp-popup-lightbox-title">'+b+"</div>":"")+c+"</div></div>";d.content.html(e),d.wrap.addClass("cbp-popup-ready"),d.preloadNearbyImages()},updateImagesMarkup:function(a,b,c){var d=this;d.wrap.removeClass("cbp-popup-lightbox-isIframe");var e='<div class="cbp-popup-lightbox-figure"><img src="'+a+'" class="cbp-popup-lightbox-img" '+d.dataActionImg+' /><div class="cbp-popup-lightbox-bottom">'+(b?'<div class="cbp-popup-lightbox-title">'+b+"</div>":"")+c+"</div></div>";d.content.html(e),d.wrap.addClass("cbp-popup-ready"),d.resizeImage(),d.preloadNearbyImages()},next:function(){var a=this;a[a.type+"JumpTo"](1)},prev:function(){var a=this;a[a.type+"JumpTo"](-1)},lightboxJumpTo:function(a){var b,c=this;c.current=c.getIndex(c.current+a),b=c.dataArray[c.current],c[b.type](b)},singlePageJumpTo:function(b){
var c=this;c.current=c.getIndex(c.current+b),a.isFunction(c.options.singlePageCallback)&&(c.resetWrap(),c.wrap.scrollTop(0),c.wrap.addClass("cbp-popup-loading"),c.options.singlePageCallback.call(c,c.dataArray[c.current].url,c.dataArray[c.current].element),c.options.singlePageDeeplinking&&(location.href=c.url+"#cbp="+c.dataArray[c.current].url))},resetWrap:function(){var a=this;"singlePage"===a.type&&a.options.singlePageDeeplinking&&(location.href=a.url+"#"),"singlePageInline"===a.type&&a.options.singlePageInlineDeeplinking&&(location.href=a.url+"#")},getIndex:function(a){var b=this;return a%=b.counterTotal,0>a&&(a=b.counterTotal+a),a},close:function(c,d){function e(){h.content.html(""),h.wrap.detach(),h.cubeportfolio.$obj.removeClass("cbp-popup-singlePageInline-open cbp-popup-singlePageInline-close"),"promise"===c&&a.isFunction(d.callback)&&d.callback.call(h.cubeportfolio),h.resetWrap()}function g(){h.options.singlePageInlineInFocus&&"promise"!==c?a("html,body").animate({scrollTop:h.scrollTop},350).promise().then(function(){e()}):e()}var h=this;h.isOpen=!1,"singlePageInline"===h.type?"open"===c?(h.wrap.removeClass("cbp-popup-singlePageInline-ready"),a(h.dataArray[h.current].element).closest(".cbp-item").removeClass("cbp-singlePageInline-active"),h.openSinglePageInline(d.blocks,d.currentBlock,d.fromOpen)):(h.height=0,h.revertResizeSinglePageInline(),h.wrap.removeClass("cbp-popup-singlePageInline-ready"),h.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-close"),h.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"),f["private"].modernBrowser?h.wrap.one(f["private"].transitionend,function(){g()}):g()):"singlePage"===h.type?(h.resetWrap(),h.wrap.removeClass("cbp-popup-ready cbp-popup-transitionend"),("android"===f["private"].browser||"ios"===f["private"].browser)&&(a("html").css({position:""}),h.navigationWrap.appendTo(h.wrap),h.navigationMobile.remove()),a(b).scrollTop(h.scrollTop),setTimeout(function(){h.stopScroll=!0,h.navigationWrap.css({top:h.wrap.scrollTop()}),h.wrap.removeClass("cbp-popup-singlePage-open cbp-popup-singlePage-sticky"),("ie8"===f["private"].browser||"ie9"===f["private"].browser)&&(h.content.html(""),h.wrap.detach(),a("html").css({overflow:"",marginRight:"",position:""}),h.navigationWrap.removeAttr("style"))},0),a("html").css({overflow:"",marginRight:"",position:""}),h.wrap.one(f["private"].transitionend,function(){h.content.html(""),h.wrap.detach(),h.navigationWrap.removeAttr("style")})):(h.originalStyle?a("html").attr("style",h.originalStyle):a("html").css({overflow:"",marginRight:""}),a(b).scrollTop(h.scrollTop),h.content.html(""),h.wrap.detach())},tooggleLoading:function(a){var b=this;b.stopEvents=a,b.wrap[a?"addClass":"removeClass"]("cbp-popup-loading")},resizeImage:function(){if(this.isOpen){var c=a(b).height(),d=this.content.find("img"),e=parseInt(d.css("margin-top"),10)+parseInt(d.css("margin-bottom"),10);d.css("max-height",c-e+"px")}},preloadNearbyImages:function(){var a=[],b=this;a.push(b.getIndex(b.current+1)),a.push(b.getIndex(b.current+2)),a.push(b.getIndex(b.current+3)),a.push(b.getIndex(b.current-1)),a.push(b.getIndex(b.current-2)),a.push(b.getIndex(b.current-3));for(var c=a.length-1;c>=0;c--)"isImage"===b.dataArray[a[c]].type&&b.cubeportfolio.checkSrc(b.dataArray[a[c]].src)}},h=!1,i=!1;e.prototype.run=function(){var b=this,d=b.parent,e=a(c.body);d.lightbox=null,d.options.lightboxDelegate&&!h&&(h=!0,d.lightbox=Object.create(g),d.lightbox.init(d,"lightbox"),e.on("click.cbp",d.options.lightboxDelegate,function(c){c.preventDefault();var e=a(this),f=e.attr("data-cbp-lightbox"),g=b.detectScope(e),h=g.data("cubeportfolio"),i=[];h?h.blocksOn.each(function(b,c){var e=a(c);e.not(".cbp-item-off")&&e.find(d.options.lightboxDelegate).each(function(b,c){f?a(c).attr("data-cbp-lightbox")===f&&i.push(c):i.push(c)})}):i=f?g.find(d.options.lightboxDelegate+"[data-cbp-lightbox="+f+"]"):g.find(d.options.lightboxDelegate),d.lightbox.openLightbox(i,e[0])})),d.singlePage=null,d.options.singlePageDelegate&&!i&&(i=!0,d.singlePage=Object.create(g),d.singlePage.init(d,"singlePage"),e.on("click.cbp",d.options.singlePageDelegate,function(c){c.preventDefault();var e=a(this),f=e.attr("data-cbp-singlePage"),g=b.detectScope(e),h=g.data("cubeportfolio"),i=[];h?h.blocksOn.each(function(b,c){var e=a(c);e.not(".cbp-item-off")&&e.find(d.options.singlePageDelegate).each(function(b,c){f?a(c).attr("data-cbp-singlePage")===f&&i.push(c):i.push(c)})}):i=f?g.find(d.options.singlePageDelegate+"[data-cbp-singlePage="+f+"]"):g.find(d.options.singlePageDelegate),d.singlePage.openSinglePage(i,e[0])})),d.singlePageInline=null,d.options.singlePageInlineDelegate&&(d.singlePageInline=Object.create(g),d.singlePageInline.init(d,"singlePageInline"),d.$obj.on("click.cbp",d.options.singlePageInlineDelegate,function(b){b.preventDefault();var c=a.data(this,"cbp-locked"),e=a.data(this,"cbp-locked",+new Date);(!c||e-c>300)&&d.singlePageInline.openSinglePageInline(d.blocksOn,this)}))},e.prototype.detectScope=function(b){var d,e,f;return d=b.closest(".cbp-popup-singlePageInline"),d.length?(f=b.closest(".cbp",d[0]),f.length?f:d):(e=b.closest(".cbp-popup-singlePage"),e.length?(f=b.closest(".cbp",e[0]),f.length?f:e):(f=b.closest(".cbp"),f.length?f:a(c.body)))},e.prototype.destroy=function(){var b=this.parent;a(c.body).off("click.cbp"),h=!1,i=!1,b.lightbox&&b.lightbox.destroy(),b.singlePage&&b.singlePage.destroy(),b.singlePageInline&&b.singlePageInline.destroy()},f.plugins.popUp=function(a){return new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,c.searchInput=a(b.options.search),c.searchInput.each(function(b,c){var d=c.getAttribute("data-search");d||(d="*"),a.data(c,"searchData",{value:c.value,el:d})});var d=null;c.searchInput.on("keyup.cbp paste.cbp",function(b){b.preventDefault();var e=a(this);clearTimeout(d),d=setTimeout(function(){c.runEvent.call(c,e)},350)}),c.searchNothing=c.searchInput.siblings(".cbp-search-nothing").detach(),c.searchNothingHeight=null,c.searchNothingHTML=c.searchNothing.html(),c.searchInput.siblings(".cbp-search-icon").on("click.cbp",function(b){b.preventDefault(),c.runEvent.call(c,a(this).prev().val(""))})}var f=a.fn.cubeportfolio.constructor;e.prototype.runEvent=function(b){var c=this,d=b.val(),e=b.data("searchData"),f=new RegExp(d,"i");e.value===d||c.parent.isAnimating||(e.value=d,d.length>0?b.attr("value",d):b.removeAttr("value"),c.parent.$obj.cubeportfolio("filter",function(b){var g=b.filter(function(b,c){var d=a(c).find(e.el).text();return d.search(f)>-1?!0:void 0});if(0===g.length&&c.searchNothing.length){var h=c.searchNothingHTML.replace("{{query}}",d);c.searchNothing.html(h),c.searchNothing.appendTo(c.parent.$obj),null===c.searchNothingHeight&&(c.searchNothingHeight=c.searchNothing.outerHeight(!0)),c.parent.registerEvent("resizeMainContainer",function(){c.parent.height=c.parent.height+c.searchNothingHeight,c.parent.obj.style.height=c.parent.height+"px"},!0)}else c.searchNothing.detach();return c.parent.triggerEvent("resetFiltersVisual"),g},function(){b.trigger("keyup.cbp")}))},e.prototype.destroy=function(){var b=this;b.searchInput.off(".cbp"),b.searchInput.next(".cbp-search-icon").off(".cbp"),b.searchInput.each(function(b,c){a.removeData(c)})},f.plugins.search=function(a){return""===a.options.search?null:new e(a)}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(b){var c=this;c.parent=b,c.options=a.extend({},f,c.parent.options.plugins.slider);var d=a(c.options.pagination);d.length>0&&(c.parent.customPagination=d,c.parent.customPaginationItems=d.children(),c.parent.customPaginationClass=c.options.paginationClass,c.parent.customPaginationItems.on("click.cbp",function(b){b.preventDefault(),b.stopImmediatePropagation(),b.stopPropagation(),c.parent.sliderStopEvents||c.parent.jumpToSlider(a(this))})),c.parent.registerEvent("gridAdjust",function(){c.sliderMarkup.call(c.parent),c.parent.registerEvent("gridAdjust",function(){c.updateSlider.call(c.parent)})},!0)}var f={pagination:"",paginationClass:"cbp-pagination-active"},g=a.fn.cubeportfolio.constructor;e.prototype.sliderMarkup=function(){var b=this;b.sliderStopEvents=!1,b.sliderActive=0,b.$obj.one("initComplete.cbp",function(){b.$obj.addClass("cbp-mode-slider")}),b.nav=a("<div/>",{"class":"cbp-nav"}),b.nav.on("click.cbp","[data-slider-action]",function(c){if(c.preventDefault(),c.stopImmediatePropagation(),c.stopPropagation(),!b.sliderStopEvents){var d=a(this),e=d.attr("data-slider-action");b[e+"Slider"]&&b[e+"Slider"](d)}}),b.options.showNavigation&&(b.controls=a("<div/>",{"class":"cbp-nav-controls"}),b.navPrev=a("<div/>",{"class":"cbp-nav-prev","data-slider-action":"prev"}).appendTo(b.controls),b.navNext=a("<div/>",{"class":"cbp-nav-next","data-slider-action":"next"}).appendTo(b.controls),b.controls.appendTo(b.nav)),b.options.showPagination&&(b.navPagination=a("<div/>",{"class":"cbp-nav-pagination"}).appendTo(b.nav)),(b.controls||b.navPagination)&&b.nav.appendTo(b.$obj),b.updateSliderPagination(),b.options.auto&&(b.options.autoPauseOnHover&&(b.mouseIsEntered=!1,b.$obj.on("mouseenter.cbp",function(a){b.mouseIsEntered=!0,b.stopSliderAuto()}).on("mouseleave.cbp",function(a){b.mouseIsEntered=!1,b.startSliderAuto()})),b.startSliderAuto()),b.options.drag&&g["private"].modernBrowser&&b.dragSlider()},e.prototype.updateSlider=function(){var a=this;a.updateSliderPosition(),a.updateSliderPagination()},e.prototype.destroy=function(){var a=this;a.parent.customPaginationItems&&a.parent.customPaginationItems.off(".cbp"),(a.parent.controls||a.parent.navPagination)&&(a.parent.nav.off(".cbp"),a.parent.nav.remove())},g.plugins.slider=function(a){return"slider"!==a.options.layoutMode?null:new e(a)}}(jQuery,window,document);

/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);

( function ( $ ) {
'use strict';
jQuery(document).ready(function(jQuery){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if(jQuery(window).width() > MQL) {
		var headerHeight = jQuery('.cd-header').height();
		jQuery(window).on('scroll',
		{
	        previousTop: 0
	    },
	    function () {
		    var currentTop = jQuery(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && jQuery('.cd-header').hasClass('is-fixed')) {
		    		jQuery('.cd-header').addClass('is-visible');
		    	} else {
		    		jQuery('.cd-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...

		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	jQuery('.cd-primary-nav-trigger').on('click', function(){
		jQuery('.cd-menu-icon').toggleClass('is-clicked');
		jQuery('.cd-header').toggleClass('menu-is-open');

		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( jQuery('.cd-primary-nav').hasClass('is-visible') ) {
			jQuery('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				jQuery('body').removeClass('overflow-hidden');
			});
		} else {
			jQuery('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				jQuery('body').addClass('overflow-hidden');
			});
		}
	});
});
} ( jQuery ) );

'use strict';
/* maps.js */
var map_lat;
var map_lon;
var map_address;
var map_site_url;
var map_location_title;
var map_phone;
var map_email;


function architecture_showMapOnContactPage(lat, lon, address, site_url, location_title, phone, email){
	'use strict';
	map_lat = lat;
	map_lon = lon;
	map_address = address;
	map_site_url = site_url;
	map_location_title = location_title;
	map_phone = phone;
	map_email = email;
	init_map();

}
    var map;
    function init_map() {
		'use strict';
        var mapOptions = {
            center: new google.maps.LatLng(map_lat, map_lon),
            zoom: 12,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: false,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
        var mapElement = document.getElementById('find-us');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
[map_location_title, map_address, map_phone, map_email, '', map_lat, map_lon, map_site_url+'/images/archi-map-icon.png']
        ];
		var i,description,telephone,email,web,markericon,marker,link;
        for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
            });
link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
     }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
	  'use strict';
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());
           var iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
               if (infoWindowVisible()) {
                   iw.close();
                   infoWindowVisible(false);
               } else {
                   var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a></div>";
                   iw = new google.maps.InfoWindow({content:html});
                   iw.open(map,marker);
                   infoWindowVisible(true);
               }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
 }
}
/* sticky-header.js */
/**
 * cbslideheader - A jQuery plugin to display or hide headerbar with a sliding motion
 * @version v0.3.6
 * @author maechabin <mail@chab.in> http://mae.chab.in/
 * @license MIT license
 */
!function(e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e(require("jquery"),window,document):e(jQuery,window,document)}(function(e,i,o,t){"use strict";var n=function(i,o){this.element=i,this.$element=e(i),this.methodType="",this.config={},this.options=o,this.slideFlag="up",this.defaults={headerBarHeight:this.$element.height(),headerBarWidth:"100%",header2SelectorName:".cb-header2",headerClone:!1,fullscreenView:!1,zIndex:9999,boxShadow:"none",opacity:1, slidePoint:0,slideDownDuration:"normal",slideUpDuration:"normal",slideDownEasing:"swing",slideUpEasing:"swing",slideDownCallback:function(){},slideUpCallback:function(){},headroom:!1}};n.prototype.slide=function(e,o,t,n){var s=this;this.slideFlag="up"===e?"down":"up",i.setTimeout(function(){s.$element.stop().animate({top:o},s.config["slide"+t+"Speed"],s.config["slide"+t+"Easing"],s.config["slide"+t+"Callback"]).css(n)},200)},n.prototype.slideHeader=function(){var o=this,t=e(i),n="slideDown"===o.methodType?0:"-"+o.config.headerBarHeight+"px",s="slideDown"===o.methodType?"-"+o.config.headerBarHeight+"px":15,d="slideDown"===o.methodType?"Down":"Up",l="slideDown"===o.methodType?"Up":"Down",a={"box-shadow":o.config.boxShadow,transition:"box-shadow .9s linear"},h={"box-shadow":"none"},c="slideDown"===o.methodType?a:h,r="slideDown"===o.methodType?h:a,p=0,g=0;t.on("scroll",function(){"slideUp"===o.methodType&&o.config.headroom===!0?(g=t.scrollTop(),g>p&&g>0?"up"===o.slideFlag&&o.slide.call(o,o.slideFlag,n,d,c):"down"===o.slideFlag&&o.slide.call(o,o.slideFlag,s,l,r),p=g):t.scrollTop()>o.config.slidePoint?"up"===o.slideFlag&&o.slide.call(o,o.slideFlag,n,d,c):"down"===o.slideFlag&&o.slide.call(o,o.slideFlag,s,l,r)})},n.prototype.setStyle=function(){var e=this,i="slideDown"===e.methodType?"-"+e.config.headerBarHeight+"px":15;e.$element.css({top:i,visibility:"visible",opacity:e.config.opacity,width:e.config.width,"z-index":e.config.zIndex})},n.prototype.cloneHeader=function(){var e=this,i=e.$element.clone(!0);i.insertAfter(e.$element).removeClass("cb-header").addClass("cb-header1").css({"z-index":1e4})},n.prototype.changeHeaderHeight=function(){var o=this,t=o.$element.height(),n=e(o.config.header2SelectorName),s=t+n.height(),d=e(i).height(),l="";d>s?(l=o.config.headerClone===!0?(d-s)/2:(d-s+t)/2,o.config.slidePoint=d,n.css({"padding-top":l+"px","padding-bottom":l+"px"})):o.config.headerClone===!0?o.config.slidePoint=s:o.config.slidePoint=s-t},n.prototype.init=function(i){return this.methodType=i,this.config=e.extend({},this.defaults,this.options),this.config.headerClone===!0&&this.cloneHeader(),this.setStyle(),this.config.fullscreenView===!0&&this.changeHeaderHeight(),this.slideHeader(),this},e.extend(e.fn,{cbSlideDownHeader:function(e){return this.each(function(){new n(this,e).init("slideDown")})},cbSlideUpHeader:function(e){return this.each(function(){new n(this,e).init("slideUp")})}})});

/* counter.js */
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);

/* Custom.js */
<!-- Header -->
jQuery(".header-two").cbSlideDownHeader({
    zIndex: 1001,
    //headerClone: true,
    //fullscreenView: true
  });
  jQuery(".header-one").cbSlideUpHeader({
    zIndex: 30,
	//headerClone: true,
    //fullscreenView: true
    //slideDownCallback: function () {alert("aaa");}
  });





<!-- Smooth Scrol -->
jQuery(function(){
'use strict';
var jQuerywindow = jQuery(window);		//Window object

var scrollTime = 0.6;			//Scroll time
var scrollDistance = 355;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

jQuerywindow.on("mousewheel DOMMouseScroll", function(event){

event.preventDefault();

var delta = event.originalEvent.wheelDelta/125 || -event.originalEvent.detail/3;
var scrollTop = jQuerywindow.scrollTop();
var finalScroll = scrollTop - parseInt(delta*scrollDistance);

TweenMax.to(jQuerywindow, scrollTime, {
scrollTo : { y: finalScroll, autoKill:true },
ease: Power1.easeOut,
autoKill: true,
overwrite: 5
});

});

});







<!-- FunFacts -->
(function(jQuery) {
		"use strict";
		function count(jQuerythis){
		var current = parseInt(jQuerythis.html(), 10);
		current = current + 10; /* Where 50 is increment */
		jQuerythis.html(++current);
			if(current > jQuerythis.data('count')){
				jQuerythis.html(jQuerythis.data('count'));
			} else {
				setTimeout(function(){count(jQuerythis)}, 1);
			}
		}
		jQuery(".stat-count").each(function() {
		  jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
		  jQuery(this).html('0');
		  count(jQuery(this));
		});
   })(jQuery);







<!-- Client Words Carousel -->
jQuery(document).ready(function() {

  jQuery(".owl-carousel").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,

  });

});









'use strict';
<!-- Services Tabs -->
/* jQuery activation and setting options for the tabs*/
var tabbedNav = jQuery(".tabbed-nav").zozoTabs({
orientation: "horizontal",
theme: "silver",
position: "top-left",
size: "medium",
animation: {
duration: 600,
easing: "easeOutQuint",
effects: "fade"
},
defaultTab: "tab1"
});







<!-- About Slide Carousel -->

jQuery(document).ready(function() {

  jQuery(".architecture-slider").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});




//PreLoader
;(function(){

			// Menu settings
			jQuery('#menuToggle, .menu-close').on('click', function(){
				jQuery('#menuToggle').toggleClass('active');
				jQuery('body').toggleClass('body-push-toleft');
				jQuery('#theMenu').toggleClass('menu-open');
			});


})(jQuery)

//PAGE LOADER//
jQuery(document).ready(function(){
        jQuery('body').addClass('loaded');

});





  //Switcher
jQuery(document).ready(function(jQuery) {

jQuery("#default-color" ).click(function(){
jQuery("#color" ).attr("href", "css/default-color.css");
//jQuery(".link img" ).attr("src", "images/timetable-menu-brown.png");
return false;
});

jQuery("#brown" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/brown.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-brown.png");
return false;
});

jQuery("#pink" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/pink.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-pink.png");
return false;
});

jQuery("#dark-blue" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/dark-blue.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-dark-blue.png");
return false;
});


jQuery("#green" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/green.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-green.png");
return false;
});

jQuery("#light-green" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/light-green.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-light-green.png");
return false;
});


jQuery("#orange" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/orange.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-orange.png");
return false;
});

jQuery("#light-blue" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/light-blue.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-light-blue.png");
return false;
});

jQuery("#purple" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/purple.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-purple.png");
return false;
});

jQuery("#red" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/red.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-red.png");
return false;
});

jQuery("#yellow" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/yellow.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-yellow.png");
return false;
});



jQuery("#light").click(function(){
jQuery("#footer").addClass("footer-light");
jQuery("#footer").removeClass("footer");
//jQuery("#footer img" ).attr("src", "images/footer-logo.jpg");
});
jQuery("#dark").click(function(){
jQuery("#footer").addClass("footer");
jQuery("#footer").removeClass("footer-light");
//jQuery("#footer img" ).attr("src", "images/footer-logo-dark.jpg");
});

jQuery("#header-one").click(function(){
jQuery("#header-1").show();
jQuery("#header-2").hide();
});
jQuery("#header-two").click(function(){
jQuery("#header-2").show();
jQuery("#header-1").hide();
});



// picker buttton
jQuery(".picker_close").click(function(){

jQuery("#choose_color").toggleClass("position");

});

});

/* main-portfolio.js */

(function(jQuery, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    jQuery('#js-grid-lightbox-gallery').cubeportfolio({
        filters: '#js-filters-lightbox-gallery1, #js-filters-lightbox-gallery2',

        layoutMode: 'grid',
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 60,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'below',
        singlePageInlineInFocus: true,
    });
})(jQuery, window, document);
