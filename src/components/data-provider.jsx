import { Center, Spinner } from '@chakra-ui/react';
import { createContext, useState, useEffect, useContext } from 'react';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db, auth } from '../Utilities/firebase'; 
import { signInAnonymously } from 'firebase/auth';

const DataProviderContext = createContext({
    categories: [],
    items: [],
});

export const useDataProvider  = () => useContext(DataProviderContext)

export const DataProvider = ({
    children
}) => {
    const [isReady, setIsReady] = useState(false);
    const [restaurantInfo, setRestaurantInfo] = useState();
    const [categories, setCategories] = useState();
    const [items, setItems] = useState();

    const fetchCategories = async () => {
        const categoriesSnapshot = await getDocs(collection(db, 'category'));
        const dbCategories = [];
        categoriesSnapshot.forEach(category => dbCategories.push(category.data()))
        setCategories(dbCategories);
    };

    const fetchItems = async () => {
        const itemsSnapshot = await getDocs(collection(db, 'item'));
        const dbItems = [];
        itemsSnapshot.forEach(item => dbItems.push(item.data()))
        setItems(dbItems);
    };


    const fetchRestaurantInfo = async () => {
        
    }; 

    const fetchData = async () => {
        await signInAnonymously(auth);
       await fetchRestaurantInfo();
       await fetchCategories();
       await fetchItems();
       setIsReady(true);

    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <DataProviderContext.Provider value={{ restaurantInfo, categories, items }}>
            {isReady ? children : (
                <Center height='100vh'>
                    <Spinner />
                </Center>
            )}
        </DataProviderContext.Provider>
    );
};