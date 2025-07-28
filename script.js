document.getElementById("contactForm").addEventListener("submit", function (e) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!namePattern.test(name)) {
        e.preventDefault();
        errorMsg.textContent = "Enter a valid name (letters only)";
        return;
    }

    if (!emailPattern.test(email)) {
        e.preventDefault();
        errorMsg.textContent = "Enter a valid email address";
        return;
    }

    if (message.length < 10) {
        e.preventDefault();
        errorMsg.textContent = "Message must be at least 10 characters";
        return;
    }

    errorMsg.textContent = "";
});

///****************************************************************///


// Set today's date
const todayDate = new Date().toISOString().split('T')[0];
const bookingCheckin = document.getElementById("bookingCheckin");
const bookingCheckout = document.getElementById("bookingCheckout");
bookingCheckin.min = todayDate;

bookingCheckin.addEventListener("change", function () {
    bookingCheckout.min = this.value;
});

// Booking form validation
document.getElementById("bookingFormSection").addEventListener("submit", function (e) {
    const name = document.getElementById("bookingName").value.trim();
    const email = document.getElementById("bookingEmail").value.trim();
    const number = document.getElementById("bookingNumber").value.trim();
    const checkin = bookingCheckin.value;
    const checkout = bookingCheckout.value;
    const accommodation = document.getElementById("bookingAccommodation").value;
    const errorMsg = document.getElementById("bookingErrorMsg");

    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const numberPattern = /^[0-9]{10}$/;

    if (!namePattern.test(name)) {
        e.preventDefault();
        errorMsg.textContent = "Please enter a valid name (letters only).";
        return;
    }

    if (!emailPattern.test(email)) {
        e.preventDefault();
        errorMsg.textContent = "Please enter a valid email.";
        return;
    }

    if (!numberPattern.test(number)) {
        e.preventDefault();
        errorMsg.textContent = "Mobile number must be exactly 10 digits.";
        return;
    }

    if (checkin === "" || checkout === "") {
        e.preventDefault();
        errorMsg.textContent = "Please select both check-in and check-out dates.";
        return;
    }

    if (new Date(checkout) <= new Date(checkin)) {
        e.preventDefault();
        errorMsg.textContent = "Check-out must be after check-in.";
        return;
    }

    if (accommodation === "Choose Accommodation") {
        e.preventDefault();
        errorMsg.textContent = "Please select your accommodation.";
        return;
    }

    errorMsg.textContent = ""; 
});
