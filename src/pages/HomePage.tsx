import React from "react";
import { Link } from "react-router-dom";
import '../css/Home.css'

interface Card {
  title: string;
  links: string;
  active?: boolean;
}

const CardItem: Card[] = [
  { title: 'Home', links: '/', active: true },
  { title: 'Exercice', links: '/exercice', active: true },
  { title: 'Cours', links: '/course', active: true },
  { title:'Outils', links:'/outils',active:true}
];

const NavbarCard = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {CardItem.map((item, index) => (
          item.active && (
            <li key={index} style={{ margin: '0 10px' }}>
              <Link to={item.links} style={{ textDecoration: 'none', color: 'blue' }}>
                {item.title}
              </Link>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
};

function Homepage() {
  return (
    <div>
      <h1>Page d'accueil</h1>
      <NavbarCard />
    </div>
  );
}

export default Homepage;
