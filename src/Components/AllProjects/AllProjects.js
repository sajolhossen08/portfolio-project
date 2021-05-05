import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import HomeTutor from '../../images/Hometutor.png';
import MediZone from '../../images/mediZone.png';
import PremierLeague from '../../images/premierLegue.png';

const AllProjects =  [
    {
        id: 1,
        category: 'Full Stack',
        link1: 'https://home-tutor-f60fb.web.app',
        link2: 'https://github.com/sajolhossen08/home-tutor-client-site-complete-website-with-payment-gateway',
        icon1: <FontAwesomeIcon icon={faGlobe} className="icon globe"/>,
        icon2: <FontAwesomeIcon icon={faGithub} className="icon gh"/>,
        image: HomeTutor,
        title: 'Home Tutor (MERN Stack)'
    },
    {
        id: 2,
        category: 'Full Stack',
        link1: 'https://medi-zone-4ae02.web.app',
        link2: 'https://github.com/sajolhossen08/medi-zone-client-site-full-mern-stake-project',
        icon1: <FontAwesomeIcon icon={faGlobe} className="icon globe"/>,
        icon2: <FontAwesomeIcon icon={faGithub} className="icon gh"/>,
        image: MediZone,
        title: 'Medi Zone (MERN Stack)'
    },
    {
        id: 3,
        category: 'React JS',
        link1: 'https://mystifying-cori-ee24bb.netlify.app/',
        link2: 'https://github.com/sajolhossen08/premier-league-with-react-router',
        icon1: <FontAwesomeIcon icon={faGlobe} className="icon globe"/>,
        icon2: <FontAwesomeIcon icon={faGithub} className="icon gh"/>,
        image: PremierLeague,
        title: 'Premier League'
    }
]

export default AllProjects;