// Boek class
class Boek {
  constructor(titel, auteur, aantalAuteurs, paginas, likes) {
    this.titel = titel;
    this.auteur = auteur;
    this.aantalAuteurs = aantalAuteurs;
    this.paginas = paginas;
    this.likes = likes;
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
      //dit moet ook met een ternary operator kunnen maar zie even niet hoe

      if (this.aantalAuteurs > 1) {
        return (`${this.titel} has been written by ${this.auteur} and ${this.aantalAuteurs - 1} other(s). It has ${this.paginas} pages and ${this.likes} like(s).`)
      } else {
        return (` ${this.titel} has been written by ${this.auteur}. It has ${this.paginas} pages and ${this.likes} like(s).`)
      }
  }
};


// **************************************************
let boekenLijst = [];
boekenLijst.push(new Boek('JavaScript: The Good Parts', 'Douglas Crockford', 1, 234, 10));
boekenLijst.push(new Boek('JavaScript for Cats', 'Max Ogden', 1, 201, 10));
boekenLijst.push(new Boek('Eloquent JavaScript', 'Marijn Haverbeke', 1, 262, 1));
boekenLijst.push(new Boek('The Magic Mountain','Thomas Mann', 1, 235, 32));
boekenLijst.push(new Boek('Things Fall Apart','Chinua Achebe', 1, 938, 40));
boekenLijst.push(new Boek('Het bureau', 'J.J. Voskuil',  1, 48390, 10));
boekenLijst.push(new Boek('ES6 the new thing', 'Pim van der Meer',  2, 332, 539));


// Nu wordt, m.b.v. deze boekenlijst een <select> gevuld.
let kiesBoek = document.getElementById('kiesBoek');
for (var i=0; i<boekenLijst.length; i++) {
    kiesBoek[kiesBoek.length] = new Option(boekenLijst[i].titel, i);
}

// Hier voegen we twee javascript event listeners toe aan de elementen met IDs 'dislike' en 'like'.
// Dit hoef je op dit punt in het traject nog niet zelf te kunnen.
document.getElementById('dislike').addEventListener('click', dislikeBoek);
document.getElementById('like').addEventListener('click', likeBoek);

function dislikeBoek(oEvent) {
    oEvent.preventDefault();

    // kiesBoek is een globale variabele die we kunnen gebruiken om het geselecteerde boek te bepalen
    let gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;

    boekenLijst[gekozenBoek].dislike();
    alert(boekenLijst[gekozenBoek].toString());
}

function likeBoek(oEvent) {
    oEvent.preventDefault();
    let gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;

    boekenLijst[gekozenBoek].like();
    alert(boekenLijst[gekozenBoek].toString());

};
