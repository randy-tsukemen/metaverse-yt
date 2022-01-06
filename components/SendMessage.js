import { useMoralis } from "react-moralis";

const SendMessage = () => {
  const { user, Moralis } = useMoralis();
  return (
    <form
      className="flex fixed bottom-10 w-11/12 bg-black opacity-80 px-6 py-4
      max-w-2xl shadow-xl rounded-full border-4 border-blue-400"
    >
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500"
        type="text"
        placeholder={`Type a message... ${user.getUsername()}`}
      />
      <button className="font-bold text-pink-500">Send</button>
    </form>
  );
};

export default SendMessage;
