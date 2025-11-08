const sayHi = document.getElementById("say-hi");
const getQuote = document.getElementById("get-quote");
const quoteDropdowns = document.querySelectorAll(".show-quote");

sayHi.addEventListener("change", () => {
  if (sayHi.checked) {
    console.log("say hi checked!");
    quoteDropdowns.forEach((elem) => {
      elem.classList.remove("visible");
    });
  }
});

getQuote.addEventListener("change", () => {
  if (getQuote.checked) {
    console.log("get quote checked!");
    quoteDropdowns.forEach((elem) => {
      setTimeout(() => elem.classList.add("visible"), 10);
    });
  }
});
