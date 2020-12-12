import useSWR from 'swr';

export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const getData = (path, options) => {
  const result = useSWR(path, fetcher, options);

  return result?.data || {};
};
