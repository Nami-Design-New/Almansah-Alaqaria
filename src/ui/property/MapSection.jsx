import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";
const position = { lat: 39.97500878240634, lng: 22.66261207449476 };

export default function MapSection() {
  const { t } = useTranslation();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return (
    <div className="w-100 p-2 mt-4">
      <div className="map_section">
        <h3>{t("whereYouWillBe")}</h3>
        <p>Cherronisos, Greece</p>

        <div className="map">
          {isLoaded ? (
            <GoogleMap
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                disableDefaultUI: true,
                clickableIcons: false,
              }}
              zoom={14}
              center={position}
              mapContainerStyle={{ width: "100%", height: "100%" }}
            >
              <Marker icon="/public/icons/mapMarker.svg" position={position} />
            </GoogleMap>
          ) : (
            <div className="map_loader">
                <i className="fa-regular fa-spinner fa-spin"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
