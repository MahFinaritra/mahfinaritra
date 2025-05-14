import {Settings, CropRotate, ViewInAr, MobileFriendly, Code, BarChart, CloudOutlined, FavoriteBorder, Public, 
    PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube
} from "@mui/icons-material"

export const navlink = [
    {
        url: "/",
        text: "Accueil",
    },
    {
        url: "/about",
        text: "À propos"
    },
    {
        url: "/services",
        text: "Services"
    },
    {
      url: "/formation",
      text: "Formation"
    },
    {
      url: "compétences",
      text: "Compétences"
    },
    {
        url: "/contact",
        text: "Contact"
    },
    /*{
        url: "/blog",
        text: "Blog"
    },
    /*{
        url: "/portfolio",
        text: "Portfolio"
    },*/
    /*{
      url: "/testimonials",
      text: "Témoignages",
    },*/
    
    
]

export const home = [
    {
      text: "BONJOUR, JE SUIS",
      name: "MAH FINARITRA",
      post: "DÉVELOPPEUR MOBILE ET WEB",
      role: "DÉVELOPPEUR FRONT-END",
      desc: "Passionné par la création d’expériences numériques fluides et efficaces, je me spécialise dans le développement d’applications mobiles et web. Avec une base dans les technologies modernes comme FLUTTER et REACT.JS, je m’efforce de créer des solutions évolutives et conviviales qui répondent aux besoins des clients et des utilisateurs. Toujours désireux d’apprendre du monde de la technologie."
    }
]

export const about = [
    {
      entête: "LANGUE",
      type: [
        { soustitre: "MALAGASY", commentaire: "Langue maternelle",  },
        { soustitre: "FRANÇAIS", commentaire: "Courant",  },
        { soustitre: "ANGLAIS", commentaire: "Intermédiaire", },
      ],
        /*cover: "./images/man.png",*/
    },
    {
      entête: "CENTRES D'INTÉRÊT",
      type: [
        { soustitre: "BADMINTON", },
        { soustitre: "PHOTOGRAPIE",  }
      ],
    }
]

export const services = [
    {
      id: 1,
      icon: <Settings />,
      title: "Design Créatif",
      desc: "Je crée des interfaces élégantes et originales qui valorisent votre image",
    },
    {
      id: 2,
      icon: <CropRotate />,
      title: "Code Propre",
      desc: "J’écris un code clair, structuré et facile à maintenir pour garantir la qualité et la performance",
    },
    {
      id: 3,
      icon: <ViewInAr />,
      title: "Design Responsive",
      desc: "Chaque projet est pensé pour s’adapter parfaitement à tous les écrans, du mobile à l’ordinateur",
    },
    {
      id: 4,
      icon: <MobileFriendly />,
      title: "Application Mobile",
      desc: "Je développe des applications mobiles performantes et intuitives pour Android et iOS",
    },
    {
      id: 5,
      icon: <Code />,
      title: "Réalisation De Site Web",
      desc: "Je conçois des sites modernes, rapides et adaptés à vos besoins professionnels ou personnels",
    },
]

export const project = [
    {
      id: 1,
      icon: <CloudOutlined />,
      num: "89",
      title: "HAPPY CLIENTS",
    },
    {
      id: 2,
      icon: <FavoriteBorder />,
      num: "231",
      title: "PROJECTS COMPLEATED",
    },
    {
      id: 3,
      icon: <Public />,
      num: "108",
      title: "FILES DOWNLOADED",
    },
    {
      id: 4,
      icon: <PersonOutlined />,
      num: "1446",
      title: "LIENS OF CODE",
    },
]

export const portfolio = [
    {
      id: 1,
      cover: "../images/port/port1.jpg",
      name: "Brand",
      category: "marketing",
      title: "Brex Logo",
    },
    {
      id: 2,
      cover: "../images/port/port2.jpg",
      name: "Brand",
      category: "design",
      title: "Brex Logo",
    },
    {
      id: 3,
      cover: "../images/port/port3.jpg",
      name: "Brand",
      category: "development",
      title: "Brex Logo",
    },
    {
      id: 4,
      cover: "../images/port/port4.jpg",
      name: "Brand",
      category: "marketing",
      title: "Brex Logo",
    },
    {
      id: 5,
      cover: "../images/port/port5.jpg",
      name: "Brand",
      category: "design",
      title: "Brex Logo",
    },
    {
      id: 6,
      cover: "../images/port/port6.jpg",
      name: "Brand",
      category: "development",
      title: "Brex Logo",
    },
]

export const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
      image: "./images/testimonials/team-1.png",
      name: "Alamin Musa",
      post: "Front End Developer",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
      image: "./images/testimonials/team-2.png",
      name: "Alex Ander",
      post: "Back End Developer",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
      image: "./images/testimonials/team-3.png",
      name: "GorkCoder",
      post: "React Developer",
    },

  ]

  export const blog = [
    {
      id: 1,
      title: "Master These Awesome",
      date: "Jun 27, 2022",
      author: "Dorian Gray",
      desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
      cover: "./images/blog/b1.png",
    },
    {
      id: 2,
      title: "Best Design Items to Appeal",
      date: "Jun 27, 2022",
      author: "Dorian Gray",
      desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
      cover: "./images/blog/b2.png",
    },
    {
      id: 3,
      title: "The 20 Best Lightroom Presets",
      date: "Jun 27, 2022",
      author: "Dorian Gray",
      desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
      cover: "./images/blog/b3.png",
    },
  ]
  export const contact = [
    {
      icon: <AddLocationAltOutlined />,
      text1: "Lot VV5 Ambohimitsimbina",
      text2: "Antananarivo, Madagascar",
    },
    {
      icon: <PhoneIphone />,
      text1: "+261348496069",
      text2: "+261337533088",//0345627891
    },
    {
      icon: <EmailOutlined />,
      text1: "maheryfinaritraandrianarison@gmail.com",//hello@thetheme.io
      //text2: "fb: Mahery Finaritra",//inf0@brex-theme.io
    },
  ]
  export const social = [
    {
      icon: <Facebook />,
      url: "https://www.facebook.com/maheryfinaritra.andrianarison5"
    },
    {
      icon: <Instagram />,
      url: "https://www.instagram.com/maheryfinaritra?igsh=aTlzNHo2bndkNW8y"
    },
    {
      icon: <YouTube />,
      url: "https://youtube.com/@mahfinaritra?si=CnLu4cGgj9gHVm8A"
    },
  ]
