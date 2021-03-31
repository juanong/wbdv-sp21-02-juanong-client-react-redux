import React from 'react'

const ImageWidget = ({widget, editing, setWidget}) => {
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
                        <label htmlFor="image-url">Image URL</label>
                        <input className="form-control" id="image-url"
                               onChange={(e) => setWidget({...widget, src: e.target.value})}
                               value={widget.src === null ? "" : widget.src} />
                        <label htmlFor="height-input">Height</label>
                        <input className="form-control" id="height-input"
                               onChange={(e) => setWidget({...widget, height: e.target.value})}
                               value={widget.height === null ? "" : widget.height} />
                        <label htmlFor="width-input">Width</label>
                        <input className="form-control" id="width-input"
                               onChange={(e) => setWidget({...widget, width: e.target.value})}
                               value={widget.width === null ? "" : widget.width}/>
                    </>
            }
            {
                !editing &&
                    <>
                        {
                            (widget.src === null || widget.src === "" || typeof widget.src === "undefined") &&
                            <p>
                                Edit this widget to give it an image link!
                            </p>
                        }
                        {
                            widget.src !== "undefined" && typeof widget.src !== "undefined" &&
                            <img src={widget.src} width={widget.width} height={widget.height}/>
                        }
                    </>

            }
        </div>
    )
}

export default ImageWidget