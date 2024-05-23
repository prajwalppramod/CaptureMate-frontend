import { Button, TextField } from '@mui/material'

const SignUp = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="flex max-md:p-6 flex-col justify-center items-center gap-5 max-w-6xl m-auto"> {/* Default gap of 5 */}
                <div className='flex flex-col justify-center items-center gap-5'> {/* Default gap of 5 */}
                    <img className="h-8" src="/assets/logo.png" alt="a" />
                    <img className="h-44" src="/assets/illlustration.png" alt="a" />
                </div>
                <div className="flex flex-col justify-between w-full gap-2"> {/* Reduced gap between Login and Sign Up buttons to 2 */}
                    <p className='text-3xl font-normal'>Join the photo-sharing revolution. </p>
                    <p className='text-[26px] font-normal'>Sign up for Capture Mate today!</p>
                </div>

                <TextField name='email' fullWidth id="outlined-basic" label="Enter your email" variant="filled" InputProps={{ disableUnderline: true }} />
                <TextField name='username' fullWidth id="outlined-basic" label="Create a Username" variant="filled" InputProps={{ disableUnderline: true }} />
                <TextField name='password' fullWidth id="outlined-password-input" label="Create a Password" type="password" variant="filled" autoComplete="current-password" InputProps={{ disableUnderline: true }} />
                <TextField name='password' fullWidth id="outlined-password-input" label="Confirm your Password" type="password" variant="filled" autoComplete="current-password" InputProps={{ disableUnderline: true }} />
                <div className="flex flex-col justify-between w-full gap-2"> {/* Reduced gap between Login and Sign Up buttons to 2 */}
                    <Button fullWidth variant="contained">Sign Up</Button>
                </div>
            </form>
        </div>
    )
}

export default SignUp