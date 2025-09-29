import { useLocation } from 'react-router-dom';

export const useNavigationState = () => {
    const location = useLocation();

    const initialOrganization = location.state?.organization || 'lemoncode';
    const initialPageIndex = location.state?.pageIndex || 1;

    return { initialOrganization, initialPageIndex };
}
