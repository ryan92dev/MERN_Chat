import io from "socket.io-client";

let socket = null;

export const connectSocketServer = ({ user, token }) => {
  socket = io("http://localhost:8000", {
    auth: {
      token: token,
    },
  });

  socket.on("connect", () => {
    console.log("Connected to socket server");
  });
};
