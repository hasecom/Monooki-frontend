export const ssgGetFetch = async <T>(endPoint: string): Promise<T> => {
	const url = process.env.NEXT_PUBLIC_API_URL;
	if (!url) return Promise.reject(new Error("API URL is not defined"));
	const res = await fetch(url + endPoint, {
		cache: "force-cache"
	});
	return res.json();
}
