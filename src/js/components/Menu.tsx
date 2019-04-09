import * as React from 'react';
import { MenuProperties } from '../interfaces/Menu';

import '../../scss/menu.scss';

class Menu extends React.Component<MenuProperties> {

    buildMenuItems() {
        return this.props.items.map(item => (<li className='Menu-item'><a href={item.link}>{item.label}</a></li>));
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