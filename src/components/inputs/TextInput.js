import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import ValidationAlert from '../ValidationAlert';

function TextInput({ title, name, style, label, type, placeholder, value, alert, setInputs }) {
    return (
        <div className={style}>
            <h5>{title}</h5>
            <FormHelperText>{label}</FormHelperText>
            <TextField id={name} name={name} type={type} value={value || ""} 
                onChange={setInputs} placeholder={placeholder} />
            <ValidationAlert content={alert} />
        </div>
    )
}

export default TextInput;