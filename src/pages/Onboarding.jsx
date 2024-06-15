import { CloudUpload } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import { useState } from "react";
import { useAddOnboardingPictureMutation } from "../services/user/userApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setOnboarded } from "../services/user/userSlice";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export default function Onboarding() {
    const [image, setImage] = useState(null);
    const user = useSelector(state => state.user.user)
    const [addOnboardingImage, result] = useAddOnboardingPictureMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleOnboarding = async () => {
        const formData = new FormData();
        formData.append('picture', image);
        const res = await addOnboardingImage({
            userId: user.userId,
            formData
        });
        if (res.error || res.data.error) {
            alert('An error occurred. Please try again.');
            console.log(res.error, res.data?.error)
            return;
        }
        dispatch(setOnboarded(true));
        alert('Onboarding complete!');
        navigate('/');
    }
    return (
        <div className='flex pt-20 md:pt-32 flex-col gap-3 justify-start items-center h-screen'>
            <h1 className="text-3xl">Onboarding</h1>
            <p className="text-xl">Welcome to CaptureMate!</p>
            <p className="text-lg">Please upload a clear photo of yourself.</p>
            { image && <img src={URL.createObjectURL(image)} alt="User" className="w-40 h-40" /> }
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUpload />}
                className="w-40"
                >
                Upload file
                <VisuallyHiddenInput type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
            </Button>
            <Button variant="outlined" className="w-40" disabled={ !image || result.isLoading } onClick={handleOnboarding}>Proceed</Button>
        </div>
    )
}
