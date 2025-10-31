import '../Questions/Questions.css';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Question() {
  const [answers, setAnswers] = useState({}); // store selected answer per question
  const [score, setScore] = useState(0);
  const location = useLocation();
  const history = useNavigate();

  const heading = location.state.tem.heading;
  const id_of_quiz = location.state.tem.id;
  const array_of_questions = location.state.tem.questions;

  // Handle answer selection
  const handleSelect = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  // Handle marking a question
  const handleMark = (question) => {
    if (answers[question.id] === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  // Submit quiz
  const handleScore = () => {
    history('/score', {
      state: {
        score: score,
        heading_of_quiz: heading,
        id: id_of_quiz,
      },
    });
  };

  return (
    <div>
      <Navbar />
      <h1 className="heading" style={{ marginLeft: '404px', marginTop: '19px' }}>
        You have to answer these questions
      </h1>

      {array_of_questions.map((it) => (
        <div className="question ml-sm-5 pl-sm-5 pt-2" key={it.id}>
          <div className="py-2 h5">
            <b>
              {it.id}. {it.question}
            </b>
          </div>
          <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            {[it.option1, it.option2, it.option3, it.option4].map((opt, idx) => (
              <label className="options" key={idx}>
                {opt}
                <input
                  type="radio"
                  name={`question-${it.id}`} // ✅ unique per question
                  value={opt}
                  checked={answers[it.id] === opt}
                  onChange={(e) => handleSelect(it.id, e.target.value)}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>

          <Button
            onClick={(e) => {
              e.preventDefault();
              handleMark(it);
            }}
          >
            Mark this option
          </Button>
        </div>
      ))}

      <Button
        className="submitting"
        style={{
          marginLeft: '569px',
          marginTop: '39px',
        }}
        onClick={handleScore}
      >
        Click here to submit the quiz and see score
      </Button>
    </div>
  );
}

export default Question;