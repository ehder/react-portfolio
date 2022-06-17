import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/portfolio1.jpg'
import Portfolio2 from '../../assets/portfolio2.jpg'
import Portfolio3 from '../../assets/portfolio3.jpg'
import Portfolio4 from '../../assets/portfolio4.jpg'
import Portfolio5 from '../../assets/portfolio5.png'
import Portfolio6 from '../../assets/portfolio6.jpg'



const data = [
  {
    id:1,
    image: Portfolio1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  
  },
  {
    id:2,
    image: Portfolio2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/14820908-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  
  },
  {
    id:3,
    image: Portfolio3,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  
  },
  {
    id:4,
    image: Portfolio4,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  
  },
  {
    id:5,
    image: Portfolio5,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  
  },
  {
    id:6,
    image: Portfolio6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  
  }
];


const Portfolio = () => {

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {

                return (
                  <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className="btn" target='_blank'>Github</a>
                      <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article>
                )

          })
        }






      </div>
    </section>
  )
}

export default Portfolio