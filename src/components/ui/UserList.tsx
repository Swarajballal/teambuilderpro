import UserCard from '@/components/ui/UserCard';
import { User } from '@/types';

interface UserListProps {
    users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <div className='space-y-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {users.map((user) => (
                    <UserCard key={user.id} data={user} />
                ))}
            </div>
        </div>
    );
}

export default UserList;
