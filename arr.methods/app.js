// const arr = ["lankaran", "baki", "lerik", "astara"]
//tapsiriq 1
// const arr1 = arr.shift();
// console.log(arr); 

//tapsiriq 2
// console.log(arr.reverse()); 

//tapsiriq 3


// let arr2;
// function sonluq(element) {
//     for (i = 0; i < arr.length; i++) {


//         arr2 = arr.map(
//             (element, i) => {
//                 if (i % 2 == 1) {
//                     return element + "AZE"

//                 } else {
//                     return element
//                 }


//             })



//     }
//     return arr2
// }

// console.log(sonluq());

//tapsiriq4

// let arr1 = arr.forEach((myFunction)=>console.log(myFunction))


//tapsiriq 5

// console.log(arr.join(""));

//tapsiriq 6


// let result;
// function uzunluq(){
//     result = arr.length

//     return result
// }
// console.log(uzunluq());


// tapsiriq 7
// let arr2


// arr.forEach((element, i) => {
//     if (i % 2 == 0) {
//         console.log(element)
//     }

// })

// tapsiriq 8 

// arr.forEach((element , i)=>{
//     if(element.length> 6){
//         console.log(element);
//     }
// })


//tapsiriq 9


// const arr2 = [] ;
// for(i=0 ; i<arr.length ; i++){
//     arr2.push(arr[i].substring(0 , 3))  
// }
// console.log(arr2);

//tapsiriq 10

// const arr2 = []

// for(i=0 ; i<arr.length ; i++){
//     if(arr[i][0]!=="l"){
//         arr2.push(arr[i])
//     }
// }

// console.log(arr2);

//tapsiriq 11

// arr[1]=["mandalin" , "limon"]

// console.log(arr);



// let students = [
//     {
//         ad: "Senuber",
//         soyad: "Besirzade",
//         yas: "23",
//         kesir: false,
//         hobbies: ["gitara", "resm", "mahni"],
//     },
//     {
//         ad: "Zeyneb",
//         soyad: "Xanizovade",
//         yas: "20",
//         kesir: false,
//         hobbies: ["musiqi", "gezmek"],
//     },
//     {
//         ad: "Yusif",
//         soyad: "Memmedov",
//         yas: "28",
//         kesir: false,
//         hobbies: ["xarici dil", "alqoritm"],
//     },
//     {
//         ad: "Cavid",
//         soyad: "Zeynalov",
//         yas: "22",
//         kesir: false,
//         hobbies: ["seir yazmaq", "xarici olkeler"],
//     },
//     {
//         ad: "Yusif",
//         soyad: "Tagiyev",
//         yas: "23",
//         kesir: false,
//         hobbies: ["oyun", "futbol", "voleybol"],
//     },
//     {
//         ad: "Adil",
//         soyad: "Sefizade",
//         yas: "21",
//         kesir: false,
//         hobbies: ["futbol", "voleybol", "at capmaq", "tarixi faklarla maraqlanmaq"],
//     },
//     {
//         ad: "Adil",
//         soyad: "Mediyev",
//         yas: "28",
//         kesir: false,
//         hobbies: ["kofe duzeltmek", "jazz"],
//     },
//     {
//         ad: "Vasif",
//         soyad: "Ejderov",
//         yas: "20",
//         kesir: true,
//         hobbies: ["futbol oynamaq", "masin surmek"],
//     },
// ];
// tapsiriq 2
//   students.forEach(x=>console.log(x.ad + " " +x.soyad));

//tapsiriq 3

// students.forEach(x => {
//     if (x.yas > 24) {
//         console.log(x.ad + " " + x.soyad + " " + x.yas + " " + "yas")
//     }
// })

//tapsiriq 4

// students.forEach(x=> {
//     if(x.kesir===true){
//         console.log(x.ad + " " + x.soyad);
//     }
// })


//tapsiriq 5

// for (let i = 0; i < students.length; i++) {
//     for (let j = i + 1; j < students.length; j++) {
//         if (students[i].ad == students[j].ad) {
//             console.log(students[i].ad + " " + students[i].soyad)

//         }
//     }

// }


let price = [
    {
    "id": 2,
    "description": "Sweet and savory sauces relishes spreads and seasonings",
    "name": "Condiments"
    },
    {
    "id": 1,
    "description": "Soft drinks coffees teas beers and ales",
    "name": "Beverages"
    },
    {
    "id": 3,
    "description": "Desserts candies and sweet breads",
    "name": "Confections"
    },
    {
    "id": 4,
    "description": "Cheeses",
    "name": "Dairy Products"
    },
    {
    "id": 5,
    "description": "Breads crackers pasta and cereal",
    "name": "Grains/Cereals"
    },
    {
    "id": 6,
    "description": "Prepared meats",
    "name": "Meat/Poultry"
    },
    {
    "id": 7,
    "description": "Dried fruit and bean curd",
    "name": "Produce"
    },
    {
    "id": 8,
    "description": "Seaweed and fish",
    "name": "Seafood"
    }
    ]


//emil m tapsiriq 1

// price.forEach((x)=>console.log(x.name.toUpperCase()))


//emil m tapsiriq 2

task2 = price.filter((x)=>x.id>5)
console.log(task2);


    
   