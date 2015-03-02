// *** First follow Step 1 in both index.html and styles.css ***

// VARIABLES 
// Step 1: 	Create a variable called "message" and set it equal to "Hello, World!"
// 		   	Replace console.log arugument with the message variable "console.log(message)"
// 			Run in browser. Open the console, and see the output has not changed

// Step 2: Create another variable called "open" and set it to false


// FUNCTIONS
// Step 3: 	Create a function called "toggleEmailForm()"
// 			inside the function, write console.log(open);
// 			Follow step 2 in index.html
// 			Load in the browser and open the console. Click the "Send Lawyer Dog and Email" button and observe the output


// CONDITIONALS
// Step 4: 	Create an if statement to check if open == true
// 			Move the console.log statment inside the if conditional 
// 			Load in the browser and open the console. Click the "Send Lawyer Dog and Email" button and observe the output
// 			You should see nothing, because open equals false, and will never equal true, until we update it
// 			Add and "else" statement to the if conditional and set open = true
// 			Inside the else statement, set open = true
// 			Load in the browser and open the console. Click the "Send Lawyer Dog and Email" button and observe the output
//			Finally, set open = to false, if open equals true
// 			Load in the browser and open the console. Click the "Send Lawyer Dog and Email" button and observe the output


// Step 5: 	Add this line if open = true, $('#contact-form').css('height', '60px');
// 			Else, add this line, $('#contact-form').css('height', '295px');
// 			Load in browser and click the "Send Lawyer Dog and Email"


// LOOPS
// Step 5: 	Inside the addSomeRandomSquares() function, create a for loop that repeats 10 times	
// 			Load in browser, and click the red square


console.log('Hello, World!');



function addSomeRandomSquares() {

		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		var squareHTML = '<div class="row max-width"><div class="square" style="background: #' + randomColor + ';"></div></div>';
		$('#animation').append(squareHTML);

}