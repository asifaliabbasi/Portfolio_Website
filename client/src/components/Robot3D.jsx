import React, { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Robot3D() {
  const splineRef = useRef();
  const [hasMovedCursor, setHasMovedCursor] = useState(false);

  // Called when Spline scene is loaded
  function onLoad(spline) {
    splineRef.current = spline;
    // By default, look left (towards profile)
    const head = spline.findObjectByName('Head');
    if (head) {
      head.rotation.y = -0.8; // Adjust as needed for your scene
      head.rotation.x = 0;
    }
    // Rotate the main robot body slightly to the left
    const robot = spline.findObjectByName('Robot');
    if (robot) {
      robot.rotation.y = -0.3;
    }
  }

  // Mouse move: make head follow cursor
  function handleMouseMove(e) {
    if (!splineRef.current) return;
    if (!hasMovedCursor) setHasMovedCursor(true);
    if (!hasMovedCursor) return; // Don't follow cursor until moved
    const head = splineRef.current.findObjectByName('Head');
    if (head) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      head.rotation.y = x * 0.5;
      head.rotation.x = y * 0.3;
    }
  }

  // Click: trigger waving animation
  function handleClick() {
    if (!splineRef.current) return;
    splineRef.current.emitEvent('mouseDown', 'Arm');
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent',
        pointerEvents: 'auto',
        position: 'relative'
      }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <Spline
        scene="https://prod.spline.design/h2fhd7CbHMlO02xV/scene.splinecode"
        onLoad={onLoad}
      />
      {/* Overlay colored container at the bottom right to cover watermark */}
      <div
        style={{
          position: 'absolute',
          right: '18px',
          bottom: '18px',
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
      {/* Hide Spline watermark/thumbnail */}
      <style>{`
        [data-spline-root] [style*="Built with Spline"],
        [data-spline-root] a[href*="spline.design"] {
          display: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        [data-spline-root] canvas {
          z-index: 1 !important;
        }
      `}</style>
    </div>
  );
} 