import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import ProfilePicture from './components/ProfilePicture';
import { useGetFriendsQuery } from './services/user/userApi';
import { useGetChatQuery } from './services/photo/photoApi';

const ChatScreen = () => {
  const { id } = useParams();
  // const [messages, setMessages] = React.useState([
  //   { id: 1, img: '/assets/sent1.jpg', type: 'sent' },
  //   { id: 2, img: '/assets/received1.jpg', type: 'received' },
  // ]);

  const navigate = useNavigate();
  if (!id) {
    navigate('/people');
  }

  const { userId } = useSelector((state) => state.user.user);

  const { isLoading: isGetFriendsLoading, isError: isGetFriendsError, data: friendsData } = useGetFriendsQuery(userId);
  const friend = friendsData?.find(friend => friend.userId === id);

  const { isLoading: isChatLoading, isError: isChatError, data: chatData, error: getChatError } = useGetChatQuery({ userId, friendId: id });

  if (isGetFriendsError || !isGetFriendsLoading && !friend) {
    return <Navigate to='/people' />;
  }

  if (isGetFriendsLoading || isChatLoading) {
    return <div>Loading...</div>;
  }

  if (isChatError) {
    return <div>Error: {getChatError.message ?? getChatError.data?.error}</div>;
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='fixed w-screen flex gap-2 items-center p-4 bg-gray-800 text-white'>
        <div className='size-16'><ProfilePicture userId={friend.userId} /></div>
        <h1 className='text-xl text-white'>{friend.username}</h1>
      </div>
      <div className='flex-1 p-4 overflow-auto'>
        {chatData.map(message => (
          <div key={message.photoId} className={`my-2 w-full flex ${message.sent ? 'justify-end' : 'justify-start'}`}>
            <img src={`${import.meta.env.VITE_API_URL ?? 'http://localhost:3000/'}recognize/photo?id=${message.photoId}`} alt="chat" className='max-h-80' />
          </div>
        ))}
      </div>
      <div className='p-4 flex justify-center'>
        <input type='file' accept='image/*'  className='hidden' id='fileInput' />
        <label htmlFor='fileInput' className='cursor-pointer'>
          <span className='p-2 bg-gray-800 text-white rounded'>Add Image</span>
        </label>
      </div>
    </div>
  );
};

export default ChatScreen;
