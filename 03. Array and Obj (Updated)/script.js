const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'

const sum = arr1.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

////////////// TASK 7 //////////////
const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]

// 4.Console only names which is Anar

//for method 

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "Anar") {
        console.log(arr2[i]);
    }
}

//for of method

for (const val of arr2) {
    if (val === "Anar") {
        console.log(val);
    }
}

// 5.Console all names where name is Anar, then change it to "Perviz"

//for method
{
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === "Anar") {
            console.log(arr2[i]);
            arr2[i] = "Perviz";
        }
    }
    console.log(arr2);
}

//for of method
{
    for (const val of arr2) {
        if (val === "Anar") {
            console.log(val);
            val = "Perviz";
        }
        console.log(val);
    }
}

////////////// TASK 8 //////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// 1.Show only numbers


// for
for (i = 0; i < arr3.length; i++) {
    if (typeof arr3[i] === "number") {
        console.log(arr3[i]);
    }
}

//for of

for (const value of arr3) {
    if (typeof value === "number") {
        console.log(value);
    }
}

// 2.Show only true values

for (const value of arr3) {
    if (value === true) {
        console.log(value);
    }
}

// 3.Show only false values

for (const value of arr3) {
    if (value === false) {
        console.log(value);
    }
}

// 4.Show only strings

for (const value of arr3) {
    if (typeof value === "string") {
        console.log(value);
    }
}




////////////// TASK 8 //////////////
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)

for (const even of numbers){
    if (even % 2 !== 1){
        console.log(even);
    }
}

// 2.Console (only odd numbers)

for (const odd of numbers){
    if (odd % 2 !== 0){
        console.log(odd);
    }
}


{
////////////// TASK 9 //////////////
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
{
    for (i=0; i<arr4.length; i++) {
        if (typeof arr4[i] === "number") {
            console.log(arr4[i] + 10);
        }
    }

    for (i=0; i<arr4.length; i++) {
        if (typeof arr4[i] === "string") {
            console.log(arr4[i] + " is string");
        }
    }
    for (i=0; i<arr4.length; i++) {
        if (arr4[i] === false) {
            console.log(arr4[i] + " is falsy");
        }
    }

}
// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]

// 2.Sum all numbers of arr4
{
    let sum = 0
    for (i=0; i<arr4.length; i++) {
        if (typeof arr4[i] === "number") {
            sum += arr4[i]
        
        }
    }
    console.log(sum);
}
// 3.Count only the values that are true

for (i=0; i<arr4.length; i++) {
    if (arr4[i] === true) {
        console.log(arr4[i]);
    }
}

// 4.Count only the values that are string

for (i=0; i<arr4.length; i++) {
    if (typeof arr4[i] === "string") {
        console.log(arr4[i]);
    }
}

// 5.Count only the values that are false

for (i=0; i<arr4.length; i++) {
    if (arr4[i] === false) {
        console.log(arr4[i]);
    }
}

}


////////////// TASK 11 //////////////

// let fullName = 'Ulfat Zakirli Rovshen'

let fullName = "Aykhan Hajizada Isa"


// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

function splitName(anyName){
    let test = anyName.split("");
    return test;
}
console.log(splitName(fullName));

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin

function swap(anyName){

    let words = anyName.split(" ")
    let temp = words[1]
    words[1] = words[0]
    words[0] = temp
    return words
}
console.log(swap(fullName));





let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

let summ = 0
for (num of arr){
    if(num === 5){
        summ++
    }
}
console.log(summ);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

{
    const arrSum = arr.reduce((acc, cur) => acc + cur,0)
    console.log(arrSum);

}

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
{
    mathResult2 = Math.max(...arr);
    let sumMath = 0
    for (num of arr){
        if(num === mathResult2){
            sumMath++;
        }
    }
console.log(sumMath);
}


//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

function findIndexOf4(anyArr, index){
    let indexes = []
    for (i=0; i < anyArr.length; i++){
        if (anyArr[i] === index) {
            indexes.push(i);
        }
    }
    return indexes
}

let testing = findIndexOf4(arr, 4)
console.log(testing);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

function findIndexes(anyArr, index){
    const minIndex = anyArr.findIndex(num => num === index)
    const maxIndex = anyArr.findLastIndex(num => num === index)
    return { maxIndex, minIndex };
}

let { maxIndex, minIndex } = findIndexes(arr, 5);

console.log(minIndex);
console.log(maxIndex);

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

function difference(anyArr){
    let newArr = [];
    for (i=0; i<anyArr.length; i++)
        if(arr[i] > 2){
            newArr.push(anyArr[i]);
        }
        const diff = anyArr.length - newArr.length;

        return diff;
}

let diff = difference(arr)
console.log(diff);


//14) 7 reqeminin indexleri cemini tapin.

function summaryIndex(anyArr, index){
    let sum = 0
    for (i=0; i<anyArr.length; i++)
        if(anyArr[i] === index) {
            sum += i
        }
    return sum
}

let resultOf7 = summaryIndex(arr, 7)
console.log(resultOf7);

