import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const BUENOS_AIRES: [number, number] = [-34.6037, -58.3816];

const purpleMarker = L.divIcon({
  html: `<div style="width:13px;height:13px;background:#831ea3;border-radius:50%;border:2px solid #d6a5e4;box-shadow:0 0 14px 4px rgba(131,30,163,0.65)"></div>`,
  className: "",
  iconSize: [13, 13],
  iconAnchor: [6, 6],
});

const LocationMap = () => (
  <MapContainer
    center={BUENOS_AIRES}
    zoom={12}
    style={{ height: "100%", width: "100%" }}
    zoomControl={false}
    dragging={false}
    scrollWheelZoom={false}
    doubleClickZoom={false}
    touchZoom={false}
    keyboard={false}
    attributionControl={false}
  >
    <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
    <Marker position={BUENOS_AIRES} icon={purpleMarker} />
  </MapContainer>
);

export default LocationMap;
