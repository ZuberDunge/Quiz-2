//importing packages
var readlineSync = require('readline-sync');
var chalk =require("chalk");

//printing quiz name
console.log(chalk.bgMagenta("Marvel Fandom Quiz! \n\n"));

// Taking input adn showing output(rules, LeaderBoard blah blah)
var userName = readlineSync.question("May i know your name? \n");
console.log(chalk.bgRed.bold("Hey there "+ userName + " Welcome to the MCU Quiz!\n"))
console.log("__________________________________________________________________\n")
console.log(chalk.green("Rules: \n1. There are 3 Levels in this quiz.(easy, hard,extreme.)\n2. Each Level containing total of 5 questions.\n3. To enter in next level you've to give 3 right answers out of 5 questions\n   of your current level.\n4. Each right answer will give you 2 points.\n5. 1 point will be deducted for each wrong answers.\n6. Use lowercase letters only.\n"))
console.log(chalk.red.bold("LeaderBoard:\n1. Sahil Scored 24!\n2. Groot Scored 20!\n3. Jerry Scored 15!"));
console.log("__________________________________________________________________\n")



//input and condition(if user wants to play or not)
var userYesNo = readlineSync.question("Shall we begin?\n(press y to enter n to exit)\n\n");
if (userYesNo === "y")
{
  console.log("\n")
  console.log(chalk.bgMagenta("Great! Let's begin with Level One :\n"))
   
//score initial value declaration  
var score=0;

// Function
function play(question, answer){

  var userAnswer = readlineSync.question(question);

    if( userAnswer===answer)
    {
        score=score+2;
        console.log("\n")
        console.log(chalk.green("Congratulations! that's the right answer!"))
        console.log("Your current score is " + score )
        console.log("__________________________________________________________________\n")

    } else 
      {
        score--;
        console.log("\n")
        console.log(chalk.red("Naah! that's wrong!"))
        console.log("the right answer is " + answer)
        console.log("Your current score is " + score)
        console.log("__________________________________________________________________\n")
      }
    }

// Questions
  var questions = [
    {
      question: "Q.1) What Is Black Widow's Real Name?\n\na. Natasha Romanoff\nb. Natasha Maximoff \nc. Natasha May\nAnswer : ",
      answer: "a"
    },
    {
      question: "Q.2) Where Is Star-Lord From?\n\na. California\nb. Xandar \nc. Missouri\nAnswer : ",
      answer : "c"
    },
    {
      question: "Q.3) What Is Hulk's Human Name?\n\na. Bruce Wayne\nb. Bruce Banner \nc. Bruce Stark\nAnswer : ",
      answer : "b"
    },
    {
      question: "Q.4) Where Is Thanos From?\n\na. xandar\nb. knowhere \nc. Titan\nAnswer : ",
      answer : "c"
    },
    {
      question: "Q.5) Which Planet Does The Grandmaster Live On?\n\na. Sakaar\nb. Knowhere \nc. dumpster\nAnswer : ",
      answer : "a"
    },
    {
      question: "Q.6) “I wasn't always like this.”\n\na. natasha\nb. wanda \nc. Nebula\nAnswer : ",
      answer : "c"
    },
    {
      question: "Q.7) “He may have been your father, boy, but he wasn’t your daddy.”\n\na. Ego\nb. Yondu \nc. Stan Lee\nAnswer : ",
      answer : "b"
    },
    {
      question: "Q.8) “That is America’s ass.”\n\na. Ironman\nb. captain Amerca \nc. Ant Man\nAnswer : ",
      answer : "b"
    },
    {
      question: "Q.9) “Steve, he said a bad language word.”\n\na. Tony Stark\nb. Maria Hill \nc. Clint Barton\nAnswer : ",
      answer : "b"
    },
    {
      question: "Q.10) “There's an Ant-Man AND a Spider-Man?”\n\na. Bucky\nb. Sam \nc. Bruce\nAnswer : ",
      answer : "c"
    },
    {
      question: "Q.11) Which Infinity Stone is the Aether?\n\na. Mind\nb. Reality \nc. Soul\nAnswer : ",
      answer : "b"
    },
    {
      question: "Q.12) Where do the Frost Giants live?\n\na. Vanaheim\nb. Nidavellir \nc. Jotunheim\nAnswer : ",
      answer : "c"
    },
    {
      question: "Q.13) On what planet was the Soul Stone in Infinity War?\n\na. Vormir\nb. Knowhere \nc. Xandar\nAnswer : ",
      answer : "a"
    },
    {
      question: "Q.14) Director Taika Waititi also played which comedic Thor: Ragnarok character?\n\na. Rocket\nb. Noobmaster \nc. Korg\nAnswer : ",
      answer : "c"
    },
    {
      question: "Q.15)  In ‘Doctor Strange’, the Time Stone is revealed to be hidden inside what artifact?\n\na. Strange's Necklalce\nb. Eye of Agamotto\nc. Inside the Time Building\nAnswer : ",
      answer : "b"
    }
  ];

  //for loop for levels
  for(var i=0; i<questions.length-10; i++)
  {
    var currentQuestion = questions[i];
    play (currentQuestion.question, currentQuestion.answer);
  }


//if conditon for each level (to check if the user is eligiblefor the next //level or not.)

  if(score>=4){
      console.log(chalk.bgMagenta("Congratulations! You've completed Level One!\nWelcome to the Level Two (Quote Quiz) \n"))
      console.log("Level Two :")
      console.log("__________________________________________________________________\n")

      for(var i=5; i<questions.length-5; i++)
      {
        var currentQuestion = questions[i];
        play (currentQuestion.question, currentQuestion.answer);
      }

      if(score>=8){
        console.log(chalk.bgMagenta("Congratulations! You've completed Level Two!\nWelcome to the Level Three."))
        console.log("__________________________________________________________________\n")
        console.log("Level Three :\n")
        for(var i=10; i<questions.length; i++){
        var currentQuestion = questions[i];
        play (currentQuestion.question, currentQuestion.answer);
      }
      
      if (score>=15){
        console.log("Congratulations! You've Scored " + score + " Well PLayed, "+ userName + "\nYou're among on of the top scorers of our quiz!\nSend Screenshot of your score, will upadte the leaderboard!")
      } else
      {
        console.log(chalk.bgMagenta("Well Dnne,you played weel but couldn't make it in top 3 (Still,you scored more than half of the players,\nCheers!!\n\n)"))
      }
      } else
        {
        console.log("ooops!you scored less than 6 questions, You're not eligible for Level 3. \nBetter Lcuk Next Time! (you did well though)")
        }
      } else
        {
        console.log("ooops!you scored less than 3 questions, You're not eligible for Level 2. \nBetter Lcuk Next Time!")
      }
    
        console.log("__________________________________________________________________\n")
        console.log("Thank You for playing. Have a nice day " + userName + "! You're Awesome!");
        console.log("__________________________________________________________________\n")

        console.log(chalk.green("A Reminder:\n\nIn case no one told yo this today,\nRemember that there are so many people that love you<3\nWhatever You're working on right now MATTERS!\ncontinue on what you love and it'll pay off!\nEven if you don't realise it, people look up to you.\nWe Love you Fam<3"))
  
} else if (userYesNo === "n") 
 {
  console.log("\n\n")
  console.log("No issues, thanks for giving your valuable time " + userName + " !\n");
  console.log("Have a nice day!")
  } else
    {
      console.log("Invalid input! Restart the quiz and Try again.");
    }
    