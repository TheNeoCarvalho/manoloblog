module.exports = {
  siteTitle: 'Oi! Eu sou o Manolo!',
  siteDescription: `Meu site portifólio`,
  keyWords: ['gatsbyjs', 'react', 'react native', 'nodejs'],
  authorName: 'Manoel Carvalho',
  twitterUsername: 'manolocarvalho',
  githubUsername: 'TheNeoCarvalho',
  authorAvatar: '/images/perfil.jpg',
  authorDescription: `
          <p>Sou o Manoel Carvalho, tenho 38 anos, marido da Eulânia e pai do Vinícius. Hoje moro na cidade do Cedro (cidade pequena, no interior do Ceará). Sou formado em Mecatrônica Industrial e em Análise e Desenvolvimento de Sistemas e Pós-Graduação em: Engenharia de Sistemas, Engenharia e Planejamento DevOps e MBA em Gestão de Projetos de TI.</p>
          <p>Estudante e amante de novas tecnologias.</p>
          <p>Fullstack Developer - Tempo Integral</p>
        `,
  skills: [
    {
      name: 'HTML5',
      level: 90
    },
    {
      name: 'CSS3',
      level: 70
    },
    {
      name: 'Javascript',
      level: 80
    },
    {
      name: 'NodeJs',
      level: 70
    },
    {
      name: 'React',
      level: 70
    },
    {
      name: 'React Native',
      level: 70
    },
    {
      name: 'Git',
      level: 80
    },
    {
      name: 'PHP',
      level: 80
    },
    {
      name: 'Laravel',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Certsys - Tecnologia da Informação",
      begin: {
        month: 'jan',
        year: '2021'
      },
      duration: null,
      occupation: "FullStack Developer - Sênior",
      description: "FullStack Developer - Nodejs, ReactJS, React Native"

    },
    {
      company: "MOL - Mediação Online",
      begin: {
        month: 'dez',
        year: '2020'
      },
      duration: '1 ano',
      occupation: "Backend Developer - Pleno",
      description: "Desenvolvedor Backend com Nodejs"

    },
    {
      company: "EEEP Profª Maria Célia Pinheiro Falcão",
      begin: {
        month: 'set',
        year: '2012'
      },
      duration: null,
      occupation: "Professor EMI",
      description: "Atualmente ministrando as disciplinas: Lógica de Programação, Programação Web I e II, Banco de Dados, PHP e MySQL."

    }, {
      company: "FVS - Faculdade Vale do Salgado",
      begin: {
        month: 'mar',
        year: '2012'
      },
      duration: '1 ano e 3 meses',
      occupation: "Professor Universitário",
      description: "Ministrava as disciplinas: Programação para Internet, Redes de Computadores, Organização e Arquitetura de Computadores."

    }, {
      company: "Start Informática",
      begin: {
        month: 'jan',
        year: '2012'
      },
      duration: '2 anos',
      occupation: "Desenvolvedor Fullstack",
      description: "Trabalhava com as tecnologias Web, HTML/CSS, PHP e MySQL, Joomla, Wordpress."
    }, {
      company: "COPY VIP",
      begin: {
        month: 'set',
        year: '2010'
      },
      duration: '1 anos e 6 meses',
      occupation: "Suporte Técnico",
      description: "Instalação e manutenção preventiva e corretiva de impressoras."

    },
  ],
  portifolio: [
    {
      image: "/images/gostack.png",
      title: "GoStack - Rocketseat.",
      description: "Desafio final - Criação da API com NodeJS, Frontend com ReactJS e App com React Native.",
      url: "https://github.com/TheNeoCarvalho/Desafio-Meetapp"
    },
    {
      image: "/images/port.gif",
      title: "Manolodev",
      description: "Site/Blog Pessoal.",
      url: "https://manolodev.tech"
    },
    {
      image: "/images/meme.gif",
      title: "Gerador de Memes",
      description: "Web App gerador de memes criado com ReactJS e consumindo API do imgflip.com.",
      url: "https://meme-generate-pmpzfik9i.vercel.app"
    },
    {
      image: "/images/openWeather.png",
      title: "Open Weather - App",
      description: "App criado com Expo e React Native para acompanhar informações meteorológicas.",
      url: "https://github.com/TheNeoCarvalho/WeatherApp"
    },
    {
      image: "/images/rocketfy.gif",
      title: "Rocketfy",
      description: "Recriando a interface da Rocketfy com ReactJS.",
      url: "https://rocketfy-app.vercel.app"
    },
    {
      image: "/images/bb.gif",
      title: "Breaking Bad",
      description: "Criando Web App com ReactJS para consumindo API do Breaking Bad",
      url: "https://breakingbad-6xlbvj0np.now.sh"
    },
    {
      image: "/images/wa.gif",
      title: "Weather Web App",
      description: "Criando Web App com ReactJS para acompanhar informações meteorológicas.",
      url: "https://sharp-volhard-19cc12.netlify.app"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/neo_carvalho",
    linkedin: "https://www.linkedin.com/in/franciscomanoelcarvalho",
    github: "https://github.com/TheNeoCarvalho",
    email: "manoelmecat@gmail.com",
    instagram: "https://instagram.com/manolocarvalho",
    site: "https://manolodev.tech"
  },
  siteUrl: 'https://TheNeoCarvalho.github.io/manoloblog',
  pathPrefix: '/manoloblog', // Note: it must *not* have a trailing slash.
  siteCover: '/images/web-design-development.jpg',
  googleAnalyticsId: 'G-Z0TL5JT67J',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    },
    {
      label: 'Contato',
      url: '/contact',
    }
  ]
}
