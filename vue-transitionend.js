(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.transitionend = factory());
}(this, (function () { 'use strict';

var binder = {
    getEventName: function getEventName() {
        var event;
        if (window.ontransitionend !== undefined) {
            event = 'transitionend';
        } else if (window.onwebkittransitionend !== undefined) {
            event = 'webkitTransitionEnd';
        } else if (window.opera) {
            event = 'oTransitionEnd';
        }
        console.log("bound event name:", event);
        this.eventName = event;
        return event;
    },
    bind: function bind(el, _bind, vnode) {
        var event = this.getEventName();
        if (!event) {
            console.error("transition end event not support");
            this.bindError = true;
            return;
        }
        if (document.addEventListener) {
            document.addEventListener(this.eventName, _bind.value);
        } else {
            this.bindError = true;
            console.error("document.addEventListener not support");
        }
    },
    unbind: function unbind(el, bind, vnode) {
        if (!this.bindError) {
            document.removeEventListener(this.eventName, bind.value);
        }
    }
};

var TransitionEnd$1 = {
    bind: function bind(el, _bind2, vnode) {
        binder.bind(el, _bind2, vnode);
    },
    unbind: function unbind(el, bind, vnode) {
        binder.unbind(el, bind, vnode);
    }
};

var install = function install(Vue) {
  Vue.directive('transitionEnd', TransitionEnd$1);
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install); // eslint-disable-line
  window.$transitionEnd = TransitionEnd$1;
}

TransitionEnd$1.install = install;

return TransitionEnd$1;

})));
