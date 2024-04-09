import React, { useContext, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { StoreListMapContext } from "@/app/store/page";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
});

const Map = () => {
  const { long, ltd, userLong, userLat } = useContext(StoreListMapContext);

  // State variables to hold marker positions
  const [locationMarkerPosition, setLocationMarkerPosition] = useState(null);
  const [userMarkerPosition, setUserMarkerPosition] = useState(null);

  // Update marker positions when userLong and userLat change
  useEffect(() => {
    setUserMarkerPosition(userLat && userLong ? [userLong, userLat] : null);
  }, [userLong, userLat]);

  // Update location marker position when long and ltd change
  useEffect(() => {
    setLocationMarkerPosition(ltd && long ? [ltd, long] : null);
  }, [ltd, long]);

  const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    if (!isNaN(userLat) && !isNaN(userLong)) {
      map.flyToBounds([locationMarkerPosition, userMarkerPosition], {
        padding: [50, 50],
      });
    } else {
      // Handle the case where userLat or userLong are not valid numbers
    }

    return null;
  };

  return (
    <div className="h-[80vh]">
      <MapContainer
        className="h-[80vh]"
        center={[ltd, long]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <ChangeView zoom={13} />
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Render location marker if position is available */}
        {locationMarkerPosition && (
          <Marker position={locationMarkerPosition}>
            <Popup>You are here.</Popup>
          </Marker>
        )}
        {/* Render user marker if position is available */}
        {userMarkerPosition && (
          <Marker position={userMarkerPosition}>
            <Popup>Shop is here.</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
