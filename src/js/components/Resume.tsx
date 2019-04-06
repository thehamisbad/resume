import * as React from 'react';
import { ResumeProperties } from '../properties/Resume';

class Resume extends React.Component<ResumeProperties> {

    render () {
        return (
            <div>
                { this.props.name }
            </div>
        )
    }
}

export default Resume;