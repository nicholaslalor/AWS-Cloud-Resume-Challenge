const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://5y7ajirraavpbbi5jb7bcrknl40miaim.lambda-url.us-east-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();