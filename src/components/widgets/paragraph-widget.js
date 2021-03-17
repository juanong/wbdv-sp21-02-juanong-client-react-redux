import React from 'react'

const ParagraphWidget = ({widget, editing}) => {
    return (
        <div>
            {
                editing &&
                <>
                    <textarea value={widget.text} className="form-control"></textarea>
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