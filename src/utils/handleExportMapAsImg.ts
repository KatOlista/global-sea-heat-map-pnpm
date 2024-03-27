import html2canvas from 'html2canvas';

export const handleExportMapAsImg = () => {
  const capturedElement = document.getElementById('capture') as HTMLElement;

  html2canvas(capturedElement)?.then((canvas) => {
    const fileName = 'sea-heat-map.png';
    const href = canvas.toDataURL('image/png');
    const element = document.createElement('a');

    element.href = href;
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  });
};
