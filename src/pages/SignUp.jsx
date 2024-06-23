import { Button, TextField } from '@mui/material'
import { useRegisterUserMutation } from '../services/user/userApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../services/user/userSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [register, result] = useRegisterUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const username = formData.get('username');
        const password = formData.get('password');
        const reenterPassword = formData.get('reenter-password');

        if (password !== reenterPassword) {
            alert('Passwords do not match');
            return;
        }
        const res = await register({ email, username, password });

        if(!res.data) {
            console.log(res)
            alert(res.error.data?.error ?? res.error.message ?? 'An error occurred. Please try again.')
            return;
        }

        dispatch(setUser(res.data.user));
        return navigate('/')
    }
    return (
        <form onSubmit={onSubmit} className="flex max-md:p-6 flex-col justify-center items-center gap-5 max-w-6xl m-auto"> {/* Default gap of 5 */}
            <img className="h-9" src="/assets/logo.png" alt="a" />
            <div className='grid md:grid-cols-2 items-center'><div className='flex flex-col justify-center items-center gap-5'> {/* Default gap of 5 */}
                <img className="" src="/assets/illlustration.png" alt="a" />
            </div>
            <div className="flex flex-col justify-between w-full gap-2"> {/* Reduced gap between Login and Sign Up buttons to 2 */}
                <p className='text-3xl font-normal'>Join the photo-sharing revolution. </p>
                <p className='text-[26px] font-normal'>Sign up for Capture Mate today!</p>
            </div></div>
            <TextField required name='email' type='email' fullWidth id="email" label="Your Email ID" variant="filled" autoComplete='current-email' InputProps={{ disableUnderline: true }} />
            <TextField required name='username' fullWidth id="username" label="Create a Username" variant="filled" autoComplete='current-username' InputProps={{ disableUnderline: true }} />
            <TextField required name='password' fullWidth id="outlined-password-input" label="Create a Password" type="password" variant="filled" autoComplete="current-password" InputProps={{ disableUnderline: true }} />
            <TextField required name='reenter-password' fullWidth id="repeat-password" label="Re-enter Password" type="password" variant="filled" autoComplete="current-password" InputProps={{ disableUnderline: true }} />
            <div className='flex justify-end w-full gap-5'> {/* Default gap of 5 */}
                <Button>Forgot Password?</Button>
            </div>
            <div className="flex flex-col justify-between w-full gap-2">
                <Button fullWidth variant="outlined" type='submit' disabled={result.isLoading}>Sign Up</Button>
            </div>
            <div className="flex justify-center w-full gap-2">
                <span className='text-sm'>Already have an account? <a href="/signin">Sign In</a></span>
            </div>
        </form>
    )
}

export default SignUp