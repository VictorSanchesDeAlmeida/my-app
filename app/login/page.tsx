import Login from "@/components/login";
import { loginForm, LoginFormData } from "@/lib/auth";

export default function LoginRoute() {
  async function handleLogin(e: LoginFormData) {
    "use server";
    loginForm.safeParseAsync(e).then(async (form) => {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Login falhou");
      }

      const data = await response.json();
      document.cookie = `accessToken=${data.accessToken}; path=/; max-age=${data.expiresIn};`;
    });
  }

  return <Login loginAction={handleLogin} />;
}
