import { useSelector } from "react-redux";
import { useAcceptOrRejectFriendInviteMutation, useGetFriendInvitesQuery } from "../services/user/userApi"
import ProfilePicture from "../components/ProfilePicture";
import { Button } from "@mui/material";

export default function PendingInvites() {
    const userId = useSelector((state) => state.user.user.userId);
    const { isLoading: isGetInvitesLoading, isError: isGetInvitesError, data: invitesData, error: getInvitesError } = useGetFriendInvitesQuery(userId);
    const [ acceptOrRejectFriendInvite, acceptOrRejectResult ] = useAcceptOrRejectFriendInviteMutation();

    const acceptInvite = (friendId) => {
        acceptOrRejectFriendInvite({userId, friendId, status: 'ACCEPTED'});
    }

    const rejectInvite = (friendId) => {
        acceptOrRejectFriendInvite({userId, friendId, status: 'REJECTED'});
    }

    console.log(invitesData)
    return (
        <div className="flex pt-20 md:pt-32 flex-col gap-3 justify-start items-center h-screen">
            <div className="grid grid-cols-3 gap-2 w-3/4"> {
                isGetInvitesLoading ? <p>Loading...</p>
                : isGetInvitesError ? <p>Error: {getInvitesError}</p>
                : invitesData.length === 0 ? <p>No pending invites</p>
                : invitesData.map((user) =>
                    <div key={user.userId} className="rounded flex gap-5 items-center p-4 transition-all bg-gray-700/20 hover:bg-gray-700/40">
                        <div className='size-20'><ProfilePicture userId={user.userId} username={user.username}/></div>
                        <div className="flex flex-col gap-2">
                            <p>{user.username}</p>
                            <div className="flex gap-2">
                                <Button onClick={() => acceptInvite(user.userId)} disabled={acceptOrRejectResult.isLoading}>Accept</Button>
                                <Button onClick={() => rejectInvite(user.friendId)} disabled={acceptOrRejectResult.isLoading} color="error">Reject</Button>
                            </div>
                        </div>
                    </div>)
            } </div>
        </div>
    )
}