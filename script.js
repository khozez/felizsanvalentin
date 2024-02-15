document.getElementById("boton").addEventListener("click", function() {
    var b = document.getElementById("boton");
    if (b.textContent == "Haceme click dale")
    {
        b.textContent = "toca otra vez";
    }else{
        if (b.textContent == "toca otra vez")
        {
            b.textContent = "dale boluda con ganas jaja";
        }
        else
        {
            var cortinaIzquierda = document.getElementById("cortinaIzquierda");
            var cortinaDerecha = document.getElementById("cortinaDerecha");
            var divNight = document.querySelector(".night");
            divNight.style.opacity = "0.8";
            var divF = document.querySelector(".flowers");
            divF.style.opacity = "1";
            var divT = document.querySelector(".text");
            divT.style.opacity = "1";

            var additionalText = document.getElementById("additionalText");
            setTimeout(function() {
                additionalText.style.opacity = "0";
            }, 2000);

            document.body.classList.remove("container");
            var boton = document.getElementById("boton"); 
            boton.parentNode.removeChild(boton);
        }
    }
});
