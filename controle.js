/**
* JS - Aula12: jokempo
*@author Thiago Silva
*/

var check = false;

function jogar() {
	if (document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
		alert("selecione uma opção");
	} else {
		//logica principal
		var sorteio = Math.floor(Math.random() * 3);
		switch(sorteio){
			case 0:
			document.getElementById("pc").src="pcpedra.png";
			break;
			case 1:
			document.getElementById("pc").src="pcpapel.png";
			break;
			case 2:
			document.getElementById("pc").src="pctesoura.png";
			break;
		}
		if ((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) || (document.getElementById("tesoura").checked == true && sorteio == 2)){
			document.getElementById("placar").innerHTML="Empate";
		} else if ((document.getElementById("pedra").checked == true && sorteio == 2) || (document.getElementById("papel").checked == true && sorteio == 0) || (document.getElementById("tesoura").checked == true && sorteio == 1)){
			document.getElementById("placar").innerHTML="Jogador Venceu";
		} else {
			document.getElementById("placar").innerHTML="Computador Venceu";
		}
	}
}
function resetar() {
	document.getElementById("pc").src="pc.png";
	document.getElementById("placar").innerHTML="";
}

