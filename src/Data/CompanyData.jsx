import infosyslogo from '../Images/infosys-logo.svg'
import Cognizantlogo from '../Images/Cognizant-Logo.svg'
import Wiprologo from '../Images/Wipro.png.svg'
import Delioteelogo from '../Images/deloitte.svg'
import Tcslogo from '../Images/TCS.svg'
import Accenturelogo from '../Images/Accenture-logo.svg'
const companyData = {
    companies: [
        {
            name: 'Infosys',
            image: infosyslogo,
            lpa: '7,00,000',
            description: 'Elevate your career',
            jdLink: '/files/Infosys.pdf',
          },
          {
            name: 'Cognizant',
            image: Cognizantlogo,
            lpa: '4,00,000',
            description: 'Empowering businesses worldwide'.default,
            jdLink: '/files/Cognizant.pdf',
          },
          {
            name: 'Wipro',
            image: Wiprologo,
            lpa: '3,30,000',
            description: 'Innovating for the future',
            jdLink: '/files/Wipro.pdf',
          },
          {
            name: 'TCS',
            image: Tcslogo,
            lpa: '9,00,000',
            description: 'Leading the way in IT',
            jdLink: '/files/TCS.pdf',
          },
          {
            name: 'Accenture',
            image: Accenturelogo,
            lpa: '7,00,000',
            description: 'New applied now',
            jdLink: '/files/Accenture.pdf',
          },
          {
            name: 'Deloitte',
            image: Delioteelogo,
            lpa: '4,00,000',
            description: 'Shaping tomorrow today',
            jdLink: '/files/Deloitte.pdf',
          },
      // Add more companies here
    ],
    partners: [
      require('../Images/logo1.svg').default,
      require('../Images/logo2.svg').default,
      require('../Images/logo3.svg').default,
      require('../Images/logo-4.svg').default,
      require('../Images/logo5.svg').default,
      require('../Images/logo6.svg').default,
      require('../Images/logo7.svg').default,
      require('../Images/8.svg').default,
    ]
  };
  
  export default companyData;
  