// alert("Hello, World!");
// console.log("Hello, World!");

var message = "Hello, World!";
var open = false;

function toggleEmailForm() {

	console.log(open);

	if(open == true) {
		$('#contact-form').css('height', '60px');
		$('#pill-arrow').html("&#x25BC;");
		open = false;
	} else {
		$('#contact-form').css('height', '295px');
		$('#pill-arrow').html("&#x25B2;");
		open = true;
	}
}

function addSomeRandomSquares() {
	for(var i=0; i<10; i=i+1) {
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		var squareHTML = '<div class="row max-width"><div class="square" style="background: #' + randomColor + ';"></div></div>';
		$('#animation').append(squareHTML);
	}
}