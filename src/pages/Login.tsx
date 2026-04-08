import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    function handleSubmit(formData: FormData) {
        const email = formData.get("email");
        const password = formData.get("password");

        if (email === 'alice@example.com' && password === 'Secret123!') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/profile');
        }
    };

    return (
        <>
            <div>
                <h1>Log in</h1>
                <form action={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
                    </div>

                    <button type="submit">Log in</button>
                </form>
            </div>
        </>
    );
}
