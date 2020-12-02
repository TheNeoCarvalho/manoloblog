module.exports = {
  siteTitle: 'OI! Eu sou o Manolo!',
  siteDescription: `Meu site portifólio`,
  keyWords: ['gatsbyjs', 'react', 'react native', 'nodejs'],
  authorName: 'Manoel Carvalho',
  twitterUsername: 'manolocarvaljo',
  githubUsername: 'TheNeoCarvalho',
  authorAvatar: 'https://media-exp1.licdn.com/dms/image/C5603AQFeV_afcKuwbQ/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=Sf8_g0n2-3p7Y6iuC2UKDC879eNxbXMHXwM4MFfgijs',
  authorDescription: `Estudante e amante de novas tecnologias.
                      <p>Professor/Coordenador na EEEP Profª Maria Célia Pinheiro Falção.</p>
                      <p>FullStack Developer JS</p>
                      <ul>
                      <li><span>NodeJS</span></li>
                      <li><span>ReactJS</span></li>
                      <li><span>React Native</span></li>
                      </ul>
                     `,
  skills: [
    {
      name: 'HTML5',
      level: 70
    },
    {
      name: 'CSS3',
      level: 60
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
      level: 70
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
      url: "#"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/neo_carvalho",
    linkedin: "https://www.linkedin.com/in/franciscomanoelcarvalho",
    github: "https://github.com/TheNeoCarvalho",
    email: "manoelmecat@gmail.com",
    site: "https://manolodev.tech"
  },
  siteUrl: 'https://TheNeoCarvalho.github.io/manoloblog',
  pathPrefix: '/manoloblog', // Note: it must *not* have a trailing slash.
  siteCover: '/images/web-design-development.jpg',
  googleAnalyticsId: 'UA-000000000-1',
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
    }
  ]
}