import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
// import { Button } from '../Button';
import styles from './ContactMe.module.css';
import { useState } from 'react';

export function ContactMe() {
  const [data, setData] = useState({
    Name: '',
    Email: '',
    option: 'project',
    moreDetails: '',
    error: '',
  });

  const handleSubmit = () => {
    // console.log(data);
    // TODO: Add Error Handling
    // Submit request to send an email to myself add to notion
    setData({ ...data, error: 'HELLLOO SIR' });
  };

  const handleChange = (value, changeTo) => {
    setData({ ...data, [value]: changeTo });
  };

  return (
    <>
      <Box>
        <Typography variant="h2">Contact me</Typography>
        <Typography variant="body1">
          Do you have a project idea? Questions about my previous projects or
          would like consulting on your current project? Fill out the form and I
          will get back to you within 3-5 business days
        </Typography>
        <Box className={styles.formContainer}>
          <TextField
            value={data.Name}
            onChange={(e) => handleChange('Name', e.currentTarget.value)}
            fullWidth
            variant="outlined"
            placeholder="Name"
          />
          <TextField
            value={data.Email}
            onChange={(e) => handleChange('Email', e.target.value)}
            fullWidth
            variant="outlined"
            placeholder="Email"
          />
          <RadioGroup
            defaultValue={'project'}
            onChange={(e) => handleChange('option', e.target.value)}
          >
            <FormControlLabel
              label="Build My Project"
              value="project"
              control={<Radio />}
            />
            <FormControlLabel
              label="Questions on your Project"
              value="question"
              control={<Radio />}
            />
            <FormControlLabel
              label="Consulting"
              value="consulting"
              control={<Radio />}
            />
          </RadioGroup>
          <TextField
            value={data.moreDetails}
            onChange={(e) => handleChange('moreDetails', e.target.value)}
            fullWidth
            multiline
            maxRows={5}
            variant="outlined"
            placeholder="More Information (Optional)"
          />
          <Typography hidden={!data.error} variant="body1" color={'red'}>
            {data.error}
          </Typography>
          <Button
            // style={{ backgroundColor: 'red' }}
            variant="beemo"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
