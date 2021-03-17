import React, {useState} from 'react'

const HeadingWidget = ({widget, editing}) => {

    const [cachedWidget, setCachedWidget] = useState(widget)

    return (
        <div>
            {
                editing &&
                <>
                    <input onChange={e =>
                        setCachedWidget({
                            ...cachedWidget,
                            text: e.target.value
                        })}
                           value={cachedWidget.text}
                           className="form-control"
                        />
                    <select value={widget.size} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </>
            }
            {
                !editing &&
                <>
                    {widget.size === 1 && <h1>{cachedWidget.text}</h1>}
                    {widget.size === 2 && <h2>{cachedWidget.text}</h2>}
                    {widget.size === 3 && <h3>{cachedWidget.text}</h3>}
                    {widget.size === 4 && <h4>{cachedWidget.text}</h4>}
                    {widget.size === 5 && <h5>{cachedWidget.text}</h5>}
                    {widget.size === 6 && <h6>{cachedWidget.text}</h6>}
                </>
            }
        </div>
    )
}

export default HeadingWidget