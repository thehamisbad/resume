import * as React from 'react';
import { ResumeProperties } from '../interfaces/Resume';
import Menu from './Menu';
import { Switch,Route } from 'react-router-dom';

import '../../scss/resume.scss';

class Resume extends React.Component<ResumeProperties> {

    render () {
        return (
            <div className='Resume-container'>
                <div className='Resume'>
                    <h1 className='Resume-candidateName'>
                        { this.props.name }
                    </h1>
                    <p className='Resume-candidate-summary'>
                        { this.props.summary }
                    </p>
                    <Menu items={this.props.menu.items} />
                    <Switch>
                        <Route exact path='/' render={(_props) => (<div>Hello</div>)}/>
                        <Route exact path='/industry-experience' render={(_props) => (<div>Hello industry experience</div>)}/>
                        <Route exact path='/projects' render={(_props) => (<div>Hello projects</div>)}/>
                        <Route exact path='/non-technical' render={(_props) => (<div>Hello non-technical</div>)}/>
                        <Route exact path='/technical' render={(_props) => (<div>Hello technical</div>)}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Resume;