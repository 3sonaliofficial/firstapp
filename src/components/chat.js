import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import app_config from "../config";

const Chat = () => {
  const url = app_config.api_url;
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));

  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <div>
      <h1>Chat Component</h1>
    </div>
  );
};

export default Chat;