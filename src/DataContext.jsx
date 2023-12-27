import React, { createContext, useContext, useState, useCallback } from 'react';

// Create a context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const addData = useCallback((newData) => {
        setData((prevData) => [...prevData, newData]);
    }, []);

    const updateData = useCallback((index, updatedData) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData[index] = updatedData;
            return newData;
        });
    }, []);

    return (
        <DataContext.Provider value={{ data, addData, updateData }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to use the data context
export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
