function clickConnectButton() {
    const targetText = "CONNECT TO NEXUS";
    const targetElement = [...document.querySelectorAll("p")].find(el => el.innerText.trim() === targetText);
    
    if (targetElement) {
        const button = document.querySelector(".relative.w-24.h-16.rounded-full.cursor-pointer");
        if (button) {
            button.click();
            console.log("Button CONNECT TO NEXUS clicked");
        } else {
            console.log("Button Not Found!");
        }
    }
}

// Check every 30 Seconds
setInterval(clickConnectButton, 30000);
