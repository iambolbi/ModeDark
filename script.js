

        'use strict'
        let etat=true;
        function back()
        {

        if(etat)
        {
                document.body.classList.toggle('black');
                document.getElementById("i").className="fas fa-sun";
                document.getElementById("i").classList.toggle('yellow');
                etat=false;
        }
        else
        {
                document.body.classList.toggle('black');
                document.getElementById("i").className="fas fa-moon";
                document.getElementById("i").classList.toggle('white');
                etat=true;
        }
        console.log(etat);
        

        }