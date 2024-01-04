const log = console.log;

export default class SocketsService {
  ws = new WebSocket("ws://localhost:8000/ws");

  connectWS = () => {
    //Triggered when the connection is opened
    this.ws.onopen = (_) => {
      log("%cWS connection open", "color: yellow");
      // get contacts from server
      this.ws.send("GET_CONTACTS");
    };
    //Triggered when a message is received
    this.ws.onmessage = (ev) => {
      log("Received Message: " + ev.data);
    };

    return this.ws;
  };

  disconnectWS = () => {
    this.ws.close();

    //Triggered when the connection is closed
    this.ws.onclose = (_) => {
      log("%cWS connection closed", "color: yellow");
    };
  };

  sendMessage = (ws: WebSocket, msg: any) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(msg));
    }
  };

  // getContacts = (ws: WebSocket, msg: any) => {};
}
