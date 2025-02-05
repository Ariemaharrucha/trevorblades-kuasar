import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import supabase from "@/lib/supabaseClient";

export const AuthMiddleware = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate("/login", { replace: true });
      }
    };

    checkSession();

    const { data: {subscription} } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/login", { replace: true });
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate]);

  return <Outlet />;
};
