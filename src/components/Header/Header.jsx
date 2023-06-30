import React ,{useRef , useEffect} from 'react';
import {Container , Row , Button} from 'reactstrap';
import { NavLink , Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Header/header.css';


const nav__links = [{
  path:'/home',
  display:'Home',
},
{
  path:'/about',
  display:'About',
},
{
  path:'/bmi',
  display:'BMI',
},
{
  path:'/calorie',
  display:'Nutrition Tracking',
},
{
  path:'/challenges',
  display:'Challenges',
},
{
  path:'/contact',
  display:'Contact Us',
},
]
const Header = () => {
  const headerRef = useRef(null);
  const stickyHeaderFunc=()=>{
    window.addEventListener("scroll",()=>{
      if(
        document.body.scrollTop>80||
        document.documentElement.scrollTop>80){
          headerRef.current.classList.add("sticky__header");
        }
        else {
          headerRef.current.classList.remove("sticky__header");
        }
    });
  };
  useEffect(()=>{
    stickyHeaderFunc();
    return window.removeEventListener("scroll",stickyHeaderFunc);
  });
  return <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between ">
         <h1>FITandFAT</h1>
         <div className="navigation">
          <ul className="menu  d-flex align-items-center ">
            {nav__links.map((item,index) => (
              <li className="nav__item" key={index}>
                <NavLink to={item.path} className={navClass=>navClass.isActive ? "active__link":""}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__right d-flex align-items-center">
          <div className="nav__btns d-flex align-items-center">
            <Button className='btn primary__btn ' ><Link to='/login'>Login</Link></Button>
            <Button className='btn primary__btn ' ><Link to='/register'>Register</Link></Button>
          </div>
          <span className="mobile__menu">
            <i class="ri-menu-line"></i>
          </span>
        </div>
        </div>
      </Row>
    </Container>

  </header>
};

export default Header
