// Boek class
class Boek {
  constructor(boekData) {
    this.titel = boekData.titel || 'titel';
    this.auteur = boekData.auteur || 'auteur';
    this.aantalAuteurs = boekData.aantalAuteurs || 1;
    this.paginas = boekData.paginas || 0;
    this.likes = boekData.likes || 0;
  }
  dislike() { // dislike: haalt 1 van het totale aantal likes af. Aantal likes mag niet minder dan 0
    if (this.likes > 0) {
        this.likes--;
      }
  }
  like() { // like: telt 1 op bij het totale aantal likes
    this.likes++;
  }
  toString() { // toString: geeft een string representatie van een boek.
      return (`${this.titel} has been written by ${this.auteur} ${this.aantalAuteurs > 1 ?
              `and ${this.aantalAuteurs - 1} other(s). It has ${this.paginas} pages and ${this.likes} like(s).` :
              `It has ${this.paginas} pages and ${this.likes} like(s).`}`);
  }
};


// **************************************************
let boekenLijst = [];
boekenLijst.push(new Boek({titel: 'JavaScript: The Good Parts', auteur:'Douglas Crockford', aantalAuteurs: 1, paginas: 234, likes: 10}));
boekenLijst.push(new Boek({titel: 'JavaScript for Cats', auteur: 'Max Ogden', aantalAuteurs: 1, paginas: 201, likes: 10}));
boekenLijst.push(new Boek({titel: 'Eloquent JavaScript', auteur: 'Marijn Haverbeke', aantalAuteurs: 1, paginas: 262, likes: 10}));
boekenLijst.push(new Boek({titel: 'The Magic Mountain', auteur: 'Thomas Mann', aantalAuteurs: 1, paginas: 235, likes: 32}));
boekenLijst.push(new Boek({titel: 'Things Fall Apart', auteur: 'Chinua Achebe', aantalAuteurs: 1, paginas: 938, likes: 40}));
boekenLijst.push(new Boek({titel: 'Het bureau', auteur: 'J.J. Voskuil', aantalAuteurs: 1, paginas: 48390, likes: 10}));
boekenLijst.push(new Boek({titel: 'ES6 is the new thing', auteur: 'Pim van der Meer', aantalAuteurs: 2, paginas: 332, likes: 539}));
boekenLijst.push(new Boek({titel: 'ES6 het is het', auteur: 'Pim van der Meer', likes: 539}));

// Nu wordt, m.b.v. deze boekenlijst een <select> gevuld.
var kiesBoek = document.getElementById('kiesBoek');
for (var i=0; i<boekenLijst.length; i++) {
    kiesBoek[kiesBoek.length] = new Option(boekenLijst[i].titel, i);
};

// Hier voegen we twee javascript event listeners toe aan de elementen met IDs 'dislike' en 'like'.
document.getElementById('dislike').addEventListener('click', dislikeBoek);
document.getElementById('like').addEventListener('click', likeBoek);

function dislikeBoek(oEvent) {
    oEvent.preventDefault();

    // kiesBoek is een globale variabele die we kunnen gebruiken om het geselecteerde boek te bepalen
    let gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;

    boekenLijst[gekozenBoek].dislike();
    alert(boekenLijst[gekozenBoek].toString());
};

function likeBoek(oEvent) {
    oEvent.preventDefault();
    let gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;

    boekenLijst[gekozenBoek].like();
    alert(boekenLijst[gekozenBoek].toString());

};
