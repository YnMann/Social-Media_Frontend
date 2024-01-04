import ChatPart from "./parts/ChatPart";
import ContactsPart from "./parts/ContactsPart";
import HeaderPart from "./parts/HeaderPart";
import InfoPart from "./parts/InfoPart";
import "./styles.scss";

const MainComp = () => {
  var ws = new WebSocket("ws://localhost:8000/u/ws");
  //Triggered when the connection is opened
  ws.onopen = (_) => {
    console.log("Connection open...");
    ws.send("Hello WebSockets!");
  };
  //Triggered when a message is received
  ws.onmessage = (ev) => {
    console.log("Received Message: " + ev.data);
  };
  //Triggered when the connection is closed
  ws.onclose = (_) => {
    console.log("Connection closed.");
  };

  return (
    <section>
      <HeaderPart></HeaderPart>
      <ContactsPart></ContactsPart>
      <ChatPart></ChatPart>
      <InfoPart></InfoPart>
    </section>
  );
};

export default MainComp;
