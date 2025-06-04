import './App.css';

import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';

import userData from './data/userData.json';
import friends from './data/friends.json';

const App = () => {
  return (
    <div className="container">
      <Profile {...userData} />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
