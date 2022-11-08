import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPlacement({labelPlacement, Disabled}) {
  return (
    <FormControl>
      <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="Top"
          labelPlacement={labelPlacement} disabled={Disabled}
           
        />
        <FormControlLabel
          value="Start"
          control={<Radio />}
          label="Start"
          labelPlacement={labelPlacement} disabled={Disabled}
        />
        <FormControlLabel
          value="Bottom"
          control={<Radio />}
          label="Bottom"
          labelPlacement={labelPlacement} disabled={Disabled}
        />
        <FormControlLabel value="End" control={<Radio />} label="End" labelPlacement={labelPlacement}  disabled={Disabled}/>
      </RadioGroup>
    </FormControl>
  );
}
