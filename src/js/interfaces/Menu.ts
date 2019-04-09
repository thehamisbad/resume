export interface MenuProperties {
    items: MenuItem[];
    selected?: string;
}

export interface MenuItem {
    label: string;
    link: string;
    key: string;
}