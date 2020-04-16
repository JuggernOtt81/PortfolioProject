$("#btnRunFears").on("click", function () {

    //Step 1: Get the data
    var num_1 = Number($("#num_1").val());
    var num_2 = Number($("#num_2").val());
    var num_3 = Number($("#num_3").val());
    var num_4 = Number($("#num_4").val());
    var num_K = Number($("#num_K").val());

    //Step 2:
    var SoafResult = DoFears(num_1, num_2, num_3, num_4, num_K);

    //Step 3: Output
    $("#SoafNumbers").html(SoafResult());
});
