// code your solution here

// made an array of the record showing results of the superbowl 
const records = [
    { year: "2015", result: "W"},
    { year: "2014", result: "L"},
    { year: "2013", result: "N/A"},
];

// find first object whose condition returns true
// we want to find the year in which the team won
//return undefined if no winning record

function superbowlWin(records) {
    const winningRecord = records.find(record => record.result === "W")

    if (winningRecord) {
        return winningRecord.year;
    }
    else { 
        return undefined
    };
}

console.log(superbowlWin(records));


