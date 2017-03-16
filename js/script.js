$(document).ready(function () {
    
    var pattern = [],
        player = [],
        level = 0,
        greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    
    var sounds = [greenSound, redSound, yellowSound, blueSound];
    var colors = ['green','red','yellow','blue'];
    var strict = false;
    var iter = 0;
    
    // generates random color
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    
    // resets vars and text
    function reset() {
        $('.btn').addClass('inactive');
        iter = 0;  
        $('#level').text('');
        pattern = [];
        player = [];
        level = 0;   
    }
    
    //  simulates button push
    function pushBtn(color) {
        $('#' + color).addClass('onBtn');
        sounds[colors.indexOf(color)].play();
        setTimeout(function () {
            $('#' + color).removeClass('onBtn');
        }, 100);
    }
    
    // player presses buttons and is checked    
    function playerTurn() {
        console.log("playerTurn");
        console.log(player[player.length - 1] + ", " + pattern[iter]);
        if (player[player.length - 1] !== pattern[iter]) {
            console.log("wrong!");
            $('.middleCircle').click();
        } else {
            console.log('good move!')
            iter++;
            var check = player.length === pattern.length;
            if (check) {
                if (level == 20){
                    alert('You won! Congrats.');
                } else {
                    nextLevel();
                }
            }
        }
    }
    
    // displays generated button pattern
    function displayPattern() {
        console.log("displayPattern");
        $('.btn').addClass('inactive');
        var i = 0;
        run = setInterval(function () {
            pushBtn(pattern[i]);
            i++;
            if (i >= pattern.length) {
                clearInterval(run);
                $('.btn').removeClass('inactive');
            }
        }, 600);
        player = [];
    }
    
    // adds next color btn to pattern
    function addPattern() {
        console.log('addPattern');
        var color = getRandomColor(); 
        pattern.push(color);
    }
    
    function nextLevel() {
        console.log('nextlevel');
        setTimeout(function () {
            level++;
            $('#level').text(level);
            iter = 0;
            addPattern();
            displayPattern();
        }, 300);
    }
    
    // runs new game
    function newGame() {
        console.log('newGame');
        reset();
        nextLevel();
    }
    
    $('.btn').addClass('inactive');
    $('.middleCircle').click(function() {
        if ($('#start').text() === 'Start') {
            $('#start').text('Reset');
            newGame();
        } else {
            $('#start').text('Start');
            reset();
        }
    });

    $('.btn').click(function () {
        var color = $(this).attr('id');
        player.push(color);
        pushBtn(color);
        console.log('player: ' + player + "\npattern: " + pattern + "\niter: " + iter);
        playerTurn();
    });
    
});