import React from 'react'

const ParagraphWidget = ({widget, editing, setWidget}) => {
    return (
        <div>
            {
                editing &&
                <>
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