import './Link.css';

const Link = ({texto, link, icone}) => {
    return (
        <div className="container__link">
            <a href={link} className="link"><div className="icone">{icone}</div>{texto}</a>
        </div>
    );
};

export default Link;