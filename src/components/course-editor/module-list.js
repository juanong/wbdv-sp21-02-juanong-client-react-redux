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
    const {layout, courseId, moduleId} = useParams()

    // Whatever function we put in useEffect is executed when the module list loads
    // Put in the second argument to stop making infinite requests from the server
    useEffect(() => {
        // Fetch the data and pass to the module reducer
        if (courseId !== "undefined" && typeof courseId !== "undefined") {
            findModulesForCourse(courseId)
        }
    }, [])

    return (
        <>
            <br/>
            {myModules.map(module =>
                <div className="container text-center jo-left-panel-padding">
                    <button className={`btn btn-secondary btn-block jo-left-panel-padding 
                    ${module._id === moduleId ? 'active' : ''}`}>
                        <h6>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                item={module}/>
                        </h6>
                    </button>
                </div>
            )}
            <div className="jo-color-white jo-left-panel-padding">
                <i onClick={() => createModule(courseId)} className="fas fa-plus float-right fa-lg"></i>
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
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Module"})
                .then(actualModule => dispatch({
                    type: "CREATE_MODULE",
                    newModule: actualModule
                }))
        },
        // Pass both the type and the item we want to delete
        deleteModule: (module) => {
            moduleService.deleteModule(module._id)
                .then(moduleToDelete => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: module
                }))
        },
        // Call the server to update a specific module
        updateModule: (module) => {
            moduleService.updateModule(module._id, module)
                .then(updatedModule => dispatch({
                    type: "UPDATE_MODULE",
                    updatedModule: module
                }))
        },
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