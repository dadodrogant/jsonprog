var giocatori = [{
    "nome": "Davide",
    "cognome": "Drogant",
    "eta": 16,
    "goal": 15,
    "img": "./img/davide.png",
    "id":1
},
{
    "nome": "Cristiano",
    "cognome": "Ronaldo",
    "eta": 38,
    "goal": 844,
    "img": "./img/cristiano.jpg",
    "id":2
},
{
    "nome": "Lionel",
    "cognome": "Messi",
    "eta": 36,
    "goal": 826,
    "img": "./img/lionel.jpg",
    "id":3
},
{
    "nome": "Neymar",
    "cognome": "Santos ",
    "eta": 31,
    "goal": 451,
    "img": "./img/neymar.jpg",
    "id":4
},
{
    "nome": "Robert",
    "cognome": "Lewandoski",
    "eta": 38,
    "goal": 652,
    "img": "./img/lewa.jpg",
    "id":5
},
{
    "nome": "Kylian",
    "cognome": "Mbappe",
    "eta": 24,
    "goal": 279,
    "img": "./img/kylian.jpeg",
    "id":6
},
{
    "nome": "Erling",
    "cognome": "Haaland",
    "eta": 38,
    "goal": 267,
    "img": "./img/erling.jpg",
    "id":7
},
{
    "nome": "Karim",
    "cognome": "Benzema",
    "eta": 35,
    "goal": 495,
    "img": "./img/karim.jpg",
    "id":8
}
];
let container = document.querySelector("main");
function caricagioc(){
    container.innerHTML = "";
    giocatori.forEach(gioc => {
        let giocdiv = document.createElement("div");
        giocdiv.classList.add("giocdiv");
        giocdiv.innerHTML = `
            <div class="imagediv" style="background-image: url(${gioc.img}); ">

            </div>
            <ul style="height:30%;display:flex; flex-direction:column; justify-content:space-around;align-items:flex-start;">
                <li>NOME: ${gioc.nome}\n</li>
                <li>COGNOME: ${gioc.cognome}\n</li>
                <li>ETA': ${gioc.eta}\n</li>
                <li>GOAL: ${gioc.goal}\n</li>
                <li>ID: ${gioc.id}\n</li>
            </ul>
        `;
        container.append(giocdiv);
    });
}

function filter(){
    let searchbar = document.querySelector(".searchInput");
    let myfilt = searchbar.value;
    container.innerHTML = "";
    giocatori.forEach(gioc => {
        if((gioc.nome).toUpperCase().startsWith(myfilt.toUpperCase())){
            let giocdiv = document.createElement("div");
            giocdiv.classList.add("giocdiv");
            giocdiv.innerHTML = `
                <div class="imagediv" style="background-image: url(${gioc.img}); ">

                </div>
                <ul style="height:30%;display:flex; flex-direction:column; justify-content:space-around;align-items:center;">
                    <li>NOME: ${gioc.nome}\n</li>
                    <li>COGNOME: ${gioc.cognome}\n</li>
                    <li>ETA': ${gioc.eta}\n</li>
                    <li>GOAL: ${gioc.goal}\n</li>
                    <li>ID: ${gioc.id}\n</li>
                </ul>
            `;
            container.append(giocdiv);
        }
    });
}

function modifica(){
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = Number(document.getElementById("eta").value);
    let goal = Number(document.getElementById("goal").value);
    let id = Number(document.getElementById("id").value);

    if(id >= 1 && id <= giocatori.length){    
        if(checkString(nome) && checkString(cognome) && checkInt(eta) && checkInt(goal)){
            giocatori.forEach(gioc => {
                if(gioc.id == id){
                    gioc.nome = nome;
                    gioc.cognome = cognome;
                    gioc.eta = eta;
                    gioc.goal = goal;
                }
            });
            caricagioc();
        }else{
            alert("CAMPO NON VALIDO");
        }
    }else{
        alert("ID NON VALIDO");
    } 

}

function checkString(inputString) {

    if (!isNaN(inputString)) {
        return false;  
    }    
  
    if (inputString.trim() === "") {
        return false;  
    }

    return true;  
}

function checkInt(inputInt) {

    if (isNaN(inputInt)) {
        return false;  
    }   
    
    const parsedInt = parseInt(inputInt);
  
    if (parsedInt !== parseFloat(inputInt)) {
        return false;
    }

    return true;
}

function elimina(){
    let id = Number(document.getElementById("id").value);
    let i=0;
    if(id >= 1 && id <= giocatori.length){           
        giocatori.forEach(gioc => {
            if(gioc.id == id){
                giocatori.splice(i,1);
            }
            i++;
        });
        caricagioc();               
    }else{
        alert("ID NON VALIDO");
    } 
}

function aggiungi(){
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = Number(document.getElementById("eta").value);
    let goal = Number(document.getElementById("goal").value);    
    let id = giocatori[giocatori.length-1].id +1;
        if(checkString(nome) && checkString(cognome) && checkInt(eta) && checkInt(goal) && eta > 0){
            let nuovoGiocatore = {
                nome: nome,
                cognome: cognome,
                eta: eta,
                goal: goal,
                img: "./img/noone.png",
                id: id
            };    
            giocatori.push(nuovoGiocatore);                     
            caricagioc();
        }else{
            alert("CAMPO NON VALIDO");
        }
  
}