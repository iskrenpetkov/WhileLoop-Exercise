function graduation(input) {

    let index = 0;
    let name = input[index]
    index++;

    let i = 1;
    let sumGreat = 0;
    let counter = 0;
    let isExcluded = false;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            counter++;
            if (counter === 2) {
                isExcluded = true;
                break;

            }
            continue;
        }

        sumGreat += grade;

        i++;
    }
        if (isExcluded) {
            console.log(`${name} has been excluded at ${i} grade`);
        } else {
            let avg = sumGreat / 12
            console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);

        }
   

}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])