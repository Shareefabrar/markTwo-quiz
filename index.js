var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0


quizQuestions = [
  {
    question: `Which Marvel Writer once worked for DC comics? 
    a) Stan Lee
    b) Jack Kirby
    c) Tom Taylor
    `,
    answer: "a"
  },
  {
    question: `What name is Shazam also sometimes known by? 
    a) Kid Wonder
    b) Captain Marvel
    c) Magnificent One
    `,
    answer: "b"
  },
  {
    question: `Which DC villan didn't originate in comics?
    a) Polka-dot Man
    b) Harley Quinn
    c) Peacemaker
    ` ,
    answer: "b"
  },
  {
    question: `Which top DC superhero was meant to have blonde hair but instead has brown? 
    a) Aquaman
    b) The Flash
    c) Batman
    `,
    answer: "c"
  },
  {
    question: `Which among the Justice League members was supposed to first date Wonder Woman? 
    a) Martian ManHunter
    b) Green Lantern
    c) Superman
    `,
    answer: "b"
  },
  {
    question: `Which writing font was inspired by DC? 
    a) Comic Sans
    b) Arial Black
    c) Roboto
    `,
    answer: "a"
  },
  {
    question: `Did DC ever make a character by combining the powers of Batman and Wolverine. If yes, what was it called? 
    a) Wraith
    b) DOCTOR STRANGEFATE
    c) Dark Claw
    `,
    answer: "c"
  },
  {
    question: `Which superhero messes the most with the multiversal timelines? 
    a) The Flash
    b) Batman
    c) Superman
    `,
    answer: "a"
  },
  {
    question: `In Lex Luthor's original story, who was held responsible for his baldness? 
    a) Superman
    b) Louis Lane
    c) Doctor Fate
    `,
    answer: "a"
  },
  {
    question: `Which villain broke Batman's back and left him wheelchair-bound? 
    a) Bane
    b) Joker
    c) Dr. Hugo
    `,
    answer: "a"
  },

]

function Quiz(question, answer) {
  var userAnswer= readlineSync.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    score +=1;
    console.log(chalk.blue.bold("Correct", score))
  }
  else{
    console.log(chalk.red("Wrong", score))
  }
}

// for(i=0; i<quizQuestions.length; i++){
//   var quest = quizQuestions[i]
//   Quiz(quest.question, quest.answer)
// }

var answerOne = readlineSync.question(`Would you like to test your knowledge on DC Comics?
`)

if(answerOne.toUpperCase() === "yes".toUpperCase()){
  for(i=0; i<quizQuestions.length; i++){
  var quest = quizQuestions[i]
  Quiz(quest.question, quest.answer)
}
} else{
  console.log(chalk.bgBlue.bold("Hold on while we find the right quiz for you."))
}

if(score>9){
  console.log("You scored full marks");
}else{
  console.log(`Your score is: ${score}`);
}