import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  console.log("WHICH COMMAND: ", mode);
  if (command === "serve") {
    return {
      // dev specific config
      plugins: [react()],
      build: {
        chunkSizeWarningLimit: 2000, // set the limit to 2000 kBs
      },
      server: {
        host:'0.0.0.0', // Use '0.0.0.0' to listen on all local IPs or specify a specific IP
        port: 3000, // Custom port number,
        strictPort: true, // Enforce port value, won't try to auto-increment if the specified port is already in use
      },
    };
  } else {
    // command === 'build'
    return {
      // build specific config
      plugins: [react()],
      build: {
        chunkSizeWarningLimit: 2000, // set the limit to 2000 kBs
      },
      server: {
        host: "0.0.0.0", // Use '0.0.0.0' to listen on all local IPs or specify a specific IP
        port: 3000, // Custom port number,
        strictPort: true, // Enforce port value, won't try to auto-increment if the specified port is already in use
      },
    };
  }
});
