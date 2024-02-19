const currentTime = new Date();

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const month = currentTime.getMonth() + 1;
const day = currentTime.getDate(); 

const containerElement = document.createElement("dl");
const greetingElement = document.createElement("span");
const messageElement = document.createElement("h3");

containerElement.appendChild(greetingElement);
containerElement.appendChild(messageElement);

// Datas especiais \\
if (month === 12 && day === 24)  {
    greetingElement.innerHTML = "🎁👀";
    greetingElement.classList.add("greet")
    messageElement.innerHTML = "É amanhã!<br>Feliz véspera de Natal!"
} else if (month === 12 && (day > 24 && day < 26))  {
    greetingElement.innerHTML = "🎄🎅";
    greetingElement.classList.add("greet")
    messageElement.innerHTML = "Feliz Natal e Boas Festas!!!";
} else if (month === 2 && (day >= 10 && day <= 20))  {
    greetingElement.innerHTML = "🎉🎊";
    greetingElement.classList.add("greet")
    messageElement.innerHTML = "Vamos festejar!<br>Viva o Carnaval!!!";
} else if (month === 10 && (day >= 27 && day <= 31)) {
    greetingElement.innerHTML = "💀🦇👹"
    greetingElement.classList.add("greet")
    messageElement.innerHTML = "Cuidado hein, eles vão te pegar!<br>Feliz Dias das Bruxas!"
}


// Horários Cotidianos \\
else if (hours < 6) {
    greetingElement.innerHTML = "😊";
    greetingElement.classList.add("greet");
    messageElement.innerHTML = "Seja bem-vindo!<br>Tenha um ótimo dia!";
} else if (hours < 12) {
    greetingElement.innerHTML = "👋";
    greetingElement.classList.add("greet");
    messageElement.innerHTML = "Bom dia!<br>Temos novidades!";
} else if (hours === 12 || (hours === 13 || (hours === 14 && minutes <= 30))) {
    greetingElement.innerHTML = "🍽️";
    greetingElement.classList.add("greet");
    messageElement.innerHTML = "Almoçar e informar-se!<br>Tenha uma ótima tarde.";
} else if (hours < 18) {
    greetingElement.innerHTML = "🌅";
    greetingElement.classList.add("greet");
    messageElement.innerHTML = "Muito Boa Tarde!!!<br>Vamos ver o que há de novo!";
} else if (hours < 19 || (hours < 20 || (hours < 23  && minutes <= 30))) {
    greetingElement.innerHTML = "🌙";
    greetingElement.classList.add("greet");
    messageElement.innerHTML = "Muito Boa Noite!!!!<br>Como foi seu dia?";
} else if (hours >= 23 || (hours <= 0 && minutes <= 59)) {
    greetingElement.innerHTML = "🥱";
    greetingElement.classList.add("greet");
    messageElement.innerHTML = "Ainda acordado?<br>O que vamos ver?";
}

document.body.appendChild(containerElement);