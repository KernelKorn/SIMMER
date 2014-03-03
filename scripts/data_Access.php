<?php
require_once ('config.php');

//TODO: LINK THE ECHO PIECES WITH THE SQL DATABASE

session_start();
//Used to set the lesson Header for the corresponding question
if (isset($_POST['questionLessonHeader'])) {
	if ($_POST['questionLessonHeader'] == '1') {
		echo "Lesson 1: The Basics";
	} else if ($_POST['questionLessonHeader'] == '2') {
		echo "Lesson 2: The Ratio";
	} else if ($_POST['questionLessonHeader'] == '3') {
		echo "Lesson 3: Single Locus";
	} else if ($_POST['questionLessonHeader'] == '4') {
		echo "Lesson 4: Something else";
	}
}//end
//Used to set the lesson Question Text for the corresponding Lesson
if (isset($_POST['questionNumber'])) {
	$question_id = $_POST['questionNumber'];

	$query = "SELECT question_name FROM questions WHERE question_id = $question_id";

	$questions = $db -> query($query);
	$questions = $questions -> fetch();
	echo $questions['question_name'];

}//end

if (isset($_POST['random_fill'])) {

	$question_id = $_POST['question'];

	$query = "SELECT * FROM answers JOIN questions ON answers.question_id = questions.question_id
                      WHERE answers.question_id = $question_id";
	$answers = $db -> query($query);
	$answers = $answers -> fetch();

	$_SESSION['hints'] = $answers['hint'];
	$_SESSION['question_type'] = $answers['question_type_id'];
	$question_random = $answers['random'];

	if ($question_random == 0) {
		$_SESSION['feedback_correct'] = $answers['feedback_correct'];
		$_SESSION['feedback_incorrect'] = $answers['feedback_incorrect'];
		$_SESSION['feedback_partially'] = explode("|", $answers['feedback_partially']);
		$_SESSION['correct'] = explode("|", $answers['correct']);
	}
	$_SESSION['response'] = explode("|", $answers['answer_name']);

	if (isset($_POST['r1'])) {
		echo "A) " . $_SESSION['response'][0];
	} else if (isset($_POST['r2'])) {
		echo "B)" . $_SESSION['response'][1];
	} else if (isset($_POST['r3'])) {
		echo "C)" . $_SESSION['response'][2];
	} else if (isset($_POST['r4'])) {
		echo "D)" . $_SESSION['response'][3];
	} else if (isset($_POST['r5'])) {
		echo "D)" . $_SESSION['response'][4];
	} else if (isset($_POST['r6'])) {
		echo "D)" . $_SESSION['response'][5];
	} else if (isset($_POST['r7'])) {
		echo "D)" . $_SESSION['response'][6];
	} else if (isset($_POST['r8'])) {
		echo "D)" . $_SESSION['response'][7];
	}
}//end random block

//Used to set/generate the random aspect for the question
if (isset($_POST['randomQuestionText'])) {
	if ($_POST['questionGenerated'] == '1') {
		echo "";
	} else if ($_POST['questionGenerated'] == '2') {

		function generateRatio() {
			$totalRandom = rand(1, 3);

			if ($totalRandom == 1) {
				random121();
			} else if ($totalRandom == 2) {
				random31();
			} else if ($totalRandom == 3) {
				random21();
			} else {
				random9331();
			}
		}//end generateRatio

		//for the 1 : 2 : 1 ratio
		function random121() {
			$_SESSION['$random121'] = true;
			$_SESSION['$random31'] = false;
			$_SESSION['$random21'] = false;
			$_SESSION['$random9331'] = false;
			$_SESSION['correct'][0] = 'false';
			$_SESSION['correct'][1] = 'false';
			$_SESSION['correct'][2] = 'true';
			$_SESSION['correct'][3] = 'false';
			$_SESSION['feedback_correct'] = "Correct! This is a 1:2:1 ratio!";
			$_SESSION['feedback_incorrect'] = "This is Incorrect. Please try again.";

			$random1 = rand(16, 100);

			$random2 = (($random1 * 2) + rand(-15, 15));

			$random3 = $random1 + rand(-15, 15);

			$randomprint = rand(1, 3);

			if ($randomprint == 1) {
				echo $random1 . ":" . $random2 . ":" . $random3;
				//1:2:1
			} else if ($randomprint == 2) {
				echo $random2 . ":" . $random3 . ":" . $random1;
				//2:1:1
			} else {
				echo $random1 . ":" . $random3 . ":" . $random2;
				//1:1:2
			}
		}// end 1 : 2 : 1

		// for the 3 : 1 ratio
		function random31() {

			$_SESSION['$random121'] = false;
			$_SESSION['$random31'] = true;
			$_SESSION['$random21'] = false;
			$_SESSION['$random9331'] = false;
			$_SESSION['correct'][0] = 'true';
			$_SESSION['correct'][1] = 'false';
			$_SESSION['correct'][2] = 'false';
			$_SESSION['correct'][3] = 'false';
			$_SESSION['feedback_correct'] = "Correct! This is a 3:1 ratio!";
			$_SESSION['feedback_incorrect'] = "This is Incorrect. Please try again.";

			$random1 = rand(16, 100);

			$random2 = (($random1 * 3) + rand(-15, 15));

			$randomprint = rand(1, 2);

			if ($randomprint == 1) {
				echo $random1 . ":" . $random2;
				//1:3
			} else {
				echo $random2 . ":" . $random1;
				//3:1
			}

		}// end 3 : 1

		// for the 2 : 1 ratio
		function random21() {

			$_SESSION['$random121'] = false;
			$_SESSION['$random31'] = false;
			$_SESSION['$random21'] = true;
			$_SESSION['$random9331'] = false;
			$_SESSION['correct'][0] = 'false';
			$_SESSION['correct'][1] = 'true';
			$_SESSION['correct'][2] = '';
			$_SESSION['correct'][3] = 'false';
			$_SESSION['feedback_correct'] = "Correct! This is a 2:1 ratio!";
			$_SESSION['feedback_incorrect'] = "This is Incorrect. Please try again.";

			$random1 = rand(16, 100);

			$random2 = (($random1 * 2) + rand(-15, 15));

			$randomprint = rand(1, 2);

			if ($randomprint == 1) {
				echo $random1 . ":" . $random2;
				//1:3
			} else {
				echo $random2 . ":" . $random1;
				//3:1
			}

		}//end 2 : 1

		//for the 9 : 3 : 3 : 1 ratio
		function random9331() {

			$_SESSION['$random121'] = false;
			$_SESSION['$random31'] = false;
			$_SESSION['$random21'] = false;
			$_SESSION['$random9331'] = true;
			$_SESSION['correct'][0] = 'false';
			$_SESSION['correct'][1] = 'false';
			$_SESSION['correct'][2] = 'false';
			$_SESSION['correct'][3] = 'true';
			$_SESSION['feedback_correct'] = "Correct! This is a 9:3:3:1 ratio!";
			$_SESSION['feedback_incorrect'] = "This is Incorrect. Please try again.";

			$random1 = rand(38, 200);

			$random2 = (ceil(($random1 / 3)) + rand(-4, 5));

			$random3 = (ceil(($random1 / 3)) + rand(-4, 5));

			$random4 = (ceil(($random1 / 9)) + rand(-4, 5));

			$randomprint = rand(1, 6);

			if ($randomprint == 1) {
				echo $random1 . ":" . $random2 . ":" . $random3 . ":" . $random4;
				//9:3:3:1
			} else if ($randomprint == 2) {
				echo $random2 . ":" . $random1 . ":" . $random3 . ":" . $random4;
				//3:9:3:1
			} else if ($randomprint == 3) {
				echo $random2 . ":" . $random3 . ":" . $random4 . ":" . $random1;
				//3:3:1:9
			} else if ($randomprint == 4) {
				echo $random2 . ":" . $random4 . ":" . $random3 . ":" . $random1;
				//3:1:3:9
			} else if ($randomprint == 5) {

				echo $random4 . ":" . $random3 . ":" . $random2 . ":" . $random1;
				//1:3:3:9
			} else {
				echo $random3 . ":" . $random2 . ":" . $random1 . ":" . $random4;
				//3:3:9:1
			}
		}//end 9 : 3 : 3 : 1

		generateRatio();

	} else if ($_POST['questionGenerated'] == '3') {

		function randomGenerator() {

			$choice = rand(1, 2);
			if ($choice == 1) {
				choice1();
				$_SESSION['$choice1'] = true;
				$_SESSION['$choice2'] = false;
			} else {
				choice2();
				$_SESSION['$choice1'] = false;
				$_SESSION['$choice2'] = true;
			}

		}

		function choice2() {
			$_SESSION['correct'][0] = 'false';
			$_SESSION['correct'][1] = 'false';
			$_SESSION['correct'][2] = 'false';
			$_SESSION['correct'][3] = 'true';
			$_SESSION['feedback_correct'] = "This is a monohybrid (two heterozygotes) cross that resulted in a 3 : 1 offspring ratio.  Parents were Yy and Yy.";
			$_SESSION['feedback_incorrect'] = "This is Incorrect. Please try again.";
			$a = rand(0, 24);
			$b = rand(0, 10);

			if (rand(1, 2) == 1) {
				$c = 400 + $a;
			} else {
				$c = 400 - $a;
			}

			if (rand(1, 2) == 1) {
				$d = 130 + $b;
			} else {
				$d = 130 - $b;
			}
			echo $c . " yellow peas " . "</br>" . $d . " green peas ";

			//This is a monohybrid (two heterozygotes) cross that resulted in a 3 : 1 offspring ratio.  Parents were Yy and Yy.
		}

		function choice1() {
			$_SESSION['correct'][0] = 'true';
			$_SESSION['correct'][1] = 'false';
			$_SESSION['correct'][2] = 'true';
			$_SESSION['correct'][3] = 'false';
			$_SESSION['feedback_correct'] = "This cross resulted in no recessives, so at least one of the parents was a homozygous dominant YY, the other could be YY or Yy.  How might you decide which is which?";
			$_SESSION['feedback_incorrect'] = "This is Incorrect. Please try again.";
			$_SESSION['feedback_partially'][0] = "A possible choice for the parents could be YY and Yy, but are their any other choices?";
			$_SESSION['feedback_partially'][2] = "A possible choice for the parents could be YY and YY, but are their any other choices?";
			$b = rand(0, 4);

			if (rand(1, 2) == 1) {
				$c = 200 + $b;
			} else {
				$c = 200 - $b;
			}

			echo $c . " yellow peas ";

			//"This cross resulted in no recessives, so at least one of the parents was a homozygous dominant YY, the other could be YY or Yy.  How might you decide which is which?

		}

		randomGenerator();

	}
}//end

if (isset($_POST['hint'])) {
	echo $_SESSION['hints'];
}//end hint

// START OF FEEDBACK AREA!!!!
//
//
//
//

//Used to set the feedback area
if (isset($_POST['question'])) {
	if (($_SESSION['question_type'] == '2')) {//User's Response
		if (isset($_POST['userAnswer'])) {
			$a1 = $_POST['userAnswer1'];
			$a2 = $_POST['userAnswer2'];
			$a3 = $_POST['userAnswer3'];
			$a4 = $_POST['userAnswer4'];

			if ($a1 == 'true' && $a2 == 'true' && $a3 == 'true' && $a4 == 'true') {
				echo "A, B, C, and D";
			} else if ($a1 == 'true' && $a2 == 'true' && $a3 == 'true') {
				echo "A, B, and C";
			} else if ($a1 == 'true' && $a2 == 'true' && $a4 == 'true') {
				echo "A, B, and D";
			} else if ($a1 == 'true' && $a3 == 'true' && $a4 == 'true') {
				echo "A, C, and D";
			} else if ($a2 == 'true' && $a3 == 'true' && $a4 == 'true') {
				echo "B, C, and D";
			} else if ($a1 == 'true' && $a2 == 'true') {
				echo "A and B";
			} else if ($a1 == 'true' && $a3 == 'true') {
				echo "A and C";
			} else if ($a1 == 'true' && $a4 == 'true') {
				echo "A and D";
			} else if ($a2 == 'true' && $a3 == 'true') {
				echo "B and C";
			} else if ($a2 == 'true' && $a4 == 'true') {
				echo "B and D";
			} else if ($a3 == 'true' && $a4 == 'true') {
				echo "C and D";
			} else if ($a1 == 'true') {
				echo $_SESSION['response'][0];
			} else if ($a2 == 'true') {
				echo $_SESSION['response'][1];
			} else if ($a3 == 'true') {
				echo $_SESSION['response'][2];
			} else if ($a4 == 'true') {
				echo $_SESSION['response'][3];
			}

		}
	}

	if (($_SESSION['question_type'] == '1')) {//User's Response
		if (isset($_POST['userAnswer'])) {
			$a1 = $_POST['userAnswer1'];
			$a2 = $_POST['userAnswer2'];
			$a3 = $_POST['userAnswer3'];
			$a4 = $_POST['userAnswer4'];

			if ($a1 == 'true') {
				echo $_SESSION['response'][0];
			} else if ($a2 == 'true') {
				echo $_SESSION['response'][1];
			} else if ($a3 == 'true') {
				echo $_SESSION['response'][2];
			} else if ($a4 == 'true') {
				echo $_SESSION['response'][3];
			}

		}
	}//end user response for question type 2

}//end question block

//Correctness of User Choice
if (isset($_POST['correctness'])) {
	$a1 = $_POST['userAnswer1'];
	$a2 = $_POST['userAnswer2'];
	$a3 = $_POST['userAnswer3'];
	$a4 = $_POST['userAnswer4'];
	$correctAns1 = $_SESSION['correct'][0];
	$correctAns2 = $_SESSION['correct'][1];
	$correctAns3 = $_SESSION['correct'][2];
	$correctAns4 = $_SESSION['correct'][3];

	if ($_SESSION['question_type'] == '1' || $_SESSION['question_type'] == '2') {
		if ($a1 == 'true' && $correctAns1 == 'false') {
			$_SESSION['feedback_echo'] = $_SESSION['feedback_incorrect'];
			echo "Incorrect";
		} else if ($a2 == 'true' && $correctAns2 == 'false') {
			$_SESSION['feedback_echo'] = $_SESSION['feedback_incorrect'];
			echo "Incorrect";
		} else if ($a3 == 'true' && $correctAns3 == 'false') {
			$_SESSION['feedback_echo'] = $_SESSION['feedback_incorrect'];
			echo "Incorrect";
		} else if ($a4 == 'true' && $correctAns4 == 'false') {
			$_SESSION['feedback_echo'] = $_SESSION['feedback_incorrect'];
			echo "Incorrect";
		} else if ($a1 == 'true' && $correctAns1 == 'true') {
			if ($a2 == 'false' && $correctAns2 == 'true' || $a3 == 'false' && $correctAns3 == 'true' || $a4 == 'false' && $correctAns4 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_partially'][0];
				echo "Partially Correct";
			} else if ($a2 == 'true' && $correctAns2 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else if ($a3 == 'true' && $correctAns3 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else if ($a4 == 'true' && $correctAns4 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			}
		}// end Choice 1
		else if ($a2 == 'true' && $correctAns2 == 'true') {
			if ($a1 == 'false' && $correctAns1 == 'true' || $a3 == 'false' && $correctAns3 == 'true' || $a4 == 'false' && $correctAns4 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_partially'][1];
				echo "Partially Correct";
			} else if ($a1 == 'true' && $correctAns1 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else if ($a3 == 'true' && $correctAns3 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else if ($a4 == 'true' && $correctAns4 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			}
		}// end Choice 2
		else if ($a3 == 'true' && $correctAns3 == 'true') {
			if ($a2 == 'false' && $correctAns2 == 'true' || $a1 == 'false' && $correctAns1 == 'true' || $a4 == 'false' && $correctAns4 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_partially'][2];
				echo "Partially Correct";
			} else if ($a1 == 'true' && $correctAns1 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else if ($a2 == 'true' && $correctAns2 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else if ($a4 == 'true' && $correctAns4 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			}
		}// end Choice 3
		else if ($a4 == 'true' && $correctAns4 == 'true') {
			if ($a2 == 'false' && $correctAns2 == 'true' || $a3 == 'false' && $correctAns3 == 'true' || $a1 == 'false' && $correctAns1 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_partially'][3];
				echo "Partially Correct";
			} else if ($a1 == 'true' && $correctAns1 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else if ($a2 == 'true' && $correctAns2 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else if ($a3 == 'true' && $correctAns3 == 'true') {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			} else {
				$_SESSION['feedback_echo'] = $_SESSION['feedback_correct'];
				echo "Correct!";
			}
		}// end Choice 4
		else {
			$_SESSION['feedback_echo'] = $_SESSION['feedback_incorrect'];
			echo "Incorrect";
		}

	}//end question type 2
}//end end correctness

//FEEDBACK
if (isset($_POST['feedback'])) {
	echo $_SESSION['feedback_echo'];
}
?>