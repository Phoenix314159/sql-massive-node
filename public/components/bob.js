angular.module('myApp').component('bob', {
    templateUrl : './views/bob.html',
    controller : function (mainService) {
        let that = this;
        that.test = 'dude';
    }
})
