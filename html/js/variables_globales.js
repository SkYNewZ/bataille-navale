/*	nb_alea_1 correspond a la colonne
	nb_alea_2 correspond a la ligne
*/

var //coloriage_bateaux = prompt('bateaux'),
	coloriage_bateaux = 0,
	jouer_son = 1;

var tab1 = new Array();
var nb_cases_bateaux_perso = 17,
	positionner_bateaux = 1;

var n = 1, i, counter = 0, nb_alea_1, nb_alea_2, nb_alea_3, nb_alea_4, nom, longueur_bat;

var colonne_selec,
	cellule_selec,
	ligne_selec,
	direction_selec,
	tab_cas_possible = [],
	longueur,
	lg,
	erreur = 0,
	test_bat3 = 0;

var proposition,
	alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
	counter_bat1 = 1,
	counter_bat2 = 2,
	counter_bat3 = 6,
	counter_bat4 = 4,
	counter_bat5 = 5,
	total_count_bat = 17,
	munitions = 40,
	//munitions = prompt('Munitions ?');
	forfait = 0;


var tab_tirets = ['-', '-'];

var tab_triche = [];
var tab_axis_0 = [];
var tab_axis_1 = [];
var difficulte;
var cellule_ordi;