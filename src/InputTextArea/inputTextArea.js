

function InputTextArea(props) {
    const class_md = "col-md-"+props.column;
    return (

        <div class={class_md}>
            <div class="form-group">
                <div className="inputTextArea">
                    <label className="label" for="inputTextArea" >{props.label}</label>
                    <input id="inputTextArea" placeholder={props.placeholder} styleClass="form-control"/>
                </div>
            </div>
        </div>
    );
}

export default InputTextArea;