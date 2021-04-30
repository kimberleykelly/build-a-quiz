import questions from "./questions.json"
import { useState } from "react"
import Results from "./results"

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [results, setResults] = useState({})
  const [isComplete, setIsComplete] = useState(false)

  const isLastQuestion = currentQuestion === questions.length - 1

  const handleNextButtonClick = () => {
    if (results[currentQuestion] === undefined) {
      alert("You need to select an answer!")
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }
  const handleOptionClick = (e) => {
    setResults({ ...results, [currentQuestion]: e.target.value })
  }

  const resetState = () => {
    setIsComplete(false)
    setResults({})
    setCurrentQuestion(0)
  }

  return (
    <>
      {!isComplete && (
        <div className="quiz-container">
          <div className="quiz-title">The Modern Family Quiz!</div>
          <div className="quiz-current-q">
            {currentQuestion + 1}/{questions.length}
          </div>
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
          {!isLastQuestion && (
            <button
              className="next-btn"
              onClick={() => handleNextButtonClick()}
            >
              NEXT
            </button>
          )}
          {isLastQuestion && (
            <button className="results-btn" onClick={() => setIsComplete(true)}>
              GET RESULTS
            </button>
          )}
        </div>
      )}
      {isComplete && (
        <Results
          results={results}
          questions={questions}
          onRetry={() => resetState()}
        />
      )}
    </>
  )
}

export default Quiz
