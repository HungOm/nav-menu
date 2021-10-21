import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
    if (command === 'build') {
      return {
        // serve specific config
        base:"https://hungom.github.io/nav-menu"
      }
    } else {
      return {
        // build specific config
        base:'/'
      }
    }
  })