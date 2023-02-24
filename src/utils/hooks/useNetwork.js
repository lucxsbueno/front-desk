import { useState, useEffect } from "react";

const useNetwork = () => {
  const [status, updateStatus] = useState({ online: navigator.onLine });

  useEffect(() => {
    const handleOnline = () => {
      updateStatus({ online: true });
    };

    const handleOffline = () => {
      updateStatus({ online: false });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      setInterval(() => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      }, 5000);
    };
  }, []);

  return status;
};

export default useNetwork;
