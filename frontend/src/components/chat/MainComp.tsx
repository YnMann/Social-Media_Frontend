// import ChatPart from "./parts/ChatPart";
import { useState } from "react";
import SocketsService from "../../services/SocketsService";
import ContactsPart from "./parts/ContactsPart";
import HeaderPart from "./parts/HeaderPart";
// import InfoPart from "./parts/InfoPart";
import "./styles.scss";

const MainComp = () => {
  const [connected, setConnected] = useState(false);

  if (!connected) {
    const ws = new SocketsService();
    ws.connectWS();
    setConnected(true);
  }

  return (
    <section>
      <HeaderPart></HeaderPart>
      <ContactsPart></ContactsPart>
      {/* <ChatPart></ChatPart> */}
      {/* <InfoPart></InfoPart> */}
    </section>
  );
};

export default MainComp;
