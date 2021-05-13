$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('select').formSelect();
    $('.modal').modal();
    $('.recipe-area').val();
  M.textareaAutoResize($('.recipe-area'));
  });


  

function sendMail(contactForm){
    emailjs.send("service_sx70hpu","recipes", {
        "from_first": contactForm.fname.value,
        "from_lname": contactForm.lname.value,
        "from_email": contactForm.email.value,
        "question": contactForm.question.value
    })
    .then(
        function(response) {
            $("#modal1").modal("open");
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error)
        });
        return false;
        }