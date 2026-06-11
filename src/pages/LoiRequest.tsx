import { Navigate } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function LoiRequest() {
    const { localizePath } = useLang();
    return <Navigate to={localizePath('/deal-room/nda-request')} replace />;
}
