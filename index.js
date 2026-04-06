const loginSystem = (maxAttempts) => {
    let attempts = 0;
    let isLocked = false;

    // Arrow function for validation
    const validateUser = (username, password) => {
        return username === "admin" && password === "1234";
    };

    // Return nested function (closure)
    return (username, password) => {

        if (isLocked) {
            console.log("Account is locked.");
            return;
        }

        // Nested function
        const processLogin = () => {
            if (validateUser(username, password)) {
                console.log("Login successful!");
                attempts = 0;
            } else {
                attempts++;

                if (attempts >= maxAttempts) {
                    isLocked = true;
                    console.log("Too many failed attempts. Account locked.");
                } else {
                    console.log(
                        "Incorrect credentials. Attempts left: " +
                        (maxAttempts - attempts)
                    );
                }
            }
        };

        processLogin();
    };
};



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};