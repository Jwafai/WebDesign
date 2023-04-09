<!DOCTYPE html>
<html>
<head>
	<title>Currency Converter</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<h1>Currency Converter</h1>
	<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
		<div class="input-group">
			<label for="amount">From:</label>
			<input type="number" id="amount" name="amount" required value="<?php echo isset($_POST['amount']) ? $_POST['amount'] : ''; ?>">
			<label for="from">Currency:</label>
			<select id="from" name="from">
				<option value="USD" <?php echo isset($_POST['from']) && $_POST['from'] == 'USD' ? 'selected' : ''; ?>>US Dollar</option>
				<option value="CAD" <?php echo isset($_POST['from']) && $_POST['from'] == 'CAD' ? 'selected' : ''; ?>>Canadian Dollar</option>
				<option value="EUR" <?php echo isset($_POST['from']) && $_POST['from'] == 'EUR' ? 'selected' : ''; ?>>Euro</option>
			</select>
		</div>
		<div class="input-group">
			<label for="result">To:</label>
			<input id="result" name="result" type="number" step="any" value="<?php
				if(isset($_POST['amount']) && isset($_POST['from']) && isset($_POST['to'])){
					$amount = $_POST['amount'];
					$from = $_POST['from'];
					$to = $_POST['to'];

          //checking if the from and to are the same
          if($from == $to){
						$result = $amount;
					}
          
          else{
					$conversion_rates = array(
						'USD' => array(
							'CAD' => 1.27,
							'EUR' => 0.85,
						),
						'CAD' => array(
							'USD' => 0.79,
							'EUR' => 0.67,
						),
						'EUR' => array(
							'USD' => 1.17,
							'CAD' => 1.50,
						),
					);
					// perform currency conversion calculation
					$result = $amount * $conversion_rates[$from][$to];
        }
					// output result in input field
					echo $result;
				}
			?>" />
			<label for="to">Currency:</label>
			<select id="to" name="to">
				<option value="CAD" <?php echo isset($_POST['to']) && $_POST['to'] == 'CAD' ? 'selected' : ''; ?>>Canadian Dollar</option>
				<option value="EUR" <?php echo isset($_POST['to']) && $_POST['to'] == 'EUR' ? 'selected' : ''; ?>>Euro</option>
				<option value="USD" <?php echo isset($_POST['to']) && $_POST['to'] == 'USD' ? 'selected' : ''; ?>>US Dollar</option>
			</select>
		</div>
		<button type="submit" name="convert">Convert</button>
	</form>
</body>
</html>