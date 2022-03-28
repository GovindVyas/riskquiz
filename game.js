const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Does your floor plan show furniture placements??",
    choice1: "Yes. I have a complete plan with floor placements",
    choice2: "I have a plan but it doesn't show the placement of furniture.",
    choice3: "I will do it myself. ",
    choice4: "Why worry about furniture at this stage",
    choice5: "I don't know.",
    answer: 1
  },
  {
    question:
      "Did you ask your architect to develop a structural drawing?",
    choice1: "I know it’s done but I didn't talk to my architect yet.",
    choice2: "No, I haven't. I just got a floor plan",
    choice3: "My architect says it isn't necessary (and is charging more). ",
    choice4: "I did ask but don't know if I have a structural drawing.",
    choice5: "Who goes to architect these days?",
    answer: 3
  },
  {
    question: "Did you ask your architect to develop a plumbing drawing",
    choice1: "I know it’s done but I didn't talk to my architect yet",
    choice2: "No, I haven't. I just got a floor plan",
    choice3: "My architect says it isn't necessary (and is charging more).",
    choice4: "I did ask but don't know if I have a plumbing drawing.",
    choice5: "Who goes to architect these days?",
    answer: 4
  },
  {
    question: "Did you ask your architect to develop a electrical drawing?",
    choice1: "I know it’s done but I didn't talk to my architect yet. ",
    choice2: "No, I haven't. I just got a floor plan. ",
    choice3: "My architect says it isn't necessary (and is charging more). ",
    choice4: "I did ask but don't know if I have a electrical drawing.",
    choice5: "Who goes to architect these days?",
    answer: 1
  },
  {
    question:
      "Did you contact an Interior Designer for front elevation/exterior design (2D & 3D)?",
    choice1: "I have a 2D drawing as well as 3D model for front elevation",
    choice2: "I will talk to someone after I am done with basic construction",
    choice3: "I know about elevation and interiors, but I am planning to hire someone who I know from my own connections",
    choice4: "I won’t be spending money on front elevation or interiors separately. ",
    choice5: "I don’t know what you’re talking about. ",
    answer: 3
  },
  {
    question: "Are your interior designs ready?",
    choice1: "They’re with me. I finalized an interiors guy that my architect suggested",
    choice2: "I hired an interior designer myself",
    choice3: "I know about interiors based on my experience and knowledge.",
    choice4: "I will pick and choose elements from Intsagram and create my own space.",
    choice5: "Why to spend on interior designing right now? I will think about it later",
    answer: 4
  },
  {
    question: "Have you found a contractor yet?",
    choice1: "My architect connected me to someone I feel confident about. ",
    choice2: "I knew someone from my connections.",
    choice3: "I would talk to my friends and family who would have someone. ",
    choice4: "I would find someone once I am done with the paperwork.",
    choice5: "I would ask around and hire the most affordable contractor",
    answer: 1
  },
  {
    question:
      "Does your contractor understands your floor plan and drawings?",
    choice1: "He has deep experience in building homes based on documented floor plans",
    choice2: "I know my contractor but haven’t really discussed the plans",
    choice3: "I don’t know. Haven’t had the discussion yet. ",
    choice4: "I don’t know ",
    choice5: "Huh? I don’t know if he will understand all this.",
    answer: 3
  },
  {
    question: "Do you have a documented construction agreement ready?",
    choice1: "Yes, my contractor shared a formal contract. ",
    choice2: "Yes. We have a verbal agreement",
    choice3: "I don’t think so anyone would make a construction agreement here. ",
    choice4: "I don’t know.",
    choice5: "Don’t have anything ready yet.",
    answer: 4
  },
  {
    question: "Do you have written payment terms?",
    choice1: "Yes, my contract has payment terms that we both signed. ",
    choice2: "Yes. I got someone who has a formal onboarding process. ",
    choice3: "No. We know each other. So, it’s cool. ",
    choice4: "I thought about it, but couldn’t find anyone with written terms & conditions",
    choice5: "Who writes all this here in small city?",
    answer: 4
  },
  ,
  {
    question: "Is your Floor Plan developed by an architect?",
    choice1: "I hired an architect ",
    choice2: "-",
    choice3: "Someone I knew from the city ",
    choice4: "-",
    choice5: "Huh? What is a floor plan!",
    answer: 4
  }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 11;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("./end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    incrementScore(parseInt(selectedAnswer));
    const classToApply =true
    selectedChoice.parentElement.classList.add(classToApply);
 console.log(score)
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 300);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
