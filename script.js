//adiciona frase do Club
const frasesDoClub = {
    autor: 'Rafael Luiz',
    frase: "'Se você quer ir rápido, pode ir sozinho. Mas se você quer ir longe, vamos todos juntos!'",
}
// acessa elemento da frase
const fraseDoClub = document.querySelector('#frases-do-club');
fraseDoClub.innerHTML = `${frasesDoClub.frase} - ${frasesDoClub.autor}`;
