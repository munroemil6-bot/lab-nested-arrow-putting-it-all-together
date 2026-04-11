//java code
function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {

    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    attemptCount++;

    return `Attempt ${attemptCount}: Login failed`;
  };
}


//test

const user = {
  username: "user1",
  password: "password123"
};

const login = createLoginTracker(user);

console.log(login("wrong"));        // Attempt 1: Login failed
console.log(login("wrong"));        // Attempt 2: Login failed
console.log(login("password123"));  // Login successful
console.log(login("wrong"));        // Attempt 3: Login failed
console.log(login("wrong"));        // Account locked


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

