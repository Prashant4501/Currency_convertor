import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates)) // Set rates instead of res[currency]
            .catch((error) => console.error("Error fetching currency info:", error));
    }, [currency]);

    console.log(data); // Useful for debugging
    return data;
}

export default useCurrencyInfo;
