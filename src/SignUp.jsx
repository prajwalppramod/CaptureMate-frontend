import { Button, TextField } from '@mui/material'
import React from 'react'

const SignUp = () => {
    return (
        <div>
            <div className="flex max-md:p-6 flex-col justify-center items-center gap-5"> {/* Default gap of 5 */}
                <div className='flex flex-col justify-center items-center gap-5'> {/* Default gap of 5 */}
                    <img className="h-9" src="/assets/logo.png" alt="a" />
                    <img className="" src="/assets/illlustration.png" alt="a" />
                </div>
                <div className="flex flex-col justify-between w-full gap-2"> {/* Reduced gap between Login and Sign Up buttons to 2 */}
                    <p className='text-3xl font-normal'>Join the photo-sharing revolution. </p>
                    <p className='text-[26px] font-normal'>Sign up for Capture Mate today!</p>
                </div>

                <TextField fullWidth id="outlined-basic" label="Create a Username" variant="filled" InputProps={{ disableUnderline: true }} />
                <TextField fullWidth id="outlined-password-input" label="Create a Password" type="password" variant="filled" autoComplete="current-password" InputProps={{ disableUnderline: true }} />
                <div className='flex justify-end w-full gap-5'> {/* Default gap of 5 */}
                    <Button>Forgot Password?</Button>
                </div>
                <div className="flex flex-col justify-between w-full gap-2"> {/* Reduced gap between Login and Sign Up buttons to 2 */}
                    <Button fullWidth variant="contained">Login</Button>
                    <Button fullWidth variant="outlined">Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default SignUp