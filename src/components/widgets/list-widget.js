import React from 'react'

const ListWidget = ({widget, editing, setWidget}) => {

    return (
        <div>
            {
                editing &&
                <>
                    <select onChange={(e) =>
                        setWidget({...widget, type: e.target.value, size: 1})}
                            value={widget.type} className='form-control jo-editing-widgets'>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="HEADING">Heading</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                    </select>
                    <input type="checkbox"
                           onChange={(e) => setWidget({...widget, ordered: e.target.checked})}
                           checked={widget.ordered}/>Ordered
                    <p>List Items</p>
                    <textarea rows={10}
                              className="form-control"
                              onChange={(e) => setWidget({...widget, text: e.target.value})}
                              value={widget.text}/>
                </>
            }
            {
                !editing &&
                <>
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text !== "undefined" && typeof widget.text !== "undefined" &&
                                widget.text.split("\n").map(item =>
                                    <li>{item}</li>
                                )
                            }
                        </ul>
                    }
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text !== "undefined" && typeof widget.text !== "undefined" &&
                                widget.text.split("\n").map(item =>
                                    <li>{item}</li>
                                )
                            }
                        </ol>
                    }
                </>

            }
        </div>
    )
}

export default ListWidget