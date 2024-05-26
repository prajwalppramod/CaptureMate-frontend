import { Button, TextField } from '@mui/material'
import { useLoginUserMutation } from '../services/user/userApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../services/user/userSlice';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [loginUser, result] = useLoginUserMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');

        const res = await loginUser({
            username,
            password,
        })
        if(!res.data) {
            alert(res.error.data?.error ?? res.error.message ?? 'An error occurred. Please try again.')
            return;
        }

        dispatch(setUser(res.data.user));
        return navigate('/')
    }
    return (
        <form onSubmit={onSubmit} className="flex max-md:p-6 flex-col justify-center items-center gap-5 max-w-6xl m-auto"> {/* Default gap of 5 */}
            <div className='flex flex-col justify-center items-center gap-5'> {/* Default gap of 5 */}
                <img className="h-9" src="/assets/logo.png" alt="a" />
                <img className="" src="/assets/illlustration.png" alt="a" />
            </div>
            <p className='text-3xl font-normal'>Simplify photo sharing with Capture Mate.</p>
            <TextField fullWidth name='username' label="Username" variant="filled" required InputProps={{ disableUnderline: true }} />
            <TextField fullWidth name='password' label="Password" type="password" variant="filled" required autoComplete="current-password" InputProps={{ disableUnderline: true }} />
            <div className='flex justify-end w-full gap-5'> {/* Default gap of 5 */}
                <Button>Forgot Password?</Button>
            </div>
            <div className="flex flex-col justify-between w-full gap-2"> {/* Reduced gap between Login and Sign Up buttons to 2 */}
                <Button fullWidth variant="outlined" type='submit' disabled={result.isLoading}>Login</Button>
            </div>
            <div className="flex justify-center w-full gap-2">
                <span className='text-sm'>Don&apos;t have an account? <a href="/signup">Sign Up</a></span>
            </div>
        </form>
    )
}

export default SignIn
