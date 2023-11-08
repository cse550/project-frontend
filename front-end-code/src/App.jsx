import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import CreateAccount from './Pages/CreateAccount';
import Profile from './Pages/Profile';
import PostWindow from './Pages/PostWindow';
import Main from './Pages/Main';
import Notifications from './Pages/Notifications';
import TopAllTime from './Pages/TopAllTime';
import TopToday from './Pages/TopToday';
import TopCreators from './Pages/TopCreators';
import UserLogin from './Pages/UserLogin';
import Following from './Pages/Following';
import Followers from './Pages/Followers';
import LOLs from './Pages/LOLs';
import OtherUserProfile from './Pages/OtherUserProfile';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path ="/Welcome" element={<Welcome />} />
          <Route path ="/CreateAccount" element={<CreateAccount />} />
          <Route path ="/Profile" element={<Profile />} />
          <Route path ="/PostWindow" element={<PostWindow />} />
          <Route path ="/Main" element={<Main />} />
          <Route path ="/Notifications" element={<Notifications />} />
          <Route path ="/TopAllTime" element={<TopAllTime />} />
          <Route path ="/TopToday" element={<TopToday />} />
          <Route path ="/TopCreators" element={<TopCreators />} />
          <Route path ="/UserLogin" element={<UserLogin />} />
          <Route path ="/Following" element={<Following />} />
          <Route path ="/Followers" element={<Followers />} />
          <Route path ="/LOLs" element={<LOLs />} />
          <Route path ="/OtherUserProfile" element={<OtherUserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
