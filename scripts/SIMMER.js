var button1clicked = false;
var button2clicked = false;
var button3clicked = false;
var button4clicked = false;
var button5clicked = false;
var button6clicked = false;
var submitButtonClicked = false;
var stopColorScheme = false;
var numberOfAttempts = 0;
var color = "#DE8F35";
var color2 = "#F57627";
var questionNumber = 1;

$(document).ready(function() {

	ajaxOnLoadQuestion();
	document.getElementById("header").innerHTML = "Choose one or more answers";

	/* Declare and intantiate variables*/
	$('#feedback').hide();
	$('#try_again').hide();
	$('#continue').hide();
	$('#generate').hide();

	/*  JQuery Event Handlers for Clicking. Had to do this way do to CSS heirarchy of class vs ID */
	$("#button1").click(function() {
		if (!button1clicked) {
			if (questionNumber === 2) {//for single selection answer
				$("#button1").css("background-color", "#DE8F35");
				button1clicked = true;
				button2clicked = false;
				button3clicked = false;
				button4clicked = false;
				button5clicked = false;
				button6clicked = false;
				$("#button2").css("background-color", "#878485");
				$("#button3").css("background-color", "#878485");
				$("#button4").css("background-color", "#878485");
				$("#button5").css("background-color", "#878485");
				$("#button6").css("background-color", "#878485");
			} else if ((questionNumber === 1) || (questionNumber === 3)) {//for multiple selection answers
				$("#button1").css("background-color", "#DE8F35");
				button1clicked = true;
			}
		} else if (button1clicked) {//just de-selects the button
			$("#button1").css("background-color", "#878485");
			button1clicked = false;

		}
	});
	//end button 1

	$("#button2").click(function() {
		if (!button2clicked) {
			if (questionNumber === 2) {// for single selection answers
				$("#button2").css("background-color", "#DE8F35");
				button2clicked = true;
				button1clicked = false;
				button3clicked = false;
				button4clicked = false;
				button5clicked = false;
				button6clicked = false;
				$("#button1").css("background-color", "#878485");
				$("#button3").css("background-color", "#878485");
				$("#button4").css("background-color", "#878485");
				$("#button5").css("background-color", "#878485");
				$("#button6").css("background-color", "#878485");
			} else if ((questionNumber === 1) || (questionNumber === 3)) {//for multiple selection answers
				$("#button2").css("background-color", "#DE8F35");
				button2clicked = true;
			}
		} else if (button2clicked) {//just de-selects the button
			$("#button2").css("background-color", "#878485");
			button2clicked = false;
		}
	});
	//end button 2

	$("#button3").click(function() {
		if (!button3clicked) {
			if (questionNumber === 2) {//for single selection questions
				$("#button3").css("background-color", "#DE8F35");
				button3clicked = true;
				button1clicked = false;
				button2clicked = false;
				button4clicked = false;
				button5clicked = false;
				button6clicked = false;
				$("#button1").css("background-color", "#878485");
				$("#button2").css("background-color", "#878485");
				$("#button4").css("background-color", "#878485");
				$("#button5").css("background-color", "#878485");
				$("#button6").css("background-color", "#878485");
			} else if ((questionNumber === 1) || (questionNumber === 3)) {//for multiple selection questions
				$("#button3").css("background-color", "#DE8F35");
				button3clicked = true;
			}

		} else if (button3clicked) {//just de-selects the button
			$("#button3").css("background-color", "#878485");
			button3clicked = false;
		}
	});
	//end button 3

	$("#button4").click(function() {
		if (!button4clicked) {
			if (questionNumber === 2) {//for single selection questions
				$("#button4").css("background-color", "#DE8F35");
				button4clicked = true;
				button1clicked = false;
				button2clicked = false;
				button3clicked = false;
				button5clicked = false;
				button6clicked = false;
				$("#button1").css("background-color", "#878485");
				$("#button2").css("background-color", "#878485");
				$("#button3").css("background-color", "#878485");
				$("#button5").css("background-color", "#878485");
				$("#button6").css("background-color", "#878485");
			} else if ((questionNumber === 1) || (questionNumber === 3)) {//for multiple selection questions
				$("#button4").css("background-color", "#DE8F35");
				button4clicked = true;
			}
		} else if (button4clicked) {//just de-selects the button
			$("#button4").css("background-color", "#878485");
			button4clicked = false;
		}
	});
	//end button 4

	/*  end answer button graphics and handler */

	/*  The submit button graphics */

	if (!stopColorScheme) {
		$('.submit').mouseenter(function() {
			$(".submit").css("background-color", color);
		});

		$('.submit').mouseleave(function() {
			$(".submit").css("background-color", color2);
		});
	}//end submit button graphics and handler

	$(".submit").click(function() {
		submitButtonClicked = true;

		if (submitButtonClicked && (button1clicked || button2clicked || button3clicked || button4clicked || button5clicked || button6clicked )) {
			/* answer is now submited to reveal feedback*/

			numberOfAttempts++;

			if (numberOfAttempts === 1) {
				$('.attempt_header').text("Attempt: 1 out of 3");

			} else if (numberOfAttempts === 2) {
				$('.attempt_header').text("Attempt: 2 out of 3");

			} else if (numberOfAttempts === 3) {

				$('.attempt_header').text("Maximum number of attempts reached!");

			}

			ajaxOnFeedback();

			$(".submit").css("background-color", "red").fadeOut("slow");
			$('#randomization_block').fadeOut("slow");
			$('#feedback').fadeIn("slow");
			color = "red";
			color2 = "red";

		} else if (submitButtonClicked && (!button1clicked && !button2clicked && !button3clicked && !button4clicked && !button5clicked && !button6clicked )) {
			submitButtonClicked = false;
			$(".submit").css("background-color", "#DE8F35");
		}
		/* Reset all fields except numberOfAttempts. */

	});
	//end submit handler

	$('#try_again').click(function() {
		$('#try_again').fadeOut("slow");
		$('#continue').fadeOut("slow");
		$('.submit').fadeIn("slow");
		$('#feedback').fadeOut("slow");
		$('#randomization_block').show();
		button1clicked = false;
		button2clicked = false;
		button3clicked = false;
		button4clicked = false;
		button5clicked = false;
		button6clicked = false;
		submitButtonClicked = false;
		stopColorScheme = false;
		color = "#DE8F35";
		color2 = "#F57627";
		$(".submit").css("background-color", color2);
		$("#button1").css("background-color", "#878485");
		$("#button2").css("background-color", "#878485");
		$("#button3").css("background-color", "#878485");
		$("#button4").css("background-color", "#878485");
		$("#button5").css("background-color", "#878485");
		$("#button6").css("background-color", "#878485");
	});
	//end try again handler

	$('#continue').click(function() {
		questionNumber++;
		numberOfAttempts = 0;
		if (questionNumber === 2) {
			document.getElementById("header").innerHTML = "Choose one answer";
		}
		if ((questionNumber === 1) || (questionNumber === 3)) {
			document.getElementById("header").innerHTML = "Choose one or more answers";
		}
		if (questionNumber === 4) {
			document.getElementById("header").innerHTML = "Drag answers into spaces provided";
		}
		$('#try_again').fadeOut("slow");
		$('#continue').fadeOut("slow");

		ajaxOnLoadQuestion();

		if ((questionNumber == 2) || (questionNumber == 3)) {
			$('#generate').show();
		} else {
			$('#generate').hide();

		}
		$('.submit').fadeIn("slow");
		$('#feedback').fadeOut("slow");
		$('#randomization_block').show();
		button1clicked = false;
		button2clicked = false;
		button3clicked = false;
		button4clicked = false;
		button5clicked = false;
		button6clicked = false;
		submitButtonClicked = false;
		stopColorScheme = false;
		color = "#DE8F35";
		color2 = "#F57627";
		$(".submit").css("background-color", color2);
		$("#button1").css("background-color", "#878485");
		$("#button2").css("background-color", "#878485");
		$("#button3").css("background-color", "#878485");
		$("#button4").css("background-color", "#878485");
		$("#button5").css("background-color", "#878485");
		$("#button6").css("background-color", "#878485");
		$('.attempt_header').text("Attempt:");

	});
	//end continue handler

	$('#generate').click(function() {

		numberOfAttempts = 0;

		$('#try_again').fadeOut("slow");
		$('#continue').fadeOut("slow");

		ajaxRandomQuestionText();
		// the main ingredient or key to this button. Resends the data to generate random stuff
		$('.submit').fadeIn("slow");
		$('#feedback').fadeOut("slow");
		$('#randomization_block').show();
		button1clicked = false;
		button2clicked = false;
		button3clicked = false;
		button4clicked = false;
		submitButtonClicked = false;
		stopColorScheme = false;
		color = "#DE8F35";
		color2 = "#F57627";
		$(".submit").css("background-color", color2);
		$("#button1").css("background-color", "#878485");
		$("#button2").css("background-color", "#878485");
		$("#button3").css("background-color", "#878485");
		$("#button4").css("background-color", "#878485");
		$("#button5").css("background-color", "#878485");
		$("#button6").css("background-color", "#878485");
		$('.attempt_header').text("Attempt:");

	});
	//end generate random number handler

	$('#back_button').click(function() {
		if (questionNumber == 1) {
			questionNumber == 1;
		} else {
			questionNumber--;
		}
		numberOfAttempts = 0;
		if (questionNumber === 2) {
			document.getElementById("header").innerHTML = "Choose one answer";
		}
		if ((questionNumber === 1) || (questionNumber === 3)) {
			document.getElementById("header").innerHTML = "Choose one or more answers";
		}
		if (questionNumber === 4) {
			document.getElementById("header").innerHTML = "Drag answers into spaces provided";
		}
		$('#try_again').fadeOut("slow");
		$('#continue').fadeOut("slow");

		ajaxOnLoadQuestion();

		if ((questionNumber == 2) || (questionNumber == 3)) {
			$('#generate').show();
		} else {
			$('#generate').hide();

		}

		$('.submit').fadeIn("slow");
		$('#feedback').fadeOut("slow");
		$('#randomization_block').show();
		button1clicked = false;
		button2clicked = false;
		button3clicked = false;
		button4clicked = false;
		button5clicked = false;
		button6clicked = false;
		submitButtonClicked = false;
		stopColorScheme = false;
		color = "#DE8F35";
		color2 = "#F57627";
		$(".submit").css("background-color", color2);
		$("#button1").css("background-color", "#878485");
		$("#button2").css("background-color", "#878485");
		$("#button3").css("background-color", "#878485");
		$("#button4").css("background-color", "#878485");
		$("#button5").css("background-color", "#878485");
		$("#button6").css("background-color", "#878485");
		$('.attempt_header').text("Attempt:");

	});
	//end back button handler

	$('#next_button').click(function() {
		if (questionNumber == 20) {
			questionNumber == 20;
		} else {
			questionNumber++;
		}
		numberOfAttempts = 0;
		if (questionNumber === 2) {
			document.getElementById("header").innerHTML = "Choose one answer";
		}
		if ((questionNumber === 1) || (questionNumber === 3)) {
			document.getElementById("header").innerHTML = "Choose one or more answers";
		}
		if (questionNumber === 4) {
			document.getElementById("header").innerHTML = "Drag answers into spaces provided";
		}
		$('#try_again').fadeOut("slow");
		$('#continue').fadeOut("slow");

		ajaxOnLoadQuestion();

		if ((questionNumber == 2) || (questionNumber == 3)) {
			$('#generate').show();
		} else {
			$('#generate').hide();

		}

		$('.submit').fadeIn("slow");
		$('#feedback').fadeOut("slow");
		$('#randomization_block').show();
		button1clicked = false;
		button2clicked = false;
		button3clicked = false;
		button4clicked = false;
		button5clicked = false;
		button6clicked = false;
		submitButtonClicked = false;
		stopColorScheme = false;
		color = "#DE8F35";
		color2 = "#F57627";
		$(".submit").css("background-color", color2);
		$("#button1").css("background-color", "#878485");
		$("#button2").css("background-color", "#878485");
		$("#button3").css("background-color", "#878485");
		$("#button4").css("background-color", "#878485");
		$("#button5").css("background-color", "#878485");
		$("#button6").css("background-color", "#878485");
		$('.attempt_header').text("Attempt:");

	});
	//end next button handler

	$('#generate').mouseenter(function() {
		$(this).css("background-color", "#D8E82C");
	});

	$('#generate').mouseleave(function() {
		$(this).css("background-color", "orange");
	});

});
//end regenerate question.

/* end doc.ready*/

/* Start AJAX COMMANDS*/

function ajaxOnLoadQuestion() {
	ajaxQuestionHeader();
	ajaxQuestionText();
	ajaxRandomQuestionText();
	ajaxRandomText1();
	ajaxRandomText2();
	ajaxRandomText3();
	ajaxRandomText4();
	ajaxHint();
}

function ajaxOnFeedback() {
	ajaxCorrect();
	ajaxAnswer();
	ajaxFeedback();
}

function ajaxQuestionHeader() {
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//document.getElementById("question_text").innerHTML = xmlhttp.responseText;
			document.getElementById("lesson_header").innerHTML = xmlhttp.responseText;
		}
	}
	// For reference, please see
	// http://www.w3schools.com/Ajax/ajax_xmlhttprequest_send.asp
	xmlhttp.open("POST", "scripts/data_Access.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var getQuestionText = 'questionLessonHeader=' + questionNumber.toString();

	xmlhttp.send(getQuestionText);
}

function ajaxQuestionText() {
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//document.getElementById("question_text").innerHTML = xmlhttp.responseText;
			document.getElementById("question_text").innerHTML = xmlhttp.responseText;
		}
	}
	// For reference, please see
	// http://www.w3schools.com/Ajax/ajax_xmlhttprequest_send.asp
	xmlhttp.open("POST", "scripts/data_Access.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var getQuestionText = 'questionNumber=' + questionNumber.toString();

	xmlhttp.send(getQuestionText);
}

function ajaxRandomQuestionText() {
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//document.getElementById("question_text").innerHTML = xmlhttp.responseText;
			if (questionNumber == 3) {
				document.getElementById("random_question_text").innerHTML = "";
				document.getElementById("random_question_text_lower").innerHTML = xmlhttp.responseText;
			} else {
				document.getElementById("random_question_text_lower").innerHTML = "";
				document.getElementById("random_question_text").innerHTML = xmlhttp.responseText;
			}
		}
	}
	// For reference, please see
	// http://www.w3schools.com/Ajax/ajax_xmlhttprequest_send.asp
	xmlhttp.open("POST", "scripts/data_Access.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var postGeneratedQuestion = 'randomQuestionText=' + true + '&questionGenerated=' + questionNumber.toString();

	xmlhttp.send(postGeneratedQuestion);
}

function ajaxRandomText1() {
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("random1").innerHTML = xmlhttp.responseText;
		}
	}
	// For reference, please see
	// http://www.w3schools.com/Ajax/ajax_xmlhttprequest_send.asp
	xmlhttp.open("POST", "scripts/data_Access.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var postRandomFill = 'random_fill=' + true + '&question=' + questionNumber.toString() + '&r1=' + true;

	xmlhttp.send(postRandomFill);

}

function ajaxRandomText2() {
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("random2").innerHTML = xmlhttp.responseText;
		}
	}
	// For reference, please see
	// http://www.w3schools.com/Ajax/ajax_xmlhttprequest_send.asp
	xmlhttp.open("POST", "scripts/data_Access.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var postAnswerChoice = 'random_fill=' + true + '&question=' + questionNumber.toString() + '&r2=' + true;

	xmlhttp.send(postAnswerChoice);

}

function ajaxRandomText3() {
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("random3").innerHTML = xmlhttp.responseText;
		}
	}
	// For reference, please see
	// http://www.w3schools.com/Ajax/ajax_xmlhttprequest_send.asp
	xmlhttp.open("POST", "scripts/data_Access.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var postAnswerChoice = 'random_fill=' + true + '&question=' + questionNumber.toString() + '&r3=' + true;

	xmlhttp.send(postAnswerChoice);

}

function ajaxRandomText4() {
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("random4").innerHTML = xmlhttp.responseText;
		}
	}
	// For reference, please see
	// http://www.w3schools.com/Ajax/ajax_xmlhttprequest_send.asp
	xmlhttp.open("POST", "scripts/data_Access.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var postAnswerChoice = 'random_fill=' + true + '&question=' + questionNumber.toString() + '&r4=' + true;

	xmlhttp.send(postAnswerChoice);

}

function ajaxHint() {

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("scratchpad_text").innerHTML = xmlhttp.responseText;
		}
	}
	// For reference, please see
	// http://www.w3schools.com/Ajax/ajax_xmlhttprequest_send.asp
	xmlhttp.open("POST", "scripts/data_Access.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var postAnswerChoice = 'hint=' + true + '&question=' + questionNumber.toString();

	xmlhttp.send(postAnswerChoice);
}

function ajaxCorrect() {
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("correctness").innerHTML = xmlhttp.responseText;

			if (xmlhttp.responseText == "Correct!" || numberOfAttempts == 3) {
				$('#try_again').fadeOut("slow");
				$("#continue").fadeIn("slow");

				// TODO: POST DATA OF CORRECT ANSWERS TO USER ACCOUNT
			} else {
				$('#try_again').fadeIn("slow");
				//TODO: POST DATA OF INCORRECT ANSWERS TO USER ACCOUNT TO GET A RIGHT/ATTEMPTED RATIO

			}
		}
	}
	// For reference, please see
	// http://www.w3schools.com/Ajax/ajax_xmlhttprequest_send.asp
	xmlhttp.open("POST", "scripts/data_Access.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var postAnswerChoice = 'correctness=' + true + '&question=' + questionNumber.toString() + '&userAnswer1=' + button1clicked.toString() + '&userAnswer2=' + button2clicked.toString() + '&userAnswer3=' + button3clicked.toString() + '&userAnswer4=' + button4clicked.toString();

	xmlhttp.send(postAnswerChoice);

}

function ajaxAnswer() {
	var xmlhttp;
	var text = document.getElementById("button1").innerHTML

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("user_answer").innerHTML = xmlhttp.responseText;
		}
	}
	// For reference, please see
	// http://www.w3schools.com/Ajax/ajax_xmlhttprequest_send.asp
	xmlhttp.open("POST", "scripts/data_Access.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var postAnswerChoice = 'userAnswer=' + true + '&question=' + questionNumber.toString() + '&userAnswer1=' + button1clicked.toString() + '&userAnswer2=' + button2clicked.toString() + '&userAnswer3=' + button3clicked.toString() + '&userAnswer4=' + button4clicked.toString();

	xmlhttp.send(postAnswerChoice);

}

function ajaxFeedback() {
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("explain").innerHTML = xmlhttp.responseText;
		}
	}
	// For reference, please see
	// http://www.w3schools.com/Ajax/ajax_xmlhttprequest_send.asp
	xmlhttp.open("POST", "scripts/data_Access.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var postAnswerChoice = 'feedback=' + true + '&question=' + questionNumber.toString() + '&userAnswer1=' + button1clicked.toString() + '&userAnswer2=' + button2clicked.toString() + '&userAnswer3=' + button3clicked.toString() + '&userAnswer4=' + button4clicked.toString();

	xmlhttp.send(postAnswerChoice);

}

