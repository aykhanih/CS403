////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

// 2.Divide 10 by 2 add result to variables x, and console x:

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

// 5.Console the remainder(%) when 17 is divided by 12.

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.

console.log('12' * '8'); // 12 * 8 vuranda cavab eliyir 96


{
  let x = (10 / 2) //sadə bölmə əməliyyatıdır, cavab 5
  console.log(x);
}


{
  let num1 = 20
  let num2 = 17

  console.log(num1 + num2); // variableların dəyərlərinin cəmi, cavab 37
}

{
  let name = 'Aykhan'
  let surname = 'Hajizada'
  let year = '1998'

  let info = `${name} ${surname} ${year}`
  console.log(info);
}

console.log(17 % 12); // qalığ 5


{
  let cityName = 'Baku'
  console.log(cityName);

  cityName = 'Gence'
  console.log(cityName);
}

////// TASK 2 //////////////

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); // ?
// console.log(d); // ?
// console.log(b); // ?

{
  let a = 1, b = 1;
  let c = ++a;
  let d = b++;

  console.log(c); // burda prefix incrementdir və cavab olur 2 çünkü dəyər dərhal +1 artır
  console.log(d); // burda postfix incrementdir və cavab olur 1 çünkü dəyər dəyişilib amma çap olanda köhnə dəyəri göstərir
  console.log(b); //burda isə həmin postfix incrementin nəticəsidir, yenidən çap edəndə 2 görürük
}


////////////// TASK 3 //////////////

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // ?



{
  let a = 2;
  let x = 1 + (a *= 2); // *= istifadə edəndə biz deyirik ki a ikiyə vursun və dəyəri yadda saxlasın. a olur burda 4
  console.log(x); // 1 + 4 eliyir 5
}


////////////// TASK 4 //////////////

// console.log('test1', test); // ?
// {
//     let test = "something"
//     console.log('test2', test); // ?
// }
// console.log('test3', test);  // ?


// console.log('test1', test);  // ?
// {
//     var test = "something"
//     console.log('test2', test); // ?
// }
// console.log('test3', test); // ?

{
  console.log('test1', test); // burda test1 string kimi gedir, test isə variable kimi lakin dəyəri yoxdur, ona görədə undefined kimi çıxır
  {
    let test = "something"
    console.log('test2', test); // burda test2 string kimi çıxır və test variablına let-nən dəyər verdiyimizə görə something çıxıb.
  }
  console.log('test3', test);  // burda test3 string kimi gedir və yenədə test variablın dəyəri yoxdur, ona görəki həmin let {} içindədir və onun buna dəxlisi yoxdur.


  console.log('test1', test);  // burda test1 stringdir, test isə undefined
  {
    var test = "something"
    console.log('test2', test); // burda test2 stringdir, testə isə var ilə dəyər verilib və nəticədə something çıxır.
  }
  console.log('test3', test); // burda test3 stringdir, test isə yenədə həmin {} içində olar dəyəri oxuyur, çünkü var {} heç vaxt baxmır!
}




////////////// TASK 5 //////////////

//Find the type of all the following cases

// let name = "Ulfat"
// let surname = Zakirli
// let year = 2000
// year = "2000"
// let city;
// let qualification = null
// let obj = { name: 'ulfat' }
// let arr = ['a', 'b', 'c']

{

  let name = "Ulfat"
  console.log(typeof name); //burda type-ı string kimi çıxır 


  let surname = 'Zakirli'
  console.log(typeof surname); //burda script partlayır çünkü tək Zakirli yazmaq olmaz, mən '' yazdım


  let year = 2000
  console.log(typeof year); //burda type-ı number kimi çıxır 


  year = "2000"
  console.log(typeof year); //burda type-ı string kimi çıxır 


  let city;
  console.log(typeof city); //burda type-ı undefined kimi çıxır çünkü dəyəri yoxdur.


  let qualification = null
  console.log(typeof qualification); //burda type-ı object kimi çıxır çünkü özü primit olsada, type non primitiv çıxır.


  let obj = { name: 'ulfat' }
  console.log(typeof obj); //burda type-ı elə object kimi çıxır 


  let arr = ['a', 'b', 'c']
  console.log(typeof arr); //burda type-ı object kimi çıxır çünkü arraylər həmişə object olur












}