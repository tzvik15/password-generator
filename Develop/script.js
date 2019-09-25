var passwordOptions = {
    "specialChars": ["!", "@","#","$","%","^","&","*","(",")", "_","-","=","+","~","`"],
    "numbers": [1,2,3,4,5,6,7,8,9,0],
    "lowerCase":["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"],
    "upperCase" : ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
};






var generate = function() {
    alert("Thank you for choosing the password generator powered by Daniel Nester's magic. Following are a series of password criteria for you to choose from.");
    var passwordLength = prompt("How many characters would you like the password to have? (please enter a number between 8 and 128)");
    if (passwordLength < 8) {return alert("password must be at least 8 characters long. Please try again.");}
    else if (passwordLength > 128) {return alert("password must not be longer than 128 characters. Please try again.");}
    else {alert("Thank you. Your generated password will be "+passwordLength + " characters long.");
    var special = confirm("Would you like the password to include special characters? (@,#,$, etc.)");
    var numeric = confirm("Would you like the password to include numeric characters? (1,2,3, etc.");
    var lower = confirm("Would you like the password to include lowercase characters? (q,w,e,r,t,y...etc.");
    var upper = confirm("Would you like the password to include lowercase characters? (Q,W,E,R,T,Y...etc.");
    if (special === true && numeric === true && lower === true && upper === true) {
        var finalArray = passwordOptions.specialChars.concat(passwordOptions.numbers).concat(passwordOptions.lowerCase).concat(passwordOptions.upperCase);
    } else if (special === true && numeric === true && lower === true && upper === false) {
        var finalArray = passwordOptions.specialChars.concat(passwordOptions.numbers).concat(passwordOptions.lowerCase);
    } else if (special === true && numeric === true && lower === false && upper === true) {
        var finalArray = passwordOptions.specialChars.concat(passwordOptions.numbers).concat(passwordOptions.upperCase);
    } else if (special === true && numeric === true && lower === false && upper === false) {
        var finalArray = passwordOptions.specialChars.concat(passwordOptions.numbers);
    } else if (special === true && numeric === false && lower === true && upper === false) {
        var finalArray = passwordOptions.specialChars.concat(passwordOptions.lowerCase);
    } else if (special === true && numeric === false && lower === false && upper === true) {
        var finalArray = passwordOptions.specialChars.concat(passwordOptions.upperCase);
    } else if (special === true && numeric === false && lower === false && upper === false) {
        var finalArray = passwordOptions.specialChars;
    } else if (special === false && numeric === true && lower === true && upper === true) {
        var finalArray = passwordOptions.numbers.concat(passwordOptions.upperCase).concat (passwordOptions.lowerCase);
    } else if (special === false && numeric === false && lower === true && upper === true) {
        var finalArray = passwordOptions.lowerCase.concat(passwordOptions.upperCase);
    } else if (special === false && numeric === false && lower === false && upper === true) {
        var finalArray = passwordOptions.upperCase;
    } else if (special === false && numeric === false && lower === true && upper === false) {
        var finalArray = passwordOptions.lowerCase;
    } else if (special === true && numeric === false && lower === true && upper === true) {
        var finalArray = passwordOptions.specialChars.concat(passwordOptions.upperCase).concat(passwordOptions.lowerCase);
    } else if (special === false && numeric === true && lower === true && upper === false) {
        var finalArray = passwordOptions.numbers.concat(passwordOptions.lowerCase);
    } else if (special === false && numeric === true && lower === false && upper === true) {
        var finalArray = passwordOptions.numbers.concat(passwordOptions.upperCase);
    } else if (special === false && numeric === true && lower === false && upper === false) {
        var finalArray = passwordOptions.numbers;
    } else return alert("Your password MUST include at least one of the character types. Please try again.");
console.log(finalArray)



}}