class Monster{
    constructor(language){
        this.language = language;
        this.stomach = [];
    }

    eat(food_item){

        this.stomach.push(food_item);
        return this.stomach;
    }

    speak(sentence){
        return sentence;
    }
}

const monsterTruck = new Monster("truck");

let Gremlins = new Monster('Gremlinese');

console.log(monsterTruck);
console.log(monsterTruck.eat("gasoline"));
console.log(monsterTruck.eat("nails"));
console.log(monsterTruck.speak("vroom vroom"));

Gremlins.speak = function(sentence){
    let gremlinese = []
        for(let i = 0; i<sentence.split(' ').length; i++){
            gremlinese.push("gar ");
        }
        let string = gremlinese.join('');
        return string;
}

console.log(Gremlins.speak("I like water"));