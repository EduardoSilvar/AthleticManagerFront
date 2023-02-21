

function Input(props) {
    const class_md = "col-md-"+props.column;
    return (

        <div class={class_md}>
            <div class="form-group">
                <div className="InputText">
                    <label className="label" for="input" >{props.label}</label>
                    <input id="input" placeholder={props.placeholder} styleClass="form-control"/>
                </div>
            </div>
        </div>
    );
}

export default Input;