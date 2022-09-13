const scoreFunc = () => {
    const scrNmbr = document.querySelector('.score__number')
    let scoreMath = 0

    const scorePlus = (e) => {
        if (e.code == 'ArrowUp') {
            scoreMath = scoreMath +5
        } else if (e.code == 'ArrowRight') {
            scoreMath = scoreMath +5
        } else if (e.code == 'ArrowDown') {
            scoreMath = scoreMath +5
        } else if (e.code == 'ArrowLeft') {
            scoreMath = scoreMath +5
        }
        if (scoreMath < 10) {
            scrNmbr.innerHTML = "0" + scoreMath + 'м'     
        } else {
            scrNmbr.innerHTML = scoreMath + 'м'
        }
    }
    document.addEventListener('keydown', scorePlus)
}

export default scoreFunc