var i = 0;
var txt1 =
  "Hi,.....!  <<             Now I want to say something special to you.  <<<        So, Please read everthing carefully.....!                                                                           > When I saw you for the first time < You seems something Special to me.    <<                  As the days goes < You get closer to me....! <<                           I dont't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me..!                     <<I am nervous because I haven't said these words to anyone and I won't say to anyone in future....!                                                     > I Love my Parents so much than anything else in this world...!                    << Now you are the only person whom I love equally with my parents....!              <<You are the sunshine in my life. You are the shade that comforts me. I have never said this before but I am saying this today.                                                > I Love You <....! |                  <<<<I am sorry for what I did from last few months.. I hope you Understand ...!      by Vish";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
        $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
