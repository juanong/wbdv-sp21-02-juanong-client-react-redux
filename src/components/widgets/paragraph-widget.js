import React from 'react'

const ParagraphWidget = ({widget, editing, setWidget}) => {
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
                    <textarea onChange={(e) => setWidget({...widget, text: e.target.value})} value={widget.text}
                              className="form-control jo-editing-widgets"></textarea>
                </>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </div>
    )
}

export default ParagraphWidget