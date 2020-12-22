const generatePasswordHelper = (size) =>{
    const lower = "qwertyuiopasdfghjklzxcvbnm";
    const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const number = "0123456789";
    const symbol = "{}()=*;/,._";
    const combine = lower + upper + number + symbol;
    const combineLength = combine.length;

    let result ="";

    for ( let i = 0; i < size; i++ ) {
        result += combine.charAt(Math.floor(Math.random() * combineLength));
    }
    return result;
};

const generatePasswords = () =>{
    // get the size of password
    const radioButtons = document.getElementsByName("password-length");
    let lengthOfPassword = 6;
    for(let i = 0; i<radioButtons.length; i++){
        if(radioButtons[i].checked){
            lengthOfPassword = radioButtons[i].value;
        }
    }
    // generate 5 passwords of the selected length and print them
    for(let i=1; i < 6; i++){
        let holderInputTag = document.getElementById(`password${i}`);
        holderInputTag.value = generatePasswordHelper(lengthOfPassword);
    }
};

//copy to clipboard 
const copyOption = (num) => {
    const password = document.getElementById(`password${num}`);
    password.select();

    document.execCommand("copy");

     
};