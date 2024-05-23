import { Button, TextField } from '@mui/material'

const SignUp = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');
        await fetch('http://localhost:8000/user/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()).then(console.log)
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="flex max-md:p-6 flex-col justify-center items-center gap-5 max-w-6xl m-auto"> {/* Default gap of 5 */}
                <div className='flex flex-col justify-center items-center gap-5'> {/* Default gap of 5 */}
                    <img className="h-9" src="/assets/logo.png" alt="a" />
                    <img className="" src="/assets/illlustration.png" alt="a" />
                </div>
                <div className="flex flex-col justify-between w-full gap-2"> {/* Reduced gap between Login and Sign Up buttons to 2 */}
                    <p className='text-3xl font-normal'>Join the photo-sharing revolution. </p>
                    <p className='text-[26px] font-normal'>Sign up for Capture Mate today!</p>
                </div>

                <TextField name='username' fullWidth id="outlined-basic" label="Create a Username" variant="filled" InputProps={{ disableUnderline: true }} />
                <TextField name='password' fullWidth id="outlined-password-input" label="Create a Password" type="password" variant="filled" autoComplete="current-password" InputProps={{ disableUnderline: true }} />
                <div className='flex justify-end w-full gap-5'> {/* Default gap of 5 */}
                    <Button>Forgot Password?</Button>
                </div>
                <div className="flex flex-col justify-between w-full gap-2"> {/* Reduced gap between Login and Sign Up buttons to 2 */}
                    <Button fullWidth variant="outlined" type='submit'>Sign Up</Button>
                </div>
            </form>
        </div>
    )
}

export default SignUp