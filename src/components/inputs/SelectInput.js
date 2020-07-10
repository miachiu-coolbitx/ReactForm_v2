import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ValidationAlert from '../ValidationAlert';

const selectStyle = makeStyles({
    root: {
      fontSize: '15px',
      color: '#222b45',
      fontWeight: '600',
      border: '10px solid #c5cee0',
      backgroundColor: '#f7f9fc',
      boxSizing: 'border-box',
    },
});

function SelectInput({ title, name, style, label, type, value, alert, options, setInputs }) {
    return (
        <div className={style}>
            <h5>{title}</h5>
            <FormControl variant="outlined">
                <FormHelperText>{label}</FormHelperText>
                <Select id={name} defaultValue={options.index=[""]} name={name} type={type} value={value} onChange={setInputs} >
                    {/* 需多寫一行 selected 規則 */}
                    {options && options.map(option => <MenuItem key={option.value} value={option.value} disabled={options.index[0]}>{option.name}</MenuItem>)}
                </Select>
            </FormControl>
            <ValidationAlert content={alert} />
        </div>
    )
}

export default SelectInput;