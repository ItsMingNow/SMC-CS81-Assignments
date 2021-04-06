var dataSet = [
    {
        "name": "Maura Glass",
        "age": 60,
        "math": 97,
        "english": 63,
        "yearsOfEducation": 4
    },
    {
        "name": "James Gates",
        "age": 55,
        "math": 72,
        "english": 96,
        "yearsOfEducation": 10
    },
    {
        "name": "Mills Morris",
        "age": 26,
        "math": 83,
        "english": 77,
        "yearsOfEducation": 10
    },
    {
        "name": "Deena Morton",
        "age": 57,
        "math": 63,
        "english": 63,
        "yearsOfEducation": 10
    },
    {
        "name": "Edith Roth",
        "age": 38,
        "math": 79,
        "english": 94,
        "yearsOfEducation": 10
    },
    {
        "name": "Marva Morse",
        "age": 31,
        "math": 93,
        "english": 78,
        "yearsOfEducation": 9
    },
    {
        "name": "Etta Potts",
        "age": 48,
        "math": 57,
        "english": 93,
        "yearsOfEducation": 7
    },
    {
        "name": "Tate Moss",
        "age": 22,
        "math": 83,
        "english": 64,
        "yearsOfEducation": 8
    },
    {
        "name": "Sanders Burris",
        "age": 27,
        "math": 65,
        "english": 66,
        "yearsOfEducation": 5
    },
    {
        "name": "Latoya Malone",
        "age": 35,
        "math": 100,
        "english": 100,
        "yearsOfEducation": 5
    },
    {
        "name": "Wade Foreman",
        "age": 25,
        "math": 76,
        "english": 87,
        "yearsOfEducation": 10
    },
    {
        "name": "Miller Valentine",
        "age": 31,
        "math": 56,
        "english": 89,
        "yearsOfEducation": 6
    },
    {
        "name": "Rita Olson",
        "age": 53,
        "math": 100,
        "english": 52,
        "yearsOfEducation": 6
    },
    {
        "name": "Potter Newton",
        "age": 29,
        "math": 91,
        "english": 75,
        "yearsOfEducation": 5
    },
    {
        "name": "Madeline Bartlett",
        "age": 23,
        "math": 60,
        "english": 74,
        "yearsOfEducation": 10
    },
    {
        "name": "Tamara Tran",
        "age": 46,
        "math": 73,
        "english": 78,
        "yearsOfEducation": 4
    },
    {
        "name": "Elena Evans",
        "age": 43,
        "math": 60,
        "english": 82,
        "yearsOfEducation": 10
    },
    {
        "name": "Cote Merrill",
        "age": 55,
        "math": 86,
        "english": 63,
        "yearsOfEducation": 7
    },
    {
        "name": "Madeleine Brennan",
        "age": 52,
        "math": 82,
        "english": 88,
        "yearsOfEducation": 4
    },
    {
        "name": "Alford Weber",
        "age": 38,
        "math": 71,
        "english": 85,
        "yearsOfEducation": 4
    },
    {
        "name": "Kirsten Daniel",
        "age": 35,
        "math": 86,
        "english": 61,
        "yearsOfEducation": 8
    },
    {
        "name": "Melton Chan",
        "age": 26,
        "math": 55,
        "english": 96,
        "yearsOfEducation": 4
    },
    {
        "name": "Mcmahon Woodward",
        "age": 54,
        "math": 56,
        "english": 63,
        "yearsOfEducation": 9
    },
    {
        "name": "Helga Monroe",
        "age": 29,
        "math": 79,
        "english": 92,
        "yearsOfEducation": 5
    },
    {
        "name": "Patricia Herrera",
        "age": 46,
        "math": 94,
        "english": 99,
        "yearsOfEducation": 10
    },
    {
        "name": "Mccullough Lambert",
        "age": 56,
        "math": 65,
        "english": 96,
        "yearsOfEducation": 8
    },
    {
        "name": "Haynes Davidson",
        "age": 60,
        "math": 86,
        "english": 50,
        "yearsOfEducation": 5
    }
]

function getArrayLengthWithoutArrayMethod(array){
    let dataLength = 0;

    for(let i in array){
        dataLength++;
    }

    return dataLength;
}

const aveAge = Math.round(dataSet.reduce((total, obj) => obj.age + total, 0)/getArrayLengthWithoutArrayMethod(dataSet));

const aveEng = Math.round(dataSet.reduce((total, obj) => obj.english + total, 0)/getArrayLengthWithoutArrayMethod(dataSet));


function printFirstName(arryOfObj){
    for (let i in arryOfObj){
        console.log(arryOfObj[i].name.split(" ")[0]);
    }
}

const newSet = dataSet.filter( obj =>
    {if(obj.age<aveAge && obj.english>aveEng){
        return true;
    }
})

printFirstName(newSet);



/* 
Should print

Edith
Latoya
Wade
Miller
Alford
Melton
Helga
*/


