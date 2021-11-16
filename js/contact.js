const btn =document.querySelector('button')
const inputs =document.querySelector('form')
btn.addEventListener('click', () => {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "a8c0d29c94ea58",
        Password : "9e427d80466495",
        To : 'them@website.com',
        From : inputs.elements["email"].value,
        Subject : "This is the subject",
        Body : inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value
    }).then(msg=>alert("the email was successfull sent "));
})
