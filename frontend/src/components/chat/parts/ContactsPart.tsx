import { useEffect, useState } from "react";
import "../styles.scss";
import { useGetContactsMutation } from "../../../services/UserService";
import NoPhoto from "../../../assets/no_user_photo.jpeg";

const ContactsPart = () => {
  const [contacts, setContacts] = useState([]);
  const [getContacts] = useGetContactsMutation();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getContacts({});

        if ("data" in response) setContacts(response.data.contacts);
      } catch (e) {
        console.error("Error fetching contacts:", e);
      }
    };

    // Вызываем fetchContacts при монтировании компонента
    fetchContacts();

    const intervalId = setInterval(() => {
      // Вызываем fetchContacts каждые 5 секунд
      fetchContacts();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [getContacts]);
  console.log("CONTACTS", contacts)

  return (
    <div className="conversation-area">
      {contacts &&
        contacts.map((c: any) => {
          return (
            <div className="msg online">
              {c.PhotoURL !== "" && (
                <img
                  className="msg-profile"
                  src={c.PhotoURL}
                  alt="user_photo"
                />
              )}
              {c.PhotoURL === "" && (
                <img className="msg-profile" src={NoPhoto} alt="user_photo" />
              )}
              <div className="msg-detail">
                <div className="msg-username">
                  {c.FirstName} {c.LastName}
                </div>
                <div className="msg-content">
                  <span className="msg-message">What time was our meet</span>
                  <span className="msg-date">20m</span>
                </div>
              </div>
            </div>
          );
        })}
      <button className="add"></button>
      <div className="overlay"></div>
    </div>
  );
};

export default ContactsPart;
