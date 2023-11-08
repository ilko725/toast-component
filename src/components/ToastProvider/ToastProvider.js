import React from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [messagesList, setMessagesList] = React.useState([]);

  function addMessage(messageText, messageVariant) {
    const newMessages = [
      ...messagesList,
      {
        id: Math.random(),
        message: messageText,
        variant: messageVariant,
      },
    ];
    setMessagesList(newMessages);
  }

  function dismissMessage(id) {
    const newMessages = messagesList.filter((message) => {
      return message.id !== id;
    });

    setMessagesList(newMessages);
  }

  const handleEscape = React.useCallback(() => {
    setMessagesList([]);
  }, []);

  useEscapeKey(handleEscape);

  return (
    <ToastContext.Provider
      value={{ messagesList, setMessagesList, addMessage, dismissMessage }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
