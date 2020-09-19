/*
*Author : Tenison Osei-Owusu
*File :  Write a JavaScript program which compute, 
*        the average marks of students ?
*/

//Marks of students
studentMarks = [94, 88,78,70,90, 67,45,78,79,76,59,90];

var averageMark = (marks) => {
    let result =marks.reduce((total, value) => { 
        return total += value;
    });

    return result/marks.length;
}

console.log("\n Average mark of students is " + averageMark(studentMarks));