import questions from "./questions.json"

const Quiz = () => {
  return (
    <div className="quiz-container">
      <div className="quiz-title">The Modern Family Quiz!</div>
      <div className="quiz-question">
        <i>{questions[0].text}</i>
      </div>
      <div className="quiz-options">
        {questions[0].options.map((option, index) => (
          <label key={index} className="quiz-question-option">
            <input type="radio" value={option} />
            <div className="quiz-option">{option}</div>
          </label>
        ))}
      </div>
    </div>
  )
}

export default Quiz
