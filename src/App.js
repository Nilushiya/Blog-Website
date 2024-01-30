import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
      <Register />
      <Single />
      <Write />
      <Setting />
      <Login />
    </div>
  );
}

export default App;
