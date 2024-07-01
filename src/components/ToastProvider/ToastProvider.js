import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => {
    setToasts([]);
  });

  const addToast = (message, variant) => {
    setToasts((prev) => [
      ...prev,
      { id: crypto.randomUUID(), message, variant },
    ]);
  };

  const dismissToast = (toastId) => {
    setToasts((prev) => prev.filter((t) => t.id !== toastId));
  };

  const contextValue = React.useMemo(() => {
    return {
      toasts,
      addToast,
      dismissToast,
    };
  }, [toasts]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
