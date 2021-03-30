//assignment1.js

function reverseList(list) {
    const reversedList = {};

    console.log(list);

    // console.log(list.value);
    console.log(Object.values(list));
    // console.log(list.next.next);

    // let entries = Object.entries(list);
    // let entries = Array.from(list);

    // console.log(entries);


    return reversedList;
}


var list = { value: 1, next: { value: 2, next: { value: 3, next: null } } };

console.log(reverseList(list));

//Example Test Case(s):

//Arguments: { value: 1, next: { value: 2, next: { value: 3, next: null } } };
//Returns: { value: 3, next: { value: 2, next: { value: 1, next: null } } };

//Arguments: { value: "a", next: { value: "b", next: { value: "c", next: null } } };
//Returns: { value: "c", next: { value: "b", next: { value: "a", next: null } } };