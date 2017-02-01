app.controller('homeCtrl',function($scope,$http,daySrvc,$state){
    $scope.holiDays;
    $http({
     method:'GET',
     url:'https://holidayapi.com/v1/holidays?key=8a9bb765-83eb-406a-90a4-befb30f1ef63&country=US&year=2015&month=12',
      
 }).then(function successCallback(response) {
        $scope.holiDays = response.data.holidays; 
       
        
    })
    
    $scope.call = function(x){
       daySrvc.setHoliday(x)
       $state.go('Day')
    }
    
})