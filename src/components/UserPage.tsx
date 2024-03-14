import axios from "axios";
import { IUser } from "../types/types";
import List from "./List";
import User from "./User";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        } catch (error) {
            console.log((error as Error).message);
        }
    }
    return (
        <List
            items={users}
            renderItem={(user: IUser) =>
                <User
                    onClick={(user) => history("/users/" + user.id)}
                    user={user}
                    key={user.id}
                />
            }
        />
    )
}

export default UserPage