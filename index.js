const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');


const errorDisplay = (tag, message, valid) => {

    const container = document.querySelector("." + tag + "-container");

    const displayError = document.querySelector("." + tag + "-container > span")

    if(!valid){
        container.classList.add("error");
        displayError.textContent = message;
    }else {
        container.classList.remove("error");
        displayError.textContent = message
    }

}

const pseudoChecker = (value) => {
    console.log(value);
}

const emailChecker = (value) => {

}

const passwordChecker = (value) => {

}


const confirmChecker = (value) => {

}

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        console.log(e.target.id);
        switch (e.target.id) {
            case "pseudo" :
                pseudoChecker(e.target.value);
                break;
            
            case "email" :
                emailChecker(e.target.value);
                break;

            case "password" :
                passwordChecker(e.target.value);
                break;

            case "confirm" :
                confirmChecker(e.target.value)
                break;
            
            default : 
                null;
        }
    });
});