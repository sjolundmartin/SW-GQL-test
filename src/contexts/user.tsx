import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserContextType = {
  username: string;
  password: string;
  setUsername?: (username: string) => void;
  setPassword?: (password: string) => void;
};

export const UserContext = createContext<UserContextType>({
  username: "",
  password: "",
});

export default function UserProvider(props: {
  children: React.ReactNode;
  username: string;
  password: string;
}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState(props.username);
  const [password, setPassword] = useState(props.password);

  if (!username) {
    navigate("");
  }

  return (
    <div>
      <UserContext.Provider
        value={{ username, password, setUsername, setPassword }}
      >
        {props.children}
      </UserContext.Provider>
    </div>
  );
}
