$(document).ready(function () {
    
    var pattern = [],
        attempt = [],
        count = 0,
        greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    
    var sounds = [greenSound, redSound, yellowSound, blueSound];
    var colors = ['green','red','yellow','blue'];
    var strict = false;
    
    // generates random color
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    
    // resets vars and text
    function reset() {
        $('#level').text('');
        // to test
        pattern = ['green', 'yellow', 'blue', 'blue', 'red', 'red'];
        //pattern = [];
        attempt = [];
        count = 0;   
    }
    
    //  simulates button push
    function pushBtn(color) {
        $('#' + color).addClass('onBtn');
        sounds[colors.indexOf(color)].play();
        setTimeout(function () {
            $('#' + color).removeClass('onBtn');
        }, 100);
    }
    
    // displays generated button pattern
    function displayPattern() {
        let i = 0;
        run = setInterval(function () {
            pushBtn(pattern[i]);
            i++;
            if (i > pattern.length) {
                clearInterval(run);
            }
        }, 600);
    }
    
    //not working yet, working on this one
    function playerTurn() {
        $('.btn').click(function () {
            let color = $(this).attr('id');
            attempt.push(color);
            pushBtn(color);
            if (pattern[pattern.length - 1] === attempt[attempt.length - 1]) {
                console.log("correct");
            } else {
                console.log("wrong!");
                if (strict) {
                    newGame();
                }
                displayPattern();
            }
        });
    }
    
    // runs new game)
    function newGame() {
        reset();
        count++;
        $('#level').text(count);
        let color = getRandomColor();
        // add color 
        pattern.push(color);
        displayPattern();
        playerTurn();
    }
    
    $('.middleCircle').click(function() {
        if ($('#start').text() === 'Start') {
            $('#start').text('Reset');
            newGame();
        } else {
            $('#start').text('Start');
            reset();
        }
    });
});