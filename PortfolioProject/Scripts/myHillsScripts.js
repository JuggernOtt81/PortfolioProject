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