import { useQuery } from 'react-query';

const fetcher = async (page) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${page}`)
    const data = await res.json()
    return data
}

export const AppKeys = {
    all: ['app'],
    lists: () => [...categoryKeys.all, 'list'],
    list: (filter) => [...categoryKeys.lists(), filter],
    details: () => [...categoryKeys.all, 'detail'],
    detail: (id) => [...categoryKeys.details(), id],
};

export const useApp = ({ page }) => {
    return useQuery({
        queryKey: categoryKeys.list(page),
        queryFn: () => fetcher(page),
        options: {
            keepPreviousData: true,
        },
    });
};
