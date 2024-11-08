import { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import { SimpleForm, TextInput, TimeInput, CheckboxGroupInput, useNotify } from 'react-admin';
import { PAYMENT_METHODS } from '../../Utilities/constants';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../Utilities/firebase';

export const Info = () => {
    const notify = useNotify(); 
    const restaurantRef = doc(db, 'restaurant', 'info');
    const [defaultValues, setDefaultValues] = useState();

    const handleSubmit = async(data) => {
        await setDoc(restaurantRef, data);
        notify(`Restaurant information updated`, { type: 'success' });
    };

    const fetchData = async () => {
        const snapshot = await getDoc(restaurantRef)
        setDefaultValues(snapshot.data() || {})
    }

    useEffect(() => {
        fetchData();

    }, []);

    if (!defaultValues) return null;

    return (
        <Card>
            <SimpleForm defaultValues={defaultValues} sanitizeEmptyValues onSubmit={handleSubmit}>
                <TextInput source='name' fullWidth />
                <TextInput source='address' fullWidth />
                <TextInput source='phone' fullWidth />
                <TimeInput source='openingTime' fullWidth/>
                <TimeInput source='closingTime' fullWidth/>
                <CheckboxGroupInput source='PaymentMethods' choices={PAYMENT_METHODS} />
            </SimpleForm>
        </Card>
    )
}
