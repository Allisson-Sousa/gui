
const botaoNao = document.getElementById("nao");

botaoNao.addEventListener("mouseover", () => {
  botaoNao.style.position = "absolute";

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  botaoNao.style.left = x + "px";
  botaoNao.style.top = y + "px";
});