import { useQuery } from 'react-query';

const fetcher = async (page) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${page}`)
    const data = await res.json()
    return data
}

export const AppKeys = {
    all: ['app'],
    lists: () => [...AppKeys.all, 'list'],
    list: (filter) => [...AppKeys.lists(), filter],
    details: () => [...AppKeys.all, 'detail'],
    detail: (id) => [...AppKeys.details(), id],
};

export const useApp = ({ page }) => {
    return useQuery({
        queryKey: AppKeys.list(page),
        queryFn: () => fetcher(page),
        options: {
            keepPreviousData: true,
        },
    });
};
