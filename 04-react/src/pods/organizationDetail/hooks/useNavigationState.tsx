import { useParams } from 'react-router';

export const useNavigationState = () => {
    const { userId } = useParams<{ userId: string }>();

    return { userId };
}