function test_age() {
    let  age = prompt("quelle est votre age");
    if (age < 18){
        document.write("vous etes mineur")
        document.body.style.background  ="red";
       }

       else {
        document.write("vous etes majeur")
            document.body.style.background="green";


       }
        
    }

    function calcul_moyenne() {
        // Prompt for the three grades
        var n1 = prompt("Donnez la première note:");
        var n2 = prompt("Donnez la deuxième note:");
        var n3 = prompt("Donnez la troisième note:");
    
        // Convert inputs to numbers and ensure they are valid
        n1 = Number(n1);
        n2 = Number(n2);
        n3 = Number(n3);
    
        // Check if inputs are valid numbers
        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            document.write("Entrées non valides. Veuillez entrer des nombres.");
            return;
        }
    
        // Calculate the sum and the average
        var somme = n1 + n2 + n3;
        document.write("Voici la somme : " + somme + "<br>");
        
        var moyenne = somme / 3;
        document.write("Voici la moyenne : " + moyenne + "<br>");
    
        // Check the average and output the result
        if (moyenne < 0 || moyenne > 20) {
            document.write("Moyenne non valide");
        } 
        else if (moyenne < 10) {
            document.write("Redoublant");
        } 
        else if (moyenne < 14) {
            document.write("Admis passable");
        } 
        else {
            document.write("Admis bien");
        }
    }
    


        function test_couleur() {
            let couleur = prompt("Donne une couleur").toLowerCase();  // Convert input to lowercase for case insensitivity
            if (couleur == "rouge" || couleur == "red") {
                document.body.style.backgroundColor = "red";
            }
            else if (couleur == "bleu" || couleur == "blue") {
                document.body.style.backgroundColor = "blue";
            }
            else if (couleur == "vert" || couleur == "green") {
                document.body.style.backgroundColor = "green";
            }
            else if (couleur == "rose" || couleur == "pink") {
                document.body.style.backgroundColor = "pink";
            }
            else {
                alert("Couleur non comprise");
            }
        }
        
        function test_couleur2() {
            let couleur = prompt("Donner une couleur en anglais");
            document.body.style.backgroundColor = couleur;  // Directly set the entered color
        }
        