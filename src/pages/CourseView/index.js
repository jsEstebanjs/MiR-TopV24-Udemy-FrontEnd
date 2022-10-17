import Accordion from 'react-bootstrap/Accordion';
import udemy from '../../images/udemy.png';
import './index.css'

function navCourse() {
  return <>
    <nav>
      <div className="nav-left">
        <img src={udemy} alt=""/>
        Un título de Curso
      </div>
      <div className="nav-right">
        <div className='item'>
          <span>⭐</span>
          Deja una Calificación
        </div>
        <div className='item'>
          <span>🚧</span>
          Tu Progreso
        </div>
        <div className='item share'>Compartir</div>
        <div className='item menu'>...</div>
      </div>
    </nav>
  </>
}

function CourseView() {
  return <>
    {navCourse()}
    <div className='main'>
      <div className='left'>
        <div className='video-section'>
          <video src='https://makeitreal.s3.amazonaws.com/videos/89300933755/2022-09-06/tgvcMbH8L.mp4' controls/>
        </div>
      </div>
      <div className='right'>
        <div className='right-content'>Contenido del Curso <span>X</span> </div>
       {BasicExample()}
      </div>
    </div>
  </>;
}

export default CourseView;



function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

