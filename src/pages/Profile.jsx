import { Button } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux"
import { useAddProfilePictureMutation } from "../services/user/userApi";
import ProfilePicture from "../components/ProfilePicture";

export default function Profile() {
    const [addProfilePicture, result] = useAddProfilePictureMutation();
    const user = useSelector((state) => state.user.user);
    const [selectedPicture, setSelectedPicture] = useState(null);
    const handleSavePicture = async (event) => {
        event.preventDefault();
        if(selectedPicture === null) {
            alert('Please select a picture to upload.');
            return;
        }
        const formData = new FormData();
        formData.append('profilePicture', selectedPicture);
        const res = await addProfilePicture({
            userId: user.userId,
            formData
        });
        // console.log(res);
    }
    return (
        <div className='flex flex-col gap-3 items-center'>
            <h1 className="text-3xl">Profile</h1>
            <ProfilePicture userId={user.userId} />
            <input type="file" name="profile-picture" id="profile-picture" accept=".png, .jpg, .jpeg" className="mx-2" onChange={(e) => setSelectedPicture(e.target.files.length > 0 ? e.target.files[0] : null)}/>
            <Button onClick={handleSavePicture} disabled={result.isLoading}>Save Profile Picture</Button>
        </div>
    )
}