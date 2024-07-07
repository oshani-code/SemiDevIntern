
    // Simulating a user database
    const users = [
      { username: "admin", password: "pass123" },
      { username: "oshni", password: "a123" },
      { username: "roshni", password: "ab456" }
    ];

    // Function to handle form submission
    $("#loginForm").submit(function(event) {
      event.preventDefault(); // Prevent form from submitting

      const username = $("#username").val();
      const password = $("#password").val();

      // Check if the entered username and password match any user in the database
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        // Store the username in localStorage
        localStorage.setItem("username", username);

        alert("Login successful! Thankyou for login ");
        // Redirect to the home page or perform any other action
      } 
      else
      {
        alert("Invalid username or password. Please try again.");
      }
    });
  