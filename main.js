// 1. What is a function?
// ფუნქცია არის კოდი, რომელსაც ვაძლევთ რაღაცა პარამეტრებს და გვიბრუნებს შედეგს, ასევე საშუალებას გვაძლევს რამდენჯერმე შევასრულოთ ერთი და იგივე ბრძანება თუმცა ვწეროთ ცოტა :)))  


// 2. What is a function call?
// ფუნქციის გამოძახება, ანუ ფუნქციის შესრულების პროცესი. 


// 3.What is a code block, and how does it relate to a function?
// კოდის ბლოკი არის ბრძანებების ჯგუფი, ფუნქციის შემთხვევაში არის ის ბრძანებები რომელიც უნდა შეასრულოს ფუქნციამ


// 4. Create a function that takes a string as an argument and greets the user. For example, if the function is called with "John," the function should return "Hello, John!"
function greetUser(name) {
    return `Hello, ${name}`;
}
console.log(greetUser("Mariam"));

/* 5. Create a function that takes a string as an argument and returns a string with the argument value in reverse. For example, if the function is called with the input "hello," the function should return "olleh." (Use a loop, not a method that does this in one step.) */

function reverse(input) {
    let word = ""; 
    for (let i = input.length - 1; i >= 0; i--) {
        word += input[i]; 
    }
    return word;
}

// 6. What is a default argument, and how does it work?
// დეფოლტ არგუმენტი არის არგუმენტის ის მნიშვნელობა, რომელიც ექნება არგუმენტს თუ მას არ მივუთითებთ ფუნქციის გამოძახებისას.

// 7. What is the scope and lifetime of a variable?
// scope არის ის ნაწილი სადაც ეს ცვლადი ხემისაწვდომია, lifetime არის ის დრო სადამდეც არის ხელმისაწვდომი (სადამდეც არსებობს რა) :D

// 8. What is a return value?

// return value არის ის მნიშვნელობა რასაც ფუნქცია გვიბრუნებს გამოძახებისას.




// 9. What is the return value of a function that does not have a return statement?
// undefined


// 10. Given the following function, find mistakes in the code and explain what the function is supposed to do:

function foo(x) {
    x * 2; /* აქ უბრალოდ დაითვლის და არ დაგვიბრუნებს შედეგს */
}

let x = 7;
x = foo(x); 
console.log(x);

/* აქ დაგვიბრუნებს undefined-ს */
// უნდა დავუწეროთ return ფუნქციაში რომ საბოლოოდ დაგვიბრუნოს 14


// 11. Given the following code, find and correct the mistake in the code:

function bar(x = 8) {
    x += 1;
    // return x
}

function foo() {
    bar(); /* x=bar(x) */
    x *= 2;
}

let x = 7;
foo(x); /* აქ x აღარ უნდა*/
console.log(x); 


// 12. Given the following function, what is the return value of the function call foo(2)? Explain your answer.
function foo(x) {
    if (x > 5) {
        return x;
    } else {
        return x + foo(x + 1);
    }
}

// ფუ2 - 2+ფუ3 - 20
// ფუ3 -3+ ფუ4 - 18
// ფუ4 - 4 + ფუ5 -15
// ფუ5 - 5+6 -11
// ფუ6 - 6  

// foo(2) = 20

// 13. Create a function that takes an array of numbers as an argument and returns the sum of the odd numbers in the array. (Use a loop, not a method that does this in one step.)

function sumoddnums(arr){
    let sum = 0
    for(i= 0, i < arr.length, i++){
        if(arr[i] % 2 !==0){
            sum += arr[i]
        }
    }
    return sum
}

// 14. Create a function that takes a string as an argument and returns a boolean, true if string is a palindrome else false. A palindrome is a word that reads the same backward as forward. For example, if the function is called with "hello" it should return false, if the function receives "elle" it should return true, because elle backwards is also elle.

// mariam, anna
function checkpalindrome(word){
    for( let i = 0, i < (word.length / 2) , i++){
        if(word[i] !== word[word.length -1 - i]){
            return False
        }
    }
    return True
}
