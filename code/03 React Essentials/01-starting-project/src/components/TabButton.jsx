
export default function ({children, isSelected, ...rest}) {
    return <li>
        <button className={isSelected ? 'active' : undefined} {...rest}>{children}</button>
    </li>
}