import React, { useEffect } from 'react';

function AutoDownloadFile() {
  useEffect(() => {
    const link = document.createElement('a');
    link.style.display = 'none';

    const downloadUrl = './test.ics'; // Assurez-vous que le chemin est correct

    link.href = downloadUrl;
    link.download = 'test.ics';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }, []);

  return (
    <div>
      <p>La page va automatiquement télécharger un fichier dès son chargement.</p>
    </div>
  );
}

export default AutoDownloadFile;