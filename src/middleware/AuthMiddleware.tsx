import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import supabase from "@/lib/supabaseClient";
import { useProfile } from "@/store/useStore";
import { IProfile } from "@/types/profile";

export const AuthMiddleware = () => {
  const navigate = useNavigate();
  const { setUserProfile, resetUserProfile } = useProfile();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        resetUserProfile();
        navigate("/login", { replace: true });
      } else {
        const user = data.session.user;
        setUserProfile(user.user_metadata as IProfile);
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
  }, [navigate, resetUserProfile, setUserProfile]);

  return <Outlet />;
};
