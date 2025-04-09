"use client";

import { useState } from "react";
import { loginForm, LoginFormError } from "@/lib/auth";

export default function Login({
  loginAction,
}: {
  loginAction: (e: { email: string; password: string }) => Promise<void>;
}) {
  const [errorMap, setetErrorMap] = useState<LoginFormError>();

  return (
    <div className="p-4">
      <h1>Login</h1>
      <form
        action={(formData: FormData) => {
          const form = loginForm.safeParse(
            Object.fromEntries(formData.entries()),
          );

          if (form.error) {
            setetErrorMap(form.error.flatten());
            return;
          }

          loginAction(form.data);
        }}
      >
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Login</legend>
          <label className="fieldset-label">Usuário</label>
          <input type="text" required className="input" />
          {errorMap?.fieldErrors.email}

          <label className="fieldset-label">Senha</label>
          <input type="password" required className="input" />
          {errorMap?.fieldErrors.password}
        </fieldset>
        <button type="submit" style={{ width: "100%" }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
