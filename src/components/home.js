import React from 'react'
import {Link} from "react-router-dom";

const Home = () =>
    <>
        <h1>Home</h1>
        <div className="list-group">
            <Link to="/courses/display/table" className="list-group-item">
                Courses Table
            </Link>
            <Link to="/courses/display/grid" className="list-group-item">
                Courses Grid
            </Link>
        </div>
    </>

export default Home