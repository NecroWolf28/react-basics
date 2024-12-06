import './Header.css'
export const Header = () => {
    return <>
        <ul>
            <li><a href={"/home"}>Home</a></li>
            <li><a href={"/about"}>About</a></li>
            <li><a href={"/contact"}>Contact</a></li>
            <li><a href={"/apitesting"}>Test API</a></li>
            <li><a href={"/csstesting"}>Test CSS</a></li>
        </ul>
    </>
}