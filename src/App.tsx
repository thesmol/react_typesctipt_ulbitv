import { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";
import axios from "axios";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      
    } finally {

    }
  }

  return (
    <div>
      <Card
        variant={CardVariant.primary}
        width="200px"
        height="200px"
        onClick={(num) => { console.log('num ' + num) }}
      >
        <button>Кнопка</button>
      </Card>

      <UserList 
        users={users}
      />
    </div>
  )
}

export default App