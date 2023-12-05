document.getElementById("gomb").addEventListener("click", quiz_fgv)  
    
    function quiz_fgv(){
        let tilos=0;
        let pi=0;
        let feny=0;
        let alagsor=0;

        //szinek
        if (document.getElementById("piros").checked==true){tilos++;}
        if (document.getElementById("sarga").checked==true){pi++;}
        if (document.getElementById("lila").checked==true){feny++;}
        if (document.getElementById("zold").checked==true){alagsor++;}


        //kaja
        if (document.getElementById("pizza").checked==true){alagsor++;}
        if (document.getElementById("kinai").checked==true){feny++;}
        if (document.getElementById("hus").checked==true){pi++;}
        if (document.getElementById("teszta").checked==true){tilos++;}


        //virag
        if (document.getElementById("nap").checked==true){pi++;}
        if (document.getElementById("pitypang").checked==true){alagsor++;}
        if (document.getElementById("pipacs").checked==true){tilos++;}
        if (document.getElementById("levendula").checked==true){feny++;}


        //allat
        if (document.getElementById("elefant").checked==true){tilos++;}
        if (document.getElementById("szuri").checked==true){pi++;}
        if (document.getElementById("foka").checked==true){feny++;}
        if (document.getElementById("panda").checked==true){alagsor++;}


        //hobby
        if (document.getElementById("fozes").checked==true){pi++;}
        if (document.getElementById("koncert").checked==true){feny++;}
        if (document.getElementById("kutya").checked==true){alagsor++;}
        if (document.getElementById("mozi").checked==true){tilos++;}


        //film
        if (document.getElementById("harry").checked==true){tilos++;}
        if (document.getElementById("marvel").checked==true){alagsor++;}
        if (document.getElementById("mama").checked==true){pi++;}
        if (document.getElementById("titanic").checked==true){feny++;}

        

        if (tilos>=pi && tilos>=feny && tilos>=alagsor){
            document.getElementById("eredmeny").innerHTML ="A szobád:<br>309<br> Erről a szobáról már messziről süt, hogy nem szívesen fogadnak látogatókat. Nem tudni ki lakik itt, mert ha valaki kopogni mert az ajtón többé sosem került elő.";
            document.getElementById("kep").src="megoldasok/tilos.jpg";}

        if (pi>=tilos && pi>=feny && pi>=alagsor){
            document.getElementById("eredmeny").innerHTML = "A szobád<br>314 (Pi szoba)<br> Ez a szoba az igazán okos és kretív embereknek az otthona.";
            document.getElementById("kep").src="megoldasok/pi.jpg";}

        if (feny>=tilos && feny>=pi && feny>=alagsor){
            document.getElementById("eredmeny").innerHTML = "A szobád<br>305<br> Úgy látszik te is azok közé az emberek közé tartozol, akik már halloween másnapján karácsonyi díszekkel lepik egy a házukat.";
            document.getElementById("kep").src="megoldasok/feny.jpg";}

        if (alagsor>tilos && alagsor>pi && alagsor>feny){
            document.getElementById("eredmeny").innerHTML = "A szobád<br>Az alagsor lenne<br> A válaszaid alapján a szép szobák helyett inkább a kissé rideg alagsorban kapnál szállást. Egyetlen pozitívuma, hogy közel van az edzőterem.";
            document.getElementById("kep").src="megoldasok/alagsor.jpg";}
    }
