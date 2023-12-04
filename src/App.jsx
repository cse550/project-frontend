import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Welcome from './pages/Welcome.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import Profile from './pages/Profile.jsx';
import PostWindow from './pages/PostWindow.jsx';
import Main from './pages/Main.jsx';
import TopCreators from './pages/TopCreators.jsx';
import UserLogin from './pages/UserLogin.jsx';
import Following from './pages/Following.jsx';
import Followers from './pages/Followers.jsx';
import LOLs from './pages/LOLs.jsx';
import OtherUserProfile from './pages/OtherUserProfile';
import FindCreators from './pages/FindCreators';

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
          <Route path ="/TopCreators" element={<TopCreators />} />
          <Route path ="/UserLogin" element={<UserLogin />} />
          <Route path ="/Following" element={<Following />} />
          <Route path ="/Followers" element={<Followers />} />
          <Route path ="/LOLs" element={<LOLs />} />
          <Route path ="/OtherUserProfile" element={<OtherUserProfile />} />
          <Route path ="/FindCreators" element={<FindCreators />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
