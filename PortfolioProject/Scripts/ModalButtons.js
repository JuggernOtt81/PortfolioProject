$("#PreNumbers").hide();
$("#PreFB").hide();
$("#PreFears").hide();
$("#PreHills").hide();
$("#PreTC").hide();
$("#PreDummy").hide();

$("#btnShowFBCode").on("click", function () {
    $("#PreFB").toggle();
    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});
$("#btnShowNumbersCode").on("click", function () {
    $("#PreNumbers").toggle();
    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});
$("#btnShowFearsCode").on("click", function () {
    $("#PreFears").toggle();
    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});
$("#btnShowHillsCode").on("click", function () {
    $("#PreHills").toggle();
    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});
$("#btnShowTCCode").on("click", function () {
    $("#PreTC").toggle();
    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});
$("#btnShowDummyCode").on("click", function () {
    $("#PreDummy").toggle();
    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});


$("#btnClearFB").on("click", function () {
    $(".clearMe").val("");
    $("#outputFB").html("");
})
$("#btnClearNumbers").on("click", function () {
    $(".clearMe").val("");
    $("#outputNumbers").html("");
})
$("#btnClearFears").on("click", function () {
    $(".clearMe").val("");
    $("#outputFears").html("");
})
$("#btnClearHills").on("click", function () {
    $(".clearMe").val("");
    $("#outputHills").html("");
})
$("#btnClearTC").on("click", function () {
    $(".clearMe").val("");
    $("#outputTC").html("");
})
$("#btnClearDummy").on("click", function () {
    $(".clearMe").val("");
    $("#outputDummy").html("");
})