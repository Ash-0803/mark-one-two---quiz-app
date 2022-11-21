const rl = require('readline-sync');
// function input(){  
//   let yourName = rl.question("what is your pet name ");
//   let rightAns = "abhijeet";

//   check(yourName,rightAns)
// }
// let check=(yourName,rightAns)=>{
//   if (yourName == rightAns){
//     console.log("You answered correctly");
//   }
//   else console.log("You answered incorrectly")
// }

// input();

//  =================================================
// let string = '';

// for(let i=1;i<6;i++){
//   for(let j=0;j<i;j++){
//     string += "*";
//   }
//   string += "\n";
// }

// console.log(string)

//  =================================================
let questions = [
  {
    que: "How many Olympic rings are there? ",
    ans: "five"
  },
  {
    que: "How many legs does a lobster have? ",
    ans: "ten"
  },
  {
    que: "Which type of fish is Nemo? ",
    ans: "clownfish"
  },
  {
    que: "Are worker bees male or female? ",
    ans: "female"
  },
  {
    que: "Which color is an emerald?  ",
    ans: "green"
  }
];

function check(userans, ans) {
  if (ans == userans) {
    console.log("right ans");
    score += 1;
  }
  else {
    console.log("wrong ans, right answer is: |",ans,"|");
    score -= 1;
  }
  console.log("Your Score: ", score,'\n');
}

let allScore = [];
let will = true;
let score = 0;

let levels = {
  1: 10,
  2: 20,
  3: 30,
  4: 40,
  5: 50
};
const keys = Object.keys(levels)
const values = Object.values(levels)
while (will == true) {
  score = 0;

  for (let i = 0; i < questions.length; i++) {
    let userans = rl.question(questions[i].que);
    let ans = questions[i].ans;
    check(userans, ans);
  }
  allScore.push(score);

  console.log("\nYour final score: ", score);
  console.log("All Scores: ", allScore)
  console.log("Your max score is: ", Math.max(...allScore));

  sum = allScore.reduce((a, b) => a + b, 0);
  console.log("\nSum of all scores:", sum);

  for (let i = 1; i <= keys.length; i++) {
    if (sum > values[i]) { continue }
    else { console.log("you're at level-"+keys[i-1] ); break;}
  }
  will = rl.keyInYN("\nDo you want to play again ?  ");
  console.log("\n================================\n")
}