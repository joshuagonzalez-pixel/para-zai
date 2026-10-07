const intro =
  document.getElementById("intro");

const messageScreen =
  document.getElementById("message");

const startBtn =
  document.getElementById("startBtn");

const typedMessage =
  document.getElementById("typedMessage");

const ending =
  document.getElementById("ending");

const hearts =
  document.getElementById("hearts");


/* MENSAJE PARA ZAI */

const message =
  "Zai, ha sido un gusto muy bonito conocerte. " +
  "Quizá todavía estamos descubriendo muchas cosas el uno del otro, " +
  "pero hay algo que ya sé: me encanta hablar contigo. " +
  "Me gustan esas conversaciones que, sin darme cuenta, hacen que pase el tiempo, " +
  "y me gusta ir conociendo poco a poco esa persona tan especial que eres. " +
  "Además, eres muy bella, pero creo que lo más bonito es todo eso que hace que seas tú. " +
  "Solo quería que supieras que me alegra mucho haberte encontrado.";


let started = false;


/* BOTÓN INICIAL */

startBtn.addEventListener("click", () => {

  if (started) return;

  started = true;

  intro.classList.add("exit");

  setTimeout(() => {

    intro.classList.remove("active");

    messageScreen.classList.add("active");

    typeText();

    heartRain();

  }, 750);

});


/* EFECTO DE ESCRITURA */

function typeText() {

  let i = 0;

  const speed = 38;

  function write() {

    if (i < message.length) {

      typedMessage.textContent +=
        message.charAt(i);

      i++;

      setTimeout(write, speed);

    } else {

      setTimeout(() => {

        ending.classList.add("show");

        heartRain();

      }, 600);

    }

  }

  write();
}


/* LLUVIA DE CORAZONES */

function heartRain() {

  for (let i = 0; i < 10; i++) {

    setTimeout(
      createHeart,
      i * 350
    );

  }
}


/* CREAR CORAZÓN */

function createHeart() {

  const heart =
    document.createElement("div");

  heart.className =
    "floating-heart";

  heart.textContent =
    Math.random() > .25
      ? "♡"
      : "♥";


  heart.style.left =
    `${Math.random() * 100}vw`;

  heart.style.fontSize =
    `${12 + Math.random() * 16}px`;

  heart.style.animationDuration =
    `${5 + Math.random() * 5}s`;


  hearts.appendChild(heart);


  setTimeout(
    () => heart.remove(),
    11000
  );
}


/* CORAZONES CONSTANTES */

setInterval(() => {

  if (started) {
    createHeart();
  }

}, 1800);