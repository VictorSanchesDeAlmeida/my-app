'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {

    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login falhou');
            }

            const data = await response.json();
            document.cookie = `accessToken=${data.accessToken}; path=/; max-age=${data.expiresIn};`;

            // Redireciona após login
            router.push('/about');
        } catch (err) {
            setErrorMsg('Usuário ou senha inválidos');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <div>
                    <label>Usuário</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ width: '100%', marginBottom: 10 }}
                    />
                </div>

                <div>
                    <label>Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', marginBottom: 10 }}
                    />
                </div>

                {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

                <button type="submit" style={{ width: '100%' }}>
                    Entrar
                </button>
            </form>
        </div>
    )
}