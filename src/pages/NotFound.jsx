import React from "react";
import SnsBar from '../components/SnsBar';

export default function NotFound() {
  return (
    <div style={{ margin: '20px' }}>
      <SnsBar />
      <h1>Page Not Found!!!</h1>
      <img src="/img/NotFound.png" alt="error" />
    </div>
  )
}