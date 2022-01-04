import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>Login</h1>
      <div
        className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center
      space-y-4"
      >
        <Image
          className="object-cover rounded-2xl"
          src="https://pbs.twimg.com/media/FHIKUtlaAAEukIA?format=jpg&name=large"
          alt="Metaverse Challenge"
          width={200}
          height={290}
        />
        <button
          onClick={authenticate}
          className="bg-green-400 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://pbs.twimg.com/media/FHDbjjMaQAIQfEL?format=jpg&name=large"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
