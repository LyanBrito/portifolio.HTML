import env from "../config/config";

(function( ) {
    emailjs.init({
        publicKey: env.jS_APP_EMAILJS_PUBLICKEY,
    })


})();
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    emailjs.sendForm(env.jS_APP_EMAILJS_SERVICEID, env.jS_APP_EMAILJS_TEMPLATEID_RECEIVED, this).then(
        function(){
            console.log('Sucesso')
            alert('Email enviado com Sucesso')

        }, function(err){
            console.log('Erro', err)
            alert('Falha ao enviar o email, tente novamente mais tarde.')
        }

    )

})