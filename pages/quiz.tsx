import { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";

function Quiz() {
  let [timerStartQuiz, setTimerStartQuiz] = useState(3);
  let [startTimerQuiz, setStartTimerQuiz] = useState(false); // Turning on counting down at the start
  if (startTimerQuiz) {
    if (timerStartQuiz === 0 || timerStartQuiz < 0) {
      setStartTimerQuiz(!startTimerQuiz);
      return;
    }
    setTimeout(() => {
      setTimerStartQuiz(timerStartQuiz - 1);
    }, 1000);
  }
  return (
    <div className="h-[78vh]">
      {startTimerQuiz && (
        <div
          className={`w-full h-full flex justify-center items-center text-9xl flex-col ${
            timerStartQuiz === 3
              ? "text-green-500"
              : timerStartQuiz === 2
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        >
          {`${
            timerStartQuiz === 3
              ? "Ready"
              : timerStartQuiz === 2
              ? "Steady"
              : "Go!"
          }`}
        </div>
      )}
      {!startTimerQuiz && <QuizQuestion />}
    </div>
  );
}

function QuizQuestion() {
  let [questionNumber, setQuestionNumber] = useState(1);
  let [timer, setTimer] = useState(15);
  
 let [test,setTest] = useState(true)

  useEffect(() => {
    if(!test){
      setTimer(15)
      setTest(true)
  }
    if(timer !== 0) {
      if(test){
        setTimeout(() => {
          setTimer(timer - 1)
        }, 1000)
      }
    }
    if(timer === 0 || timer < 0){
      if(currentQuestionId < dataBase.length - 1)
      setTimeout(() => {
       setTimer(15)
       setCurrentQuestionId(el => el + 1)
       setQuestionNumber(el => el + 1)
      }, 0)
      else {
        alert(`You did it! You answered on ${rightAnswers} questions right`)
      }
    }
  
  }, [timer])
  

  interface questionResponse {
    isRightFromCard: Boolean;
  }

  let [rightAnswers, setRightAnswers] = useState(0)

  function clickQuestionCard(isRightFromCard: questionResponse) {
    if(timer === 0) return;
    setTest(false)
    
      setQuestionNumber((el) => el + 1);
      if (isRightFromCard) {
        console.log("right you are");
        setRightAnswers(rightAnswers + 1)
      } else {
        console.log("wrong");
      }
      if(currentQuestionId < dataBase.length - 1){
        setCurrentQuestionId((el) => el + 1);
      } else {
        alert(`You did it! You answered on ${rightAnswers} questions right`)
      }
    
    
    
  }


  let dataBase = [
    {
      id: 0,
      question: "In which city are taxi cabs black?",
      variant1: { name: "New York", isRight: false },
      variant2: { name: "York", isRight: false },
      variant3: { name: "London", isRight: true },
      variant4: { name: "Dublin", isRight: false },
    },
    {
      id: 1,
      question: "Which infinity stone was located on Vormir?",
      variant1: { name: "Space Stone", isRight: false },
      variant2: { name: "Soul Stone", isRight: true },
      variant3: { name: "Power Stone", isRight: false },
      variant4: { name: "Time Stone", isRight: false },
    },
    {
      id: 2,
      question: "John F. Kennedy was assassinated in which city?",
      variant1: { name: "Los Angeles", isRight: false },
      variant2: { name: "Nashville", isRight: false },
      variant3: { name: "Dallas", isRight: true },
      variant4: { name: "Austin", isRight: false },
    },
    {
      id: 3,
      question: "What genre of music did Taylor Swift start in?",
      variant1: { name: "Pop", isRight: false },
      variant2: { name: "Rock", isRight: false },
      variant3: { name: "Folk", isRight: false },
      variant4: { name: "Country", isRight: true },
    },
    {
      id: 4,
      question: "What was the first Adele's album?",
      variant1: { name: "19", isRight: true },
      variant2: { name: "21", isRight: false },
      variant3: { name: "11", isRight: false },
      variant4: { name: "15", isRight: false },
    },
    {
      id: 5,
      question: "How old was Avril Lavigne at her first album?",
      variant1: { name: "18", isRight: false },
      variant2: { name: "16", isRight: false },
      variant3: { name: "17", isRight: true },
      variant4: { name: "19", isRight: false },
    },
    {
      id: 6,
      question: "What's the name of the Spice Girls' debut album?",
      variant1: { name: "Spice", isRight: true },
      variant2: { name: "Sour", isRight: false },
      variant3: { name: "Spice World", isRight: false },
      variant4: { name: "Forever", isRight: false },
    },
    {
      id: 7,
      question: "The best-selling album of 2010 was Recovery by which artist?",
      variant1: { name: "Katy Perry", isRight: false },
      variant2: { name: "Taylor Swift", isRight: false },
      variant3: { name: "Ed Sheeran", isRight: false },
      variant4: { name: "Eminem", isRight: true },
    },
    {
      id: 8,
      question: "What's the name of Britney Spears's debut album?",
      variant1: { name: "...Baby One More Time", isRight: true },
      variant2: { name: "Oops!... I Did it again", isRight: false },
      variant3: { name: "Britney", isRight: false },
      variant4: { name: "In the Zone", isRight: false },
    },
    {
      id: 9,
      question:
        'How did Katy Perry called herself in the song "Last Friday Night"',
      variant1: { name: "Katy B", isRight: false },
      variant2: { name: "Katy Perry", isRight: false },
      variant3: { name: "Kathy Beth Terry", isRight: true },
      variant4: { name: "Katheryn Elizabeth Hudson", isRight: false },
    },
    {
      id: 10,
      question:
        "What is the stage name of the artist whose real name is Abel Makkonen Tesfaye?",
      variant1: { name: "Drake", isRight: false },
      variant2: { name: "Bob Dylan", isRight: false },
      variant3: { name: "Bob Marley", isRight: false },
      variant4: { name: "The Weeknd", isRight: true },
    },
    {
      id: 11,
      question:
        "How old was Britney Spears when her hit song ‘Baby One More Time’ came out in 1998?",
      variant1: { name: "19", isRight: false },
      variant2: { name: "16", isRight: false },
      variant3: { name: "17", isRight: true },
      variant4: { name: "18", isRight: false },
    },
    {
      id: 12,
      question:
        "Tour in 2019 set the all-time record for highest-grossing tour. Who is this singer?",
      variant1: { name: "Ed Sheeran", isRight: true },
      variant2: { name: "Taylor Swift", isRight: false },
      variant3: { name: "The Weeknd", isRight: false },
      variant4: { name: "Rhiana", isRight: false },
    },
    {
      id: 13,
      question:
        "What album, the debut for Olivia Rodrigo released in 2021, contains such songs as “Brutal”, “Deja Vu”, and “Drivers License?”",
      variant1: { name: "Good 4 u", isRight: false },
      variant2: { name: "Vampire", isRight: false },
      variant3: { name: "Sour", isRight: true },
      variant4: { name: "Fearless", isRight: false },
    },
    {
      id: 14,
      question:
        'In November 2020, the Korean boy-band BTS became the first K-pop band ever to receive a Grammy nomination, for what "explosive" song that became a #1 hit in the U.S.?',
      variant1: { name: "Butter", isRight: false },
      variant2: { name: "DNA", isRight: false },
      variant3: { name: "IDOL", isRight: false },
      variant4: { name: "Dynamite", isRight: true },
    },
  ];
  let [currentQuestionId, setCurrentQuestionId] = useState(0);
  return (
    <div className="p-4 h-full">
      <div className="text-3xl font-bold">Question {questionNumber}</div>
      <div className="w-full flex justify-center items-center">
        <div
          className={`${
            timer < 6 && "text-red-500"
          } text-center text-3xl font-bold mt-8 border rounded-full w-20 p-4`}
        >
          {timer}
        </div>
      </div>
      <div className="flex justify-center items-center mt-24 flex-col">
        <div className="w-3/5 text-center text-3xl py-9 px-3 bg-[#6D5D6E] rounded-xl whitespace-wrap">
          {dataBase[currentQuestionId].question}
        </div>
        <div className="flex flex-wrap mt-12 w-3/5 justify-between gap-8">
          <QuizAnswerCard
            isRight={dataBase[currentQuestionId].variant1.isRight}
            click={clickQuestionCard}
          >
            {dataBase[currentQuestionId].variant1.name}
          </QuizAnswerCard>
          <QuizAnswerCard
            isRight={dataBase[currentQuestionId].variant2.isRight}
            click={clickQuestionCard}
          >
            {dataBase[currentQuestionId].variant2.name}
          </QuizAnswerCard>
          <QuizAnswerCard
            isRight={dataBase[currentQuestionId].variant3.isRight}
            click={clickQuestionCard}
          >
            {dataBase[currentQuestionId].variant3.name}
          </QuizAnswerCard>
          <QuizAnswerCard
            isRight={dataBase[currentQuestionId].variant4.isRight}
            click={clickQuestionCard}
          >
            {dataBase[currentQuestionId].variant4.name}
          </QuizAnswerCard>
        </div>
      </div>
    </div>
  );
}

interface QuizAnswer {
  children: ReactNode;
  isRight: Boolean;
  click: Function;
}

function QuizAnswerCard({ children, isRight, click }: QuizAnswer) {
  let [order, setOrder] = useState(`order-[${Math.round(Math.random() * 10)}]`);
  return (
    <div
      className={clsx(
        'p-4 text-2xl bg-[#6D5D6E] rounded-xl cursor-pointer w-[47%] text-center whitespace-nowrap overflow-hidden text-ellipsis hover:brightness-90 transition-all', order
      )}
      onClick={() => {
        click(isRight);
        setOrder(`order-[${Math.round(Math.random() * 10)}]`);
      }}
    >
      {children}
    </div>
  );
}

export default Quiz;
