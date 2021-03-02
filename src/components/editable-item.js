import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/",
        item={title: "Title", _id: "ABC"},
        deleteItem,
        updateItem
    }) => {

    // Small things like this are not worth putting in a reducer. We can keep track of it locally with a hook
    const [editing, setEditing] = useState(false)

    // Use another hook to edit the item title
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            {!editing &&
                <>
                    <Link to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className='fas fa-edit float-right'></i>
                </>
            }
            {editing &&
                <>
                    <input
                        // Update the cached item but edit the title to include whatever we've typed
                        onChange={e =>
                            setCachedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}
                        className='rounded'
                    />
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className='fas fa-check'></i>
                    <i onClick={() => {
                        setEditing(false)
                        deleteItem(item)}
                    } className='fas fa-times'></i>
                </>
            }
        </>
    )
}

export default EditableItem