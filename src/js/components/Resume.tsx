import * as React from 'react';
import { ResumeProperties } from '../interfaces/Resume';
import Menu from './Menu';

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
                </div>
            </div>
        )
    }
}

export default Resume;