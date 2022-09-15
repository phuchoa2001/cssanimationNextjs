import useSWR from 'swr';

import { BlogApi } from '../api-client/BlogApi';

const fetcher = (page) => fetch(`${process.env.NEXT_PUBLIC_API_URL}/css/app?page_size=10&page=${page}`).then(res => res.json())

export const useBlog = ({ options }) => {
    const option = {
        dedupingInterval: 60 * 60 * 1000, // 1hr
        ...options,
    }
    const { data, error, mutate } = useSWR('/auth/blog', BlogApi.getAll, option);



    const loading = data === undefined && error === undefined;
    return {
        data,
        isLoading: loading,
    };
};
