import React, {useState, useEffect} from "react";

function QuestionList() {
  const [questions, setQuestions] = useState([])
  useEffect(() =>{
    fetch(`http://localhost:4000/questions`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "Fetch response")
        setQuestions(res)
      })
  },[])
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */
            questions.map((ques) => {
                 return <li>{ques.prompt}</li>
            })
          }</ul>
    </section>
  );
}

export default QuestionList;
