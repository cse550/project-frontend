import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Welcome from './Pages/Welcome.jsx';
import CreateAccount from './Pages/CreateAccount.jsx';
import Profile from './Pages/Profile.jsx';
import PostWindow from './Pages/PostWindow.jsx';
import Main from './Pages/Main.jsx';
import Notifications from './Pages/Notifications.jsx';
import TopAllTime from './Pages/TopAllTime.jsx';
import TopToday from './Pages/TopToday.jsx';
import TopCreators from './Pages/TopCreators.jsx';
import UserLogin from './Pages/UserLogin.jsx';
import Following from './Pages/Following.jsx';
import Followers from './Pages/Followers.jsx';
import LOLs from './Pages/LOLs.jsx';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
