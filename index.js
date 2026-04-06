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



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};