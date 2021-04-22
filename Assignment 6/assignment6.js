function Monster(language){
    this.language = language;
    this.stomach = []
    this.eat = function (food_item){
        this.stomach.push(food_item);
        return this.stomach;
    }
    this.speak = function(sentence){
        return sentence;
    }
}

const monsterTruck = new Monster("truck");

let gremlin = new Monster('Gremlinese');

console.log(monsterTruck.eat("gasoline"));
console.log(monsterTruck.eat("nails"));
console.log(monsterTruck.speak("vroom vroom"));

gremlin.speak = function(sentence){
    let gremlinese = []
        for(let i = 0; i<sentence.split(' ').length; i++){
            gremlinese.push("gar ");
        }
        let string = gremlinese.join('');
        return string;
}

console.log(gremlin.speak("I like water"));

function Gremlin(){
    Monster.apply(this, arguments);
    this.speak = function(sentence){
        let gremlinese = []
            for(let i = 0; i<sentence.split(' ').length; i++){
                gremlinese.push("gar ");
            }
            let string = gremlinese.join('');
            return string;
    }
} 

let gremlin2 = new Gremlin('english');

console.log(gremlin2.eat('garbage'));
console.log(gremlin2.eat('more garbage'));

let gremlin3 = new Gremlin('english');

console.log(gremlin3.eat('recycled garbage'));
console.log(gremlin3.eat('more recycled garbage'));