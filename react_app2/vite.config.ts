import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/app2/',
  plugins: [react()],
  base:'/app2/',

  // server:{
    // port:4000,
    
    // proxy:{
    //   '/':{
    //     target:'http:192.168.1.7:4000/app2/'
    //   }
    // }
  // }
})
