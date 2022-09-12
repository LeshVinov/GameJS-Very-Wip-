const movementModule = () => {
    const hero = document.getElementById("rg-hero")
    const escapeScreen = document.querySelector('.escape-screen')
    let escapeCount = 0
    let xPosition = 0
    let yPosition = 0

    const pause = () => {
        if (escapeCount == 0) {
            escapeScreen.style.display="block" 
            escapeCount = 1

        } else {
            escapeScreen.style.display="none"
            escapeCount = 0
        }
    }

    const movement = (event) => {
        if (event.code == 'ArrowUp') {
            // console.log('Гослинг идёт вверх');
            yPosition = +yPosition - 20
            hero.style.top= yPosition+'px'
        } else if (event.code == 'ArrowRight') {
            // console.log('Гослинг идёт вправо'); 
            xPosition = +xPosition + 20
            hero.style.left= xPosition+'px'
            hero.style.transform='scale(-1,1)'
        } else if (event.code == 'ArrowDown') {
            // console.log('Гослинг идёт вниз');
            yPosition = +yPosition + 20
            hero.style.top= yPosition+'px'
        } else if (event.code == 'ArrowLeft') {
            // console.log('Гослинг идёт влево');
            xPosition = +xPosition - 20
            hero.style.left= xPosition+'px'
            hero.style.transform='scale(1,1)'
        } else if (event.code == 'Escape') {
            if (escapeCount == 0) {
                document.removeEventListener('keydown', movement)
                console.log(1);
                pause()
            } else  {
                document.addEventListener('keydown', movement)
                console.log(2);
                pause()
            }
        }
    }



    document.addEventListener('keydown', movement)

}
export default movementModule