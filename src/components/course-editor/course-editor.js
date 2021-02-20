import React from 'react'
import './course-editor.style.client.css'

const CourseEditor = ({history}) =>
    <div>
        <div className="row bg-secondary jo-editor-header-padding shadow">
            <div className="col-sm-4">
                <ul className="list-inline">
                    <li className="list-inline-item
                           jo-x-right-padding
                           jo-color-light-gray">
                        {/* Use the Route information to navigate to the most recently viewed page */}
                        <i onClick={() => history.goBack()} className="fas fa-arrow-left"></i>
                    </li>
                    <li className="list-inline-item
                           jo-color-white">
                        <a href="#"><h5>CS5610 - WebDev</h5></a>
                    </li>
                </ul>
            </div>

            <div className="col-sm-8 ">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="jo-color-light-gray" href="#">
                            <h5>Build</h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="jo-color-light-gray" href="#">
                            <h5>Pages</h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="jo-color-light-gray" href="#">
                            <h5>Theme</h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="jo-color-light-gray" href="#">
                            <h5>Store</h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="jo-color-light-gray" href="#">
                            <h5>App</h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="jo-color-light-gray" href="#">
                            <h5>Settings</h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="jo-color-white" href="#">
                            <i className="fas fa-plus"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-4 bg-dark">
                <br/>
                <div className="jo-left-panel-padding">
                    <div className="container text-center">
                        <a className="btn btn-secondary
                                  btn-block
                                  jo-left-panel-padding" href="#">
                                Module 1 - jQuery
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </div>
                </div>
                <div className="jo-left-panel-padding">
                    <div className="container text-right">
                        <a className="btn btn-secondary
                                  btn-block
                                  jo-left-panel-padding" href="#">
                                Module 2 - React
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </div>
                </div>
                <div className="jo-left-panel-padding">
                    <div className="container text-right">
                        <a className="btn btn-secondary
                                  btn-block
                                  jo-left-panel-padding" href="#">
                            Module 3 - Redux
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </div>
                </div>
                <div className="jo-left-panel-padding">
                    <div className="container text-right">
                        <a className="btn btn-secondary
                                  btn-block
                                  jo-left-panel-padding" href="#">
                                Module 4 - Native
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </div>
                </div>
                <div className="jo-left-panel-padding">
                    <div className="container text-right">
                        <a className="btn btn-secondary
                                  btn-block
                                  jo-left-panel-padding" href="#">
                                Module 5 - Angular
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </div>
                </div>
                <div className="jo-left-panel-padding">
                    <div className="container text-right">
                        <a className="btn btn-secondary
                                  btn-block
                                  jo-left-panel-padding" href="#">
                            Module 6 - Node
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </div>
                </div>
                <div className="jo-left-panel-padding">
                    <div className="container text-right">
                        <a className="btn btn-secondary
                                  btn-block
                                  jo-left-panel-padding" href="#">
                                Module 7 - Mongo
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </div>
                </div>
                <div className="jo-color-white jo-left-panel-padding">
                    <a href="#"><i className="fas fa-plus float-right fa-lg"></i></a>
                    <br/>
                    <br/>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="container">
                    <div className="row">
                        <div className="jo-topics-spacing">
                            <div className="jo-background-gray
                                        jo-topics-format">
                                <a href="#"><h5>Topic 1</h5></a>
                            </div>
                        </div>
                        <div className="jo-topics-spacing">
                            <div className="jo-background-gray
                                        jo-topics-format">
                                <a href="#"><h5>Topic 2</h5></a>
                            </div>
                        </div>
                        <div className="jo-topics-spacing">
                            <div className="jo-background-gray
                                        jo-topics-format">
                                <a href="#"><h5>Topic 3</h5></a>
                            </div>
                        </div>
                        <div className="jo-topics-spacing">
                            <div className="jo-background-gray
                                        jo-topics-format">
                                <a href="#"><h5>Topic 4</h5></a>
                            </div>
                        </div>
                        <div className="jo-topics-spacing">
                            <div className="jo-background-gray
                                        jo-topics-plus-format">
                                <a href="#"><h5><i className="fas fa-plus"></i></h5></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default CourseEditor