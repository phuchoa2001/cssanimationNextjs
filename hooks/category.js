import useSWR from 'swr';


const fetcher = async (page) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${page}`)
    const data = await res.json()
    return data
}

export const useCategory = ({ options, page, search }) => {
    const querySearch = search ? `&search=${search}` : ""
    const option = {
        dedupingInterval: 60 * 60 * 1000, // 1hr
        ...options,
    }
    const { data, error, mutate } = useSWR(`/public/css/category`, fetcher, option);



    const loading = data === undefined && error === undefined;
    return {
        data,
        loading
    };
};
