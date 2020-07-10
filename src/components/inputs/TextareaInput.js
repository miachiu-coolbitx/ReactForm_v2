import React from 'react';
import TextField from '@material-ui/core/TextField';
import ValidationAlert from '../ValidationAlert';

function TextareaInput({ name, style, type, value, alert, setInputs, placeholder, tester, disable }) {
    return (
        <div className={style}>
            <TextField id={name} name={name} value={value || ""} type={type} 
            onChange={setInputs} placeholder={placeholder} className={tester} rows={5} multiline  disabled={disable} />
            <ValidationAlert content={alert} />
        </div>
    )
}

export default TextareaInput;
