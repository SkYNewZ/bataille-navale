function gagne() {
	sifflement.play();
	setTimeout(function () { canon.play(); }, 2000);
}

function perdu() {
	sifflement.play();
	setTimeout(function () { plouf.play(); }, 2000);
}

/*function button_son(element){
	var valeur = element.value;
	var bouton = element;
	var on = 'Sons activés';
	var off = 'Sons désactivés';

	if (valeur == on) {
		jouer_son = false;
		bouton.value = off;
	} else if (valeur == off) {
		jouer_son = true;
		bouton.value = on;
	};
}*/

function img_son() {
	var nosound = document.getElementById('nosound');
	var sound = document.getElementById('sound');
	nosound.hidden = true;
	sound.hidden = true;

	if (jouer_son) {
		sound.hidden = false;
	};

	if (!jouer_son) {
		nosound.hidden = false;
	};
}