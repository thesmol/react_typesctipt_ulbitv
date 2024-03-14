import { FC } from 'react';
import { IUser } from '../types/types';

interface UserProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const User: FC<UserProps> = ({ user, onClick }) => {
    return (
        <div onClick = {() => onClick(user)} style={{ padding: '15px', border: '1px solid gray' }}>
            {user.id}. {user.name} проживает в {user.address.city} на улице {user.address.street}
        </div>
    )
}

export default User