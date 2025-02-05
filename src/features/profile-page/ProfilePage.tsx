import { useProfile } from "@/store/useStore";
import { Link } from "react-router-dom";

export const ProfilePage = () => {
  const { userProfile } = useProfile();
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <Link
        to={"/trevo"}
        className="bg-violet-600 text-white font-semibold px-3 py-2 rounded-md"
      >
        Back
      </Link>
      <h1 className="text-4xl font-bold text-center mb-6 mt-4">
        {userProfile?.name}
      </h1>

      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="col-span-2 md:col-span-1 mx-auto rounded-full overflow-hidden size-40">
          <img src={userProfile?.avatar_url} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
        <p className="col-span-2 md:col-span-1 text-lg font-medium">
          email:{" "}
          <span className="font-normal text-gray-700">
            {userProfile?.email}
          </span>
        </p>
        </div>
      </div>
    </div>
  );
};
