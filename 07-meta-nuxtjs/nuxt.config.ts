// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  routeRules: {
    // Página estática, se regenera cada 60 segundos
    '/cottages': { isr: 60 },
    
    
    // Página home: completamente estática (build time)
    '/': { prerender: true },
    
    // API: cache de 10 segundos
    '/api/cottages': { cache: { maxAge: 10 } },

    // Pre-generar páginas de detalle específicas
    '/cottages/cottage-1': { prerender: true },
    '/cottages/cottage-2': { prerender: true },
    '/cottages/cottage-3': { prerender: true },
  }
})
