import { Admin as RA, Resource } from 'react-admin';
import { FirebaseDataProvider, FirebaseAuthProvider } from 'react-admin-firebase';

import { CategoryProps } from '../components/resources/category';
import { ItemProps } from '../components/resources/item';
import { firebaseConfig } from '../Utilities/firebase';

const options = {
    logging: true, 
    persistence: 'session', 
    lazyLoading: {
        enabled: true,
    }, 
    watch: ['orders'],
}; 

const dataProvider = FirebaseDataProvider(firebaseConfig, options); 
const authProvider = FirebaseAuthProvider(firebaseConfig);

export default function Admin() {
    return (
        <RA authProvider={authProvider} 
        basename='/admin' 
        dataProvider={dataProvider} 
        >

            <Resource {...CategoryProps} />
            <Resource {...ItemProps} />
        </RA>
    );
};


