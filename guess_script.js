let inp = document.querySelector('.input'),
    invis = document.querySelector('.invis'),
    hid = document.querySelector('.hidden'),
    result = document.getElementsByClassName('result')[0],
    btn = document.querySelector('button');

result.style.display = 'none';

let text = invis.textContent;
let masseWords = text.split(' ');

let rand = Math.floor(Math.random() * masseWords.length);
let word = masseWords[rand];
console.log(word);

let wordLetter = word.split("");
console.log(wordLetter);
let i = 0;
let stars = [];

while (i < wordLetter.length) {
    stars.push('\u{2605} ');
    i++;
}

hid.textContent = stars.join(" ");
let attempt = 5;
let usedLet = [];
let set = new Set();
let setIteraion = () => {
    usedLet = [];
    for(let letter of set) {
        usedLet.push(letter);
    }
};
setIteraion();

btn.addEventListener('click', function() {   
    if (inp.value != '' && isNaN(inp.value) && inp.value.length <= 1) {
        console.log(wordLetter); 
        console.log(inp.value); 
        if(wordLetter.includes(inp.value)) {
            for(let i = 0; i < wordLetter.length; i++) {
                if (set.has(inp.value)) {
                    result.textContent = `Использованные буквы: ${usedLet.join(' ')}`;
                    result.style.display = 'block';
                } 
                if(inp.value === wordLetter[i]) {
                    stars[i] = inp.value;
                    hid.textContent = stars.join(' ');
                    set.add(inp.value); 
                    setIteraion();               
                    console.log(usedLet);
                }                               
            }   
        }     
        else if (!wordLetter.includes(inp.value)) {
            result.style.display = 'block';
            attempt -= 1;
            result.textContent = `Вы не угадали, попробуйте ещё раз, осталось ${attempt} попытки`;               
            console.log(attempt); 
        } 
        if (set.size == wordLetter.length) {
            result.textContent = 'Вы выйграли!';
            inp.disabled = true;
            btn.disabled = true;
        }
        if (attempt === 0) {
            result.textContent = `Вы проиграли, осталось ${attempt} попыток! Попробуйте ещё раз!
                                    Загаданное слово было: ${wordLetter.join('')}.`; 
            inp.disabled = true;
            btn.disabled = true;
        }    
    }
    inp.value = "";
});
