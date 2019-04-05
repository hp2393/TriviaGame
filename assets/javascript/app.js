var questions = [{
    ques: "What was the name of John Snow's Direwolf?",
    ans: ["Grey Wind", "Graham", "Ghost", "Gargamel"],
    name: "direwolf",
    correct: "Ghost",
    divClass: ".direwolf"
    },
    {
        ques: "What's the name of the explosive that gave the Lannisters the edge in the Battle of Blackwater?",
        ans: ["Wildfire", "Dragonfire", "Godsfire", "Pantsonfire"],
        name: "blackwater",
        correct: "Wildfire",
        divClass: ".blackwater"
    },
    {
        ques: "Which house's motto is Fire and Blood?",
        ans: ["Greyjoy", "Martel", "Davro", "Targaryen"],
        name: "motto",
        correct: "Targaryen",
        divClass: ".motto"
    },
    {
        ques: "Who wrote Game of Thrones?",
        ans: ["Robert Frost", "George Orwell", "George Sand", "Georger R. R. Martin"],
        name: "wrote",
        correct: "Georger R. R. Martin",
        divClass: ".wrote"
     },
    {
        ques: "How many legitimate children do Ned and Catelyn Stark have?",
        ans: ["4", "5", "6", "7"],
        name: "children",
        correct: "5",
        divClass: ".children"
    },
    {
        ques: "Who goes by the nickname Littlefinger?",
        ans: ["Lord Varys", "Maester Pycelle", "Ser Ilyn Payne", "Peter Bealish"],
        name: "littlefinger",
        correct: "Peter Bealish",
        divClass: ".littlefinger"    
    },
    {
        ques: "Why is Daenerys called Khaleesi?",
        ans: ["It's her nickname", "It's her title by marriage", "She was the mother of dragons", "It was the name her brother gave as kids to escape Westros"],
        name: "khaleesi",
        correct: "It's her title by marriage",
        divClass: ".khaleesi"
    },
    {
        ques: "What is the name of Ned Stark’s sword??",
        ans: ["Needle", "Ice", "Longclaw", "Oathkeeper"],
        name: "sword",
        correct: "Ice",
        divClass: ".sword"
    },
    {
        ques: "Where is the Iron Throne located?",
        ans: ["Winterfell", "Drone", "King's Landing", "Florida"],
        name: "located",
        correct: "King's Landing",
        divClass: ".located"
    },
    {
        ques: "Whose house sigil is the direwolf?",
        ans: ["Stark", "Lannister", "Baratheon", "Clegan"],
        name: "sigil",
        correct: "Stark",
        divClass: ".sigil"
    }
] 

var labels = ["first", "second", "third", "forth"];

var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});


var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}



var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;


            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            clearInterval(timer);
            return;
        }
    }, 1000);


    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
};


var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    countdown();

    $('.container').fadeOut(500);
    $('#answerScreen').show();
    $('#correctScreen').append(correctAnswers);
    $('#wrongScreen').append(wrongAnswers);

});