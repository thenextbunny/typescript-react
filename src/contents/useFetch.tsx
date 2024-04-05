import { useEffect, useRef, useState } from "react";

const useFetch = <T,>(url: RequestInfo, options?: RequestInit) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);

    const optionsRef = useRef(options);
    optionsRef.current = options;

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        const handler = async () => {
            setLoading(true);
            setData(null);

            try {
                const response = await fetch(url, {
                    ...optionsRef.current,
                    signal,
                });

                const data = (await response.json()) as T;

                if (!signal.aborted) setData(data);
            } catch (error) {
                if (!signal.aborted && error instanceof Error) setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        handler();

        return () => controller.abort();
    }, [url]);

    return { data, error, loading };
};
