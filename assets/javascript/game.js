

var winCounter = 0;
var lossCounter = 0;
var counter = 0;

    // Computer makes a random choice between 19-120
var computerChoice = Math.floor(Math.random() * 101) + 19;

    //Global variables for each crystal.  Random selects number between 1-12
var blue = Math.floor(Math.random() * 11) + 1;
var red = Math.floor(Math.random() * 11) + 1;
var purple = Math.floor(Math.random() * 11) + 1;
var green = Math.floor(Math.random() * 11) + 1;

    //Link variable to HTML Object
        $("#computerChoice").html(computerChoice);
        $("#winCounter").html(winCounter);
        $("#lossCounter").html(lossCounter);
        $("#playersTotalScore").html(counter);

    //Reset Function
    function reset() {

        computerChoice = Math.floor(Math.random() * 101) + 19;        
        $("#computerChoice").html(computerChoice);
        blue = Math.floor(Math.random() * 11) + 1;
        red = Math.floor(Math.random() * 11) + 1;
        purple = Math.floor(Math.random() * 11) + 1;
        green = Math.floor(Math.random() * 11) + 1;
        counter = 0;
        $("#playersTotalScore").html(counter);

    }
    //Win Counter
    function win() {

        winCounter ++;
        $("#winCounter").html(winCounter);
        alert("You Win!");
        reset();

    }
    //Loss Counter
    function lose() {

	      lossCounter ++;
        $("#lossCounter").html(lossCounter);
        alert("You Lose!");
        reset();
        
    }
    //Crystals random values are added to PTS.  If value is equal to PTS - Win, if not Lose.
    $('#blue').on ('click', function() {

        counter = counter + blue;
        $('#playersTotalScore').html(counter); 
        if (counter == computerChoice) {
        win();
      }
        else if (counter > computerChoice) {
        lose();
      }   
    });  

    $('#red').on ('click', function() {
    
        counter = counter + red;
        $('#playersTotalScore').html(counter); 
        if (counter == computerChoice) {
          win();
        }
        else if (counter > computerChoice) {
          lose();
        }   
    });  

    $('#purple').on ('click', function() {
        
        counter = counter + purple;
        $('#playersTotalScore').html(counter); 
        if (counter == computerChoice) {
          win();
        }
        else if (counter > computerChoice) {
          lose();
        }   
    });  

    $('#green').on ('click', function() {
        
        counter = counter + green;
        $('#playersTotalScore').html(counter); 
        if (counter == computerChoice) {
          win();
        }
        else if (counter > computerChoice) {
          lose();
        }   
    });  
