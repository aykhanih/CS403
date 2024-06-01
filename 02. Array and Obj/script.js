const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'

{
    let sum = 0
    arr1.map((num) => sum += num)
    console.log(sum);
}

// 2.Add two numbers (10,88) to end of arr1 (push methods)

arr1.push(10, 88);

// 3.Remove first two numbers from arr1

arr1.shift();
arr1.shift();

// 4.Add three numbers (0,9,11) in front of arr1(unshift)

arr1.unshift(0, 9, 11)

// 5.Remove four numbers in front of arr1(shift)

arr1.shift()
arr1.shift()
arr1.shift()
arr1.shift()


console.log(arr1);



////////////// TASK 7 //////////////
const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// 1.Console values from "Rufet" to "Fuad"

console.log(arr2.slice(2, 8));

// 2.Change Gulshen to Rovshen 

const change = arr2.map(item => item.replace("Gulshen", "Rovshen"))
console.log(change);

// 3.Console each name with map

arr2.map(nname => console.log(nname))

// 4.Console only names which is Anar

{
    const anarNamings = arr2.filter(nname => nname.includes("Anar"))
    console.log(anarNamings);
}

// 5.Console all names where name is Anar, then change it to "Perviz"

{
    const anarNamings = arr2.filter(nname => nname.includes("Anar"))
    console.log(anarNamings);
    anarNamings.splice(0, 3, "Perviz", "Perviz", "Perviz")
    console.log(anarNamings);
}

// 6.Console last second value of arr2

console.log(arr2.slice(-2, -1));

// 7.Console length of arr2

console.log(arr2.length);






////////////// TASK 8 //////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// 1.Show only numbers

console.log(arr3.filter((number) => typeof number === "number"));

// 2.Show only true values

console.log(arr3.filter((truee) => truee === true));

// 3.Show only false values

console.log(arr3.filter((falsee) => falsee === false));

// 4.Show only strings

console.log(arr3.filter((string) => typeof string === "string"));






////////////// TASK 8 //////////////
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)

console.log(numbers.filter((even) => even % 2 !== 1));

// 2.Console (only odd numbers)

console.log(numbers.filter((odd) => odd % 2 !== 0));




{
    ////////////// TASK 9 //////////////
    const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

    // 1.Console all values of arr4 -
    // if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
    {
        console.log(arr4.filter((number) => typeof number === "number").map(number => number + 10));
        console.log(arr4.filter((string) => typeof string === "string").map(string => string + " is string"));
        console.log(arr4.filter((falsy) => falsy === false).map(falsy => falsy + " is falsy value"));

    }
    // Example: [10,'true',false]
    // Result: [20, "true is string", "false is falsy value"]

    // 2.Sum all numbers of arr4
    {
        let sum = 0
        arr4.filter((number) => typeof number === "number").map(number => sum += number)
        console.log(sum);
    }
    // 3.Count only the values that are true

    console.log(arr4.filter((truee) => truee === true));

    // 4.Count only the values that are string

    console.log(arr4.filter((string) => typeof string === "string"));

    // 5.Count only the values that are false

    console.log(arr4.filter((falsee) => falsee === false));

}


////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.

const info = {
    firstName: "Aykhan",
    surName: "Hajizada",
    age: 25,
    city: "Baku"
}
// 2.Then change name to "Jhon"

info.firstName = "John"
console.log(info);






const obj = {
    email: 'ulfat@gmail.com',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Nizami 22',
            education: {
                "uni name": "ADNSU",
            }
        }
    }
}

// 3.Console gender

console.log(obj.info.gender);

// 4.Console city

console.log(obj.info.loc.city);


////////////// TASK 11 //////////////

// let fullName = 'Ulfat Zakirli Rovshen'

let fullName = "Aykhan Hajizada Isa"


// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

console.log(fullName.split(""));

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin

let words = fullName.split(" ")
let temp = words[1]
words[1] = words[0]
words[0] = temp

console.log(words);


// 3) Alinan yeni arrayi stringe cevirin(join)

console.log(words.join(""));


let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

console.log(arr.filter((number) => number === 5).length)


//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

{
    let sum = 0
    arr.map((summary) => sum += summary)
    console.log(sum);

}

//6) arrayda tekrar olunan reqemleri artan sira ile duzun

// console.log(arr.sort((a,b) => a-b)); Commentde saxladım ki, digər tasklara dəyməsin

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
{
    mathResult2 = Math.max(...arr);
    console.log(arr.filter((number) => number === mathResult2).length);
}
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)

myName = "Aykhan"
console.log(myName.length);
console.log(arr.includes(myName.length));

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

console.log(arr.findIndex((number) => number % 3 === 2));

//10) arraydaki en boyuk reqemin ilk indexini tapin

let mathResult = Math.max(...arr);
console.log(arr.findIndex((number) => number == mathResult));

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

console.log(arr.map((num, index) => num === 4 ? index : false).filter(index => index !== false))

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

console.log(arr.findIndex((number) => number === 5));
console.log(arr.findLastIndex((number) => number === 5));

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

newArr = arr.filter((val) => val > 2)
console.log(arr.length - newArr.length);

//14) 7 reqeminin indexleri cemini tapin.

let sum = 0
let inx7 = arr.map((el, index) => el === 7 ? index : false).filter(index => index !== false)
console.log(inx7);
inx7.map((test) => sum += test)
console.log(sum);


///////////// TASK 12//////////////

let arr4 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

let array1 = arr4.filter((obj) => obj.name.startsWith("t") && (obj).name.endsWith("t"));
console.log(array1);

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

let array2 = arr4.filter((obj) => obj.name.startsWith("t") && (obj).name.endsWith("t")).length;
console.log(array2);

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

let array3 = arr4.filter(obj => obj.name.startsWith("t") && (obj).name.endsWith("t"));
let summ = 0
array3.map((array3) => summ += array3.key)
console.log(summ);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

let array4 = arr4.filter((obj) => obj.name.endsWith("e")).map((obj) => ({ name: "SuperDev", key: obj.key }));
console.log(array4);

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

let maxLength = Math.max(...arr4.map((obj) => obj.name.length))
console.log(arr4.find((obj) => obj.name.length === maxLength).key);

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

let maxLength1 = Math.max(...arr4.map((obj) => obj.name.length))
console.log(arr4.findIndex((obj) => obj.name.length === maxLength1) ** 2);

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

let newArr2 = arr4.filter((obj) => obj.name.length === 4)
console.log(newArr2);

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

let maxKeyLength = Math.max(...arr4.map((obj) => obj.key))
console.log(arr4.find((obj) => obj.key === maxKeyLength));

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

let array5 = arr4.filter((obj) => obj.name.split("l").length - 1 === 2)
console.log(array5.map((obj) => arr4.indexOf(obj)));

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.

let array6 = arr4.filter((obj) => obj.name.split("t").length - 1 === 2)
console.log(array6.map((obj) => obj.key)); // keyləri göstərir
console.log(array6.map((obj) => obj.name)); // nameləri göstərir (for myself)
