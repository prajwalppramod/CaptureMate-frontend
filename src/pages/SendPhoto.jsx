import { Close, Send } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ProfilePicture from "../components/ProfilePicture";
import { useSendMutation } from "../services/photo/photoApi";
import { setPhotoId } from "../services/photo/photoSlice";

export default function SendPhoto() {
    const user = useSelector(state => state.user.user);

    const { photoId, recipients } = useSelector(state => state.photo);

    const dispatch = useDispatch()

    const [sendPhoto, result] = useSendMutation();
    return (
        <div className='min-h-screen flex flex-col mt-20 items-center gap-5'>
            <img src={`${import.meta.env.VITE_API_URL ?? 'http://localhost:3000/'}recognize/photo?id=${photoId}`} className="max-h-96"/>
            <div className="flex flex-col">
                {
                    recipients.map(recipient => <div key={recipient.userId} className="flex items-center gap-4"><div className="h-16"><ProfilePicture userId={recipient.userId}/></div>{recipient.username} <div><IconButton><Close /></IconButton></div></div>)
                }
            </div>
            <Button variant="contained" className="flex gap-2 items-center" disabled={result.isLoading} onClick={async () => {
                const res = await sendPhoto({userId: user.userId, photoId, recipients: recipients.map(recipient => recipient.userId)});
                if(res.error || res.data?.error) {
                    console.error('Error sending photo', res.error, res.data?.error);
                    return;
                }
                console.log('Photo sent successfully');
                dispatch(setPhotoId(null));
            }}><Send/> Send</Button>
        </div>
    )
}