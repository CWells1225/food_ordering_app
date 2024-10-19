import { ListGuesser, Admin as RA, Resource } from 'react-admin';
import { FirebaseDataProvider, FirebaseAuthProvider } from 'react-admin-firebase';

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
        <RA authProvider={authProvider} basename='/admin' dataProvider={dataProvider} >
            <Resource name="items" list={ListGuesser} />
        </RA>
    )

};

