import { useCallback, useEffect, useState } from "react";

const useFetch = <T>(url: string, transform?: (data: any) => T) => {
	const [isLoading, setIsLoading] = useState(false);
	const [fetchError, setFetchError] = useState<string | null>(null);
	const [data, setData] = useState<T | null>(null);

	const fetchData = useCallback(
		async (requestInit?: RequestInit) => {
			setIsLoading(true);
			const response = await fetch(url, requestInit);

			if (response.ok) {
				if (!requestInit || requestInit.method === "GET") {
					const data = (await response.json()) as T;
					if (transform) {
						setData(transform(data));
					} else {
						setData(data);
					}
				}
			} else {
				setFetchError(response.statusText);
			}
			setIsLoading(false);
		},
		[transform]
	);

	return {
		isLoading,
		data,
		fetchData,
		fetchError,
	};
};

export default useFetch;
