import ChatPart from "./parts/ChatPart";
import { useEffect, useState } from "react";
import SocketsService from "../../services/SocketsService";
import ContactsPart from "./parts/ContactsPart";
import HeaderPart from "./parts/HeaderPart";
// import InfoPart from "./parts/InfoPart";
import "./styles.scss";
import { useGetProfileMutation } from "../../services/UserService";

const MainComp = () => {
  const [connected, setConnected] = useState(false);
  const [getUserProfile] = useGetProfileMutation();

  useEffect(() => {
    if (!connected) {
      fetchUserProfile();
    }
  }, [connected]);

  const fetchUserProfile = async () => {
    const response = await getUserProfile({});
    console.log("RES-PROFILE", response);

    const ws = new SocketsService();
    ws.connectWS(response);
    setConnected(true);
  };

  return (
    <section className="app">
      <HeaderPart></HeaderPart>
      <div className="wrapper">
        <ContactsPart></ContactsPart>
        <ChatPart></ChatPart>
        {/* <InfoPart></InfoPart> */}
      </div>
    </section>
  );
};

export default MainComp;
