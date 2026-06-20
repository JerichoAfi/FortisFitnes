import React, { useEffect, useRef, useState } from 'react';

const LOGO_URL =
  'https://customer-assets.emergentagent.com/job_content-124/artifacts/7zb3eaz9_photo_2026-06-20%2011.08.31.jpeg';

// Cache the processed PNG across remounts so we don't re-process on every render
let cachedPng = null;
let pending = null;

const processLogo = () => {
  if (cachedPng) return Promise.resolve(cachedPng);
  if (pending) return pending;

  pending = new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Chroma key — remove green background.
        // Detect green pixels: green channel notably greater than red & blue.
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Strong green (clear background)
          if (g > 90 && g > r + 25 && g > b + 25) {
            data[i + 3] = 0; // fully transparent
          } else if (g > r && g > b && g - Math.max(r, b) > 10) {
            // Soft green fringe — partial transparency to smooth edges
            const fringe = (g - Math.max(r, b)) / 80;
            const alpha = Math.max(0, 1 - fringe);
            data[i + 3] = Math.floor(data[i + 3] * alpha);
            // Reduce green spill on remaining pixels
            data[i + 1] = Math.min(g, Math.max(r, b));
          }
        }

        ctx.putImageData(imgData, 0, 0);
        cachedPng = canvas.toDataURL('image/png');
        resolve(cachedPng);
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = (e) => reject(e);
    img.src = LOGO_URL;
  });

  return pending;
};

const FortisLogo = ({ className = '', alt = 'Fortis Fitness', style = {} }) => {
  const [src, setSrc] = useState(cachedPng);
  const [failed, setFailed] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (!cachedPng) {
      processLogo()
        .then((png) => {
          if (mounted.current) setSrc(png);
        })
        .catch(() => {
          if (mounted.current) setFailed(true);
        });
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  // Fallback when canvas processing fails (e.g. CORS) — use blend modes
  if (failed) {
    return (
      <img
        src={LOGO_URL}
        alt={alt}
        draggable="false"
        className={className}
        style={{
          mixBlendMode: 'multiply',
          filter: 'contrast(1.2)',
          ...style,
        }}
      />
    );
  }

  if (!src) {
    // Reserve space while loading
    return <span className={className} aria-label={alt} style={style} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      draggable="false"
      className={className}
      style={style}
    />
  );
};

export default FortisLogo;
