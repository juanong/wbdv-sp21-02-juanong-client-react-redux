import React from 'react'

const ListWidget = ({widget, editing, setWidget}) => {

    return (
        <div>
            {
                editing &&
                <div>
                    <input type="checkbox"
                           onChange={(e) => setWidget({...widget, ordered: e.target.checked})}
                           checked={widget.ordered}/>Ordered
                    <p>List Items</p>
                    <textarea rows={10}
                              className="form-control"
                              onChange={(e) => setWidget({...widget, text: e.target.value})}
                              value={widget.text}/>
                </div>
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