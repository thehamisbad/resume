import * as React from 'react';
import { Link } from 'react-router-dom';
import { MenuProperties } from '../interfaces/Menu';

import '../../scss/menu.scss';

class Menu extends React.Component<MenuProperties> {

    buildMenuItems() {
        return this.props.items.map(item => 
                (<li className='Menu-item'><Link to={item.link}>{item.label}</Link></li>)
            );
    }

    render() {
        const items = this.buildMenuItems();
        return (
            <div className='Menu-overflowContainer'>
                <div className='Menu-container'>
                    <ul className='Menu'>
                    {items} 
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;