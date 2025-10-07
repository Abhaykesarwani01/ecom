import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddressCard from '../AddressCard/AddressCard';
import { Button, TextField } from '@mui/material';



export default function FullWidthGrid() {

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            mobile:data.get("phoneNumber")
        }
        console.log("address", address)
    }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }} className="border rounded-e-md shadow-md h-[30rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
                    {[1,1,1,1].map((item)=><AddressCard/>)}
                    <Button sx={{mt:2,bgcolor:"RGB(145 85 253)"}}
                    size='large'
                    variant='contained'
                    >
                        Deliver Here
                    </Button>

           </div>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }} className='border rounded-s-md shadow-md p-5'>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                fullWidth
                autoComplete="given-name"
            />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
                autoComplete="given-name"
                />
            </Grid>
            <Grid size={{ xs: 12 }}>
                <TextField
                required
                id="address"
                name="address"
                label="Address"
                fullWidth
                autoComplete="given-name"
                multiline
                rows={4}
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="given-name"
            />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                required
                id="state"
                name="state"
                label="State"
                fullWidth
                autoComplete="given-name"
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
                required
                id="zip"
                name="zip"
                label="Pin Code"
                fullWidth
                autoComplete="shipping postal-code"
            />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                required
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                fullWidth
                autoComplete="given-name"
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} >
                <Button sx={{py:1.5,mt:2,bgcolor:"RGB(145 85 253)"}}
                    size='large'
                    variant='contained'
                    type='submit'
                    >
                        Deliver Here
                    </Button>
            </Grid>
          </Grid>
          </form>
        </Grid>
        
      </Grid>
    </Box>
  );
}
