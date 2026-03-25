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