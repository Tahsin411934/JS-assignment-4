function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Input should be a positive number";
    }
    else {
        const numOfStaff = 8;
        const perPersonLunchCost = 50;
        const ticketPrice = 120;
        const securityGardCost = 500;

        const totalIncome = ticketSale * ticketPrice;
        const totalStaffsLunchCost = perPersonLunchCost * numOfStaff;
        const totalExpenses = securityGardCost + totalStaffsLunchCost;

        return totalIncome - totalExpenses;
    }
}



function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }

    else {
        const lastchar = name[name.length - 1];
        const matchChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w']


        if (matchChar.includes(lastchar.toLowerCase())) {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }
    }


}


function deleteInvalids(array) {
    const newArray = [];
    if (!Array.isArray(array)) {
        return "Input should be an array"
    }
    else {

        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'number' && !isNaN(array[i])) {
                newArray.push(array[i]);

            }

        }
    }

    return newArray;
}



function password(obj) {

    if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || (typeof obj.birthYear !== 'number') || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }


    else {
        sName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1)
        return `${sName}#${obj.name}@${obj.birthYear}`;
    }
}


function monthlySavings(arr, livingCost) {

    if (!Array.isArray(arr) || (typeof livingCost !== 'number')) {
        return "invalid input";
    }
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] >= 3000) {
            arr[index] -= arr[index] * 0.20;
        }

    }
    for (let j = 0; j < arr.length; j++) {
        sum = sum + arr[j];


    }
    const savings = sum - livingCost;

    if (savings >= 0) {
        return savings;
    }
    else {
        return "earn more"
    }

}




console.log(calculateMoney(-130))
console.log(checkName(199))
console.log(deleteInvalids({ num: [1, 2, 3] }))
console.log(password({ name: "maisha" , birthYear: 2002 }))
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
