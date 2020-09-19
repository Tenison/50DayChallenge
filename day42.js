/*  Author : Tenison Osei-Owusu
*   File   : Write a program to calculate 
*            income tax rates on salaries?
*/
//Resident must be true or false
var calTax = (income, isResident) => {
    //income = 0.055 * income;
    let tax;
    if(isResident){
        if(income <= 319)
            return 0;
        else if(income <= 419){
            tax = income - 319;
            return 0.05 * tax;
        }else if(income <= 539){
            tax =  income - 419;
            return (0.10 * tax) + 5;
        }else if(income <= 3539){
            tax = income - 539;
            return (0.175 * tax) + 17;
        }else if(income <= 20000){
            tax = income - 3539;
            return (0.25 * tax) + 542;
        }else{
            tax = income - 20000;
            return (0.30 * tax) + 4657.25;
        }
    }else{
        return 0.25 * income;
    }
}
console.log("Your Tax deduction :  " + calTax(5697.10, true) + " GHS");