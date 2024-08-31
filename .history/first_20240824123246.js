//comparision operator to compare value
//equal to ==
//not equal to !=
//greater the >
//greater then equal to >=
//less then <
//less then equal to <=


// a=2;
// b=5;
// console.log("a==b",a==b);     //true ya false batahay ga

// c=2;
// d=5;
// console.log("c!=d",c!=d);

// e=2;
// f=5;
// console.log("if e>f",e>f);

// g=2;
// h=5;
// console.log("if g>=h", g>=h);

// i=2;
// j=5;
// console.log("if i<j",i<j);

// k=2;
// l=5;
// console.log("if i<=j",i<=j);



//logical operator  (false ya true)
//and && mean multiply dono true hona zarori ha
//or || mean add kerna koi aik true
//not !

// a=5;
// b=3;
// let cond1 = a>b;
// let cond2 = b<a;     //both condition are true
// let cond3= a<b;
// let cond4=b>a;      //both condition are false cond3 and cond4

// console.log("!cond1 =",!cond1);  //not true ko false or false ko true ker daita condition 
//                                 //true ha but answer false ahay ga
// console.log("!a<b=",!a<b);                                

//conditional statement

// let a=20;
// if(a>=18){                        //ager condition if kay sath match ho jati tho if wala msg show ho ga werna else
//   console.log("you can vote");
// }else{
//   console.log("you cannot vote");
// }

// let a=33;
// if(a%2==0){         //a ke value ko 2 say divide karay or remainder (answer) 0 kay equal ahay tho even werna odd
//   console.log("number is even");
// }else{
//   console.log("number is odd");
// }


// a=10;
// if(a>18){                     //if wali condtion check hoti ha satisfy ho tho wo print werna
//                                //else if ager wo be na ho staisfy to else print hoti ha
//   console.log("you can vote");
// }else if(a>=15){
//   console.log("you can vote");
// }else{
//   console.log("you cannot vote");
// }
  
// let mode="pink";
// let color;
// if(mode=="dark"){
//   color="dark";
// }else if(mode=="white"){
//   color="white";
// }else if(mode=="blue"){
//   color="blue";
// }else{
//   color="pink";
// }
// console.log(color);


// //ternary operatore
// //a (condition true) ? (print b )else: (print c)

// let age =18;
// let result =  age>=20 ? "adlut": "not adult";      //age ager 20 kay equal ya bari ha adult ahh jahay werna not adult 
//                                                  //in sub chizo ka solution result name kay variable may store ho ga
// console.log(result);

// alert("hello Fizza hope your enjoying JS");   //popup msg
   //popup msg ahay ga but okay kernay per oiss may hum kuch input be da saqtay ha 
  
  //  let name="Fizza";
  // prompt("Enter your name Baby Girl!");
  // console.log(name);      //console may be name ahay ga print ho ker

  // //use prompt to show a msg to the user enter a number and check if the number is multiple or divible by 5
   
  // let num =prompt("Enter a number:");
  
  // if(num%5==0){
  //   console.log("number is divisble by 5");
  // }else{
  //   console.log("not divisble by 5");
  // }

  //write a code which can give grade to the student according to their scores
//   let score=92;
// let grade;
//   if(score>=90 && score<=100){
//     grade= "A";
//   }
//  else if(score>=70 && score<=89){
//     grade = "B";
//   }
//  else if(score>=60 && score<=69){
//   grade = "C";
//   }
//   else if(score>=50 && score<=59){
//     grade = "D";
//   }
//   else{
//     grade = "F";
//   } console.log(grade);

//loops IN JS
//three rules in for loop bracket (intilazation,stoping condition , updation)

// for(i=1; i<=5; i++){
   
//   console.log("Hello Fizza!");
// }

//calculate sum of 1 to 10
// let sum=0;
// for(i=1; i<=10;i++){
//   sum=sum+i;
// }
// console.log("sum is",sum);



// //while loop
// // print 0 to 5 numbers
// let i=0;
// while(i<=5){   
//   console.log("i=",i);
//   i++;
// }

//do while loop
//condtion end per hoti ha 1 bar loop zaror chalta kue kay msg pahlay hota show aik bar phr condtion

// let i=1;
// do{
//   console.log("fizza");
//   i++;
// }while(i<=10);

//for-off loop
//string ke value show kerwata one by one

// let str="Fizza";
// let size=0;
// for(let i of str){
// console.log("i=",i);
// size++;
// }console.log("The size of string is =",size);

//for in loop
//object kay liya use hota
//key ke value return kerta like attribute show kerta name, age, cgp,inpass ya show ho ga
// let student={
//   name:"Fizza",
//   age:22,
//   cgp:2.66,
//   inpass: true
// };
// for(let key in student){
// //value  mean show the value of name ,age,cgp,inpass (fizza,22,2.66,true) 
// console.log("key=",key, "value is=", student[key]);  
// }

//print all odd number from 0 to 100
// for(let i=0; i<=100; i++){
//   if(i%2!=0){
//     console.log("The Odd number are=", i);
//   }
// }

//game too ask user to enter a number a match the enter number is right or wrong
// let gamenum= 23;
// let usernum = prompt("Guess a number");
// while(usernum != gamenum) {

//   usernum= prompt("guess again:");
// }
// console.log("Congratulation you entered the right number");

// // strings
// str= "Fizza";     //index start from 0-4

// console.log(str[3]);   //mean print z in name fizza
// //template literals
// let  specialstring=`this is template literals`;
// console.log(specialstring);
// let obj={
//   item: "pen",
//   price: 10

// };
// let output=`item is ${obj.item} and the price is ${obj.price}`;
// console.log(output);


// \n \t  \n is used for next line and \t tab t iss use for tab space
// console.log("hello!\nFizza\tTahir")

// //string methods
// let str="Fizza";
// let newstr= str.toUpperCase();    //all letter are converted in uppercase
// console.log(newstr);


// //remove whitespace
// let str="   FIZZA tahir  ";
// console.log(str.trim());


// //slice method
// str="012345678"
// console.log(str.slice(1, 3));     // 1 say lay ker 3 tak value da do print may 1 2 ahay gay bus ending value include nahi hoti


// //concatination 2 strings ko apus may jorna
// let str1="Fizza";
// let str2="Tahir"          //print ho ker ahay ga FizzaTahir
// console.log(str1.concat(str2));

//replace method pahlay search kerta aik value phr ossay replace kerta

// let str = "hellololo";

// console.log(str.replaceAll("lo", "p"));        //mean  saray lo ko replace ker do p say

// //character method  mean kisi index per kaya character ha ya batatta

// let str = "hello fizza";
// console.log(str.charAt(1));    //1 index per kaya value ha batahay ga mean e

//creating array and printing array
 //let heros=["ironman","Batman","spiderman","wounderwomen","antman","thor"];
// console.log(heros);
// console.log("length =",heros.length);

// //accessing index value
// console.log(heros[1]);   //1 index per jo value ha wo ahh jahay ge

// //changing value in array
// heros[3]="caption america";    //3 index per value change ker do

// //looping in array
// for(let i=0; i<heros.length; i++){     //loop tub tak chalay ga jub tak index heros  ke length say chotta rahta
//   //saray element ko access kernay kay liya
//                                        //saray element screen per show hon gay
//   console.log(heros[i]);
// }

//array method

//tostring mathod     array ko string bana ker show kerta

// console.log(arr);
// console.log(arr.toString());  

//concat  chizo ko jornay may istamal hota

// let marvel_heros=["ironman",,"spiderman","antman","Thor","caption America"];
// let dc_herose=["wounder women","Batmen","supermen","Aquaman"];
// let villans=["Thanos","ultron","loki","red skull"];
// let heros=marvel_heros.concat(dc_herose,villans);
// console.log(heros);              //multiple arrays ko be concat ker saqtay ha

//shift   start say value del kerta 
//let marvel_heros=["ironman",,"spiderman","antman","Thor","caption America"];
// marvel_heros.shift();
// console.log(marvel_heros);

//splice method   
//original array ko change kerta (add,remove,replace)kerta
let marvel_heros=["ironman","spiderman","antman","Thor","caption America"];
console.log(marvel_heros.splice(1,2,"caption marvel"));      //starting index,phr delete kitnay elements kernay ,new elemment add
//1 index per 2 element delete hon gay (spiderman,antman) or index 1 per caption marvel add kero
console.log(marvel_heros);
