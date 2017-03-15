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
    
    var run;
    
    function reset() {
        pattern = [];
        attempt = [];
        count = 0;   
    }
    
    function actBtn(color) {
        $('#' + color).addClass('onBtn');
        sounds[colors.indexOf(color)].play();
        setTimeout(function () {
            $('#' + color).removeClass('onBtn');
        }, 200);
    }
    
    function newGame() {
        reset();
        count++;
        let color = getRandomColor();
        // add color 
        pattern.push(color);
        actBtn(color);
    }
    
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    function runPattern() {
        run = setInterval(function () {
            
        }, 500);
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