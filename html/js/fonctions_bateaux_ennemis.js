function randomInt(min, max){
	var nb=min+(max+1-min)*Math.random();
	return Math.floor(nb);
}

function confirmations(){
	//coloriage_bateaux = confirm('Montrer les bateaux ennemis ?'); ############### AFFICHER BATEAUX
	console.log('coloriage_bateaux = ' + coloriage_bateaux);
	//jouer_son = confirm('Jouer avec les sons ?');

	/*var bouton = document.getElementById('bouton_son');
	if (jouer_son) {
		bouton.value = 'Sons activés';
	};
	if (!jouer_son) {
		bouton.value = 'Sons désactivés';
	};*/

	img_son();

	console.log('son ?' + jouer_son);
}

function remplir_tab(){
	var col0 = new Array();
	var col1 = new Array();
	var col2 = new Array();
	var col3 = new Array();
	var col4 = new Array();
	var col5 = new Array();
	var col6 = new Array();
	var col7 = new Array();
	var col8 = new Array();
	var col9 = new Array();
	for (var i=0; i<=9; i++){
		col0[i] = 0;
		col1[i] = 0;
		col2[i] = 0;
		col3[i] = 0;
		col4[i] = 0;
		col5[i] = 0;
		col6[i] = 0;
		col7[i] = 0;
		col8[i] = 0;
		col9[i] = 0;
	};
	tab1 = [col0, col1, col2, col3, col4, col5, col6, col7, col8, col9];
}

function placer_bateaux_ennemis(){
	var n = 1;
	for (lg=5; lg>=2; lg--){
		if (lg == 2 && n==1){
			lg+=2;
			n = 0;
		} else {
			longueur = lg;
			nb_alea_1 = randomInt(0, 9); //on a un nb aleatoire
			colonne_selec = tab1[nb_alea_1]; //on a notre collone
			nb_alea_2 = randomInt(0,9); //2e aleatoire
			cellule_selec = colonne_selec[nb_alea_2]; //on a la cellule
			test_case_remplie(tab1[nb_alea_1][nb_alea_2], longueur);

			console.log('cellule_selec='+cellule_selec);
		}
	}
}

function test_case_remplie(element, longueur){
	if (element != 0){
		//counter++;
		//var msg_direc2 = document.getElementById('prise'); //A ENLEVER
		//msg_direc2.innerHTML = 'Déjà prise ! (' + counter + ')';
		lg++;
	} else { //on peut mettre un bateau

		if (coloriage_bateaux) {
			nom = 'cel_' + nb_alea_1 + '_' + nb_alea_2; //###########################   COLORIER CASE INITIALE
			var cellule_selec_tab = document.getElementById(nom);
			cellule_selec_tab.className = 'case_ini'; //on la colorie en noir
			};
		
		balayage_ini(tab1[nb_alea_1][nb_alea_2], longueur);
		if (!erreur){
			tab1[nb_alea_1][nb_alea_2] = longueur;
			creer_bateau(longueur, direction_selec);
		} else {
			//cellule_selec_tab.className = ''; //on retire
			lg++;
			erreur = 0;
		}
	}
}

function balayage_ini(case_ini, longueur_bat){
	//var msg_direc = document.getElementById('direction_chosie');
	//var msg_direc3 = document.getElementById('ERREUR');
	var k =0;
	nb_alea_3 = nb_alea_2;
	nb_alea_4 = nb_alea_1;
	var cellule_test;
	var colonne_test;
	tab_cas_possible = ['haut', 'bas', 'gauche', 'droite'];
	for (i=0; i<4; i++){
		switch(i){
			case 0: //haut vertical
				k = 0;
				nb_alea_3 = nb_alea_2;
				for (k=0; k<longueur_bat-1; k++){
					nb_alea_3-=1; //pour pas perdre le nb alea 2
					cellule_test = colonne_selec[nb_alea_3];
					if (cellule_test!=0 || cellule_test === undefined){
						tab_cas_possible.splice(tab_cas_possible.indexOf('haut'),1);
						k = 4;
					}
				}
			break;

			case 1: //bas vertical
				k = 0;
				nb_alea_3 = nb_alea_2;
				for (k=0; k<longueur_bat-1; k++){
					nb_alea_3+=1;
					cellule_test = colonne_selec[nb_alea_3];
					if (cellule_test!=0 || cellule_test === undefined){
						tab_cas_possible.splice(tab_cas_possible.indexOf('bas'),1);
						k = 4;
					}
				}
			break;

			case 2: //gauche horizontal
				k = 0;
				nb_alea_4 = nb_alea_1;
				for (k=0; k<longueur_bat-1; k++){
					nb_alea_4-=1;
					if (nb_alea_4<0){
						tab_cas_possible.splice(tab_cas_possible.indexOf('gauche'),1);
						k = 4;
					} else {
						colonne_test = tab1[nb_alea_4];
						cellule_test = colonne_test[nb_alea_2];
					}

					if (cellule_test!=0){
						tab_cas_possible.splice(tab_cas_possible.indexOf('gauche'),1);
						k = 4;
					}
				}
			break;

			case 3: //droite horizontal
				k = 0;
				nb_alea_4 = nb_alea_1;
				for (k=0; k<longueur_bat-1; k++){
					nb_alea_4+=1;
					if (nb_alea_4>9){
						tab_cas_possible.splice(tab_cas_possible.indexOf('droite'),1);
						k = 4;
					} else {
						colonne_test = tab1[nb_alea_4];
						cellule_test = colonne_test[nb_alea_2];
					}

					if (cellule_test!=0){
						tab_cas_possible.splice(tab_cas_possible.indexOf('droite'),1);
						k = 4;
					}
				}
			break;
				
		}
	}


	if (tab_cas_possible.length){
		direction_selec = randomInt(0, tab_cas_possible.length-1); //on tire un nb
		//msg_direc.innerHTML = 'La direction chosie est : ' + tab_cas_possible[direction_selec] + '.';
	} else {
		//msg_direc3.innerHTML = 'ERREUR aucuns cas possible pour le balayage !';
		console.log('nb cas possibles = '+ tab_cas_possible.length);
		erreur = 1;
	}
}

function creer_bateau(length){
	//on a notre cellule ini qui est tab1[nb_alea_1][nb_alea_2];
	switch(tab_cas_possible[direction_selec]){
		case 'haut':
			for (var i=0; i<length-1; i++){
				nb_alea_2-=1;

				if (coloriage_bateaux) {
					nom = 'cel_' + nb_alea_1 + '_' + nb_alea_2; //#########################  COLORIAGE
					var cellule_selec_tab = document.getElementById(nom);
					cellule_selec_tab.className = 'case_rouge'; //on la colorie
				};
				
				tab1[nb_alea_1][nb_alea_2] = length;
			}
		break;

		case 'bas':
			for (var i=0; i<length-1; i++){
				nb_alea_2+=1;
				
				if (coloriage_bateaux) {
					nom = 'cel_' + nb_alea_1 + '_' + nb_alea_2; //#########################  COLORIAGE
					var cellule_selec_tab = document.getElementById(nom);
					cellule_selec_tab.className = 'case_rouge'; //on la colorie
				};
				
				tab1[nb_alea_1][nb_alea_2] = length;
			}
		break;

		case 'gauche':
			for (var i=0; i<length-1; i++){
				nb_alea_1-=1;
				

				if (coloriage_bateaux) {
					nom = 'cel_' + nb_alea_1 + '_' + nb_alea_2; //#########################  COLORIAGE
					var cellule_selec_tab = document.getElementById(nom);
					cellule_selec_tab.className = 'case_rouge'; //on la colorie
				};
				
				tab1[nb_alea_1][nb_alea_2] = length;
			}
		break;

		case 'droite':
			for (var i=0; i<length-1; i++){
				nb_alea_1+=1;
				

				if (coloriage_bateaux) {
					nom = 'cel_' + nb_alea_1 + '_' + nb_alea_2; //#########################  COLORIAGE
					var cellule_selec_tab = document.getElementById(nom);
					cellule_selec_tab.className = 'case_rouge'; //on la colorie
				};
				
				tab1[nb_alea_1][nb_alea_2] = length;
			}
		break;
	}
}

function afficher_bat_restants(){
	var cellule_courante;
	for (var k=0; k < 10; k++){ //colones
		for (var i=0; i < 10; i++){ //lignes
			cellule_courante = tab1[k][i];
			if (cellule_courante) {
				nom = 'cel_' + k + '_' + i;
				nom = document.getElementById(nom);
				nom.className = 'case_grise';
			};
		}
	}
}