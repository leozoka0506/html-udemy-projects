let randomNumber = Math.floor(Math.random()*100)
let cont = 0

function checkGuess(){
    let userNumber = document.getElementById('guess').value
    let message = document.getElementById('message')
    if(userNumber > randomNumber){
        message.innerHTML='The number that you have choosed is too high bro!'
        cont++
    }
    else if(userNumber < randomNumber){
        message.innerHTML='The number that you have choosed is too low bro!'
        cont++
    }
    else{
        message.innerHTML='Congratulations, this is the correct number!'
        let tries = document.getElementById('attemps')
        tries.innerHTML= 'You guessed the number in '+ cont + ' attemps'
    }

}