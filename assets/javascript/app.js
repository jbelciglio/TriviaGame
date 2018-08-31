
function getQuestion() {
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&type=boolean",
        method: "GET"
    }).then(function (response) {
        var correctAnswer = [];


        for (i = 0; i < response.results.length; i++) {

            correctAnswer[i] = response.results[i].correct_answer;
            var row = $("#card-body");

            var quest = $(".card-text").html(response.results[i].question);

            row.html(quest);
            var userInput;
            $(".btn-primary").on("click", function (event) {
                userInput = true;
                if (userInput === response.results[i].correct_answer) {
                    alert("right!");
            }
            $(".btn-secondary").on("click", function (event) {
                userInput = false;
                if (userInput === response.results[i].correct_answer) {
                    alert("right!");
            }
            
            })

        })


    }
})
}
setInterval(getQuestion, 5000);