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