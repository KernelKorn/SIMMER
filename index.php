<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>SIMMER UI Test Site</title>

		<!--stylesheets-->
		<link rel="stylesheet" type="text/css" href="styles/simmer_ui.css">

		<!--scripts-->
		<script type="text/javascript" src="scripts/jquery.js"></script>
		<script type="text/javascript" src="scripts/SIMMER.js"></script>
		<!--webfonts-->

		<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' rel='stylesheet' type='text/css'>
	</head>

	<body>
		<div id="container">

			<div id="top">

				<div id="app_name">
					<span id="project_head">SIMMER</span> Genetics
				</div>

				<div id="user_name">
					User Name
				</div>

				<div id="user_score">
					Score: (load)
				</div>

				<div id="user_level">
					Level: (load)

				</div>

				<div id= "tools">
					&#10014;
				</div>

				<div id="options">
					&#10017;
				</div>

				<div id="account_settings">
					&#9770;
				</div>

			</div>

			<div id="left">

				<div id="question">

					<div id="lesson_header">

					</div>

					<div id="question_text">

					</div>
					
					<div id = "random_question_text"> </div>
					
					<div id = "random_question_text_lower"> </div>


				</div>

				<div id="randomization_block">

					<div class = "randomization" id = "random1">

					</div>

					<div class = "randomization" id = "random2">

					</div>
					<div class = "randomization" id = "random3">

					</div>
					<div class = "randomization" id = "random4">

					</div>

				</div>

				<div id="feedback">

					<div id="feedback_header">
						Your answer was:
					</div>

					<div id="user_answer">

					</div>

					<div id="correctness">

					</div>

					<div id="explain">

					</div>

				</div>

			</div>

			<div id="right">

				<div id="scratchpad">
					<div id = "scratchpad_text"></div>

				</div>

				<div id="response">

					<div id="header">
						Choose one answer:
					</div>

					<div class="submit">
						Submit
					</div>
					
					<div id = "generate">
						
					</div>

					<div id = "try_again">
						Retry
					</div>

					<div id = "continue">
						Advance
					</div>

					<div class = "button" id = "button1">
						A
					</div>

					<div class = "button" id = "button2">
						B
					</div>

					<div class = "button" id = "button3">
						C
					</div>

					<div class = "button" id = "button4">
						D
					</div>
					
					<div id = "back_button">
						Previous
					</div>
					
					<div id = "next_button">
						Next
					</div>

					<div class = "attempt_header">
						Attempt:
					</div>

				</div>

			</div>

		</div>
	</body>
</html>