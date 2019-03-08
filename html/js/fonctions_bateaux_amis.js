function test_bateaux_perso(cellule) {
	var titre = document.getElementById('titre_bateau_ami');
	var message = 'Placer vos bateaux (';
	if (positionner_bateaux) { //si il n'a pas encore valider
		if (cellule.className == '') { //si elle n'est pas déjà colorier
			if (nb_cases_bateaux_perso) { //s'il lui reste des cases a positionner
				cellule.className = 'case_rouge';
				nb_cases_bateaux_perso--;
				titre.innerHTML = message + nb_cases_bateaux_perso + ' restants) :';
			} else { //si le nombre de case est arrivé à 0
				alert('Vous avez placé assez de bateaux ! Cliquer pour valider');
			}
		} else { //si elle est colorier
			cellule.className = '';
			nb_cases_bateaux_perso++;
			titre.innerHTML = message + nb_cases_bateaux_perso + ' restants) :';
		}
	} else { //si il a validé son positionnement
		alert('Vous avez déjà validé, vous ne pouvez plus changer !');
		titre.innerHTML = 'Vos bateaux :';
	}
}

function valid_positionnnement(bouton) {
	for (var i = 0; i <= 9; i++) {
		for (var k = 0; k <= 9; k++) {
			var nom = 'ami_' + i + '_' + k;
			//console.log(nom);
			var cellule_courante = document.getElementById(nom);
			if (cellule_courante.className == 'case_rouge') {
				tab_triche.push(cellule_courante);
			}
		}
	}
	if (tab_triche.length != 17) {
		document.getElementById('rep_ordi').innerHTML = 'Veuillez placer vos bateaux';
		setTimeout(function () { document.getElementById('rep_ordi').innerHTML = '' }, 1000);

		//on remet a zéro le tableau
		tab_triche = [];
	}
	else {
		positionner_bateaux = 0;
		document.getElementById('titre_bateau_ami').innerHTML = 'Vos bateaux :';
		bouton.hidden = true;
		document.getElementById('rep_ordi').innerHTML = '';
		document.getElementById('div_ennemi').hidden = false;
		document.getElementById('section_ennemi_masquer').hidden = true;
		document.getElementById('clavier').hidden = false;
		document.getElementById('div_reponse').hidden = false;
		document.getElementById('decompte').hidden = false;
		var prems = randomInt(0, 1);
		if (prems) {
			alert('Vous commencez !');
		} else {
			alert('L\'ordi commence !');
			ia_is_playing();
		}
	}
}

function remplir_tab_ami() {
	for (var i = 0; i <= 9; i++) {
		for (var k = 0; k <= 9; k++) {
			var nom = 'ami_' + k + '_' + i;
			var cellule_courante = document.getElementById(nom);
			var td_axis = parseInt(cellule_courante.axis);
			switch (td_axis) {
				case 0:
					tab_axis_0.push(cellule_courante);
					//console.log(td_axis);
					//cellule_courante.className = 'case_rouge';
					break;

				case 1:
					tab_axis_1.push(cellule_courante);
					//console.log(td_axis);
					//cellule_courante.className = 'case_ini';
					break;

				default:
					alert('ERREUR dans la fonction "remplir_tab_ami"')
					break;
			}
		}
	}
}

function after_ecran_titre() {
	document.getElementById('ecran_titre').hidden = true;
	document.getElementById('ami').hidden = false;
}

function fin_tour_ennemi() {
	document.getElementById('button_rep').hidden = true;
}