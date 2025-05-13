import React from "react";
import Container from "./Container";
import useUserStore from "../../../store/useUserStore";

const Header = () => {
  const { user } = useUserStore();
  return (
    <header className=" text-start mb-5">
      <Container>
        <div className=" flex justify-between">
          <div>
            <h1 className=" text-3xl font-bold max-sm:text-xl">MMS IT</h1>
            <p className=" text-stone-500 max-sm:text-xs">Voucher App</p>
          </div>
          <div className=" flex gap-5 items-center">
            <img
              className="size-12 max-sm:size-8 rounded-full"
              src={
                user?.profile_image ||
                "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              }
              alt="user profile"
            />

            <div>
              <h1 className=" text-3xl font-bold max-sm:text-lg">{user?.name}</h1>
              {/* <p className=" text-stone-500">Unknown</p> */}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
