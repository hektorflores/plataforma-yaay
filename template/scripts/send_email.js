$( document ).ready(function() {
  (function(){
        emailjs.init("user_ItDPCopsJXdhgrz7ykWQK");
     })();

     $( "#cotizar" ).click(function() {
       var form_to = ($('#from-zip').val()) ? $('#from-zip').val() : "";
       var to_zip = ($('#to-zip').val()) ? $('#to-zip').val() : "";
       var send_kind = ($('#send-kind').val()) ? $('#send-kind').val() : "";
       var long_description = ($('#long-description').val()) ? $('#long-description').val() : "";
       var width_description = ($('#width-description').val()) ? $('#width-description').val() : "";
       var high_description = ($('#high-description').val()) ? $('#high-description').val() : "";
       var weight_description = ($('#weight-description').val()) ? $('#weight-description').val() : "";
       var message_html = "Desde donde: " + form_to + " Hacia donde: " + to_zip + " Tipo: " + send_kind + " Largo: " + long_description + " Ancho: " + width_description + " Alto: " + high_description + " Peso: " + weight_description;
       console.log("MEssage html " +message_html);
       $('#message_html').val(message_html);
       $("form#myform").submit();
    });

    var myform = $("form#myform");
    myform.submit(function(event){
     event.preventDefault();

      // Change to your service ID, or keep using the default service
      var service_id = "mailjet";
      var template_id = "template_GMgJ5ISM";

      myform.find("button").text("Sending...");
      emailjs.sendForm(service_id,template_id,"myform")
       .then(function(){
           myform.find("button").text("Send");
        }, function(err) {
           myform.find("button").text("Send");
        });
      return false;
    });
});
