var ClozeCard = function(text, cloze){

    this.text = text;
    this.cloze = this.text.match(/\(([^)]+)\)/)[1];
    this.printCloze = function() {
        console.log(this.cloze);
    }
    this.printText = function() {
        console.log(this.text);
    }

    this.message = this.text.replace('(' + this.cloze + ')', '________');

};

ClozeCard.prototype.printAnswer = function() {

    console.log('Incorrect. Here is the full sentence: \n' + this.text.replace(/[{()}]/g, ''));
}

//Node module that exports cloze deletion flashcards
module.exports = ClozeCard;