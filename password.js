// Prompt user for username and password
let user_name = prompt("Enter your username:");
let user_password = prompt("Enter your password:");

// Predefined password for validation
let password = "inigo"; // my pass

// Check if entered password matches
if (user_password === password) {
    alert(`Welcome ${user_name}`);
} else {
    alert("Maybe Username or Password is Invalid or Does not Match");
}

