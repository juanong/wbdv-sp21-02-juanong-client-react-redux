import React from 'react'

const ParagraphWidget = ({widget, editing, setWidget}) => {
    return (
        <div>
            {
                editing &&
                <>
                    <select onChange={(e) => setWidget({...widget, type: e.target.value})}
                            value={widget.type} className='form-control'>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="HEADING">Heading</option>
                    </select>
                    <textarea onChange={(e) => setWidget({...widget, text: e.target.value})} value={widget.text}
                              className="form-control"></textarea>
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