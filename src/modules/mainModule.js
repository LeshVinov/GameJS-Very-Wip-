import scoreFunc from "./score"

const mainModule = () => {  

    const h1 = document.getElementsByTagName('h1')[0];
    const scrNmbr = document.querySelector('.score__number')
    const hero = document.getElementById("rg-hero")
    const escapeScreen = document.querySelector('.escape-screen')
    let escapeCount = 0
    let xPosition = 0
    let yPosition = 0

    let scoreMath = 0

    let sec = 0;
    let min = 0;
    let hrs = 0;
    let t;
    
    function tick(){
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                hrs++;
            }
        }
    }
    function add() {
        tick();
        h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
                 + ":" + (min > 9 ? min : "0" + min)
                    + ":" + (sec > 9 ? sec : "0" + sec);
        timer();
    }
    function timer() {
        t = setTimeout(add, 1000);
    }
    
    timer();

    const pause = () => {
        if (escapeCount == 0) {
            escapeScreen.style.display="block" 
            escapeCount = 1
            clearTimeout(t)
        } else {
            escapeScreen.style.display="none"
            escapeCount = 0
            timer()
            
        }
    }

    const movementScoring = (event) => {
        if (event.code == 'ArrowUp') {
            // console.log('Гослинг идёт вверх');
            yPosition = +yPosition - 20
            hero.style.top= yPosition+'px'
            scoreMath = scoreMath +5
        } else if (event.code == 'ArrowRight') {
            // console.log('Гослинг идёт вправо'); 
            xPosition = +xPosition + 20
            hero.style.left= xPosition+'px'
            hero.style.transform='scale(-1,1)'
            scoreMath = scoreMath +5
        } else if (event.code == 'ArrowDown') {
            // console.log('Гослинг идёт вниз');
            yPosition = +yPosition + 20
            hero.style.top= yPosition+'px'
            scoreMath = scoreMath +5
        } else if (event.code == 'ArrowLeft') {
            // console.log('Гослинг идёт влево');
            xPosition = +xPosition - 20
            hero.style.left= xPosition+'px'
            hero.style.transform='scale(1,1)'
            scoreMath = scoreMath +5
        } else if (event.code == 'Escape') {
            if (escapeCount == 0) {
                document.removeEventListener('keydown', movementScoring)
                pause()
            } else  {
                document.addEventListener('keydown', movementScoring)
                pause()
            }
        }
        if (scoreMath < 10) {
            scrNmbr.innerHTML = "0" + scoreMath + 'м'     
        } else {
            scrNmbr.innerHTML = scoreMath + 'м'
        }
    }
    document.addEventListener('keydown', movementScoring)
    
    document.addEventListener('click', (e) => {
        if (e.target == document && escapeCount == 1) {
            escapeCount = 0
            pause()
        } else {
            document.addEventListener('keydown', movementScoring)
        }
    })


}
export default mainModule