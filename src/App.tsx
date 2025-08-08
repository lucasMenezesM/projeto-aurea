import "./App.css";
import { Navbar } from "./pages/shared/navbar/navbar";
import { Router } from "./routes/Router";

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
