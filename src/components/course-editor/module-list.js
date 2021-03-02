import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import './course-editor.style.client.css'
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom'
import moduleService from '../../services/module-service'

const ModuleList = (
    {
        myModules=[],
        createModule = () => alert("Could not create module"),
        deleteModule = () => alert("Could not delete item"),
        updateModule = () => alert("Could not update item"),
        findModulesForCourse = (courseId) => console.log(courseId)
    }
    ) => {
    // Grab the URL parameters
    const {layout, courseId} = useParams()

    // Whatever function we put in useEffect is executed when the module list loads
    useEffect(() => {
        // Fetch the data and pass to the module reducer
        findModulesForCourse(courseId)
    }, [])

    return (
        <>
            <br/>
            {myModules.map(module =>
                <div className="jo-left-panel-padding">
                    <div className="container text-center">
                        <a className="btn btn-secondary
                                          btn-block
                                          jo-left-panel-padding" href="#">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                item={module}/>
                        </a>
                    </div>
                </div>
            )}
            <div className="jo-color-white jo-left-panel-padding">
                <i onClick={createModule} className="fas fa-plus float-right fa-lg"></i>
                <br/>
                <br/>
            </div>
        </>)
}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

// Whatever is returned here is sent to our reducer. The reducer returns the case, which then becomes
// a prop in ModuleList
const dtpm = (dispatch) => {
    return {
        createModule: () => dispatch({type: "CREATE_MODULE"}),
        // Pass both the type and the item we want to delete
        deleteModule: (item) => dispatch({
            type: "DELETE_MODULE",
            moduleToDelete: item
        }),
        updateModule: (item) => dispatch({
            type: "UPDATE_MODULE",
            moduleToUpdate: item
        }),
        // Fetch modules from server using our service and notify the reducer
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: modules
                }))
        }
    }
}

export default connect(stpm, dtpm)(ModuleList)