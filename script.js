
function viewMore(homeId) {
    // Redirect to the details page with a query parameter
    window.location.href = `details.html?home=${homeId}`;
}
function copyPhoneNumber() {
    const phoneNumber = '123-456-7890';
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert('Phone number copied to clipboard!');
    });
}

function callPhoneNumber() {
    window.location.href = 'tel:123-456-7890';
}
