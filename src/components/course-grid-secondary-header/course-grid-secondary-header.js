import React from 'react'
import {Link} from "react-router-dom";
import './course-grid-secondary-header.style.cient.css'

const SecondaryHeader = () =>
    <div className='row jo-secondary-header-margins'>
        <div className='col-4'>
            <h5 className='d-none d-md-block'>Recent Documents</h5>
        </div>
        <div className='col-4 text-center'>
            <h5 className='d-none d-md-block '>
                Owned by me
                <span><i className='fas fa-sort-down'></i></span>
            </h5>
        </div>
        <div className='col-4'>
            <div className='text-nowrap text-right'>
                <i className="fas fa-folder fa-2x jo-header-icon-padding"></i>
                <i className="fas fa-sort-alpha-up fa-2x jo-header-icon-padding"></i>
                <Link to="/courses/display/table">
                    <i className="fas fa-th fa-2x jo-header-icon-padding"></i>
                </Link>
            </div>
        </div>
        <br/>
        <br/>
    </div>

export default SecondaryHeader