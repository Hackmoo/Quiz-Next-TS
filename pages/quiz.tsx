import { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";

function Quiz() {
  let [timerStartQuiz, setTimerStartQuiz] = useState(3);
  let [startTimerQuiz, setStartTimerQuiz] = useState(false);
  if (startTimerQuiz) {
    if (timerStartQuiz === 0 || timerStartQuiz < 0) {
      setStartTimerQuiz(!startTimerQuiz);
      return;
    }
    setTimeout(() => {
      setTimerStartQuiz(timerStartQuiz - 1);
    }, 1000);
  }

  // function resetTimerQuiz() {
  //   setTimerStartQuiz(3);
  //   setStartTimerQuiz(true);
  // }
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
  let [quizIsGoing, setQuizIsGoing] = useState(true);
  useEffect(() => {
    if (quizIsGoing) {
      if (timer === 0 || timer < 0) {
        setQuizIsGoing(false);
        return;
      }
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [quizIsGoing, timer])

  interface questionResponse {
    isRightFromCard: Boolean;
  }

  function clickQuestionCard(isRightFromCard: questionResponse) {
    setQuestionNumber((el) => el + 1);
    if (isRightFromCard) {
      console.log("right you are");
    } else {
      console.log("wrong");
    }
  }

  let [currentQuestionId, setCurrentQuestionId] = useState(0)

  let dataBase = [
    {
      id: 0,
      question: "In which city are taxi cabs black?",
      variant1: { name: "New York", isRight: false },
      variant2: { name: "York", isRight: false },
      variant3: { name: "London", isRight: true },
      variant4: { name: "Dublin", isRight: false },
    },
  ];
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
        "p-4 text-2xl bg-[#6D5D6E] rounded-xl cursor-pointer w-[47%] text-center whitespace-nowrap overflow-hidden text-ellipsis hover:brightness-90 transition-all",
        order
      )}
      onClick={() => {
        click(isRight);
        setOrder(`order-[${Math.round(Math.random() * 10)}]`)
      }}
    >
      {children}
    </div>
  );
}

export default Quiz;
