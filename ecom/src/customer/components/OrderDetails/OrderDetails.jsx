import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='lg:px-20 px:5 '>
      <div>
         <h1 className='font-semibold text-lg py-7'>Delivery Address</h1>
        <AddressCard/>
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={2}/>
      </div>
      <div className='space-y-5' container>

        {[1,2,3].map((item)=>
        <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>
          
          <Grid item size={{sx:6}}>
            <div className='flex items-center space-x-4'>
              <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
              
              <div className='space-y-2 ml-5'>
                <p className='font-semibold'>Men Printed Pure Cotton Straight Kurta</p>
                <p className='space-x-5 text-sm font-semibold opacity-50'>
                  <span>Color: Green</span> 
                  <span>Size: XL</span>
                </p>
                <p>Sold by: Rajesh Retail</p>
                <p>₹899</p>
              </div>

            </div>
          </Grid>

          <Grid item size={{sx:6}} className='text-center'>
            <Box sx={{color:deepPurple[500]}}>
              <StarBorderIcon className='px-2 text-2xl' sx={{fontSize:"2rem"}}/>
              <span>Rate & Review Product</span>
            </Box>
          </Grid>

        </Grid>
        )}

      </div>

    </div>
  )
}

export default OrderDetails