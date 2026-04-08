import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (isAuthenticated !== 'true') {
            navigate('/login');
        }
    }, [navigate]);

    return <>
        <h1>Profile page</h1>
    </>;
}4