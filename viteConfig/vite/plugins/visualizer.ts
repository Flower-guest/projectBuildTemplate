import { visualizer } from 'rollup-plugin-visualizer';

export default function ConfigVisualizerConfig() {
  return visualizer({
    filename: './node_modules/.cache/visualizer/stats.html',
    open: false,
    gzipSize: true,
    brotliSize: true,
  });

  return [];
}
