app.controller('dayCtrl',function($scope,daySrvc,$state){
    $scope.obj = daySrvc.getHoliday()
   $scope.back = function(){
       $state.go('Home')
   }
})