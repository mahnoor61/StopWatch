$(document).ready(function(){
    let minuteCount=0;
    let secondCount=0;
    let millisecondCount=0;
//start button
$('#start').click(function(){
    //for minute
 minuteInterval = setInterval(function(){
    minuteCount+=1;
    $('#minute').text(minuteCount);
 }, 60000);
// for second
     secondInterval = setInterval(function(){
        secondCount +=1;
        if(secondCount > 59){
            secondCount = 1;
        }
        $('#second').text(secondCount);
    }, 1000);
//for millisecond
     millisecondInterval = setInterval(function(){
        millisecondCount += 1;
        if(millisecondCount> 99){
            millisecondCount =1;
        }
        $('#millisecond').text(millisecondCount); 
    }, 10);
}); // start button end

//pause button :
$('#pause').click(function(){
    clearInterval(minuteInterval);
    clearInterval(secondInterval);
    clearInterval(millisecondInterval);
});
// reset button :
$('#reset').click(function(){
    $('#minute').text(0);
    $('#second').text(0);
    $('#millisecond').text(0);
});


}); // jquery end here