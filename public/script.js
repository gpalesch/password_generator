document.addEventListener('DOMContentLoaded', () => {
    const passwordBox = document.getElementById("passwordInput");
    const length = 12;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@€!§$%&/()=?<>}][{-";

    const allChars = upperCase + lowerCase + numbers + symbols;

    const getRandomChar = (characters) => characters[Math.floor(Math.random() * characters.length)];

    const createPassword = () => {
        let password = [
            getRandomChar(upperCase),
            getRandomChar(lowerCase),
            getRandomChar(numbers),
            getRandomChar(symbols)
        ];

        for (let i = password.length; i < length; i++) {
            password.push(getRandomChar(allChars));
        }

        passwordBox.value = password.join('');
    
    };

    const copyPassword = () => {
        navigator.clipboard.writeText(passwordBox.value)
            .then(() => alert("Password copied to clipboard!"))
            .catch(err => console.error('Failed to copy: ', err));
    };

    document.getElementById("generate").addEventListener("click", createPassword);
    document.getElementById("copyIcon").addEventListener("click", copyPassword);
});
