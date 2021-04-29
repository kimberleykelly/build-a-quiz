import questions from "./questions.json"
import { useState } from "react"

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleNextButtonClick = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <div className="quiz-container">
      <div className="quiz-title">The Modern Family Quiz!</div>
      <div className="quiz-question">
        <i>{questions[currentQuestion].text}</i>
      </div>
      <div className="quiz-options">
        {questions[currentQuestion].options.map((option, index) => (
          <label key={index} className="quiz-question-option">
            <input type="radio" value={option} />
            <div className="quiz-option">{option}</div>
          </label>
        ))}
      </div>
      <button className="next-btn" onClick={() => handleNextButtonClick()}>
        NEXT
      </button>
    </div>
  )
}

export default Quiz
