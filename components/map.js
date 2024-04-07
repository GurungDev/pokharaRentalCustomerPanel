"use client";
import React, { useContext, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { MapContext } from "@/app/boats/[id]/page";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
});

const LocateUserButton = () => {
  const map = useMap();
  const { long, ltd, userLong, distance, setdistance, setuserLong, userLat, setuserLat } =
    useContext(MapContext);
  const locateUser = () => {
    map.locate().on("locationfound", function (e) {
      setuserLong(e.latlng.lng);
      setuserLat(e.latlng.lat);
      const userLocation = L.latLng(e.latlng.lat, e.latlng.lng);
      const storeLocation = L.latLng(ltd, long);
      const distance = userLocation.distanceTo(storeLocation);

      // Adjust the zoom level based on the distance
      let zoomLevel = 13; // Default zoom level
      if (distance > 1000) zoomLevel = 12; // If distance is greater than 1km, zoom out
      if (distance > 5000) zoomLevel = 10; 
      if (distance > 8000) zoomLevel = 8;  
      setdistance((distance / 1000).toFixed(2))
      map.flyTo(e.latlng, zoomLevel);

      L.marker(e.latlng).addTo(map).bindPopup("You are here").openPopup();
    });
  };

  return (
    <button
      onClick={locateUser}
      className="z-[999] right-0 bg-secondary text-white p-2 m-3 rounded-xl bg-opacity-[70%] hover:bg-opacity-[100%] duration-300 absolute"
      type="button"
    >
      Locate me
    </button>
  );
};

const Map = () => {
  const {
    setLtd,
    setLong,
    long,
    ltd,
    userLong,
    setuserLong,
    userLat,
    setuserLat,
  } = useContext(MapContext);

  const LocationMarker = () => {
    return !long && !ltd ? null : (
      <Marker position={[long, ltd]}>
        <Popup>Shop is here.</Popup>
      </Marker>
    );
  };

  const UserMarker = () => {
    return userLat && userLong ? (
      <Marker position={[userLat, userLong]}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null;
  };

  return !long && !ltd ? null : (
    <div className="h-[80vh]">
      <MapContainer
        className="h-[80vh]"
        center={[long, ltd]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <LocateUserButton />
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <UserMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
