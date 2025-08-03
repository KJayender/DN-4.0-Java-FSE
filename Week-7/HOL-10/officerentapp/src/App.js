import React from "react";

// JSX Heading Element
const heading = <h1>Office Space Rental Listings 🏢</h1>;

// JSX Image Element
const officeImage = (
  <img
    src="https://images.unsplash.com/photo-1595814437123-1b2cc2e62e50" // replace with your own if needed
    alt="Office Space"
    style={{ width: "400px", height: "250px", borderRadius: "10px" }}
  />
);

// Office Data
const office1 = {
  name: "Elegance Towers",
  rent: 55000,
  address: "MG Road, Bengaluru"
};

const office2 = {
  name: "Skyview Corporate",
  rent: 75000,
  address: "Cyber City, Hyderabad"
};

const officeList = [office1, office2];

// Generate JSX Office Blocks
const officeElements = officeList.map((office, index) => (
  <div
    key={index}
    style={{
      border: "1px solid #ccc",
      margin: "10px",
      padding: "10px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      textAlign: "left",
      width: "400px",
      marginLeft: "auto",
      marginRight: "auto"
    }}
  >
    <h3>{office.name}</h3>
    <p><strong>Address:</strong> {office.address}</p>
    <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
      <strong>Rent:</strong> ₹{office.rent}
    </p>
  </div>
));

function App() {
  return (
    <div style={{ fontFamily: "Segoe UI", textAlign: "center", padding: "20px" }}>
      {heading}
      {officeImage}
      <div style={{ marginTop: "20px" }}>
        {officeElements}
      </div>
    </div>
  );
}

export default App;