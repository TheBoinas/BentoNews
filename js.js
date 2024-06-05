
const Dia = document.getElementById("h1");
const Semana=document.getElementById("h2");
const Mes=document.getElementById("h3")
const img=document.getElementById("Mundo");
const trump=document.getElementById("ttump");
const Cassio=document.getElementById("cas");
const DOl=document.getElementById("din");

const date=new Date();
Dia.innerHTML=date.getDate()+" / "+(date.getMonth()+1);
const Sem= ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
Semana.innerHTML=(Sem[date.getDay()]);
Mes.innerHTML=date.getHours()+":"+date.getMinutes();

function Girar(){
    img.src="Mundo.gif";
}
function Parar(){
    img.src="Parado.png";
}

function Prender(){
    trump.src="download.gif";
}

function Liberta(){
    trump.src="Trump.png";
}

function R(){
    Cassio.src="CasPNG.png";
}

function H(){
    Cassio.src="CasGif.gif";
}

function Su(){
    DOl.src="GIF.gif"
}

function De(){
    DOl.src="PNG.png"
}