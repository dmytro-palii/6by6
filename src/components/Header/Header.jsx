import * as SC from "./Header.styled"
import logo from "/images/logo.svg"


export const Header = () => {
    return  <SC.Header>
                <a href="/"><SC.Logo src={logo} alt="logo"/></a>
                <nav>
                    <SC.List>
                        <li>
                            <a href="#models">Models</a>
                        </li>
                        <li>
                            <a href="#constructor">Build your own</a>
                        </li>
                    </SC.List>
                </nav>
            </SC.Header>
}