import { Avatar } from "@mui/material";

export default function ProfilePicture({ userId }) {
    return (
        <Avatar src={`${import.meta.env.VITE_API_URL ?? 'http://localhost:3000/'}user/profile-picture?userId=${userId}`} sx={{width: '100%', height: '100%'}} className="rounded-full size-full" />
    )
}
