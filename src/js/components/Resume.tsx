import * as React from 'react';
import { ResumeProperties } from '../interfaces/Resume';

class Resume extends React.Component<ResumeProperties> {

    render () {
        return (
            <div className='Resume-container'>
                <div className='Resume-candidateName'>
                    { this.props.name }
                </div>
                <div className='Resume-candidate-summary'>
                    { this.props.summary }
                </div>
            </div>
        )
    }
}

export default Resume;