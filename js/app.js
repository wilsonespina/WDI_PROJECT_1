$(() => {

  console.log('loaded');

  //GRID NAVIGATION

  //Make digger icon appear in a random square on the grid after pressing PLAY button
  //generate random number between 1 - 25
  //make digger icon appear on the corresponding box in the array
  //Assign key bindings to arrow keys to make digger move around the grid


  const grid = ['b0','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19','b20','b21','b22','b23','b24'];
  const $li = $('.li');
  const digger = $('<img id ="digger" src="images/digger.png" alt="digger image" />'); //does it need te be .digger?
  const $playButton = $('#play-button');
  const gridWidth = 5; //UPDATE WITH BIGGER GRID
  const startSquare = 8; //UPDATE with new game?
  const $beginningSquare = $('#grid li:nth-child(' + startSquare + ')');




  init();


  function init (){
    //start potioning
    $playButton.on('click', function() {
      $beginningSquare.append(digger);
    });
    walls();
    moveDigger();

    //CREATE OBSTACLES
    function walls (){


    }



    // MOVE DIGGER
    function moveDigger(){
      let n = startSquare;
      const $currentPosition = $('#grid li:nth-child(' + n + ')');
      console.log($currentPosition);

      $(document).keydown(function(e) {
        switch(e.which) {
          case 37: // left
//1st row
            if (n >= 2 && n <= 5) {
              (n -= 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
//2nd row
            } else if (n >= 7 && n <= 10) {
              (n -= 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
//3rd row
            } else if (n >= 12 && n <= 15) {
              (n -= 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
//4th row
            } else if (n >= 17 && n <= 20) {
              (n -= 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
//5th row
            } else if (n >= 22 && n <= 25) {
              (n -= 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
            } else {
              return;
            }
console.log(n);
            break;
          case 38: // up
            if (n >= 6 && n <= 25) {
              (n -= 5);
              $('#grid li:nth-child(' + n + ')').append(digger);
            } else {
              return;
            }
            console.log(n);
            break;
          case 39: // right
//1st row
            if (n >= 1 && n <= 4) {
              (n += 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
//2nd row
            } else if (n >= 6 && n <= 9) {
              (n += 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
//3rd row
            } else if (n >= 11 && n <= 14) {
              (n += 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
//3rd row
            } else if (n >= 16 && n <= 19) {
              (n += 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
//3rd row
            } else if (n >= 21 && n <= 24) {
              (n += 1);
              $('#grid li:nth-child(' + n + ')').append(digger);
            } else {
              return;
            }
            console.log(n);
            break;
          case 40: // down
            if (n >= 1 && n <= 20) {
              (n += 5);
              $('#grid li:nth-child(' + n + ')').append(digger);
            } else {
              return;
            }
            console.log(n);
            break;

          default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)


        //if statement using key binding to update img position
      });
    }





    //SPAWN RANDOM OBJECT
    function spawn(){

      objectPosition();
      function objectPosition(){
        const startValue = Math.floor((Math.random() * 25));
        const randomPosition = (grid[startValue]);
console.log(randomPosition);
      //add if functions to stop spawing in blocks
      }

    }
  }
});
