
import Profile from './components/Profile/Profile';

function App() {
  const user = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    image: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        image={user.image}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
