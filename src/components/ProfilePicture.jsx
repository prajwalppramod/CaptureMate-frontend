export default function ProfilePicture({ userId, username }) {
    return (
        <img src={`${import.meta.env.VITE_API_URL ?? 'http://localhost:3000/'}user/profile-picture?userId=${userId}`} className="rounded-full size-full" />
    )
}
