const followBtn = document.querySelector("#follow");
const messageBtn = document.querySelector("#message");
const followText = document.querySelector("#after-follow-text");
const messageText = document.querySelector("#after-message-text");
let val1 = false;
let val2 = false;

followBtn.addEventListener("click", () => {
    if (val1 == false) {
        followText.innerText = "Thank you for following us! ";
        followText.style.backgroundColor = "white";
        followText.style.padding = "0.5rem";
        val1 = true;
    }
    else if (val1 == true) {
        followText.innerText = "";
        followText.style.backgroundColor = "transparent";
        followText.style.padding = "0rem";
        val1 = false;
    }
});


messageBtn.addEventListener("click", () => {
    if (val2 == false) {
        messageText.innerText = "Feature is in progress. Please come back later!";
        messageText.style.backgroundColor = "white";
        messageText.style.padding = "0.5rem";
        val2 = true;
    }
    else if (val2 == true) {
        messageText.innerText = "";
        messageText.style.backgroundColor = "transparent";
        messageText.style.padding = "0rem";
        val2 = false;
    }
});