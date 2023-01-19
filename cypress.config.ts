import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
  viewportHeight: 1200,
  viewportWidth: 2000
})