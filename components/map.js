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

  const locateUser = () => {
    map.locate();
  };

  return (
    <button
      onClick={locateUser}
      className="  z-[999] right-0 bg-secondary text-white p-2 m-3 rounded-xl bg-opacity-[70%] hover:bg-opacity-[100%] duration-300 absolute"
      type="button"
    >
      Locate me
    </button>
  );
};

const Map = () => {
  const { setLtd, setLong, long, ltd } = useContext(MapContext);

  const LocationMarker = () => {
    return !long && !ltd ? null : (
      <Marker position={[long, ltd]}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return !long && !ltd ? null : (
    <div className="h-[40vh]">
      <h2>Location</h2>
      <MapContainer
        className="h-[40vh]"
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
      </MapContainer>
    </div>
  );
};

export default Map;
