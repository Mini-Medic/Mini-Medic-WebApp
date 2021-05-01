import React from 'react';
import loginImg from "./female.png";
import { Card, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export class Profile2 extends React.Component {


    render(){
        return (
            <Card centered>
              <Image src={loginImg} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                 Anna
                </Card.Header>

                <Card.Meta>
                  <span className='date'>12 year work experience</span>
                </Card.Meta>
                

                <Card.Description>
                Anna Lin is a Pediatrician living in Honolulu.
                  <div>Website: www.xxxx.com</div>
                </Card.Description>

              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='phone' />
                  （808)XXX-XXXX
                </a>
                <a>
                <div>
                <Icon name='envelope' />
                  Anna@hawaii.edu
                </div>
                </a>
                <a><div>
                <Icon name='home' />
                    1111 XXXX St, Honolulu,HI,96829
                </div></a>
              </Card.Content>
        
              <Card.Content extra>
              <Link to='/doctor2' className="buttom" >
                <button  type="button" className="sod">Select other doctor</button> 
                </Link>
            </Card.Content>
            </Card>
          )
    }

    


}