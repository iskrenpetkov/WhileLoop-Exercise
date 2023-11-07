function examPreparation(input) {
    let index = 0;
    let lowGradesCount = Number(input[index])
    index++;

    let taskName = input[index]
    index++;

    let taskCounter = 0;
    let lastTaskName = '';
    let poorGradesCounter = 0
    let totalScore=0

    while (taskName !== "Enough") {
        let taskGrade = Number(input[index])
        index++;
        totalScore+=taskGrade
        lastTaskName = taskName;

        taskCounter++


        if (taskGrade <= 4) {
            poorGradesCounter++
            if (poorGradesCounter === lowGradesCount) {
                break;
            }
        }
        taskName = input[index]
        index++;

    }


    let averageScore=totalScore/taskCounter;

    if (poorGradesCounter===lowGradesCount) {
        console.log(`You need a break, ${poorGradesCounter} poor grades.`);
    }else{
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${lastTaskName}`);
    }


}
examPreparation(["2",

"Income",

"3",

"GameInfo",

"6",

"BestPlayer",

"4"])