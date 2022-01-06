import { ByMoralis, useMoralis } from "react-moralis";

const Messages = () => {
  const { user } = useMoralis();
  return (
    <div className="pb-56">
      <div>
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div>{/* Each Message */}</div>

      <div>{/* SendMessage */}</div>

      <div className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}</p>
      </div>
    </div>
  );
};

export default Messages;
