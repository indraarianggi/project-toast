import React from "react";
function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.key === "Escape") {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [callback]);
}

export default useEscapeKey;
