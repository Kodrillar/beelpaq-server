import admin, { ServiceAccount } from 'firebase-admin';
import beelpaqServiceAccount from '../../beelpaq-service-account.json';

const serviceAccount: ServiceAccount = beelpaqServiceAccount as ServiceAccount;

admin.initializeApp({credential: admin.credential.cert(serviceAccount)})

export default admin;

