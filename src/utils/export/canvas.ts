import html2canvas from 'html2canvas';
import type { ExportOptions } from './types';

export async function createCanvas({ 
  document,
  scale = 2,
  backgroundColor = null
}: ExportOptions): Promise<HTMLCanvasElement | null> {
  const flowContainer = document.querySelector('.react-flow') as HTMLElement;
  if (!flowContainer) return null;

  return html2canvas(flowContainer, {
    backgroundColor,
    scale,
    logging: false,
    allowTaint: true,
    useCORS: true
  });
}