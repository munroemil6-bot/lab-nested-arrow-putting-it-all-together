//java code
function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {

    attemptCount++;

    console.log("Attempt Count:", attemptCount);
    console.log("Password Attempt:", passwordAttempt);

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Login attempt ${attemptCount}: Login failed`;
    }
  };
}


//test
const user = {
  username: "user1",
  password: "password123"
};

const login = createLoginTracker(user);

// Failed attempts
console.log(login("wrong"));
console.log(login("1234"));
console.log(login("hello"));

// Account locked
console.log(login("password123"));
console.log(login("password123"));



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

