export default function ProfilePicture({ userId, username }) {
    return (
        <img src={`${import.meta.env.VITE_API_URL ?? 'http://localhost:3000/'}user/profile-picture?userId=${userId}`} className="size-40 rounded-full m-auto" alt={username}/>
    )
}