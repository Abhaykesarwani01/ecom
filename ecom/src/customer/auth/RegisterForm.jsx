import React from 'react'
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const registerData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        };
        console.log('Register Data:', registerData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>  
            <Grid container spacing={3}>
                <Grid item size={{ xs: 12, sm: 6 }}> 
                    <TextField required id="firstName" name="firstName" label="First Name" fullWidth autoComplete="given-name" />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField required id="lastName" name="lastName" label="Last Name" fullWidth autoComplete="family-name" />
                </Grid>
                <Grid item size={{ xs: 12 }}>
                    <TextField required id="email" name="email" label="Email Address" fullWidth autoComplete="email" />
                </Grid>
                <Grid item size={{ xs: 12 }}>
                    <TextField required id="password" name="password" label="Password" type="password" fullWidth autoComplete="new-password" />
                </Grid>
                <Grid item size={{ xs: 12 }}>
                    <Button type="submit" className='bg-[#9155fd] w-full' variant="contained" color="primary" size='large' sx={{padding:'.8rem 0', bgcolor:'#9155fd'}} fullWidth>
                        Register
                    </Button>
                </Grid>
            </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex item-center'>
                Already have an account? 
                <Button onClick={()=>navigate('/login')} className='ml-5' size='small'>
                    Login
                </Button>
            </div>
        </div>
    </div>
  )
}

export default RegisterForm