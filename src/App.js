import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Courses from "./Courses";
function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/courses");
      setCourses(response.data);
      setLoading(false);
    } catch {
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((item) => item.id !== id);
    setCourses(afterDeletedCourses);
  };

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div style={{textAlign:"center"}}>
              <h2>Kursların hepsini sildiniz.</h2>
              <button className="cardDeleteBtn" onClick={() => fetchData()}>Yenile</button>
            </div>
          ) : (
            <Courses courses={courses} removeCourse={deleteCourse} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
