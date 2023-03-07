import "./Proekt/appStyle.scss";
import Navbar from "./Proekt/components/Navbar";
import MainMenu from "./Proekt/components/MainMenu";
import SocialMedia from "./Proekt/components/SocialMedia";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainMenu />
      <SocialMedia />
    </div>
  );
}

export default App;
