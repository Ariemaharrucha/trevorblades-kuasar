import supabase from "@/lib/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export const Login = () => {
  return (
    <div>
      <section className="flex md:min-h-screen justify-center items-center  bg-primary-950">
        <div className="rounded-r-3xl bg-violet-700 h-screen w-full overflow-hidden md:block hidden"></div>
        <div className="space-y-4 h-screen w-full flex justify-center items-center">
          <section className="md:w-8/12  mx-auto space-y-4 ">
            <section className="text-center">
              <a className="text-xl text-violet-700" href="#">
                Trevorblades
              </a>
              <h2 className="font-bold text-3xl text-violet-700 text-center">
                Login
              </h2>
            </section>
            <div className="space-y-3">
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={["google"]}
                redirectTo="http://localhost:5173/trevo"
              ></Auth>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
