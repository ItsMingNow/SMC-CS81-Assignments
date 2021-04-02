
function reverseList(object) {
    
    function collectObjVal(object){
        for(key in object) {
            if(key == 'value'){
                valueList.push(object[key]);
            }
            if(key == 'next'){
                if(object[key] == null){
                    break;
                }
                collectObjVal(object[key])
            }
        }

    }

    function reassignObj(object){
        for(key in object){
            if(key == "value"){
                object[key] = reverseArray[index];
                index++;
            }
            if(key == "next"){
                if(object[key] == null){
                    break;
                }
                reassignObj(object[key]);
            }
        }
    }

    let index = 0;

    const valueList = [];

    collectObjVal(object);
  
    const reverseArray = valueList.reverse();

    reassignObj(object);

    return object;
}


var list = { value: 1, next: { value: 2, next: { value: 3, next: null } } };

console.log(reverseList(list));

//Example Test Case(s):

//Arguments: { value: 1, next: { value: 2, next: { value: 3, next: null } } };
//Returns: { value: 3, next: { value: 2, next: { value: 1, next: null } } };

//Arguments: { value: "a", next: { value: "b", next: { value: "c", next: null } } };
//Returns: { value: "c", next: { value: "b", next: { value: "a", next: null } } };

// arg is a object { k:v(number) , k:v{object} }