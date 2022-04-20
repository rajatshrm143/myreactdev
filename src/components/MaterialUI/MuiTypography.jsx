import React from 'react'
import { Typography } from '@mui/material';
export const MuiTypography = () => {
    return (
        <>
            <h3>Material UI components :</h3>
            {/* will be a h5 tag */}
            <Typography variant="h5">Typography component</Typography>

            {/* will be a h1 tag with styling of h6 */}
            <Typography variant="h5" component="h1">Heading 6</Typography>
            <Typography variant="subtitle1">Sub title 2</Typography>
            <Typography variant="subtitle2" gutterBottom>Sub title 2</Typography>

            {/* will create a <p> tag */}
            <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet a voluptatibus nisi omnis officia asperiores excepturi nemo aliquam vitae libero, ut tempore obcaecati commodi modi accusantium doloribus rerum harum minus.
            </Typography>

            {/* will create a <p> tag with smaller font-size */}
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet a voluptatibus nisi omnis officia asperiores excepturi nemo aliquam vitae libero, ut tempore obcaecati commodi modi accusantium doloribus rerum harum minus.
            </Typography>


        </>
    )
}

export default MuiTypography;

