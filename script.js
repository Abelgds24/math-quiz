

let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function(e){

    let questions = [
        {
            prompt: "Whats 2 + 2\n(A) 5\n\(b) 4\n(c) 6",
            answer: "b"
    
        },
    
        {
            prompt: "What is 3!\n(a) 5\n\(b) 3\n(c) 6",
            answer: "c"
        },
    
        {
            prompt: "How do you find the velocity from an x-t graph?\n(a) the slope\n\(b) the area\n(c) the circumfrence",
            answer: "a"
        },
    
        { 
            prompt: "What is 10,000 divided by 2?\n(a) 60\n\(b) 50000\n(c) 5000",
            answer: "c"
        },
    
        {
            prompt: "What is Abels grade in this class?\n(a) 100%\n\(b) 99%\n(c) 97%",
            answer: "a"
        }
    ]
    
    let score = 0
    
    
    for(let i=0; i < questions.length; i++){
        let response = window.prompt(questions[i].prompt);
        if(response == questions[i].answer){
            score++
            document.querySelector('.score').innerHTML = score
            alert("Correct")
    
        }
        else{
            alert("Wrong!")
        }
    }

    
    alert("you got " + score + "/" + questions.length)
    

}

)


let myBtn2 = document.getElementById("myBtn2");

myBtn2.addEventListener("click", function(e){

let questions = [
    {
        prompt: "What is 892923 + 4\n(A) 72\n\(b) 11\n(c) 4",
        answer: "a"

    },

    {
        prompt: "The notation of the integral x is equal to the derivative of what?\n(a) Huh\n\(b) Bro what\n(c) Saturday",
        answer: "c"
    },

    {
        prompt: "Imagine a graph...what is the limit\n(a)  DNE\n\(b)  -inf\n(c)  inf",
        answer: "b"
    },

    { 
        prompt: "What comes next in this sequence: 4, 288, 12199143, ???\n(a) d\n\(b) f\n(c) g",
        answer: "c"
    },

    {
        prompt: "Alexander the II father was\n(a) Alexander the I%\n\(b) Andrew Heine\n(c) Todd",
        answer: "a"
    }
]


    
for(let i=0; i < questions.length; i++){
    let response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++
        document.querySelector('.score').innerHTML = score
        alert("Correct")

    }
    else{
        alert("Wrong!")
    }
}


alert("you got " + score + "/" + questions.length)

})



let myBtn3 = document.getElementById("myBtn3");

myBtn3.addEventListener("click", function(e){

let questions = [
    {
        prompt: "Who created Math\n(A) The first ever drunk person\n\(b) Ed Stern\n(c) Max Froomkin",
        answer: "c"

    },

    {
        prompt: "2+2/2+2-2+2/2+22+2+2!\n(a) 4\n\(b) 0\n(c) 7",
        answer: "c"
    },

    {
        prompt: "Kanyes 3rd album was hit, what was it\n(a)  Late Registration\n\(b)  Graduation\n(c)  Donda",
        answer: "b"
    },

    { 
        prompt: "Lebron was drafted at what age\n(a) 16\n\(b) 17\n(c) 18",
        answer: "c"
    },

    {
        prompt: "This quiz was dun\n(a) Yes\n\(b) Yes again\n(c) No",
        answer: "b"
    }
]

for(let i=0; i < questions.length; i++){
    let response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++
        document.querySelector('.score').innerHTML = score
        alert("Correct")

    }
    else{
        alert("Wrong!")
    }
}


alert("you got " + score + "/" + questions.length)


})












// let btnRandom = document.querySelector('button');
// let result = document.querySelector('h1');

// // Questions
// let q1 = "What is the Capital of the U.S" 
// let q2 =  "How many presidents are there?"
// let q3 = "What is the Square root of 4"
// let q4 = "What is the color of an emerald?"
// let q5 = "What is something you hit with a hammer"
// let q6 = "What's the name of a place you go to see lots of animals"
// let q7 = "Whose nose grew longer every time he lied?"
// let q8 = "How much wood could a woodchuck chuck?"
// let q9 = "What is 3!"
// let q10 = "x3+y3+z3=k?"


// let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
// // "What is the color of an emerald?", 
// //  "What is something you hit with a hammer?",  
// //  "What's the name of a place you go to see lots of animals?", 
// //   "Whose nose grew longer every time he lied?"]


// function getRandomNumber (min, max) {
//     let s1 = max - min + 1;
//     let s2 = Math.random() * s1
//     let result = Math.floor(s2) + min;


// return result;

// }



// btnRandom.addEventListener('click', () => {

//     let index = getRandomNumber(0, questions.length-1);
//     result.innerText = questions[index];

// })


// let counter = 1001
// function decrement() {
//     counter--
//     document.querySelector('.timer').innerHTML = counter

//     if (counter === 0){
//         alert('You ran out of time!')
//         counter = 1001
//     }


//     if (counter === 6){
//         let correctAnswer2 = 4 
//         let answer = prompt('2 + 2')
//         console.log(answer)
    
//         if (parseInt(answer) === correctAnswer2){
//             alert('NICE')
//         score++
//         document.querySelector('.score').innerHTML = score
//         }
//     }

// }




// setInterval(decrement, 1000);

// // let correctAnswer = 150
// // let answer = prompt('30 * 5', '5 + 5')


// // console.log(answer)



