import "./App.css";
import Header from "./components/Header";
import UserDisplay from "./components/UserDisplay";

function App() {
  // const [id, setId] = useState(1);
  // const [person, setPerson] = useState({});

  return (
    <div className="App">
      <Header />
      <UserDisplay />
    </div>
  );
}

export default App;
