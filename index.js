//java code
function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {

    // Allow correct login immediately (even after failed attempts)
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    // Increment only when login fails
    attemptCount++;

    // Lock account after 3 failed attempts
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    return `Login attempt ${attemptCount}: Login failed`;
  };
}

//test

const user = {
  username: "user1",
  password: "password123"
};

const login = createLoginTracker(user);

console.log(login("wrong"));        // Failed 1
console.log(login("wrong"));        // Failed 2
console.log(login("password123"));  // Success after failed attempts
console.log(login("wrong"));        // Failed 3
console.log(login("wrong"));        // Account locked



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

