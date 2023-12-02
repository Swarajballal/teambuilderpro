
import Container from "@/components/ui/container";
import UserList from "@/components/ui/UserList";
import Loading from "@/components/Loading";
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import Pagination from "@/components/ui/Pagination";
import useUsers from "@/hooks/useUsers";


const Users = () => {

  const { users, isLoading, isError } = useUsers(1,20);
  console.log(users);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <p>Error</p>
      </div>
    )
  }

  return (
    <Container>
      <div className="flex items-center space-x-2 justify-center md:pt-20  pt-10 gap-3">
          <Input type="text" className="px-3 p-5 w-60 md:w-96" placeholder="Search...." />
          <Button className="px-3 py-2">Search</Button>
      </div>
      <div className="space-y-2 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
           <UserList users={users} />     
        </div>
      </div>

    <div className="flex justify-center items-center space-x-2 p-10 gap-3">
        <Pagination />
    </div>

    </Container>
  );
};

export default Users;