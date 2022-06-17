// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { join } = require("path")

// const { exportAllDeclaration } = require("@babel/types")
// const { isTypedArray } = require("util/types")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

  // create a describe it test that will have the expected output of ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

  describe("joined", () => {
    it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
      const people = [
        { name: "ford prefect", occupation: "a hitchhiker" },
        { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
        { name: "arthur dent", occupation: "a radio employee" }
      ]
      expect(joined(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    })
  })


    // I failed 
    // FAIL  ./code-challenges.test.js
    // joined
    //   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
  
    // ● joined › takes in an array of objects and returns an array with a sentence about each person with their name capitalized
  
    //   ReferenceError: joined is not defined

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.

// input:const people = [
        // { name: "ford prefect", occupation: "a hitchhiker" },
        // { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
        // { name: "arthur dent", occupation: "a radio employee" }
// create a function called join
// create an empty array 
// the function will iterate through the array
// return each element with string interpolation 
// output:["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

  // const joined = (join) => {
  //   let arr = `${this.name} is ${this.occupation}`
  //   return arr
    // for(let i =0; i < join.length; i++){
    //    join[i] = `${join.name} is ${join.occupation}`

  // }

  // const joined = (join) => {
  //   let arr = join.map(value => {
  //    return `${value.name} is ${value.occupation}`
  //    })
  //    const str = arr.join(" ")
  //    const upper = str.charAt(0).toUpperCase() + str.substring(1)
  //    const upp = upper.split(" ")
    
  //     return upp
      
  // }










// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

  // create a describe it that expects the output of and array with remainder numbers

    // describe('num', () => { 
    //   it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    //     const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    //     const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    //     expect(num(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    //     expect(num(hodgepodge2)).toEqual([ 2, 1, -1 ])
    //   })
    // })


    // I failed 
    // FAIL  ./code-challenges.test.js
    // num
    //   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
  
    // ● num › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
  
    //   ReferenceError: num is not defined

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.

  // input:// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
          // const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// create a function called num
// function will iterate through the array and  only return numbers
// the returned numbers will be moduloed by 3
// output:[ 2, 0, -1, 0 ]
        // [ 2, 1, -1 ]

          // const num = (numbers) => {
          //   let arr = numbers.filter(value =>{
          //     if(value === 'number'){
          //         return value % 3
          //     }
          //   })
          //   return arr 
          // }

          // - Array [
          //   -   2,
          //   -   0,
          //   -   -1,
          //   -   0,
          //   - ]
          //   + Array [] . idk where this empty array is coming from 






// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

          // create a describe it with the expect of all the numbers in the array summed after being cubed 

          describe("cubed", () => {
            it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
              const cubeAndSum1 = [2, 3, 4]
              const cubeAndSum2 = [0, 5, 10]
              expect(cubed(cubeAndSum1)).toEqual(99)
              expect(cubed(cubeAndSum2)).toEqual(1125)

            })
          })


          // I failed 
          // FAIL  ./code-challenges.test.js
          // cubed
          //   ✕ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
        
          // ● cubed › takes in an array of numbers and returns the sum of all the numbers cubed
        
          //   ReferenceError: cubed is not defined

// const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.

    // input:const cubeAndSum1 = [2, 3, 4]
          // const cubeAndSum2 = [0, 5, 10]
    // create a function called cubed 
    // the function will 


          const cubed = (cube) => {
            let sum = 0
            for(let i = 0; i < cube.length; i++){
              sum += cube[i] * cube[i] * cube[i] 
            }
            return sum
          }

          // I passed 
        //   PASS  ./code-challenges.test.js
        //   cubed
        //     ✓ takes in an array of numbers and returns the sum of all the numbers cubed (2 ms)
        
        // Test Suites: 1 passed, 1 total
        // Tests:       1 passed, 1 total
        // Snapshots:   0 total
        // Time:        0.388 s
        // Ran all test suites.
        // ✨  Done in 1.32s.

