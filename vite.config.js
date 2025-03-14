import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  vite: {
    server: {
        fs: {
            allow: ["/home/user/Monorepo"]
        }
    }
}
  // server: {
  //   fs: {
  //     allow: [
  //       // search up for workspace root
  //       searchForWorkspaceRoot(process.cwd()),
  //       // your custom rules
  //       "/static/css/bootstrap-italia-custom.min.css",
  //     ],
  //   },
  // },

})
