document.addEventListener("DOMContentLoaded", function () {
    const signInBtn = document.getElementById("signInBtn");
    const signUpBtn = document.getElementById("signUpBtn");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const switchToSignUp = document.getElementById("switchToSignUp");
    const switchToLogin = document.getElementById("switchToLogin");

    // Utility function to show the popup
    function showPopup(showLogin) {
        popup.style.display = "flex";
        if (showLogin) {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
        } else {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
        }
    }
    

    // Utility function to close the popup
    function closePopup() {
        popup.style.display = "none";
    }

    // Event listeners
    signInBtn.addEventListener("click", function () {
        showPopup(true); // Show login form
    });

    signUpBtn.addEventListener("click", function () {
        showPopup(false); // Show signup form
    });

    closeBtn.addEventListener("click", closePopup); // Close popup

    // Switch between forms
    switchToSignUp.addEventListener("click", function () {
        showPopup(false); // Switch to signup
    });

    switchToLogin.addEventListener("click", function () {
        showPopup(true); // Switch to login
    });

    // Close the popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });
});
