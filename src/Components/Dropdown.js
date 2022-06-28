import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ExploreTwo from '../Assets/ExplaoreTwo.png'


function Dropdown(props) {
    
    const [click, setClick] = useState(false);
    const {menuArray} = props;
    let label = props?.label[0].label;
    // console.log('label',label)

    const handleClick = () => setClick(!click);

    const MenuImg =[
        {
            placeHolder: ExploreTwo ,
            caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deleniti beatae exercitationem illum labore officia ad placeat laboriosam nihil aliquid.'
        }
    ]

    return (
        <>
           

            <Dropcover onClick={handleClick}
                        className={click ? 'dropdown-menu clicked' : ''}
                        >
                <div className="arrange">
                    {MenuImg.map((men,idx)=>{
                        return(
                            <div className='content' key={idx}>
                                <div className='red-abel'>{label}</div>
                                <div>
                                    <img src={men.placeHolder} alt="" />
                                </div>
                                <div>
                                    <p>{men.caption}</p>
                                </div>
                            </div>
                        )
                    })}
                    <ul className='list-menu'  >
                        {menuArray?.map((item, index) => {
                            return (
                              <li key={index}>
                                <a
                                  className={item.cName}
                                  href={item.path}
                                  onClick={() => setClick(false)}
                                  title={
                                    item.description ? item.description : ""
                                  }
                                  target={item.target ? item.target : "_parent"}
                                >
                                  {item.title}
                                </a>
                              </li>
                            );
                        })}

                    </ul>
                </div>
                    
            </Dropcover>
        </>
    );
}

export default Dropdown;


const Dropcover =styled.section`
        width: 46vw !important;
        position: absolute;
        top: 110px !important;
        /* left: 0 !important; */
        right:10rem !important ;
        padding: 20px;
        z-index: 999;
        background-color: #fff;
        border-radius: 30px;
        align-items: center;
        justify-content: center;
        min-height: 17rem;
        box-shadow:10px 30px 9px 10px rgba(0, 0, 0, 0.3) ;

    .arrange{
        display:flex ;
        align-items: center;
        justify-content: center;
        text-align: left;
        display:grid ;
        grid-template-columns: 1fr 44%;
        .content{
            display:grid ;
            grid-template-columns: 36% 1fr;
            gap: 20px;
            align-items: flex-start;
            align-self: flex-start;
            position: relative;

            .red-abel{
                grid-column:1/3;
                /* right:20% ; */
                position: relative;
                text-align:center ;
                color:red ;
                font-weight:900 ;
            }

            p{
                padding-top:20px ;
                font-size: 18px;

            }

            img{
                width:100% ;
                height:13rem ;
                object-fit:cover ;
            }
        }
    }

    .list-menu{
        position: relative;
        display: flex;
        flex-direction: column;
        list-style: none;
        text-align: start;
        padding: 0;
        color:#000 ;

        
        &::before{
            content: '';
            border-left: 5px solid #767373;
            height: 100%;
            width: 13px;
            position: absolute;
        }
    li {
            cursor: pointer;
            color: #000 !important;
            text-align: left !important;
            border-bottom: 1px solid #fff;
            text-transform: capitalize;

            &:hover{
                background: rgba(0, 0, 0, 0.6);
                border-bottom: 1px solid #fff; 
                color :#fff !important;

            }
            &:hover .dropdown-link{
                color :#fff !important;
            }
            .dropdown-link {
                display: block;
                height: 100%;
                width: 100%;
                text-decoration: none;
                color: #000 !important;
                padding: 16px;
                font-size:18px !important;
                text-transform: capitalize;

                }
        }

    }


        
    

    .dropdown-menu.clicked {
    display: flex;
}
`