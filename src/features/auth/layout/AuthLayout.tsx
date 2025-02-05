import React from "react";

type TCardProps = {
  title: string;
  children: React.ReactNode;
};

export const AuthLayout: React.FC<TCardProps> = (props) => {
  return (
    <section className="flex md:min-h-screen justify-center items-center  bg-primary-950">
      <div className="rounded-r-3xl bg-violet-700 h-screen w-full overflow-hidden md:block hidden">
        <p className="text-4xl ms-10 mt-4 text-white">
          Trevorblades
        </p>
      </div>
      <div className="space-y-4 h-screen w-full flex justify-center items-center">
        <section className="w-3/4 md:w-8/12  mx-auto space-y-4 ">
          <section className="text-center">
            <p className="text-xl block md:hidden lg:hidden text-violet-700">
              Trevorblades
            </p>
            <h2 className="font-bold text-3xl text-violet-700 text-center">
              {props.title}
            </h2>
          </section>
          <div className="space-y-3">{props.children}</div>
        </section>
      </div>
    </section>
  );
};
