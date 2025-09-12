import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // 백엔드 포트
        changeOrigin: true,              // 호스트 헤더 변경
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/campus/api')                   // https가 아닌 경우
      },
    },
  },
});