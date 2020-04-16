function DoDummy() {
$("#DummyOutput").html(`There's NOTHING here! <br>
This modal is just a Dummy!`)
}
function DoFears(num_1, num_2, num_3, num_4, num_K) {
    let FearsResult = new Array()
    let numberArray = [];
    numberArray.push(num_1, num_2, num_3, num_4);
    let product = 0;
    for (var i = 0; i < numberArray.length; i++) {
        for (var x = i + 1; x < numberArray.length; x++) {
            product = numberArray[x] + numberArray[i];
            if (product == num_K) {
                $("#SoafNumbers").append(`The numbers ${numberArray[i]} and ${numberArray[x]} add up to ${num_K} (K)<br>`);
            }
            else {
                $("#SoafNumbers").append(`The numbers ${numberArray[i]} and ${numberArray[x]} DO NOT add up to ${num_K} (K)<br>`);
            }
        }
    }
    return FearsResult
}
function DoFizzBuzz(f, b, ln) {
    let FizzBuzzResult = new Array()

    let fb = f * b;

    let i = 1;
    while (i <= ln) {
        if (i % fb == 0) {
            FizzBuzzResult.push("<span class='fizzbuzz'>FIZZ-BUZZ</span>");
        }
        else
            if (i % b == 0) {
                FizzBuzzResult.push("<span class='buzz'>BUZZ</span>");
            }
            else
                if (i % f == 0) {
                    FizzBuzzResult.push("<span class='fizz'>FIZZ</span>");
                }
                else {
                    FizzBuzzResult.push(i);
                }
        i++;
    }

    return FizzBuzzResult;
}
function DoHills() {
    let HillsOutput = "";

    let buildingsArray = [3, 2, 4, 7, 6, 9];
    let loopArray = [];
    let highestYet = 0;
    let canSee = 0;
    let canNotSee = 0;
    let seeingGroup = [];
    let arrayLength = buildingsArray.length;
    for (let i = 0; i < arrayLength; i++) {

        loopArray.push(buildingsArray[i]);

        if (buildingsArray[i] > highestYet) {
            canSee = canSee++;
            seeingGroup.push(buildingsArray[i])
        }
        else {
            canNotSee = canNotSee++;
        }

        if (loopArray[i] > highestYet) {
            highestYet = loopArray[i];
        }
    }
    HillsOutput = $("#outputSunset").append(`There are ${seeingGroup.length} buildings from which the sunset can be seen, and they are the buildings with heights of ${seeingGroup}.`);

    return HillsOutput;
}
function DoNumbers() {
    let NumbersResult = new Array()

    $("#btnRunNumbers").on("click", function () {
        var num1 = Number($("#num1").val());
        var num2 = Number($("#num2").val());
        var num3 = Number($("#num3").val());
        var num4 = Number($("#num4").val());
        var num5 = Number($("#num5").val());

        var least = Math.min(num1, num2, num3, num4, num5);
        var greatest = Math.max(num1, num2, num3, num4, num5);
        var sum = num1 + num2 + num3 + num4 + num5;
        var mean = (sum / 5);
        var product = num1 * num2 * num3 * num4 * num5;
        var fc = getFactorial(num5);

        function getFactorial() {
            var i;
            var fact = 1;
            for (i = num5; i >= 1; i--) {
                fact = fact * i;
            }
            return fact;
        };
        $("#outputNumbers").html(`The number of LEAST value is: ${least} <br>
The number with the GREATEST value is: ${greatest} <br>
The MEAN of these numbers is: ${mean} <br>
The SUM of these numbers is: ${sum} <br>
The PRODUCT of these numbers is: ${product} <br>
The FACTORIAL of the 5th number is: ${fc}`)
    })

    return NumbersResult
}
function DoTacoCat(G, H) {
    let TacoCatResult = new Array()
    var myTacoCatForm = document.getElementById('myTacoCatForm');
    var wordInput = document.getElementById('wordInput');
    var answer = document.getElementById('answer');

    myTacoCatForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var userInput = wordInput.value.toLowerCase().replace(/\s|\'|\"/g, '');
        answer.innerHTML = isPalindrome(userInput);


        if (isPalindrome(userInput) == false) {
            $("#answerAppend").html(userInput + " is NOT the reverse of " + wordInput.value + ".");
        }
        else {
            $("#answerAppend").html(userInput + " IS the reverse of " + wordInput.value + ".");
        }
    });

    function isPalindrome(userInput) {
        for (i = 0; i <= (userInput.length / 2); i++) {
            if (userInput[i] != userInput[(userInput.length - 1 - i)]) {
                return false;
            }
        }
        return true;
    }
    return TacoCatResult
}










