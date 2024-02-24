import AdvancedForm from "./components/appointment ";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  console.log({ message });

  return (
    <div className="App">
      {!message ? "loading..." : message}
      <AdvancedForm />
    </div>
  );
}

export default App;
