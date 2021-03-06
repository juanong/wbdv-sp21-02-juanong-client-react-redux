import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import CourseGrid from "./components/course-grid/course-grid";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <CourseManager/>
        </div>
      </BrowserRouter>
  );
}

export default App;
