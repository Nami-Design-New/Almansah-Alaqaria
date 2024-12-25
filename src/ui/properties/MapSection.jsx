import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import PropertyCard from "./../cards/PropertyCard";

export default function MapSection({ setViewMap }) {
  const { t } = useTranslation();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const defaultPosition = { lat: 21.285407, lng: 39.237551 };

  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(8);
  const [userLocation, setUserLocation] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const properties = [
    { position: { lat: 21.285407, lng: 39.237551 } },
    { position: { lat: 21.4245, lng: 39.8262 } },
    { position: { lat: 23.8859, lng: 45.0792 } },
    { position: { lat: 26.4207, lng: 50.0888 } },
    { position: { lat: 24.7136, lng: 46.6753 } },
    { position: { lat: 21.1702, lng: 39.784 } },
    { position: { lat: 18.235, lng: 42.584 } },
    { position: { lat: 26.4333, lng: 50.1033 } },
    { position: { lat: 27.2558, lng: 49.8321 } },
    { position: { lat: 25.1242, lng: 45.7715 } },
    { position: { lat: 23.6345, lng: 46.722 } },
    { position: { lat: 19.611, lng: 42.4565 } },
  ];

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 1, 21));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 1, 0));

  const handleDetectLocation = useCallback(() => {
    if (!isLoaded) {
      alert("Google Maps API is not loaded yet.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const position = { lat: coords.latitude, lng: coords.longitude };
        setUserLocation(position);
        setZoom(12);
        if (map) {
          map.panTo(position);
        }
      },
      () => alert("Unable to retrieve your location.")
    );
  }, [isLoaded, map]);

  return (
    <section className="map_section">
      <div className="map">
        {isLoaded ? (
          <>
            <GoogleMap
              onLoad={setMap}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                zoomControl: false,
                fullscreenControl: false,
                gestureHandling: "greedy",
              }}
              zoom={zoom}
              center={userLocation || defaultPosition}
              mapContainerStyle={{ width: "100%", height: "100%" }}
            >
              {userLocation && (
                <Marker
                  position={userLocation}
                  icon={{
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: "#4285F4",
                    fillOpacity: 1,
                    strokeWeight: 2,
                    strokeColor: "white",
                    strokeOpacity: 1,
                  }}
                />
              )}

              {properties.map((property, index) => (
                <Marker
                  key={index}
                  position={property.position}
                  onClick={() => setActiveMarker(index)}
                >
                  {activeMarker === index && (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <PropertyCard />
                    </InfoWindow>
                  )}
                </Marker>
              ))}
            </GoogleMap>

            <div className="map-controls">
              <button className="control-btn" onClick={handleDetectLocation}>
                <i className="fa-solid fa-location-arrow"></i>
              </button>
              <button className="control-btn" onClick={handleZoomIn}>
                <i className="fa-regular fa-plus"></i>
              </button>
              <button className="control-btn" onClick={handleZoomOut}>
                <i className="fa-regular fa-minus"></i>
              </button>
            </div>
          </>
        ) : (
          <div className="map_loader">
            <i className="fa-regular fa-spinner fa-spin"></i>
          </div>
        )}
      </div>
      <button className="view_map" onClick={() => setViewMap(false)}>
        <div className="icon">
          <img src="/icons/listing.svg" alt="map" className="to_dark" />
        </div>
        {t("viewListing")}
      </button>
    </section>
  );
}
