app.service('daySrvc',function(){
    
    var aryData = [];
    
    this.setHoliday = function(data){
        aryData = data;
        }
    this.getHoliday = function(){
        return aryData;
        }
})