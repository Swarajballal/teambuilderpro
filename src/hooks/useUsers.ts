import useSwr from 'swr';
import fetcher from '@/lib/fetcher';

const useUsers = (page: number, limit: number) => {
    const { data, error } = useSwr(`${import.meta.env.VITE_APP_API_BASE_URL}/api/users?page=${page}&limit=${limit}`, fetcher);
    console.log(data);
    
    return {
        users: data ? data.users : [],
        totalItems: data?.totalItems,
        currentPage: data?.currentPage,
        totalPages: data?.totalPages,
        isLoading: !error && !data,
        isError: error,
    }
}

export default useUsers;
