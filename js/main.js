$(function() {
  var currentDate = new Date();
  var futureDate  = new Date(2016, 0, 16, 0, 0, 0);
  //var futureDate  = new Date(Date.UTC(2016, 0, 16, 0, 0, 0));
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  var clock = $('#clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
    //autoStart: false
  });
});
