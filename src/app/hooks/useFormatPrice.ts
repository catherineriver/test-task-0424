import { useCallback } from 'react';

const useFormatPrice = () => {
    const formatPrice = useCallback((price: string | null) => {
        return price ? price.replace(/&euro;/g, "€") : '';
    }, []);

    return { formatPrice };
};

export default useFormatPrice;
