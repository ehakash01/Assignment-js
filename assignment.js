// https://github.com/ehakash01/Assignment-js


// 1. Kilometer to meter conversion : 
// 1km = 1000m
function kilometerToMeter(kilo) {
    let meter = kilo * 1000;
    if (meter < 1) {
        return "Distance cann't be negative";
    }
    return meter;
}
let kiloToMeter = kilometerToMeter(5);  // 5 is testing input you can input here any number to test this.
console.log(kiloToMeter);


// 2. Budget calculator : 
// clock = 50;
// phone = 100;
// laptop = 500;
function budgetCalculator(clock, phone, laptop) {
    let totalbudget = (clock * 50) + (phone * 100) + (laptop * 500);
    if ((clock < 1) || (phone < 1) || (laptop < 1)) {
        return "Price cann't be negative";
    }
    return totalbudget;
}
let total = budgetCalculator(4, 5, 6); // In this line clock value = 4 , phone value = 5 , laptop value = 6
console.log(total);


// 3. Hotel Cost :
// first 10 days rent = 100 ;
// second 10 days rent = 80 ;
// Then for the next all days = 50 ;
function hotelCost(days) {
    let cost = 0;
    if (days < 1) {
        return "Cost cann't be negative";
    }
    else if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        let fristTenDays = 10 * 100;
        let remaining = days - 10;
        let secondTenDays = remaining * 80;
        cost = fristTenDays + secondTenDays;
    }
    else {
        let fristTenDays = 10 * 100;
        let secondTenDays = 10 * 80;
        let remaining = days - 20;
        let afterNextDays = remaining * 50;
        cost = fristTenDays + secondTenDays + afterNextDays;
    }
    return cost;
}
let totalCost = hotelCost(30); // 30 is testing input you can input here any number to test this.
console.log(totalCost);


// 4. Mega friend ( Find the largest length of array ) :
function megaFriend(friendsName) {
    let largestName = friendsName[0];
    for (i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > largestName.length) {
            largestName = friendsName[i];
        }
        else if (friendsName[i] == "") {      // Input empty string er shoman hole unexpected value return korbe.
            friendsName[i] = "";
            return ("Unexpected value");
        }
    }
    return largestName;
}
let output = megaFriend(["Akash", "batash", "ThisIsLargestName", "pritom"]); // Testing input
console.log(output);

