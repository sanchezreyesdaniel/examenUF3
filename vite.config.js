// vite.config.js
import { defineConfig  } from "vite";
export default defineConfig({
    //Directorio raiz de tu proyecto
    root: './src',
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/_variables.scss";` // Puedes añadir tus variables Sass aquí
            }
        }
    }
})