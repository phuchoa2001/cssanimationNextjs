import useSWR from 'swr';


const fetcher = async (page) => {
    console.log("page" , page);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/css/app?page_size=10&page=${page}`)
    const data = await res.json()
    return data
}

export const useApp = ({ options, page }) => {
    // console.log("page", page);
    const option = {
        dedupingInterval: 60 * 60 * 1000, // 1hr
        ...options,
    }
    const { data, error, mutate } = useSWR(`/css/app?page_size=10&page=${page}`, fetcher, option);



    const loading = data === undefined && error === undefined;
    return {
        data,
        loading
    };
};
