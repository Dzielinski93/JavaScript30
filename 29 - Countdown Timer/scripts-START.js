function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000);
        //know how to stop it 
        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        //display it
        displayTimeLeft(secondsLeft);
    }, 1000);
    
}
function displayTimeLeft(seconds){
    const minutes = seconds / 60;
    console.log(seconds);
}