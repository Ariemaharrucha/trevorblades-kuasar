import supabase from "@/lib/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { AuthLayout } from "../layout/AuthLayout";

export const Login = () => {
  return (
    <AuthLayout title="Login">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google"]}
        redirectTo="http://localhost:5173/trevo"
      ></Auth>
    </AuthLayout>
  );
};
