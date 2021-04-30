const Results = ({ questions, results, onRetry }) => {
  const score = questions.filter(
    (question, index) => results[index] === question.correct_answer
  ).length

  return (
    <div className="results-container">
      <div className="results-title">Results!</div>
      <div>
        You scored {score} / {questions.length}
      </div>
      {questions.map((question, index) => (
        <div className="results-summary-container" key={index}>
          <div className="results-question">
            <strong>Question: </strong>
            {question.text}
          </div>
          <div className="results-user-answer">
            <strong>Your Answer: </strong>
            <i>{results[index]} </i>
          </div>
          <div className="quiz-correct-answer">
            <strong>Correct Answer: </strong>
            {question.correct_answer}
          </div>
        </div>
      ))}
      <button className="retry-btn" onClick={() => onRetry()}>
        RETRY
      </button>
    </div>
  )
}

export default Results
