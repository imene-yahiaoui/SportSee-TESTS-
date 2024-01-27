import React, { useState, useEffect } from "react";
import { CallBackend } from "../../helpers/services/callBackend";

function CheckBackend() {
  const [isAccessible, setIsAccessible] = useState<boolean | null>(null);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const isBackendAvailable = await CallBackend();
        setIsAccessible(isBackendAvailable);
      } catch (error) {
        setIsAccessible(false);
        console.error("Erreur lors de la vérification du backend :", error);
      }
    };

    checkBackend();
  }, []);

  return (
    <div>
      {isAccessible === null && (
        <p>Vérification de l'accessibilité du backend...</p>
      )}
      {isAccessible === true && <p>Le backend est accessible.</p>}
      {isAccessible === false && <p>Le backend n'est pas accessible.</p>}
    </div>
  );
}

export default CheckBackend;
