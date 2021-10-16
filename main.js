
// let skobi ichida pahan
// var lyuboy,joyda hullas globalni 
// buni for orqali aniqlasak boladi

// 1-m:
// Write a function that returns the sum of two numbers.
// function add(param1, param2) {
//   return param1+param2;
// }



// 2-m:Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// Example:
// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.
// function centuryFromYear(year) {
//     //1 dan 100 gacha 1-asr        // 100 ham kiradi 
//     //101 dan 200 gacha 2-asr
//     //201 dan 300 gacha 3-asr
//     // 301 dan 400 gacha 4-asr
//     // 401 dan 500 gacha 5-asr
//     // ....................
//     // ....................
//     // ....................
    
//     //  va hokazo  //
    
//     //  ...........................
    
    
//     if(year>=1 && year<=100){
//         return 1
//     } 
//     if(year>=101 && year<=200){
//         return 2
//     } 
//     if(year>=201 && year<=300){
//         return 3
//     } 
//     if(year>=301 && year<=400){
//         return 4
//     } 
//     if(year>=401 && year<=500){
//         return 5
//     } 
//     if(year>=501 && year<=600){
//         return 6
//     } 
//     if(year>=601 && year<=700){
//         return 7
//     } 
//     if(year>=701 && year<=800){
//         return 8
//     } 
//     if(year>=801 && year<=900){
//         return 9
//     } 
//     if(year>=901 && year<=1000){
//         return 10
//     } 
//     if(year>=1001 && year<=1100){
//         return 11
//     } 
//      if(year>=1101 && year<=1200){
//         return 12
         
//     }
//       if(year>=1201 && year<=1300){
//         return 13
          
//     }
//       if(year>=1301 && year<=1400){
//         return 14
          
//     }  
//     if(year>=1501 && year<=1500){
//         return 15
//     } 
//      if(year>=1501 && year<=1600){
//         return 16
         
//     } 
//      if(year>=1601 && year<=1700){
//         return 17
         
//     } 
//      if(year>=1701 && year<=1800){
//         return 18
         
//     } 
//      if(year>=1801 && year<=1900){
//         return 19
        
//     } 
//      if(year>=1901 && year<=2000){
//         return 20
         
//     } 
//      if(year>=2001 && year<=2100){
//         return 21
//     } 
    
    
// }



// 3-m:
// Given the string, check if it is a palindrome.
// Example
// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.
// function checkPalindrome(inputString) {
//     return inputString == inputString.split('').reverse().join('');   
// }



// 4-m:
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example:
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.
// function adjacentElementsProduct(inputArray) {
//    var a=[];
//   for(let i=0;i<inputArray.length-1;i++){
//       a[i]=inputArray[i]*inputArray[i+1];
//   }
//   let max=a[0];
//   for(let i=0;i<a.length;i++){
//       if(a[i]>=max){
//           max=a[i];
//       } 
//   }
//   return max;
// }





// 5-m:
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
// Example
// For n = 2, the output should be
// shapeArea(n) = 5;
// For n = 3, the output should be
// shapeArea(n) = 13.
// function shapeArea(n) {
//     var a=[]
//     a[1]=1
//     // let a2=5
//     // let d1=0
//     var d=[]
//     d[1]=0
//     for(let i=2;i<=n;i++){
//         d[i]=d[i-1]+4;
//     }
    
//     for(let i=2;i<=n;i++){
//         a[i]=a[i-1]+d[i]
//     }

//     // console.log(a[n]);
//     return a[n]
    
    
    
// }




// 6-m:
// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example
// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.
// Ratiorg needs statues of sizes 4, 5 and 7.
// function makeArrayConsecutive2(statues) {
//     max=statues[0];
//     min=statues[0]
//     for(let i=0;i<statues.length;i++){
//         if(statues[i]>max){
//             max=statues[i];
//         }   
//         if(statues[i]<min){
//             min=statues[i];
//         }         
//     }
//     return max-min -(statues.length-1) ;
// }





// 7-m:
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example
// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]



// function almostIncreasingSequence(sequence) {
//     var found = 0;
//     for (var i=0;i<sequence.length;i++) {
//       if(sequence[i] <= sequence[i-1]) {
//         found++;
//         if(found > 1) return false; 
//         if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1])          return false; 
//       }
      
//     } 
//     return true;
// }





// 8-m:
// Berilgan n va k uchun n sonidan boshlanuvchi k ta “tug‘ma sonlar“         ketmaketligi
// hosil qilinsin. Ketma-ketlikning hadi oldingi hadga uning raqamlari
// yig‘indisini qo‘shish orqali hosil bo‘ladi. Masalan, ketma-ketlik hadi 13 bo‘lsa
// undan keyingi son 13+(1+3)=17 bo‘ladi va hokazo.
// const funk = (n, k) => {
//   var arr = [];
//   arr[0] = n;
//   for (let i = 1; i < k; i++) {
//     n = arr[i - 1];
//     arr[i] = sum1(n) + n;
//     console.log(arr[i]);
//   }

//   function sum1(n) {
//     let s = 0;
//     let num = (n).toString().length
//     for (let j = 0; j < num; j++) {
//       q = n % 10;
//       s = s + q;
//       n = parseInt(n / 10);
//       if (j == num - 1) { return s }
//       // console.log(s);
//     }
//     return s;
//   }
// }

// funk(1345, 50)







//      9-M:  Ikki xonali sonlar ketma-ketligining (1011121314..9899) k-o‘rindagi (1<=k<=180) raqami aniqlansin. 10 11 12 13 14 15 16
// const funk=(k) => {
//   let n=180,arr=[],j=0,str="";
//   for(let i=10;i<=n/2;i++){
//     arr[j]=i;
//     j++;
//   }
//   for(let i=0;i<j;i++){
//     str=str+arr[i]
//   }
//   console.log(+str[k]);
// }
// funk(5);




// 10-m:
// // // // // // // //       2-M: 10 sonining darajalaridan tuzilgan ketma-ketlikning (101001000...)
// // // // // // // //       k - o‘rindagi raqami aniqlansin.
// // // // // // // // */
// const funk=(n,k) => {
//     // n buyerda 10-ning nechinchi darajasini hisoblashimiz kkligini bildiradi 
//   var a=[]
//   let str=""
//   for(let i=1;i<=n;i++){
//     a[i]=10**i;
//   }
//   for(let i=1;i<=n;i++){
//     str=str+a[i];
//   }

//   console.log(parseInt(str)); // 10 sonini n-inchi darajasi
//   console.log(parseInt(str[k])); // shu ketma-ketlikning k-inchi hadi
// }
// funk(100,5)






// 11-m:
// n dan 2n (n>2) gacha bo’lgan sonlar ichidan “egizaklar” jufti chop etilsin.
// (Ikkita tub sonlar ”egizak” deyiladi, agarda ular bir-biri bilan 2 ga farq qilsa,
// masalan: 41 va 43 sonlari). 
// function func(n) {
//   let k = 0;
//   var a = [];
//   for (let i = n; i <= 2 * n; i++) {
//     let count = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j == 0) {
//         count++;
//       }
//     }
//     if (count == 2) {
//       a[k] = i;
//       k++;
//     }
//   }
//   let str="";
//   for(let i=1;i<=k-1;i++){
//     if (a[i]-a[i-1]==2) {
//       if(i==k-1){
//       str=str+ +a[i-1] + +a[i];
//       } else{
//         str=str+ +a[i-1] + +a[i]+",";
//       }
//     }
//   }
// console.log(str.split(","));
// }
// func(10);

// // // // // // // 11,13,17,19 =>10 dan  20 gacha bolgan tub sonlar
// // // // // // // [ [11,13] , [17,19] ]





// 12-M: 
// //     AABBBCMDDBAA
// //     [ 2A , 3B , C, M , 2D , B , 2A ]
// // */
// // str = "AABBBCMDDDBAAA" ;
// // var array = [];
// // let count;
// // let m=0;
// // for (let i = 0; i < str.length; i+=m) {
// //     a = str[i];
// //     count = 0;
// //     m=0;
// //     let l=true;
// //     for (let j = i; l != false; j++) {
// //         if (a == str[j]) {
// //             count++;
// //             m++;

// //         } else {
// //             if(count!=1){
// //                 array.push(`${count}${a}`);
// //             } else {
// //                 array.push(a);
// //             }
// //             l=false;
// //         }

// //     }
// // }
// // console.log(array.join("+"));





// 13-m:
// input=[ 1, 2, 3 ,4 ,5, 6, 7];
// output=[ 2, 4, 6, 1, 3, 5, 7];
// dublicatelarini o'chirvorish kerak; 
// */
// nums=[1,,3,2,9,3,4,5,6,7]
// var arr=[]
// let a=nums.filter(function(value,index){
//     if (value%2==0) {
//        arr.push(value);
//         return arr
//     }

// })
// a.push(nums.filter(function(value){
//     if (value%2!=0) {
//         arr.push(value);
//         return arr;
//     }
// }))



// function fun(str) {
//     var arr = []
//     var k=0;
//     for (let i = 0; i < str.length; i++) {
//       a = str[i];
//       let res = 0;
//       if (!arr.includes(a)) {
//               arr.push(a);
//            }

//       }
//   console.log(arr);
//   }

//   fun(arr)




// 14-m:
/*
    n ta haqiqiy sonlardan iborat ketma-ketlik berilgan. Toq
    o‘rinda turgan sonlar maximumi va juft o‘rindagilarning minimumi topilsin.
*/
// var arr=[11,5,8,9,44,6,3,8]
// var a=[] // 11,8,44,3
// var b=[] // 5,9,6,8
//     arr.forEach((value,index)=>{
//         if (index%2===0) {
//             a.push(value);
//         } else {
//             b.push(value);
//         }
//     })

//         max=a[0];
//         a.map((value)=>{
//             if (value>max) {
//                 max=value;
//             }
//             // return max
//         })
//         min=b[0];
//         b.map((value)=>{
//             if (min>value) {
//                 min=value;
//             }
//             // return min
//         })
//         console.log(min,"____--_______" ,max);






// 15-m:
/*
    Berilgan n natural sondagi turli raqamlar miqdori aniqlansin.
*/
// let n=123445657879;
// const belgisoni=(numarr)=>{
//     let n=numarr.toString().split("");
//     var arr=[];
//     arr[0]=n[0];
//     for(let i=1;i<n.length;i++){
//         if (n.includes(n[i]) && !(arr.includes(n[i]))) {
//             arr.push(n[i]);
//         } 
//     }
//     console.log(parseInt(arr.join("")));
// }
// belgisoni(123445657879);








// 16-m:
// Butun qiymat qaytaruvchi fibonachi Fib(n) funcini hosil qiling .
// Bu func fibonachi sonlarining n-chi elementini qaytarsin;
// 0,1,1,2,3,5,8,13,21,34,55,89,144,

// function Fibon(n,num) {
//     var a=[]
//     a[1]=1,a[2]=1;
//     for(let i=3;i<n;i++){
//         a[i]=a[i-2]+a[i-1];
//         if (i===num) {
//             console.log(a[i]);
//         }
//     }

// }
// Fibon(11,5);







// 17-m:

/*
Ikki qator berilgan bo'lsa, ular orasidagi umumiy belgilar sonini toping.
Misol uchun
s1 = "aabcc"va s2 = "adcaa"
chiqish bo'lishi kerak
commonCharacterCount(s1, s2) = 3.
Stringlar 3 ta umumiy belgilarga ega - 2 ta "a" va 1 ta "c".
*/

// function commonCharacterCount(s1, s2) {
//     // var s1 = s1.split("");
//     // var s2 = s2.split("");
//     let count = 0;
//     if (s1.length < s2.length) {
//         for(let i=0;i<s1.length;i++){
//             let k=0;
//             while(k!==s1.length){
//                 k++;
//                 if (s2.includes(s1.substr(i,k))) {
//                     count++;
//                     break
//                 } 
//             }
//         }
//         console.log(count);
//     }
// }
// s1="aabcaa"
// s2= "xyzbaac"
// commonCharacterCount(s1, s2)







// 18-m:
/*
#savol
    Mashhur bo'lganidan so'ng, CodeBots birgalikda yangi binoga ko'chishga qaror qildi. Har bir xonaning narxi turlicha, ba'zilari esa tekin, lekin hamma bepul xonalar juda xavfli degan mish -mishlar bor! CodeBots juda xurofotli bo'lgani uchun, ular bepul xonalarning hech birida yoki bepul xonalarning ostidagi xonalarda qolishdan bosh tortadilar .
    matrixElementsSum degan funksiya qiling uning parametri sifatida matrix kirib keladi
    matrixning  har bir qiymati xona xarajatlarni ifodalaydi  sizning vazifangiz CodeBots uchun mos bo'lgan barcha Xonalar umumiy summasini qaytarish
    Misol Uchun
    matrix= [
              [0, 1, 1, 2],
              [0, 5, 0, 0],
              [2, 0, 3, 3]
            ]

    Natija  bo'lishi kerak:
    matrixElementsSum(matrix) = 9.
*/

// function matrixElementsSum(matrix) {
//     var a1 = matrix[0];
//     var a2 = matrix[1];
//     var a3 = matrix[2];
//     var a = []
//     let sum = 0;
//     for (let i = 0; i < a1.length; i++) {
//         if (a1[i] != 0) {
//             a.push(a1[i]);
//             if (a2[i] != 0) {
//                 a.push(a2[i], a3[i])
//             }
//         }
//     }
//     for (let i = 0; i < a.length; i++) {
//         sum += a[i];
//     }
//     return sum;
// }


// matrix = [ [0, 1, 1, 2],  [0, 5, 0, 0], [2, 0, 3, 3] ]
// matrix=[[1,1,1], [2,2,2], [3,3,3]]
// matrix=[[1,0,3], [0,2,1], [1,2,0]]
// matrix=[[0]]
// console.log(matrixElementsSum(matrix));



// 19-m:

/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

    {Odamla parkda ocheredda turibdi ,ular orasida daraxtlar ham bor,daraxtlar qimirlamaydi.Siznning vazifangiz odamlarni bo'ylari bo'yicha o'sish tartibida sortirovka qilish (daraxtlarni qimirlamaydi .}
    Example:
    buyerdagi -1 daraxtni bildiradi  qogan sonlar esa odamlarni bo'ylari balandligi:
    For a = [-1, 150, 190, 170, -1, -1, 160, 180], 
    the output should be
    sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

*/
// function sortByHeight(a) {
//     var arr=[]
//     for(let i=0;i<a.length;i++){
//         if(a[i]!=-1){
//             arr.push(a[i]);
//         }
//     }
//     arr.sort((a,b)=>a-b);
//     let j=0
//     for(let i=0;i<a.length;i++){
//         if(a[i]!=-1){
//             a[i]=arr[j];
//             j++;
//         } 
//     }
//     return a
// }
// a=[-1, 150, 190, 170, -1, -1, 160, 180]
// console.log(sortByHeight(a)); 






// 20-m:

// const obj={
//     id:1,
//     model:"nexia",
//     narxi:35000
// }
// console.log(
// Object.entries(obj)              // entries objectni arrayga aylantirib beeradi
// );

// Object.freeze(obj)     // freeze bolganda object muzlaydi uni valuelarini o'zgartirolmemz
// obj.model="sdj"
//  obj.id=43

// Object.seal(obj)     // seal bolganda object muzlaydi uni valuelarini o'zgartirolamz
// obj.id=2

// console.log(obj);





// 21-m:
// object ustida eng kop ishlatiladigan amallar

// let Cars = [
//     {
//         id: 1,
//         model: "nexia",
//         color: "oq",
//         otkuchi: 105
//     },
//     {
//         id: 2,
//         model: "spark",
//         color: "mokriy",
//         otkuchi: 75
//     },
//     {
//         id: 3,
//         model: "tico",
//         color: "qizil",
//         otkuchi: 65
//     },
//     {
//         id: 4,
//         model: "damas",
//         color: "qora",
//         otkuchi: 60
//     },
//     {
//         id: 5,
//         model: "malibu",
//         color: "qora",
//         otkuchi: 215
//     },
//     {
//         id: 6,
//         model: "mercedes",
//         color: "rgb",
//         otkuchi: 400,
//     }
// ]

// const updatebyId=(idNum,obj)=>{
//     Cars.map((value)=>{
//         if (value.id===idNum) {
//             value=obj;
//             console.log(value);
//         } else {
//             console.log(value);
//         }
//     })
// }
// updatebyId(3,{id:100,model:"jentra",color:"oppoq",otkuchi:108});




// 1-m:
// const sortbyModel=()=>{
    //     console.log(
//         Cars.sort((a,b)=>{
    //             return a.model.localeCompare(b.model);
//         })
//     );
// }

// sortbyModel();





//2-M:
// const sortbyId=()=>{
//     console.log(
//         Cars.sort((a,b)=> a-b)
//     );
// }
// sortbyId();



//3-M:
// const deletebyId=(idNum)=>{
//     Cars.map((car)=>{
//         if (car.id===idNum) {
//             delete car.id;
//             // console.log(car);
//         } else {
//             console.log(car);
//         }
//     })
// }
// deletebyId(6);



