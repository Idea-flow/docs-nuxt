export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      secondary: 'indigo',
      neutral: 'stone'
    },
    footer: {
      slots: {
        root: 'border-t border-slate-200 dark:border-slate-800 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-sm',
        left: 'text-sm text-slate-600 dark:text-slate-300'
      }
    },
    button: {
      base: 'rounded-xl',
      variants: {
        solid: {
          primary: 'bg-blue-500 hover:bg-blue-600 text-white',
          secondary: 'bg-indigo-500 hover:bg-indigo-600 text-white'
        }
      }
    },
    card: {
      base: 'rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 shadow-sm',
      body: {
        base: 'rounded-xl'
      }
    },
    navbar: {
      base: 'backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-sm'
    },
    breadcrumb: {
      base: 'rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm'
    },
    badge: {
      base: 'rounded-full'
    }
  },
  seo: {
    siteName: 'Nuxt Docs Template'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    // links: [{
    //   'icon': 'i-simple-icons-github',
    //   'to': 'https://github.com/nuxt-ui-templates/docs',
    //   'target': '_blank',
    //   'aria-label': 'GitHub'
    // }]
  },
  footer: {
    credits: `Built with Ideaflow• © ${new Date().getFullYear()}`,
    colorMode: false,
    // links: [{
    //   'icon': 'i-simple-icons-discord',
    //   'to': 'https://go.nuxt.com/discord',
    //   'target': '_blank',
    //   'aria-label': 'Nuxt on Discord'
    // }, {
    //   'icon': 'i-simple-icons-x',
    //   'to': 'https://go.nuxt.com/x',
    //   'target': '_blank',
    //   'aria-label': 'Nuxt on X'
    // }, {
    //   'icon': 'i-simple-icons-github',
    //   'to': 'https://github.com/nuxt/ui',
    //   'target': '_blank',
    //   'aria-label': 'Nuxt UI on GitHub'
    // }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-templates/docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Nuxt UI docs',
        to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
        target: '_blank'
      }]
    }
  }
})
