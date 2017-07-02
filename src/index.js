import TransitionEnd from "./directive"

const install = function(Vue) {
  Vue.directive('transitionEnd', TransitionEnd);
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install); // eslint-disable-line
  window.$transitionEnd = TransitionEnd;
}

TransitionEnd.install = install;
export default TransitionEnd;