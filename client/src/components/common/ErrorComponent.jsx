import { Box,Typography } from '@mui/material'
import React from 'react'
import { useRouteError } from 'react-router-dom'



function ErrorComponent() {
    const error = useRouteError();
    console.log('error', error)

  return (
    <Box style={{marginLeft:250}}>
        <Typography>There was an error while loading on Page</Typography>
    </Box>
  )
}

export default ErrorComponent
