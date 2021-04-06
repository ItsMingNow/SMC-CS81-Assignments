function multiMap(arrayOfVal, arrayOfCallBack){
    let obj = {};
    //runs array item through all the callbacks
    for(let i = 0; i<arrayOfVal.length; i++){
        let tempArray = []
        for(let j = 0; j<arrayOfCallBack.length; j++){
            tempArray.push(arrayOfCallBack[j](arrayOfVal[i])); 
        }
        obj[arrayOfVal[i]] = tempArray;   
    }
    //return obj whose key match elements in arry of values
    return obj;
}
  
// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }

function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }

function repeater(str) { return str + str; }

const items = ['catfood', 'glue', 'beer'];

const functions = [uppercaser, capitalize, repeater];

console.log(multiMap(items, functions)); 
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }