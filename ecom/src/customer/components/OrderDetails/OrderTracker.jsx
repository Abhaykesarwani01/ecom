import { Step, StepLabel, Stepper } from '@mui/material'
import React, { act } from 'react'

const orderSteps = [
    "Order Placed",
    "Order Confirmed",
    "Shipped",
    "On the way",
    "Delivered"
]

const OrderTracker = ({ activeStep }) => {
  return (
    <div>
        <Stepper activeStep={activeStep} alternativeLabel>
            {orderSteps.map((label)=><Step>
                <StepLabel>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker