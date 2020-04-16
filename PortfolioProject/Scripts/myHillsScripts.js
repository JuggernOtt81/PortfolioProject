$("#btnRunNHills").on("click", function () {
    //get data


    //run algo
    var hillsResults = DoHills();

    //produce output
    $("#outputSunset").append(hillsResults);
        //(`There are ${seeingGroup.length} buildings from which the sunset can be seen, and they are the buildings with heights of ${seeingGroup}.`);
});