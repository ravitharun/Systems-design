import { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const resp = await axios.get("/api/user");
    setUser(resp.data.data);
  };

  return (
    <div>
      <h1>React App</h1>

      <button onClick={getUser}>Get User</button>

      {user && (
        <div>
          <h3>Name: {user.name}</h3>
          <h3>Role: {user.role}</h3>
        </div>
      )}
    </div>
  );
}

export default App;