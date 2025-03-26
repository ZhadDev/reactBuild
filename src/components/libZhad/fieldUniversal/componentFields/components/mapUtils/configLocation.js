import { useEffect, useState } from "react";

export const useGeoFunctions = (type) => {
  let target;
  let optionsGeo;

  /**
   * @enableHighAccuracy {bool} activa la presion alta
   * @maximumAge {number} vida maxima de la coordenada de precision, hasta este tiempo el valor se guardara en cache, pasado ese tiempo si vuelves a esta funcion volvera a solicitar la posicion al navegador.
   * @timeout es el tiempo de espera antes de dar el error de que no encuentra la ubicación.
   */
  optionsGeo = {
    enableHighAccuracy: true, // watch false || current true
    maximumAge: 0, // watch 0 || current 0 - 30000
    timeout: 5000, // watch 5000 || current 5000 - 27000
  };

  target = {
    latitude: 0,
    longitude: 0,
  };

  const [crd, setCrd] = useState(null);
  const [errorMsn, setErrorMsn] = useState(null);
  const [idGeolocation, setIdGeolocation] = useState(null);

  function success(posicion) {
    debugger;
    const crds = posicion.coords;
    setCrd(crds);
    console.log("map coords: ", crds);

    if (
      target.latitude === crds.latitude &&
      target.longitude === crds.longitude
    ) {
      console.log("Felicidades, has llegado a tu destino.");
      navigator.geolocation.clearWatch(idGeolocation);
    }
  }

  function error(err) {
    console.error(`ERROR(${err.code}): ${err.message}`);
    setErrorMsn(`ERROR(${err.code}): ${err.message}`);
    alert("No hay posición disponible.");
  }

  useEffect(() => {
    if (type === 0) {
      // WATCH O TRACKEO
      const id = navigator.geolocation.watchPosition(
        success,
        error,
        optionsGeo
      );
      setIdGeolocation(id);
    }

    if (type === 1) {
      // CURRENT
      navigator.geolocation.getCurrentPosition(success, error, optionsGeo);
    }
  }, []);

  return { crd, errorMsn, idGeolocation };
};
