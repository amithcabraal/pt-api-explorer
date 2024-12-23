import { createCanvas } from './canvas';
import { downloadCanvas } from './download';
import type { ExportOptions } from './types';

export async function downloadImage(options: ExportOptions) {
  try {
    const canvas = await createCanvas(options);
    if (!canvas) return;

    const fileName = `flow-diagram-${new Date().toISOString().split('T')[0]}`;
    downloadCanvas(canvas, fileName);
  } catch (error) {
    console.error('Error generating screenshot:', error);
  }
}