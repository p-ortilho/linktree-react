import Link from '../Link';
import './BlocoLink.css';
import { v4 as uuidv4 } from 'uuid';
import { FaLinkedin, FaGithub, FaGithubAlt, FaInstagram } from "react-icons/fa6";

let lista = [
    {
        id: uuidv4(),
        link: "https://www.linkedin.com/in/p-ortilho/",
        texto: "LinkedIn",
        icon: <FaLinkedin size={40}/>
    },
    {
        id: uuidv4(),
        link: "https://github.com/p-ortilho",
        texto: "GitHub",
        icon: <FaGithub size={40}/>
    },
    {
        id: uuidv4(),
        link: "https://www.google.com",
        texto: "Github p-yxis",
        icon: <FaGithubAlt size={40}/>
    },
    {
        id: uuidv4(),
        link: "https://www.instagram.com/",
        texto: "Instagram",
        icon: <FaInstagram size={40}/>
    },
]

const BlocoLink = () => {
    return (
        <div className="container__bloco-link">
            {lista.map(
                (item) => {
                    return <Link key={item.id} texto={item.texto} link={item.link} icone={item.icon}/>
                }
            )}
        </div>
    );
};

export default BlocoLink;