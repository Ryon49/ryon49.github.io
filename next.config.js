const myEnv = {
  host: "localhost:3000",

  default_theme: "dark",
  blog: {
    title: "Ryon49's Blog",
    tagline: "This is a tagline",
  },
  social: [
    { type: "github", icon: "fab fa-github", link: "https://github.com/ryon49" },
    // {type: 'twitter', icon: 'fab fa-twitter'},
    // {type: 'email',   icon: 'fas fa-envelope',  link: 'https://github.com/ryon49', blank: true},
    // {type: 'rss',     icon: 'fas fa-rss'},
  ],
}

module.exports = {
  env: myEnv,

  // i18n: {
  //   locales: ['en', 'de', 'fr'],
  //   defaultLocale: 'en',
  //   localeDetection: true,
  // },
  reactStrictMode: true,
}
