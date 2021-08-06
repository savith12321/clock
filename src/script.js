var count_class = document.querySelector(".count_up");
var start = document.querySelector(".start");
var h_in = document.querySelector(".hours");
var m_in = document.querySelector(".minutes");
var s_in = document.querySelector(".seconds");
var errors = document.querySelector(".errors");


let seconds = 0;

start.addEventListener("click", () => {
    var h_val = h_in.value;
    var m_val = m_in.value;
    var s_val = s_in.value;

    if(h_val ==0 && m_val  == 0 && s_val == 0){
        return errors.innerHTML = "<div class='alert alert-danger' role='alert'><strong>Hey! </strong>you can't leave those fields behind atleast fill a one</div>";
    }else{
        errors.innerHTML = ""
    }
    if(h_val == 0){
        h_val = 0;
    }
    if(m_val == 0){
        m_val = 0;
    }

    console.log("button clickerd :)");
    console.log(something(h_val, m_val, s_val));
    seconds = something(h_val, m_val, s_val);
    for (let i = seconds; i > 0; i--) {

        setTimeout(function() {
            seconds--;
            count_class.innerHTML = seconds;

        }, 1000 * i);
        if(seconds <= 0){
            errors.innerHTML += '<audio controls><source src="assets/ring.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>'
        }

    }
});


function something(h, m ,s) { 
   return h * 3600 + m * 60 + s;
 } 