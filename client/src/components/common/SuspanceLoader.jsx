import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const SuspanceLoader = () => {
    return (
        <Box>
            <CircularProgress />
            <div>Loading...</div>
        </Box>
    )
}

export default SuspanceLoader
