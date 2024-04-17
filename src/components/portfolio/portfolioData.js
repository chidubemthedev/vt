import Image1 from "../../../public/assets/img/portfolio/project-1.jpg";
import Image2 from "../../../public/assets/img/portfolio/project-2.jpg";
import Image3 from "../../../public/assets/img/portfolio/project-3.jpg";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";
import Image5 from "../../../public/assets/img/portfolio/project-5.jpg";
import Image6 from "../../../public/assets/img/portfolio/project-6.jpg";
import Image7 from "../../../public/assets/img/portfolio/project-7.jpg";
import Image8 from "../../../public/assets/img/portfolio/project-8.jpg";
import Image9 from "../../../public/assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Kommerce",
    image: Image1,
    tag: ["mobile"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Online Store",
        client: "Kommerce",
        language:
          "User Research / Story, Product Ideation / Sprints, Stakeholder Management, Product Framework, Dev Team Management",
        preview: "www.kommerce.com",
        link: "https://play.google.com/store/apps/details?id=com.kommerce",
      },
    ],
  },
  {
    id: 2,
    type: "Nexascale",
    image: Image2,
    tag: ["web"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Asset sharing platform",
        client: "Nexascale",
        language:
          "User Research / Story, Product Ideation / Sprints, Stakeholder Management, Product Framework, Dev Team Management",
        preview: "www.nexascale.com",
        link: "https://nexascale-asset.web.app/",
      },
    ],
  },
  {
    id: 3,
    type: "Automagic",
    image: Image3,
    tag: ["website"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Automagic",
        language:
          "User Research / Story, Product Ideation / Sprints, Stakeholder Management, Product Framework, Dev Team Management",
        preview: "www.atmgc.xyz",
        link: "www.atmgc.xyz",
      },
    ],
  },
  {
    id: 4,
    type: "Tennis Love",
    image: Image4,
    tag: ["web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Tennis Love",
        client: "Tennis Love",
        language:
          "User Research / Story, Product Ideation / Sprints, Stakeholder Management, Product Framework, Dev Team Management",
        preview: "https://tennislove.app",
        link: "https://tennislove.app",
      },
    ],
  },
  {
    id: 5,
    type: "Korre",
    image: Image5,
    tag: ["web"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Korre Ai",
        client: "Korre",
        language:
          "User Research / Story, Product Ideation / Sprints, Stakeholder Management, Product Framework, Dev Team Management",
        preview: "www.korre.ai",
        link: "https://korre-io--pr56-admin-jobs-3dsf2vhw.web.app/login",
      },
    ],
  },
  {
    id: 6,
    type: "Internview",
    image: Image6,
    tag: ["web", "website"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Internview",
        client: "Automagic",
        language:
          "User Research / Story, Product Ideation / Sprints, Stakeholder Management, Product Framework, Dev Team Management",
        preview: "www.atmgc.xyz",
        link: "https://www.atmgc.xyz/internview",
      },
    ],
  },
  {
    id: 7,
    type: "Fipay",
    image: Image7,
    tag: ["web", "website"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Fipay",
        client: "Fipay",
        language:
          "User Research / Story, Product Ideation / Sprints, Stakeholder Management, Product Framework, Dev Team Management",
        preview: "www.fipay.io",
        link: "https://www.fipay.io",
      },
    ],
  },
  // {
  //   id: 8,
  //   type: "dribble project",
  //   image: Image8,
  //   tag: ["graphic design"],
  //   delayAnimation: "100",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Dribbble",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.dribbble.com",
  //       link: "https://dribbble.com/ib-themes",
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   type: "behence project",
  //   image: Image9,
  //   tag: ["graphic design", "mockup"],
  //   delayAnimation: "200",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Behance",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.behance.com",
  //       link: "https://www.behance.net/ib-themes",
  //     },
  //   ],
  // },
];

export default PortfolioData;
