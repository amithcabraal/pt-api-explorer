import html2canvas from 'html2canvas';
import { getRectOfNodes } from 'reactflow';

export async function downloadImage(
  nodesBounds: ReturnType<typeof getRectOfNodes>,
  document: Document
) {
  const flowContainer = document.querySelector('.react-flow') as HTMLElement;
  if (!flowContainer) return;

  try {
    const canvas = await html2canvas(flowContainer, {
      backgroundColor: null,
      scale: 2, // Higher resolution
      logging: false,
      allowTaint: true,
      useCORS: true
    });

    // Convert to PNG
    const dataUrl = canvas.toDataURL('image/png');
    
    // Generate filename with timestamp
    const fileName = `flow-diagram-${new Date().toISOString().split('T')[0]}`;
    
    // Create and trigger download
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `${fileName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error generating screenshot:', error);
  }
}