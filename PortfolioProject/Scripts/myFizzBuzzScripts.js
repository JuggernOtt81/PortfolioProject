$("#btnRunFB").on("click", function () {

    //Step 1: Get the data
    let f = Number($("#fizz_num").val());
    let b = Number($("#buzz_num").val());
    let ln = Number($("#limit_num").val());

    //Step 2:
    var fbResult = DoFizzBuzz(f, b, ln);

    //Step 3: Output
    $("#outputFB").html(fbResult.join(" | "));
});
