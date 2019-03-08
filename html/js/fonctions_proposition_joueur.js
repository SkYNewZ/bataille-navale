function recup_value() {
	if (tab_tirets[0] == '-' || tab_tirets[1] == '-') {
		alert('Votre proposition n\'est pas valide !');
	} else {
		console.log(tab_tirets.join(''));

		colonne_selec = alphabet.lastIndexOf(tab_tirets[0]); //chiifre de la collone
		console.log(colonne_selec);
		ligne_selec = parseInt(tab_tirets[1]) - 1;
		console.log(ligne_selec);


		document.getElementById('tirets').innerHTML = 'Frappe en cours...'
		reset_tab_tirets();

		nom = 'cel_' + colonne_selec + '_' + ligne_selec;
		console.log('Cellue : ' + nom);
		test_case(nom, tab1[colonne_selec][ligne_selec]);
	}

}


function test_case(id, valeur_case) {
	munitions--;
	decompte();
	var bat_restants = document.getElementById('bat_restants');
	var msg = document.getElementById('reponse');
	cellule_selec = valeur_case;
	id = document.getElementById(id);
	switch (cellule_selec) {
		default: //si la case vaut 0, case vide
			if (jouer_son) {
				perdu();
				setTimeout(function () {
					msg.innerHTML = 'Plouf !';
					id.className = 'a_leau';
					reset_tab_tirets();
				}, 2000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}
			} else {
				setTimeout(function () {
					msg.innerHTML = 'Plouf !';
					id.className = 'a_leau';
					reset_tab_tirets()
				}, 1000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}
			}
			break;

		case 1:
			if (jouer_son) {
				gagne();
				setTimeout(function () {
					msg.innerHTML = 'Vous avez coulé la barque paumée !!'
					counter_bat1--;
					tab1[colonne_selec][ligne_selec] = 0;
					id.className = 'reset_case';
					total_count_bat--;
					bat_restants.innerHTML = total_count_bat + ' cases restantes à couler...';
					reset_tab_tirets();
				}, 2000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}
			} else {
				setTimeout(function () {
					msg.innerHTML = 'Vous avez coulé la barque paumée !!'
					counter_bat1--;
					tab1[colonne_selec][ligne_selec] = 0;
					id.className = 'reset_case';
					total_count_bat--;
					bat_restants.innerHTML = total_count_bat + ' cases restantes à couler...';
					reset_tab_tirets();
				}, 1000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}
			}
			break;

		case 2:
			if (jouer_son) {
				gagne();
				setTimeout(function () {
					if (counter_bat2 <= 2 && counter_bat2 > 1) {
						msg.innerHTML = 'Vous avez touché le torpilleur !';
					} else if (counter_bat2 == 1) {
						msg.innerHTML = 'Vous avez coulé le torpilleur !!'
					}
					counter_bat2--;
					tab1[colonne_selec][ligne_selec] = 0;
					id.className = 'reset_case';
					total_count_bat--;
					bat_restants.innerHTML = total_count_bat + ' cases restantes à couler...';
					reset_tab_tirets();
				}, 2000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}
			} else {
				setTimeout(function () {
					if (counter_bat2 <= 2 && counter_bat2 > 1) {
						msg.innerHTML = 'Vous avez touché le torpilleur !';
					} else if (counter_bat2 == 1) {
						msg.innerHTML = 'Vous avez coulé le torpilleur !!'
					}
					counter_bat2--;
					tab1[colonne_selec][ligne_selec] = 0;
					id.className = 'reset_case';
					total_count_bat--;
					bat_restants.innerHTML = total_count_bat + ' cases restantes à couler...';
					reset_tab_tirets()
				}, 1000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}
			}
			break;

		case 3:
			if (jouer_son) {
				gagne();
				setTimeout(function () {
					if (counter_bat3 <= 6 && counter_bat3 > 1) {
						msg.innerHTML = 'Vous avez touché un sous-marin !';
					}
					if (counter_bat3 == 1 || counter_bat3 == 4) {
						msg.innerHTML = 'Vous avez coulé un sous-marin !!'
					}
					counter_bat3--;
					tab1[colonne_selec][ligne_selec] = 0;
					id.className = 'reset_case';
					total_count_bat--;
					bat_restants.innerHTML = total_count_bat + ' cases restantes à couler...';
					reset_tab_tirets();
				}, 2000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}
			} else {
				setTimeout(function () {
					if (counter_bat3 <= 6 && counter_bat3 > 1) {
						msg.innerHTML = 'Vous avez touché un sous-marin !';
					}
					if (counter_bat3 == 1 || counter_bat3 == 4) {
						msg.innerHTML = 'Vous avez coulé un sous-marin !!'
					}
					counter_bat3--;
					tab1[colonne_selec][ligne_selec] = 0;
					id.className = 'reset_case';
					total_count_bat--;
					bat_restants.innerHTML = total_count_bat + ' cases restantes à couler...';
					reset_tab_tirets();
				}, 1000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}
			}
			break;

		case 4:
			if (jouer_son) {
				gagne();
				setTimeout(function () {
					if (counter_bat4 <= 4 && counter_bat4 > 1) {
						msg.innerHTML = 'Vous avez touché le croiseur !';
					} else if (counter_bat4 == 1) {
						msg.innerHTML = 'Vous avez coulé le croiseur !!'
					}
					counter_bat4--;
					tab1[colonne_selec][ligne_selec] = 0;
					id.className = 'reset_case';
					total_count_bat--;
					bat_restants.innerHTML = total_count_bat + ' cases restantes à couler...';
					reset_tab_tirets();
				}, 2000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}
			} else {
				setTimeout(function () {
					if (counter_bat4 <= 4 && counter_bat4 > 1) {
						msg.innerHTML = 'Vous avez touché le croiseur !';
					} else if (counter_bat4 == 1) {
						msg.innerHTML = 'Vous avez coulé le croiseur !!'
					}
					counter_bat4--;
					tab1[colonne_selec][ligne_selec] = 0;
					id.className = 'reset_case';
					total_count_bat--;
					bat_restants.innerHTML = total_count_bat + ' cases restantes à couler...';
					reset_tab_tirets();
				}, 1000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}
			}
			break;

		case 5:
			if (jouer_son) {
				gagne();
				setTimeout(function () {
					if (counter_bat5 <= 5 && counter_bat5 > 1) {
						msg.innerHTML = 'Vous avez touché le porte-avion !';
					} else if (counter_bat5 == 1) {
						msg.innerHTML = 'Vous avez coulé le porte-avion !!'
					}
					counter_bat5--;
					tab1[colonne_selec][ligne_selec] = 0;
					id.className = 'reset_case';
					total_count_bat--;
					bat_restants.innerHTML = total_count_bat + ' cases restantes à couler...';
					reset_tab_tirets();
				}, 2000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}
			} else {
				setTimeout(function () {
					if (counter_bat5 <= 5 && counter_bat5 > 1) {
						msg.innerHTML = 'Vous avez touché le porte-avion !';
					} else if (counter_bat5 == 1) {
						msg.innerHTML = 'Vous avez coulé le porte-avion !!'
					}
					counter_bat5--;
					tab1[colonne_selec][ligne_selec] = 0;
					id.className = 'reset_case';
					total_count_bat--;
					bat_restants.innerHTML = total_count_bat + ' cases restantes à couler...';
					reset_tab_tirets();
				}, 1000);
				if (munitions) {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 5000);
				} else {
					setTimeout(function () { msg.innerHTML = ''; bat_restants.innerHTML = ''; fin_partie(total_count_bat); }, 3000);
				}

			}
			break;
	}
	var rep_ordi = document.getElementById('rep_ordi');
	var time = randomInt(0, 4000);
	setTimeout(function () { rep_ordi.innerHTML = 'Je réfléchis...' }, 3000);
	setTimeout(function () { ia_is_playing() }, time + 3000);
}

function fin_partie(nb_cases) {
	if (nb_cases == 0) {
		document.getElementById('clavier').hidden = true;
		document.getElementById('div_reponse').hidden = true;
		document.getElementById('h1_final').hidden = false;
	} else if (nb_cases != 0 && munitions == 0) {
		document.getElementById('clavier').hidden = true;
		document.getElementById('div_reponse').hidden = true;
		document.getElementById('h1_phrase').innerHTML = 'Plus de munitions, nous avons échoué...';
		if (jouer_son) {
			game_over.play()
		};
		document.getElementById('feu_artifice').hidden = true;
		document.getElementById('h1_final').hidden = false;
		afficher_bat_restants();
	} else if (forfait) {
		document.getElementById('clavier').hidden = true;
		document.getElementById('div_reponse').hidden = true;
		document.getElementById('drapeau_forfait').hidden = true;
		document.getElementById('h1_phrase').innerHTML = 'Vous avez abandonné, vous ne méritez pas votre poste !<br><img src="../img/drapeau.gif">';
		document.getElementById('feu_artifice').hidden = true;
		document.getElementById('h1_final').hidden = false;
		afficher_bat_restants();
	};
}