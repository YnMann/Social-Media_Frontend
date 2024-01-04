// import ChatPart from "./parts/ChatPart";
import SocketsService from "../../services/SocketsService";
import ContactsPart from "./parts/ContactsPart";
import HeaderPart from "./parts/HeaderPart";
// import InfoPart from "./parts/InfoPart";
import "./styles.scss";

const MainComp = () => {
  const ws = new SocketsService();
  ws.connectWS();

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
