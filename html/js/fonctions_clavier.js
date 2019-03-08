function recup_value_clavier(caractere) {
	var tirets = document.getElementById('tirets');
	proposition = caractere;
	var place = 2;

	if (isNaN(proposition)) { //si c'est  lettre
		tab_tirets[0] = proposition;
	} else {
		tab_tirets[1] = proposition;
	}

	tirets.innerHTML = tab_tirets.join('');
}

function reset_tab_tirets() {
	for (var i = 0; i <= 1; i++) { // ######## reset les tirets et reafficher
		tab_tirets[i] = '-';
	}
	document.getElementById('tirets').innerHTML = tab_tirets.join('');
}

function decompte() {
	var decompte_h3 = document.getElementById('decompte_h3');

	var dizaine_0 = document.getElementById('decompte_0_1');
	dizaine_0.hidden = true;

	var dizaine_1 = document.getElementById('decompte_1_1');
	dizaine_1.hidden = true;

	var dizaine_2 = document.getElementById('decompte_2_1');
	dizaine_2.hidden = true;

	var dizaine_3 = document.getElementById('decompte_3_1');
	dizaine_3.hidden = true;

	var dizaine_4 = document.getElementById('decompte_4_1');
	dizaine_4.hidden = true;

	var unite_0 = document.getElementById('decompte_0');
	unite_0.hidden = true;

	var unite_1 = document.getElementById('decompte_1');
	unite_1.hidden = true;

	var unite_2 = document.getElementById('decompte_2');
	unite_2.hidden = true;

	var unite_3 = document.getElementById('decompte_3');
	unite_3.hidden = true;

	var unite_4 = document.getElementById('decompte_4');
	unite_4.hidden = true;

	var unite_5 = document.getElementById('decompte_5');
	unite_5.hidden = true;

	var unite_6 = document.getElementById('decompte_6');
	unite_6.hidden = true;

	var unite_7 = document.getElementById('decompte_7');
	unite_7.hidden = true;

	var unite_8 = document.getElementById('decompte_8');
	unite_8.hidden = true;

	var unite_9 = document.getElementById('decompte_9');
	unite_9.hidden = true;

	if (munitions == 1) {
		decompte_h3.innerHTML = 'Munition restante :';
	}

	if (!munitions) {
		decompte_h3.innerHTML = 'Plus de munitions';
	};

	switch (munitions) {
		case 39:
			dizaine_3.hidden = false;
			unite_9.hidden = false;
			break;

		case 38:
			dizaine_3.hidden = false;
			unite_8.hidden = false;
			break;

		case 37:
			dizaine_3.hidden = false;
			unite_7.hidden = false;
			break;

		case 36:
			dizaine_3.hidden = false;
			unite_6.hidden = false;
			break;

		case 35:
			dizaine_3.hidden = false;
			unite_5.hidden = false;
			break;

		case 34:
			dizaine_3.hidden = false;
			unite_4.hidden = false;
			break;

		case 33:
			dizaine_3.hidden = false;
			unite_3.hidden = false;
			break;

		case 32:
			dizaine_3.hidden = false;
			unite_2.hidden = false;
			break;

		case 31:
			dizaine_3.hidden = false;
			unite_1.hidden = false;
			break;





		case 30:
			dizaine_3.hidden = false;
			dizaine_0.hidden = false;
			break;

		case 29:
			dizaine_2.hidden = false;
			unite_9.hidden = false;
			break;

		case 28:
			dizaine_2.hidden = false;
			unite_8.hidden = false;
			break;

		case 27:
			dizaine_2.hidden = false;
			unite_7.hidden = false;
			break;

		case 26:
			dizaine_2.hidden = false;
			unite_6.hidden = false;
			break;

		case 25:
			dizaine_2.hidden = false;
			unite_5.hidden = false;
			break;

		case 24:
			dizaine_2.hidden = false;
			unite_4.hidden = false;
			break;

		case 23:
			dizaine_2.hidden = false;
			unite_3.hidden = false;
			break;

		case 22:
			dizaine_2.hidden = false;
			unite_2.hidden = false;
			break;

		case 21:
			dizaine_2.hidden = false;
			unite_1.hidden = false;
			break;

		case 20:
			dizaine_2.hidden = false;
			unite_0.hidden = false;
			break;

		case 19:
			dizaine_1.hidden = false;
			unite_9.hidden = false;
			break;

		case 18:
			dizaine_1.hidden = false;
			unite_8.hidden = false;
			break;

		case 17:
			dizaine_1.hidden = false;
			unite_7.hidden = false;
			break;

		case 16:
			dizaine_1.hidden = false;
			unite_6.hidden = false;
			break;

		case 15:
			dizaine_1.hidden = false;
			unite_5.hidden = false;
			break;

		case 14:
			dizaine_1.hidden = false;
			unite_4.hidden = false;
			break;

		case 13:
			dizaine_1.hidden = false;
			unite_3.hidden = false;
			break;

		case 12:
			dizaine_1.hidden = false;
			unite_2.hidden = false;
			break;

		case 11:
			dizaine_1.hidden = false;
			unite_1.hidden = false;
			break;

		case 10:
			dizaine_1.hidden = false;
			unite_0.hidden = false;
			break;

		case 9:
			dizaine_0.hidden = false;
			unite_9.hidden = false;
			break;

		case 8:
			dizaine_0.hidden = false;
			unite_8.hidden = false;
			break;

		case 7:
			dizaine_0.hidden = false;
			unite_7.hidden = false;
			break;

		case 6:
			dizaine_0.hidden = false;
			unite_6.hidden = false;
			break;

		case 5:
			dizaine_0.hidden = false;
			unite_5.hidden = false;
			break;

		case 4:
			dizaine_0.hidden = false;
			unite_4.hidden = false;
			break;

		case 3:
			dizaine_0.hidden = false;
			unite_3.hidden = false;
			break;

		case 2:
			dizaine_0.hidden = false;
			unite_2.hidden = false;
			break;

		case 1:
			dizaine_0.hidden = false;
			unite_1.hidden = false;
			break;

		case 0:
			dizaine_0.hidden = false;
			unite_0.hidden = false;
			break;
	}
}