import { useParams, useLocation } from 'react-router';

export const useNavigationState = () => {
    const location = useLocation();
    const { userId } = useParams<{ userId: string }>();

    const organization = location.state?.organization;
    const pageIndex = location.state?.pageIndex;

    return { userId, organization, pageIndex };
}