import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import federation from '@originjs/vite-plugin-federation';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // federation({
    //   name: 'host-app',
    //   remotes: {
    //     remoteApp: 'http://localhost:4174/remoteEntry.js',
    //   },
    //   shared: ['react', 'react-dom'],
    // }),
  ],
  server: {
    port: 8765
  }
  // build: {
  //   modulePreload: false,
  //   target: "esnext",
  //   minify: false,
  //   cssCodeSplit: false,
  // },
})
