const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const myImg = document.getElementById("myImg")

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Then see you on Sunday in Pusha-Vodytsya :3';
    myImg.src = 'gif2.gif';
    playMusic(); // Виклик функції для відтворення музики
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

function playMusic() {
    let audio = new Audio("music.mp3");
    audio.play().catch(error => {
        console.error("Аудіо не вдалося відтворити:", error);
    });
}
