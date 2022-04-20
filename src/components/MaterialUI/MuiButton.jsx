import React from 'react'
import { Button, Stack } from '@mui/material'
const MuiButton = () => {
    return (
        <>
            <Stack spacing={2} >
                <Button variant="text">MuiButton</Button>
                <Button variant="contained">MuiButton</Button>
                <Button variant="outline">MuiButton</Button>
            </Stack>
        </>
    )
}

export default MuiButton