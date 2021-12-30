import { useEffect, useState } from "react";
import feathers from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";

function useSocket(url: string) {
  const [socket, setSocket] = useState<feathers.Application<any> | null>(null);

  useEffect(() => {
    if (socket == null) {
      const socket = io(url);
      const app = feathers();

      // Set up Socket.io client with the socket
      app.configure(socketio(socket));

      // Receive real-time events through Socket.io
      //app.on("connect", () => console.log(`Connected to server: ${socket.id}`));
      app.on("connection", () => {
        console.log("We've connected");
      });

      setSocket(app);
    }

    // should only run once and not on every re-render,
    // so pass an empty array
  }, []);

  return socket;
}

export default useSocket;
