import React, { useState } from 'react';
import styled from 'styled-components';



const Accordion = ({ title, content, lst}) => {
  const [isActive, setIsActive] = useState(false);
 console.log(content, "as content");
  return (
    <Accord className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        lst ?(
          <div className="accordion-content">
          <ul>
            {content?.map(({id, name, category, created_at, updated_at, link, target}) => {
              return <li>{name}</li>;
            })}
          </ul>
        </div>
        ):(
          <div className="accordion-content" dangerouslySetInnerHTML={{ __html: content }}></div>
        )
        
      )}
    </Accord>
  );
};

export default Accordion;



const Accord = styled.div`
  &:first-child {
    margin-top: 5rem;
  }
  .accordion {
    max-width: 600px;
  }
  .accordion-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    background-color: #fff;
    font-size: 20px;
    font-weight: 900;
    border:none;
  }
  .accordion-title:hover {
    background-color: #ff8b8b;
    color: white;
    transition: all 0.35s;
  }
  .accordion-title,
  .accordion-content {
    padding: 1rem;
    border: 2px solid #000;
    ul {
      li {
        font-size: 1.4rem;
        font-weight: 300;
      }
    }
  }
  .accordion-content {
    background-color: #ffdede;
    padding: 3rem;
    font-size: 20px;
  }
`;


export const accordionData = [
    {
      title: 'What is a primary educator? ',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'What does it mean to be a steward of the School?   ',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'What does it mean to be an ambassador of LAGOON?      ',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];


  export const accordionData2 = [
    {
      title: 'Primary School',
      content: `<ul> <li>Babysitting Course </li> <li>Clef Hangers - A Cappella  </li><li>Drama & Musicals – Lagoon Players</li><li>Film Club   </li><li>Junior Classical League</li><li>Junior Faith Peer Leaders</li><li>Lectors and Cantors</li><li>LifeCompass Digital Squad</li><li>Math League</li><li>Medfield Food Pantry</li><li>Newspaper - The Looking Glass</li><li>Robotics</li><li>Set Design Club</li><li>Ski Club</li><li>Soldier Support</li><li>Speech Team</li><li>Student Government</li><li>Thomas Upham House</li><li>Tone Chimes</li></ul> `
    },
    {
      title: 'Secondary School   ',
      content: `<ul> <li>Babysitting Course </li> <li>Clef Hangers - A Cappella  </li><li>Drama & Musicals – Lagoon Players</li><li>Film Club   </li><li>Junior Classical League</li><li>Junior Faith Peer Leaders</li><li>Lectors and Cantors</li><li>LifeCompass Digital Squad</li><li>Math League</li><li>Medfield Food Pantry</li><li>Newspaper - The Looking Glass</li><li>Robotics</li><li>Set Design Club</li><li>Ski Club</li><li>Soldier Support</li><li>Speech Team</li><li>Student Government</li><li>Thomas Upham House</li><li>Tone Chimes</li></ul> `
    }
  ];