import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const setUsername = () => {
    const username = prompt(
      `Enter a new username (current:, ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({ username });
  };
  return (
    <form className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-pink-700"
      >
        Change your Username
      </button>
    </form>
  );
};

export default ChangeUsername;
