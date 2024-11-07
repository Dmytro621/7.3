let question = prompt('Введiть число бiльше 100')
if (Number(question) >= 100) {
    alert(`Ваше число ${question}`)
} else {
    for (i = 1; i <= 3; i++) {
        let again = prompt('Напишiть ще раз')
        question = again
    }
    alert(`Ваше число ${question}`)
}