import { useCallback, useEffect, useState } from "react";

const useFetch = <T>(requestInfo: Request, transform?: (data: any) => T) => {
	const [isLoading, setIsLoading] = useState(false);
	const [fetchError, setFetchError] = useState<string | null>(null);
	const [data, setData] = useState<T | null>(null);

	const fetchData = useCallback(async () => {
		setIsLoading(true);
		const response = await fetch(requestInfo);

		if (response.ok) {
			const data = (await response.json()) as T;
			if (requestInfo.method === "GET" && transform) {
				setData(transform(data));
			}
			setData(data);
			setIsLoading(false);
		} else {
			setIsLoading(false);
			setFetchError(response.statusText);
		}
	}, [requestInfo, transform]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return {
		isLoading,
		data,
		fetchError,
	};
};

export default useFetch;
