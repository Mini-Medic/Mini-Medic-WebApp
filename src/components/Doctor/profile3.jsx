import React from 'react';
import loginImg from "./strange.png";
import { Card, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export class Profile3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Card centered>
              <Image src={loginImg} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                 Doctor Strange
                </Card.Header>

                <Card.Meta>
                  <span className='date'>25 year work experience</span>
                </Card.Meta>
                

                <Card.Description>
                Doctor Strange is a Surgeon living in Pearl City.
                  <div>Website: www.marvel.com</div>
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
                DoctorStrange@hawaii.edu
                </div>
                </a>
                <a><div>
                <Icon name='home' />
                    1111 XXXX St, Honolulu,HI,96829
                </div></a>
              </Card.Content>
        
              <Card.Content extra>
              <Link to='/doctor3' className="buttom">
                <button type="button" className="dt">Select Other Doctor</button>
                </Link>
            </Card.Content>
            </Card>
          )
    }

    


}