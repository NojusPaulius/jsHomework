//Pirma uzduotis

// let booksCatalog =[
//     [
//         {
//             ISBN: "A15AW8",
//             releaseYear: "2024",
//             name: "The Midnight Library",
//             pageAmmount: 250,
//         },

//         {
//             ISBN: "A18AW8",
//             releaseYear: "2024",
//             name: "The Shadow of the Wind",
//             pageAmmount: 300,
//         },
    
//         {
//             ISBN: "A35AW8",
//             releaseYear: "2005",
//             name: "The Night Circus",
//             pageAmmount: 350,
//         },
    
//         {
//             ISBN: "A25AW8",
//             releaseYear: "2005",
//             name: "A Game of Thrones",
//             pageAmmount: 400,
//         },
    
//         {
//             ISBN: "A95AW8",
//             releaseYear: "2005",
//             name: "The Alchemist",
//             pageAmmount: 500,
//         }

//     ],

//     [
//         {
//             ISBN: "A46AW8",
//             releaseYear: "2005",
//             name: "Pride and Prejudice",
//             pageAmmount: 100,
//         },
    
//         {
//             ISBN: "A57AW8",
//             releaseYear: "2005",
//             name: "The Catcher in the Rye",
//             pageAmmount: 200,
//         },
    
//         {
//             ISBN: "A53AW8",
//             releaseYear: "2005",
//             name: "Harry Potter and the Philosopher's Stone",
//             pageAmmount: 500,
//         },
    
//         {
//             ISBN: "A20AW8",
//             releaseYear: "2005",
//             name: "The Hunger Games",
//             pageAmmount: 700,
//         }
//     ],
//     [
//     {
//         ISBN: "A9AW8",
//         releaseYear: "2005",
//         name: "The Book Thief",
//         pageAmmount: 800,
//     },

//     {
//         ISBN: "A15AW5",
//         releaseYear: "2005",
//         name: "The Road",
//         pageAmmount:450,
//     },

//     {
//         ISBN: "A15AW2",
//         releaseYear: "2005",
//         name: "Moby-Dick",
//         pageAmmount: 475,
//     }
//     ]
// ]

// booksCatalog[0].categoryName = "Sci-fi";
// booksCatalog[1].categoryName = "Action";
// booksCatalog[2].categoryName = "Documentary";

// for(let category of booksCatalog){
//     console.log(`${category.categoryName} has ${category.length} books`)
    

//     for(book of category){
//         if (book.releaseYear == 2024){
//             book.releaseYear = book.releaseYear += "(Nauja Knyga)"
//         }
//         console.log(" ")
//         for(let bookProperty in book){
//             console.log(`${bookProperty}: ${book[bookProperty]}`)
//         }
// }
// };









// Antra uzduotis

// let finalExam = false
// let examCount = prompt("iveskite egzaminu kieki")
// let examList = [];
// let examMark = 0
// for(let i=0; i<examCount; i++){
//     examName = prompt(`iveskite ${i+1}-o egzamino rezultata`);
//     examList.push(examName);
// }

// for(i = 0; i < examList.length; i++){
//     console.log(examList[i])
//     examMark += Number(examList[i])
//     console.log(examMark)
// } 
// examMark = examMark / examList.length
// console.log(examMark)
// let mark = examMark



// if(finalExam === true){
//     if(mark >= 90){
//     console.log("gavote A+")
//     }
//     else{
//         console.log("negavote A+")
//     }
// }
// else{
//     if(mark >= 89){
//     console.log("gavote A+")
//     }
//     else{
//         console.log("negavote A+")
//     }
// } 








//trecia

// let number = prompt("iveskite skaiciu")

// if(number >= 40 && number <= 10000){
//     console.log("skaicius yra tarp 40 ir 10000")
// }
// else{
//     console.log("skaicius netinkamas")
// }








//ketvirta

let lineOfText = "I hope you are having a nice day"

if(lineOfText[0].toLowerCase() == "p" || lineOfText[lineOfText.length-1].toLowerCase() == "p"){
    lineOfText = lineOfText.replace(/^./, "")
    lineOfText = lineOfText.trim()
    lineOfText = lineOfText.replace(/.$/, "")
    console.log(lineOfText)
}
else{
    console.log(lineOfText)
}