const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');

var pseudo, email, password , confirmPass;
const form = document.querySelector('form');

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

const ProgressBar = document.getElementById("progress-bar");


const pseudoChecker = (value) => {
    if(value.length > 0 && value.length < 3 || value.length > 20){

        errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères", false);
        pseudo = null;


    }else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
        errorDisplay("pseudo", "Le pseudo ne doit pas contenir de caractères speciaux", false);
        pseudo = null;

    } else {
        errorDisplay("pseudo", "", true);

        pseudo = value;

    }
}

const emailChecker = (value) => {

    if(!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)){
        errorDisplay("email", "L'email n'est pas conforme");
        email = null;
    } else {
        errorDisplay("email", "", true)
        email = value;
    }

}

const passwordChecker = (value) => {

    ProgressBar.classList = "";

    if(!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)){

        errorDisplay("password", "Le mot de passe n'est pas conforme", false)
        password = null
        ProgressBar.classList.add("progressRed")


      }else if(value.length < 12){
          ProgressBar.classList.add("progressBlue")
          errorDisplay("password", "", true)
          password = value

      } else {
          ProgressBar.classList.add("progressGreen");
          errorDisplay("password", "", true);
          password = value;

      }
      if(confirmPass) confirmChecker(confirmPass);

}


const confirmChecker = (value) => {

    if (value !== password){
        errorDisplay("confirm", "Les mots de passe de sont pas identiques", false);
        confirmPass = false;
    } else {
        errorDisplay("confirm", "", true);
        confirmPass = true
    }

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

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(pseudo  && email && password && confirmPass){
        const data = {
            pseudo: pseudo,
            email: email,
            password: password
        }
        inputs.forEach((input) => (input.value = ""));
        ProgressBar.classList = "";
        console.log(data);
        pseudo = null;
        email = null;
        password = null;
        confirmPass = null;
        alert("good !")
    } else {
        alert("Vous avez pas rempli correctement les champs")
    }
}) 