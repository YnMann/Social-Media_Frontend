import "../styles.scss";

const ContactsPart = () => {
  return (
    <div className="wrapper">
      <div className="conversation-area">
        
            <div className="msg online">
            <img
                className="msg-profile"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
                alt=""
            />
            <div className="msg-detail">
                <div className="msg-username">Madison Jones</div>
                <div className="msg-content">
                <span className="msg-message">What time was our meet</span>
                <span className="msg-date">20m</span>
                </div>
            </div>
            </div>
        <button className="add"></button>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default ContactsPart;
