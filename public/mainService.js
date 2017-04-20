angular.module('myApp').service('mainService', function ($http) {
    let serverUrl = 'http://localhost:3010'
    this.getData = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/products'
        });
    };
    this.getOneItem = (id) => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/products/' + id
        })
    }
})
