import useSWR from 'swr';


const fetcher = (page) => fetch(`${process.env.NEXT_PUBLIC_API_URL}/css/app?page_size=10&page=${page}`).then(res => res.json())

export const useApp = ({ options, page }) => {
    const option = {
        dedupingInterval: 60 * 60 * 1000, // 1hr
        ...options,
    }
    const { data, error, mutate } = useSWR(`/css/app?page_size=10&page=${page}`, (page) => fetcher, option);



    const loading = data === undefined && error === undefined;
    return {
        data,
        loading
    };
};
