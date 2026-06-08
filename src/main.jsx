import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';

const reports = [
  {
    id: 'KTR-0001',
    location: 'Agoe',
    city: 'Lome',
    position: [6.2047, 1.2255],
    eventType: 'Flood',
    severity: 'High',
    status: 'Pending',
    description: 'Water is blocking the road and entering nearby houses.'
  },
  {
    id: 'KTR-0002',
    location: 'Baguida',
    city: 'Lome',
    position: [6.1656, 1.3151],
    eventType: 'Heavy rain',
    severity: 'Medium',
    status: 'Unverified',
    description: 'Heavy rainfall and early water accumulation near homes.'
  },
  {
    id: 'KTR-0003',
    location: 'Tsevie',
    city: 'Zio',
    position: [6.4261, 1.2133],
    eventType: 'Blocked drain',
    severity: 'Medium',
    status: 'Pending',
    description: 'Drainage channel is blocked and water is rising.'
  },
  {
    id: 'KTR-0004',
    location: 'Aneho',
    city: 'Lacs',
    position: [6.227, 1.5919],
    eventType: 'Damaged road',
    severity: 'High',
    status: 'Verified',
    description: 'Road section damaged after flooding; motorcycles cannot pass.'
  },
  {
    id: 'KTR-0005',
    location: 'Adidogome',
    city: 'Golfe',
    position: [6.1786, 1.1574],
    eventType: 'Health risk',
    severity: 'Critical',
    status: 'Pending',
    description: 'Stagnant water near households; risk of disease and urgent intervention needed.'
  }
];

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function App() {
  const criticalCount = reports.filter((report) => report.severity === 'Critical').length;
  const highCount = reports.filter((report) => report.severity === 'High').length;
  const pendingCount = reports.filter((report) => report.status === 'Pending').length;

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">KATARA MVP</p>
          <h1>Community Flood Report Dashboard</h1>
          <p className="subtitle">
            A working frontend prototype for collecting, visualizing, and preparing community flood reports in Maritime, Togo.
          </p>
        </div>
        <div className="hero-card">
          <span>{reports.length}</span>
          <p>sample reports mapped</p>
        </div>
      </section>

      <section className="stats-grid">
        <article>
          <span>{criticalCount}</span>
          <p>Critical reports</p>
        </article>
        <article>
          <span>{highCount}</span>
          <p>High severity</p>
        </article>
        <article>
          <span>{pendingCount}</span>
          <p>Pending verification</p>
        </article>
      </section>

      <section className="content-grid">
        <div className="map-card">
          <div className="section-header">
            <h2>Live report map</h2>
            <p>Demo layer using sample community reports.</p>
          </div>
          <MapContainer center={[6.2, 1.25]} zoom={10} scrollWheelZoom className="map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {reports.map((report) => (
              <Marker key={report.id} position={report.position} icon={markerIcon}>
                <Popup>
                  <strong>{report.location}</strong>
                  <br />
                  {report.eventType} — {report.severity}
                  <br />
                  Status: {report.status}
                  <br />
                  {report.description}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <aside className="report-list">
          <div className="section-header">
            <h2>Recent reports</h2>
            <p>Public-safe report summary.</p>
          </div>
          {reports.map((report) => (
            <article key={report.id} className="report-item">
              <div>
                <h3>{report.location}</h3>
                <p>{report.city} · {report.eventType}</p>
              </div>
              <span className={`badge ${report.severity.toLowerCase()}`}>{report.severity}</span>
            </article>
          ))}
        </aside>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
