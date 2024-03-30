function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,

    };
    const serviceID = "service_gag9t1c";
const templateID = "template_trd9gqs";

emailjs
.send(serviceID, templateID, params)
.then((res) => {
        document.getElementById("name").value = "",
        document.getElementById("email").value = "",
        document.getElementById("phone").value = "",
        document.getElementById("message").value = "",
        console.log(res);
        alert("Vaše zprává byla úspěšně odeslána.")
    }
)
.catch((err) => console.log(err));
}

