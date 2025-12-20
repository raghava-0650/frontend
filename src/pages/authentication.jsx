import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

//import ForgotPassword from './ForgotPassword';
//import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function Authentication() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  


  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();
  const [error, setError] = React.useState();
  const [messages, setMessages] = React.useState();

  const [formState, setFormState] = React.useState(0);

  
  

  

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else { 
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  const nothing = ()=>{
    return 0;
  }

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        Gotta go through it first!!!
      </Typography>

      <div class = "btn-cont">
        <Button type="button" halfWidth variant={formState === 0 ? "contained": ""} onClick={()=>{setFormState(0)}}>
        log in
        </Button>
        
        <Button type="button" halfWidth variant={formState === 1 ? "contained" : ""} onClick={()=>{setFormState(1)}}>
        Sign up 
        </Button>
      </div>



      <Box
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >

        <FormControl>
          <p>{name}</p>
          
            {formState === 1 ? (
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="fullname"
                
                type="text"
                id="fullname"
                onChange={(e)=>setName(e.target.value)}
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            ) : <></>}
          </FormControl>
          

        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="username"
            type="username"
            name="username"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">Password</FormLabel>
            
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            
            type="password"
            id="password"
            
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        
        <div>
          <Button type="button" fullWidth variant="contained" onClick={validateInputs}>
          submit
          </Button>
        </div>
        
        
      </Box>
      <Divider>or</Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Google')}
          
        >
          Sign in with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Facebook')}
          
        >
          Sign in with Facebook
        </Button>
      </Box>
    </Card>
  );
}