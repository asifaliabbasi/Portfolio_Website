import React, { Suspense, lazy } from 'react';

// Lazy load the heavy Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

// Loading spinner component
const LoadingSpinner = () => (
  <div style={{
    width: '100%',
    height: '520px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(24, 24, 36, 0.5)',
    borderRadius: '1.5rem',
  }}>
    <div style={{
      width: '50px',
      height: '50px',
      border: '3px solid rgba(162, 89, 255, 0.2)',
      borderTop: '3px solid #a259ff',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    }} />
    <p style={{
      marginTop: '1rem',
      color: '#a259ff',
      fontSize: '1rem',
      fontWeight: 500,
    }}>Loading 3D Model...</p>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default function SplineEmbed() {
  return (
    <div style={{ width: '100%', height: '520px', margin: '0 auto', position: 'relative' }} className="robot-spline-container">
      <Suspense fallback={<LoadingSpinner />}>
        <Spline scene="https://prod.spline.design/h2fhd7CbHMlO02xV/scene.splinecode" />
      </Suspense>
      {/* Overlay to cover the Spline watermark */}
      <div
        className="spline-watermark-cover"
        style={{
          position: 'absolute',
          right: '18px',
          bottom: '20px',
          width: '140px',
          height: '40px',
          background: '#181823',
          borderRadius: '16px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none'
        }}
      />
      <style>{`
        @media (max-width: 700px) {
          .robot-spline-container {
            display: none !important;
          }
        }
        @media (max-width: 500px) {
          .robot-spline-container {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
