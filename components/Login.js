import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-black relative text-white">
      <h1>Login</h1>
      <div>
        {/* Logo */}

        {/* login button */}
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
