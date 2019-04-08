import * as React from 'react';
import { MenuProperties } from '../interfaces/Menu';

class Menu extends React.Component<MenuProperties> {

    buildMenuItems() {
        return this.props.items.map(item => (<li><a href={item.link}>{item.label}</a></li>));
    }

    render() {
        const items = this.buildMenuItems();
        return (
            <div className='Menu-container'>
                <ul className='Menu'>
                   {items} 
                </ul>
            </div>
        );
    }
}

export default Menu;