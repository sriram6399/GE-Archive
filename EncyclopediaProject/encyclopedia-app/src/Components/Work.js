import { Stack, Row,Col, Container } from 'react-bootstrap';
import './work.scss'
//import Popup from 'reactjs-popup';
import PopupBox from './PopupBox';

function Work(props) {
    const places = []
    const characters = []
    const miscs = []
    for(let i=0 ; i<props.data.places.length;i++){
        places.push(<p className='m-2 items hover-zoom'>
            <PopupBox 
                text= {props.data.places[i].desc}
                heading= {props.data.places[i].name}
                >
            </PopupBox>
        </p>)
    }
    for (let j=0 ;j<props.data.characters.length;j++){
        characters.push(<p className='m-2 items hover-zoom'>
            <PopupBox 
                text= {props.data.characters[j].desc}
                heading= {props.data.characters[j].name}
                >
            </PopupBox>
        </p>)
    }
    for (let j=0 ;j<props.data.misc.length;j++){
        miscs.push(<p className='m-2 items hover-zoom'>
            <PopupBox 
                text= {props.data.misc[j].desc}
                heading= {props.data.misc[j].name}
                >
            </PopupBox>
        </p>)
    }
    console.log(props.data.work_name)
    return (
        <div className='w-75 m-3 d-flex justify-content-center '>
        <Stack gap={3} className="work border rounded mb-0">
            <Row>
                <Col>
                    <div className='imageholder m-3'>
                    <img src={require('../Images/georgeeliot.jpg')} alt="This is a book cover"></img>
                    </div>               
                </Col>
                <Col>
                    <div>
                        <Row>
                            <h2 className='m-2 p-2'><p className='p-2 m-2'>{props.data.work_name}</p></h2>
                        </Row>
                        <Row className='m-2'></Row>
                        <Row>
                            <h5>Middlemarch, A Study of Provincial Life is a novel by the English author Mary Anne Evans, who wrote as George Eliot.......... </h5>
                        </Row>
                        <Row className='m-2'></Row>
                        <Row>
                           <Col>
                           
                           </Col>
                           
                           <Col>
                           
                           </Col>
                        </Row>
                    </div>
                </Col>
                <Row>
                <h5 className='text-center' style={{color:'#9F2B2B'}}>Places</h5>
                           <div className='center '>
                                {places}
                                
                            </div>
                </Row>
                <Row>
                <h5 className='text-center' style={{color:'#9F2B2B'}}>Characters</h5>
                           <div className='center '>
                                {characters}
                                
                            </div>
                </Row>
                <Row>
                <h5 className='text-center' style={{color:'#9F2B2B'}}>Misc</h5>
                           <div className='center '>
                                {miscs}
                                
                            </div>
                </Row>
            </Row>
        </Stack> 
        </div>
    );
  }
  
export default Work;