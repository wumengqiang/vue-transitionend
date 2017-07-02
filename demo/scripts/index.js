
window.a = document.querySelector(".page-container");
var vm = new Vue({
    el: '.page-container',
    data:  function(){
        return {
            transition: false,
        }
    },
    mounted: function(){
        setTimeout(function(){
            this.transition = true;
        }.bind(this), 0);
        console.log("hello")
    },
    methods: {
        handleTransitionEnd: function(){
            console.log("transitionend");
            this.transition = ! this.transition;
        }
    }
})
