import { useState } from 'react';

function useSort(data, config){
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const setSortColumn = (label) => {
        if (sortBy && sortBy !== label) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }


        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const aValue = sortValue(a);
            const bValue = sortValue(b);
            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof aValue === 'string') {
                return aValue.localeCompare(bValue) * reverseOrder;
            } else {
                return (aValue - bValue) * reverseOrder;
            }
        })
    }

    return { sortedData, setSortColumn, sortOrder, sortBy };
}

export default useSort;