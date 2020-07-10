import 'date-fns';
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


function TimeInput({ title, name, style, value, setInputs, placeholder, type, typeDate, typeTime }) {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div className={style}>
            <h5>{title}</h5>
            {/* <TextField id={name} name={name} value={value || ""} 
                onChange={setInputs} placeholder={placeholder} > */}
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around"> */}
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate} 
                            onChange={handleDateChange}
                            KeyboardButtonProps={{ 'aria-label': 'change date', }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{ 'aria-label': 'change time', }}
                        />
                    {/* </Grid>
                </MuiPickersUtilsProvider> */}
            {/* </TextField> */}
        </div>
    )
}

export default TimeInput;