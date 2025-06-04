import './App.css';

import Profile from './components/Profile/Profile';

import userData from './data/userData.json';

const App = () => {
  return (
    <div className="container">
      <Profile {...userData} />
    </div>
  );
};

export default App;
