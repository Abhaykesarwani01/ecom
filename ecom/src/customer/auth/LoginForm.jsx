import React , { useEffect } from 'react'
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../state/Auth/Action';
import { useSelector } from 'react-redux';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const jwt = localStorage.getItem('jwt');
    //     if (jwt){
    //         // Optionally, you can dispatch an action to fetch user details here
    //         navigate('/'); // Redirect to home if already logged in
    //     }
    // }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const loginData = {
            email: data.get('email'),
            password: data.get('password'),
        };
        dispatch(login(loginData));
        console.log('Login Data:', loginData);
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>  
            <Grid container spacing={3}>
                <Grid item size={{ xs: 12 }}>
                    <TextField required id="email" name="email" label="Email Address" fullWidth autoComplete="email" />
                </Grid>
                <Grid item size={{ xs: 12 }}>
                    <TextField required id="password" name="password" label="Password" type="password" fullWidth autoComplete="current-password" />
                </Grid>
                <Grid item size={{ xs: 12 }}>
                    <Button type="submit" className='bg-[#9155fd] w-full' variant="contained" color="primary" size='large' sx={{padding:'.8rem 0', bgcolor:'#9155fd'}} fullWidth>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex item-center'>
                Don't have an account?
                <Button onClick={()=>navigate('/register')} className='ml-5' size='small'>
                    Register
                </Button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm