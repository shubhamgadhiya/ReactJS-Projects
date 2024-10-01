import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/f704c0a7d4cd897f5a85746b/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                console.log('API Response:', res); // Log the response data
                setData(res.conversion_rates); 
            })
            .catch((error) => {
                console.error('Error fetching currency data:', error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
