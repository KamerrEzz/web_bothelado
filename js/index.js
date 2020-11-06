let texto = document.getElementById("texto");

let textos = [
  "El mejor helado para tu servidor, especialmente de chocomento, y si no gusta pa' tu casa rey ~ carita feliz",
  "Mi mejor comando es ;kamerr ayuda",
  "Kamerr Hizo esta hermosa pagina"
];

texto.innerHTML = textos[Math.floor(Math.random() * textos.length)];
