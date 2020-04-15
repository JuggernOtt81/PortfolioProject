$("#SoaFCalc").on("click", function () {
    var num_1 = Number($("#num_1").val());
    var num_2 = Number($("#num_2").val());
    var num_3 = Number($("#num_3").val());
    var num_4 = Number($("#num_4").val());
    var num_K = Number($("#num_K").val());
    let numberArray = [];

    numberArray.push(num_1, num_2, num_3, num_4);
    let product = 0;

    for (var i = 0; i < numberArray.length; i++) {

        for (var x = i + 1; x < numberArray.length; x++) {
            product = numberArray[x] + numberArray[i];

            if (product == num_K) {
                console.log(`The numbers ${numberArray[i]} and ${numberArray[x]} add up to ${num_K}`);
                $("#SoafNumbers").append(`The numbers ${numberArray[i]} and ${numberArray[x]} add up to ${num_K} (K)<br>`);
            }
            else {
                $("#SoafNumbers").append(`The numbers ${numberArray[i]} and ${numberArray[x]} DO NOT add up to ${num_K} (K)<br>`);
            }
        }
    }
})