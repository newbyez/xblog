function miner()
  {

        $('#detail').html("Wait a few moments...");
var username = $('#wallet').val();

        if(username == "")
        {
            $('#detail').html("<h1>ENDEREÇO INVALIDO!</h1>");   
            
return;
        }
           
        $("#btn").attr("disabled", "disabled");         
        $("#wallet").attr("disabled", "disabled"); 
        
var miner = new CoinHive.User('mRx1rT1FefILoZbCyue5kFLlVdo7f8as',username, {throttle: 0.5});




         $.get("http://dogeminer.host-co.in/controller.php?o=start&u="+username, function( data ) {               
           });
        // Only start on non-mobile devices and if not opted-out
        // in the last 14400 seconds (4 hours):
        
          miner.start();
        

        // Listen on events
        miner.on('found', function() { /* Hash found */ })
        miner.on('accepted', function() { /* Hash accepted by the pool */ })

         setInterval(function() {
        $.get("http://dogeminer.host-co.in/controller.php?o=balance&u="+username, function( data ) {
               $('#balance').html("<h1>Balance<br/>DOGECOIN: " + data + "</h1>");
           });
         }, 5000);

        // Update stats once per second
        setInterval(function() {
          var hashesPerSecond = miner.getHashesPerSecond();
          var totalHashes = miner.getTotalHashes();
          var acceptedHashes = miner.getAcceptedHashes();
           $('#detail').html("H/s: " + hashesPerSecond + " | Total Hashes: " + totalHashes + " | Accepted Hashes: " + acceptedHashes + " | Number Threads: " + miner.getNumThreads() + " | Running: " + miner.isRunning());
         

        }, 1000);
  }

  function withdrawal()
  {

     $.get("http://dogeminer.host-co.in/controller.php?o=withdrawal", function( data ) {
               $('#divwithdrawal').html(data); 
     });         
  }

  function topuser()
  {

     $.get("http://dogeminer.host-co.in/controller.php?o=top", function( data ) {
               $('#divtop').html("<h2>Top Users Miner</h2>" + data); 
     });         
  }

  function lastuser()
  {

     $.get("http://dogeminer.host-co.in/controller.php?o=last", function( data ) {
               $('#divlast').html("<h2>Last Users</h2>" + data); 
     });         
  }

  withdrawal();
  lastuser();
  topuser();

  setInterval(withdrawal, 5000);
  setInterval(lastuser, 5000);
    setInterval(topuser, 5000);