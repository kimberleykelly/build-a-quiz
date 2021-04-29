import questions from "./questions.json"
import { useState } from "react"

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [results, setResults] = useState({})

  const handleNextButtonClick = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const handleOptionClick = (e) => {
    setResults({ ...results, [currentQuestion]: e.target.value })
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
            <input
              type="radio"
              value={option}
              checked={results[currentQuestion] === option}
              onChange={(e) => handleOptionClick(e)}
            />
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
