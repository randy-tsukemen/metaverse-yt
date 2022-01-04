import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div>
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="https://pbs.twimg.com/media/FIGZXB2akAAZvWN?format=jpg&name=900x900"
          />
        </div>
        <div>
          {/* Avatar */}
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          {/* Welcome Message */}
          {/* username */}
          {/* Change username component */}
        </div>
      </div>
    </div>
  );
};

export default Header;
