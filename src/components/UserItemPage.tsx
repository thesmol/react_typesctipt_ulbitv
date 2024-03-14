import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


interface UserItemPageParams {
    id: string;
    [key: string]: string | undefined;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const history = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + params.id);
            setUser(response.data);
        } catch (error) {
            console.log((error as Error).message);
        }
    }

    return (
        <div>
            <button onClick={() => history('/users')}>назад</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address?.city}, {user?.address?.street}, {user?.address?.zipcode}
            </div>
        </div>
    )
}

export default UserItemPage
