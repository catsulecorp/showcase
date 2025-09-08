import { useEffect } from 'react';

const URLCleaner = () => {
  useEffect(() => {
    // Parámetros de tracking que queremos limpiar
    const trackingParams = [
      'fbclid',
      'gclid',
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'ref',
      'source',
      'campaign'
    ];

    // Verificar si hay parámetros de tracking en la URL
    const url = new URL(window.location.href);
    const hasTrackingParams = trackingParams.some(param => url.searchParams.has(param));

    if (hasTrackingParams) {
      // Limpiar todos los parámetros de tracking
      trackingParams.forEach(param => {
        url.searchParams.delete(param);
      });

      // Reemplazar la URL sin recargar la página
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  return null; // Este componente no renderiza nada
};

export default URLCleaner;
