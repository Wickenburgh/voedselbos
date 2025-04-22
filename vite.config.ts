import ViteRestart from 'vite-plugin-restart';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default ({ command }) => ({
    base: command === 'serve' ? '' : '/dist/',

    build: {
        emptyOutDir: true,
        manifest: true,
        outDir: './web/dist/',
        rollupOptions: {
            input: {
                app: './src/index.ts'
            }
        }
    },

    plugins: [
        ViteRestart({
            restart: ['./templates/**/*']
        }),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
            manifest: {
                name: 'Wickenburgh Voedselbos',
                short_name: 'Voedselbos',
                description: `Wickenburgh Voedselbos is een voedselbos in \'t Goy, net onder Houten.`,
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],

    server: {
        host: 'localhost',
        port: 3000,
        origin: 'https://voedselbos.ddev.site:3000'
    }
});