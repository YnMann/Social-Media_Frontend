import "./chat.sass";

const ChatComp = () => {
  return (
    <div className="chat-app">
      <aside className="sidebar">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        <ul className="contact-list">
          {/* Repeat this list item for each contact */}
          <li className="contact">
            <div className="avatar">{/* Avatar image here */}</div>
            <div className="contact-info">
              <h4 className="name">Vincent Porter</h4>
              <p className="last-message">left 7 mins ago</p>
            </div>
          </li>
        </ul>
      </aside>
      <section className="chat-window">
        <header className="chat-header">
          {/* Chat header information here */}
        </header>
        <div className="chat-history">
          {/* Repeat for each message */}
          <div className="message">
            <p className="text">
              Hi Aiden, how are you? How is the project coming along?
            </p>
            <span className="time">10:10 AM, Today</span>
          </div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Enter text here..." />
        </div>
      </section>
    </div>
  );
};

export default ChatComp;