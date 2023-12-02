import useSwr from 'swr';
import fetcher from '@/lib/fetcher';

const useUsers = (page: number, limit: number) => {
    const { data, error } = useSwr(`${import.meta.env.VITE_APP_API_BASE_URL}/api/users?page=${page}&limit=${limit}`, fetcher);


    // const users = Array.isArray(data) ? data : [];
    // console.log(data); 

    return {
        users: Array.isArray(data) ? data : [],
        isLoading: !error && !data,
        isError: error,
    }
}

export default useUsers;
