angular.module('ip')
.service('mainService', function ($http) {

  this.serviceTest = "service is working";

  // this.getMyIp = function() {
  //   return $http.get('/myIp')
  //   .then(function (response) {
  //     console.log('ip response: ', response);
  //     return response;
  //   });
  // }

  this.python = function(site) {
    console.log('service: ' + site);
    return $http.get('/python/'+site)
    .then(function (response) {
      // return response.data[0];
      console.log("response:");
      console.log(response);
    });
  }

  this.startThatComputer = function(thisIp, thatIp, reverse) {
    // return $http({
    //    method: 'GET',
    //    url: 'http://'+thatIp+':3002/client/'+thisIp+'?reverse='+reverse,
    //    withCredentials: true
    //  })
    // .then(function (response) {
    //   return response.data;
    // });
  }

  this.storeResults = function(posting) {
    return $http.post('/store', posting)
    .then(function (response) {
      return response.data[0];
    });
  }

  this.getPastResults = function() {
    return $http.get('/allResults')
    .then(function (response) {
      return response.data;
    });
  }


})
