## Notre projet, la Bataille Navale

Lycée FENELON Cambrai
Projet Terminale S - Option ISN
Année scolaire 2015

> README traduit à partie du `.pptx` de l'époque :wink:

1. [L’idée du projet](#idee-du-projet)
2. [Etapes nécessaires à sa réalisation](#etapes-necessaires-a-sa-realisation)
3. [En coulisse du projet](#en-coulisse-du-projet)
4. [Résultat final](#resultat-final)
5. [Mise à jour possibles](#mise-a-jour-possibles)

## L’idée de ce projet

* Liste des projets proposés
* Originalité
* Trop ambitieux
* Bataille Navale complète

Ils nous a donc fallu réfléchir à l’organisation nécessaire pour mener à bien ce projet.

## Étapes nécessaire à la réalisation

* Tout d’abord il nous a fallu réaliser une maquette pour avoir idée de l’aspect général du projet.
* Ensuite, un cahier des charges regroupant nos différentes fonctionnalités voulues.
* Etablir la répartition des tâches.

## En coulisse du projet

![Premier écran](doc/1.png)
![Deuxième écran](doc/2.png)
![Troisième écran](doc/3.png)

### Cahier des charges

|                                    Cahier des charges                                   | Fonctionnalité mise en place |
|-----------------------------------------------------------------------------------------|:----------------------------:|
| bouton abandonner                                                                       |              Oui             |
| clavier virtuel                                                                         |              Oui             |
| bouton de validation                                                                    |              Oui             |
| interface propre                                                                        |              Oui             |
| animation avec du son                                                                   |              Oui             |
| possibilité de couper le son n’importe quand                                            |              Oui             |
| ajout d’un nombre d’essais maximum                                                      |              Oui             |
| obligation de voir apparaitre la tentative (réussie ou échouée)                         |              Oui             |
| si tentative réussie, savoir quel bateau a été touché (et ainsi en déduire sa longueur) |              Oui             |
| humain VS machine                                                                       |              Oui             |
| machine VS humain                                                                       |            **Non**           |
| version tout navigateur                                                                 |            **Non**           |

### Répartition des tâches

|                    | Quentin (me :whale:) | Jeremy | Maxime |
|--------------------|:--------------------:|:------:|:------:|
| HTML               |           X          |    X   |    X   |
| Javascript         |           X          |    X   |        |
| CSS                |           X          |        |        |
| Maquette           |                      |    X   |    X   |
| Validation (tests) |           X          |    X   |    X   |
| Contenu écrit      |                      |        |    X   |

Ici vous verrez le code en lui-même.
* Extraits de JavaScript
* Extraits de CSS
* Extraits de HTML

De plus, certaines fonctions utilisées n’ont pas été vu en cours et sont issues de sites libres de droits tels que OpenClassrom :
* fonctions switch()
* setTimeout()
* les fonctions anonymes, etc…

## Résultat final

![Rendu 1](doc/4.png)
![Rendu 2](doc/5.png)

## Mise à jour possibles

Comme dit plus haut dans le cahier des charges, nous avions comme objectif de créer une partie « machine VS humain ». Par manque de temps, nous avons préféré nous arrêter à cette version même si la structure HTML est écrite (mais hidden), le CSS correspondant ainsi que le JS permettant de placer nos propres bateaux (mais sans vérification de la forme pour l’instant.)
