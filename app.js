
    var numQues = 15;

    var numChoi = 3;

    var answers = new Array(15);

    answers[0] = "realloc";

    answers[1] = "_ (underscore)";

    answers[2] = "- ->";

    answers[3] = "0";

    answers[4] = "main()";

    answers[5] = "{ }";

    answers[6] = "/* Comment */";

    answers[7] = "realloc";

    answers[8] = "_ (underscore)";

    answers[9] = "- ->";

    answers[10] = "0";

    answers[11] = "main()";

    answers[12] = "{ }";

    answers[13] = "/* Comment */";
    answers[14] = "lasts";

    function getScore(form) {

        var score = 0;

        var currElt;

        var currSelection;

        for (i = 0; i < numQues; i++) {

            currElt = i * numChoi;

            answered = false;

            for (j = 0; j < numChoi; j++) {

                currSelection = form.elements[currElt + j];

                if (currSelection.checked) {

                    answered = true;

                    if (currSelection.value == answers[i]) {

                        score++;

                        break;

                    }

                }

            }   

            if (answered === false) { alert("Do answer all the questions, Please"); return false; }

        }

        var scoreper = Math.round(score / numQues * 100);

        form.percentage.value = scoreper + "%";

        form.mark.value = score;

    }
