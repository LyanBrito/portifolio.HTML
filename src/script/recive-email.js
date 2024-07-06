(function( ) {
    emailjs.init({
        publicKey: "jS_APP_EMAILJS_PUBLICKEY",
    })


})();
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    emailjs.sendForm("jS_APP_EMAILJS_SERVICEID", "jS_APP_EMAILJS_TEMPLATEID_RECEIVED", this).then(
        function(){
            console.log('Sucesso')
            alert('Email enviado com Sucesso')

        }, function(err){
            console.log('Erro', err)
            alert('Falha ao enviar o email, tente novamente mais tarde.')
        }

    )

})