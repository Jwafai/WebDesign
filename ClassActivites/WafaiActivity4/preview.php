<!DOCTYPE html>
<html>
<head>
	<title>Registration Form Preview</title>
</head>
<body>
	<h2>Registration Form Preview</h2>
	<p><strong>Name:</strong> <?php echo htmlspecialchars($_POST["name"]); ?></p>
	<p><strong>Username:</strong> <?php echo htmlspecialchars($_POST["username"]); ?></p>
	<p><strong>Password:</strong> <?php echo htmlspecialchars($_POST["password"]); ?></p>
	<p><strong>Address:</strong> <?php echo htmlspecialchars($_POST["address"]); ?></p>
	<p><strong>Zip Code:</strong> <?php echo htmlspecialchars($_POST["zip"]); ?></p>
	<p><strong>Email:</strong> <?php echo htmlspecialchars($_POST["email"]); ?></p>
	<p><strong>Country:</strong> <?php echo htmlspecialchars($_POST["country"]); ?></p>
	<p><strong>Language:</strong> <?php echo htmlspecialchars($_POST["language"]); ?></p>
	<p><strong>Sex:</strong> <?php echo htmlspecialchars($_POST["sex"]); ?></p>
	<p><strong>About:</strong> <?php echo htmlspecialchars($_POST["about"]); ?></p>
</body>
</html>