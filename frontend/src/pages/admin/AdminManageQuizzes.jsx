import { Link } from "react-router-dom";
import { MdAdd, MdDelete, MdOutlineQuiz } from "react-icons/md";

import "./AdminManageQuizzes.css";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../api/api";

function AdminManageQuizzes() {
  
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get("/quiz/get-all");
      if (response.data?.success) {
        setQuizzes(response.data?.data);
      } else {
        alert("Some Error Occured");
      }
    }
    getData();
  }, []);

  return (
    <section className="manage-quizzes-section">
      {/* Header */}
      <div className="manage-quizzes-header">
        <div>
          <h1>Manage Quizzes</h1>
          <p>View all created quizzes</p>
        </div>
        <Link to="/admin/create-quiz" className="manage-quizzes-add-btn">
          <MdAdd />
          Add Quiz
        </Link>
      </div>

      {/* Quizzes List */}
      <div className="manage-quizzes-list">
        {quizzes.map((quiz) => (
          <div className="quiz-list-card" key={quiz._id}>
            <div className="quiz-list-icon">
              <MdOutlineQuiz />
            </div>
            <span className="quiz-list-name">{quiz.title}</span>
            <button className="quiz-list-delete-btn" title="Delete">
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminManageQuizzes;
