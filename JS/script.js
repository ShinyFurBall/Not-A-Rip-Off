document.addEventListener("DOMContentLoaded", function() 
{

    const authText = document.getElementById("auth-text");
    const loginData = JSON.parse(localStorage.getItem("loginData"));

    if (loginData && loginData.name) 
    {
        authText.textContent = loginData.name;
    }

    const authBtn = document.getElementById("auth-btn");
    const authPopup = document.getElementById("auth-popup");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const authClose = document.getElementById("auth-close");

    const loginName = document.getElementById("login-name");
    const loginPassword = document.getElementById("login-password");
    const loginSubmit = document.getElementById("login-submit");
    const switchToSignup = document.getElementById("switch-to-signup");

    const signupName = document.getElementById("signup-name");
    const signupPassword = document.getElementById("signup-password");
    const signupSubmit = document.getElementById("signup-submit");
    const switchToLogin = document.getElementById("switch-to-login");

    authBtn.addEventListener("click", () => 
    {
        authPopup.style.display = "flex";
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });

    // Hide popup if clicking outside
    authPopup.addEventListener("click", e => 
    {
        if (e.target === authPopup) authPopup.style.display = "none";
    });
    authClose.addEventListener("click", () => authPopup.style.display = "none");

    // Switch forms
    switchToSignup.addEventListener("click", e => 
    {
        e.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });
    switchToLogin.addEventListener("click", e => 
    {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // LOGIN
    loginSubmit.addEventListener("click", e => 
    {
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem("loginData"));
        if (!loginName.value.trim() || !loginPassword.value.trim()) {
            alert("Please fill in all fields.");
            return;
        }
        if (storedData && storedData.name === loginName.value.trim() && storedData.password === loginPassword.value) {
            authText.textContent = storedData.name; // Update navbar text
            authPopup.style.display = "none";       // Close popup
        } 
        else 
        {
            alert("Account name or password is incorrect.");
        }
    });

    // SIGN UP
    signupSubmit.addEventListener("click", e => 
    {
        e.preventDefault();
        if (!signupName.value.trim() || !signupPassword.value.trim()) 
        {
            alert("Please fill in all fields.");
            return;
        }

        const storedData = JSON.parse(localStorage.getItem("loginData"));

        if (storedData && storedData.name === signupName.value.trim()) 
        {
            alert("Account already in use. Please log in.");
        } 
        else 
        {
            const signupData = {
                name: signupName.value.trim(),
                password: signupPassword.value
            };
            localStorage.setItem("loginData", JSON.stringify(signupData));
            authText.textContent = signupData.name; // Update navbar text
            authPopup.style.display = "none";       // Close popup
        }
    });

});

document.addEventListener("DOMContentLoaded", function() 
{

    const nameInput = document.querySelector(".booking-name");
    const emailInput = document.querySelector(".booking-email");
    const serviceInput = document.querySelector(".booking-service");
    const locationInput = document.querySelector(".booking-location");
    const previewBtn = document.querySelector(".booking-preview-btn");

    const popupOverlay = document.querySelector(".booking-popup-overlay");
    const popupName = document.querySelector(".popup-name");
    const popupEmail = document.querySelector(".popup-email");
    const popupService = document.querySelector(".popup-service");
    const popupCloseBtn = document.querySelector(".popup-close-btn");


    function showPreview() 
    {
        popupName.textContent = `Name: ${nameInput.value.trim()}`;
        popupEmail.textContent = `Email: ${emailInput.value.trim()}`;
        popupService.textContent = `Service: ${serviceInput.value} (${locationInput.value})`;
        popupCloseBtn.textContent = "Get Quotation Now!";
        popupOverlay.style.display = "flex";
    }

    function showFinalPopup() 
    {
        popupName.textContent = "";
        popupEmail.textContent = "";
        popupService.textContent = "Booking Confirm! Our team will contact you soon!";
        popupCloseBtn.textContent = "Close";
        popupOverlay.style.display = "flex";
    }

    function hidePopup() 
    {
        popupOverlay.style.display = "none";
    }

    function validateForm() 
    {
        if (!nameInput.value.trim() || !emailInput.value.trim() || !serviceInput.value || !locationInput.value) 
        {
            alert("Please fill in all fields before proceeding.");
            return false;
        }
        return true;
    }

    function handlePreviewClick() 
    {
        if (validateForm()) 
        {
            showPreview();
        }
    }


    function handlePopupClick() 
    {
        if (popupCloseBtn.textContent === "Get Quotation Now!") 
        {
            hidePopup();
            showFinalPopup();
            nameInput.value = "";
            emailInput.value = "";
            serviceInput.value = "";
            locationInput.value = "";
        } 
        else 
        {

            hidePopup();
        }
    }

    function setupOverlayClose() {
        popupOverlay.addEventListener("click", function(e) 
        {
            if (e.target === popupOverlay) hidePopup();
        });
    }

    previewBtn.addEventListener("click", handlePreviewClick);
    popupCloseBtn.addEventListener("click", handlePopupClick);
    setupOverlayClose();

});