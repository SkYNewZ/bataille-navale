function ia_is_playing(){
	var message_ordi = document.getElementById('rep_ordi');
	var rep = 'Je propose : ';

	//si c'est "normal", vaut 0
	if (!difficulte) {};

	//si c'est tricheur, vaut 1
	if (difficulte) {
		var lg_tab = tab_triche.length;
		//for (var i=1; i<= lg_tab; i++){ //a enlever
			console.log('longueur tab = ' +tab_triche.length);
			var nb = randomInt(0, tab_triche.length-1);
			cellule_ordi = tab_triche[nb];
			var id_cellule = cellule_ordi.id;
			console.log(id_cellule);
			//on extrait le dernier caractere qui correspont a la ligne
			var ligne_ordi = id_cellule.substr(6, 1);
			ligne_ordi++;
			console.log('ligne numero ' + ligne_ordi);

			//on extrait la collone
			var collone_ordi = id_cellule.substr(4, 1);
			collone_ordi = alphabet[collone_ordi];

			var propo_ordi = collone_ordi + ligne_ordi;
			console.log('propo_ordi = ' + propo_ordi);

			//cellule_ordi.className = 'reset_case';
			message_ordi.innerHTML = rep + propo_ordi;
			tab_triche.splice(tab_triche.indexOf(cellule_ordi), 1);
			document.getElementById('button_rep').hidden = false;
		//} //a enlever

	};
}

function after_IA_turn(number){
	if (number) {
		cellule_ordi.className = 'reset_case';
	} else {cellule_ordi.className = 'a_leau';}
	document.getElementById('rep_ordi').innerHTML = '';
	document.getElementById('button_rep').hidden = true;
	alert('A vous !')
}