function AbstracaoMaster(key1, key2, key3) {
    this.key1 = key1;
    this.key2 = key2;
    this.key3 = key3;
    this.olaMundo = function () {
        return console.log("Hello World!");
    }

}

function AbstracaoFilha1(key1, key2, key3, key4) {
    AbstracaoMaster.call(this, key1, key2, key3)
    this.key4 = key4;
}


function AbstracaoFilha2(key1, key2, key3, key5) {
    AbstracaoMaster.call(this, key1, key2, key3)
    this.key5 = key5;
}

const instancia1 = new AbstracaoMaster("valor1", "valor2", "valor3")
const instancia2 = new AbstracaoFilha1("valor1", "valor2", "valor3", "valor4")
const instancia3 = new AbstracaoFilha1("valor1", "valor2", "valor3", "valor5")

console.log(instancia1);
console.log(instancia2);
console.log(instancia3);