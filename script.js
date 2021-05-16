//adiciona frase do Club
const frasesDoClub = {
    autor: 'Rafael Luiz',
    frase: "'Se quiser ir rápido, pode ir sozinho. Mas se você quer ir longe, vamos juntos!'",
}
// acessa elemento da frase
const fraseDoClub = document.querySelector('#frases-do-club');
fraseDoClub.innerHTML = `${frasesDoClub.frase} - ${frasesDoClub.autor}`;