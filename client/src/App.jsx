import GlobalStyle from "./styledComponents/GlobalStyle";

import Warning from "./components/Warning";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { bakeyContext } from "../Context";

function App() {
  const [isLogged, setIsLogged] = userState(false);
  const [userName, setUserName] = userState("");
  const [profilePic, setProfilePic] = useState();

  return (
    <bakeyContext.Provider value={{isLogged, setIsLogged, userName, setUserName, profilePic, setProfilePic}}>
      <GlobalStyle />
      <Warning msg="site is not found" />
      <Registration />
      <Login />
    </bakeyContext.Provider>
  );
}

export default App;
