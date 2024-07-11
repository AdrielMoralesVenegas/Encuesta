var i = 0;
var txt1 =
  "Hola Celeste.....!  <<               Mi lenguaje de cariño es hacerte una página otra vez para hablarte jajaja. <<<                Soy un hombre muy complicado?!                                                                           > Estoy con un sin sabor desde hace días < me haces falta la verdad ja.  <<                  Quisiera poder encontrar la manera de tener una conversación fluida con vos < pero que díficil mi chiquita, solo présteme atención por el momento....! <<                           Lamento si en algún momento te he hecho sentir incómoda, agobiada o si molesto mucho sabe...!                                                     > Mi corazón tiene un aprecio muy grande por vos ...!                     << Sos la mujer más increíble, atenta, servicial, inteligente, capaz que he conocido, medio despistada también...bromis!                                                     > Pero, antes de perder el mensaje principal....!                    << ¿He hecho algo que haya permitido que no quieras hablarme? Obvio no puedes responder por acá pero te lo dejo a criterio propio por WS                                                           >Desde que ya no estás acá, extraño saber de ti ocasionalmente, sin embargo, si está en tu deseo expresarme tu sentir, cualquier comentario en bien recibido por acá ❤ |                  <<<< Brindeme con un último mensaje, con mucho cariño Adrielito... ¡Te quiero de corazón!  ";
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
