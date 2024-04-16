import { Button, TextField } from '@mui/material'
import React from 'react'

const SignIn = () => {
    return (
        <div className="flex max-md:p-6 flex-col justify-center items-center gap-5"> {/* Default gap of 5 */}
            <div className='flex flex-col justify-center items-center gap-5'> {/* Default gap of 5 */}
                <img className="h-9" src="/assets/logo.png" alt="a" />
                <img className="" src="/assets/illlustration.png" alt="a" />
            </div>
            <p className='text-3xl font-normal'>Simplify photo sharing with Capture Mate.</p>
            <TextField fullWidth id="outlined-basic" label="Username" variant="filled" InputProps={{ disableUnderline: true }} />
            <TextField fullWidth id="outlined-password-input" label="Password" type="password" variant="filled" autoComplete="current-password" InputProps={{ disableUnderline: true }} />
            <div className='flex justify-end w-full gap-5'> {/* Default gap of 5 */}
                <Button>Forgot Password?</Button>
            </div>
            <div className="flex flex-col justify-between w-full gap-2"> {/* Reduced gap between Login and Sign Up buttons to 2 */}
                <Button fullWidth variant="contained">Login</Button>
                <Button fullWidth variant="outlined">Sign Up</Button>
            </div>
        </div>
    )
}

export default SignIn
