import "./FormInput.css"

const FormInput = (props) => {
    return (
        <div className="formInput">
            { /* <label>Username</label> */}
            <input
                ref={props.refer} placeholder={props.placeholder}
            />
        </div>
    )
}

export default FormInput

{ /* placeholder={props.placeholder}
                 onChange={e => props.setUsername(e.target.value)} -> used for set state */  }