import React from 'react';
import papa from 'papaparse';

export default function useCsv() {
  const download = React.useCallback((data: any[], headers: string[], name: string) => {
    const csvString = papa.unparse(data, {
      columns: headers,
    });

    const element = document.createElement('a');
    element.setAttribute('href', `data:text/csv;charset=utf-8, ${encodeURIComponent(csvString)}`);
    element.setAttribute('download', name);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }, []);

  return { download };
}
