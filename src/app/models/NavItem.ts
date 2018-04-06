export class NavItem {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    className?: string;
    route?: string;
    children?: NavItem[];
}