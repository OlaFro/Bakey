import Login from "./components/Login";
import Registration from "./components/Registration";
import {bakeyContext} from "../Context"


function App() {

  const [isLogged, setIsLogged] = userState(false);
  const [userName, setUserName] = userState('');
  const [profilePic, setProfilePic] = useState();

  return (
    <div>
      bakey
      <Registration />
      <Login />
    </div>
  );
}

export default App;
