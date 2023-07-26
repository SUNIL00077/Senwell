// let fruits=['banana','apple','mango','pineapple'];
// console.log(...fruits)                               //spread operator used for spread the values or remove the string

// let fruits=['banana','apple','mango','pineapple'];       //spred operator used for merge two or more arrays
// let newfruits=['kiwi','orange']
// console.log(...fruits,...newfruits)
      
//  let newfruits=['kiwi','orange']                           //spred operator used for merge two or more arrays
// let fruits=['banana','apple',...newfruits,'mango','pineapple'];
//  console.log(...fruits)

 let fruits=['banana','apple','mango','pineapple'];
   newfruits=   [...fruits]                               //do not replace the main variables values
newfruits.push('kiwi')
console.log(fruits)