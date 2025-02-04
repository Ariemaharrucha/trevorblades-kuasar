import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
              <div>
                <Label className="font-medium text-lg ">Username</Label>
                <Input placeholder="Username"></Input>
              </div>
              <div>
                <Label className="font-medium text-lg ">Password</Label>
                <Input placeholder="Password"></Input>
              </div>
              <div>
                <Button className="bg-white px-8 w-full" variant={"outline"}>
                  Login
                </Button>
              </div>
              <p className="text-center">Or</p>
              <div>
                <Button className="bg-white px-8 w-full" variant={"outline"}>
                  Google
                </Button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
