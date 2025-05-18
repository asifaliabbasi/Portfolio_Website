import Spline from '@splinetool/react-spline';

export default function SplineEmbed() {
  return (
    <div style={{ width: '100%', height: '520px', margin: '0 auto', position: 'relative' }} className="robot-spline-container">
      <Spline scene="https://prod.spline.design/h2fhd7CbHMlO02xV/scene.splinecode" />
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
            height: 100% !important;
            max-height: 100vh !important;
            width: 100% !important;
            min-height: 0 !important;
            max-height: 350px !important;
          }
          .spline-watermark-cover {
            display: none !important;
            width: 220px !important;
            height: 40px !important;
          }
        }
        @media (max-width: 500px) {
          .robot-spline-container {
            height: 300px !important;
            display: none !important;
            min-height: 0 !important;
            max-height: 500px !important;
            width: 150% !important;
          }
          .spline-watermark-cover {
          display: none !important;
            width: 260px !important;
            height: 50px !important;
          }
          .robot-spline-container canvas {
              height: 100% !important;
              display: none !important;
          width: 150% !important;
          max-height: 100% !important;
          max-width: 80% !important;
          }
        }
      
      `}</style>
    </div>
  );
} 