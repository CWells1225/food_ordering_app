import {React} from 'react';
import { Box } from '@chakra-ui/react'; 
import { useDataProvider } from '../components/data-provider';


export default function Menu() {
    const { categories, items } = useDataProvider()
    return (
        <Box>
            <p> Menu page</p>
            {categories.map((category) => (
            <p> {category.title} </p>
            ))}
            {items.map((item) => (
            <p> {item.label} </p>
            ))}
            
        </Box>
    );
};
