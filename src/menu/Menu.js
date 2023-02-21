

import { FiChevronRight, FiHome, FiSearch, FiBarChart2, FiBell, FiPieChart, FiHeart, FiCreditCard, FiLogOut } from "react-icons/fi";
import Logo from "../Img/logo.png";
import Perfil from "../perfil/Perfil";
import Despesa from "../despesa/Despesa";
import './script'
function Menu() {
    function ativar() {
        clearMenu();

        const body = document.querySelector("body"),
            sidebar = body.querySelector(".sidebar"),
        home = body.querySelector(".home");

        sidebar.classList.toggle("close");
        home.classList.toggle("exp");
    }
    function openMenu() {
        clearMenu();

        const body = document.querySelector("body"),
            sidebar = body.querySelector(".sidebar"),
            home = body.querySelector(".home");
        sidebar.classList.remove("close");
       
        home.classList.remove("exp");
    }

    function clearMenu() {
        const body = document.querySelector("body"),
            submenu = body.querySelector(".membro");
        const iconMembro = body.querySelector(".icon-membro");
        iconMembro.classList.remove("open");

        submenu.classList.remove("open");
        submenu.classList.remove("sidebar-close");
        const iconGrafico = body.querySelector(".icon-grafico");
        iconGrafico.classList.remove("open");

        const submenuGrafico = body.querySelector(".grafico");
        submenuGrafico.classList.remove("open");

        submenuGrafico.classList.remove("sidebar-close");
        const subMenuVenda = body.querySelector(".venda");
        subMenuVenda.classList.remove("open");

        const iconVenda = body.querySelector(".icon-venda");
        iconVenda.classList.remove("open");

        subMenuVenda.classList.remove("sidebar-close");
        const subMenuAnalitico = body.querySelector(".analitico");
        subMenuAnalitico.classList.remove("open");

        const iconanalitico = body.querySelector(".icon-analitico");
        iconanalitico.classList.remove("open");

        subMenuAnalitico.classList.remove("sidebar-close");
        const subMenuLike = body.querySelector(".like");
        subMenuLike.classList.remove("open");

        const iconLike = body.querySelector(".icon-like");
        iconLike.classList.remove("open");

        subMenuLike.classList.remove("sidebar-close");
        const subMenuWallet = body.querySelector(".wallet");
        subMenuWallet.classList.remove("open");

        const iconWallet = body.querySelector(".icon-wallet");
        iconWallet.classList.remove("open");

        subMenuWallet.classList.remove("sidebar-close");
    }

    function openSubMenuVenda(nome) {
        let classe;
        const body = document.querySelector("body"),
            sidebar = body.querySelector(".sidebar");

        if (sidebar.className.indexOf("close") != -1) {
            classe = "sidebar-close";
        } else {
            classe = "open";
        }
        if (nome == "Membro") {
            const body = document.querySelector("body"),
                toggle = body.querySelector(".icon-membro"),
                submenu = body.querySelector(".membro");

            if (submenu.className.indexOf(classe) != -1) {
                submenu.classList.remove(classe)
                toggle.classList.remove("open")
            } else {
                clearMenu();
                toggle.classList.toggle("open")
                submenu.classList.toggle(classe);
            }
        } else if (nome == "Grafico") {

            const body = document.querySelector("body"),
            toggle = body.querySelector(".icon-grafico"),

                submenu = body.querySelector(".grafico");
            if (submenu.className.indexOf(classe) != -1) {
                submenu.classList.remove(classe);
                toggle.classList.remove("open")

            } else {
                clearMenu();
                toggle.classList.toggle("open");
                submenu.classList.toggle(classe);
            }
        } else if (nome == "Venda") {

            const body = document.querySelector("body"),
            toggle = body.querySelector(".icon-venda"),

                submenu = body.querySelector(".venda");
            if (submenu.className.indexOf(classe) != -1) {
                submenu.classList.remove(classe);
                toggle.classList.remove("open")

            } else {
                clearMenu();
                toggle.classList.toggle("open");
                submenu.classList.toggle(classe);
            }

        } else if (nome == "Analitico") {
            const body = document.querySelector("body"),
            toggle = body.querySelector(".icon-analitico"),

                submenu = body.querySelector(".analitico");
            if (submenu.className.indexOf(classe) != -1) {
                submenu.classList.remove(classe);
                toggle.classList.remove("open")

            } else {
                clearMenu();
                toggle.classList.toggle("open");
                submenu.classList.toggle(classe);
            }
        } else if (nome == "Like") {
            const body = document.querySelector("body"),
            toggle = body.querySelector(".icon-like"),

                submenu = body.querySelector(".like");
            if (submenu.className.indexOf(classe) != -1) {
                submenu.classList.remove(classe);
                toggle.classList.remove("open")

            } else {
                clearMenu();
                toggle.classList.toggle("open");
                submenu.classList.toggle(classe);
            }
        } else if (nome == "Wallet") {
            const body = document.querySelector("body"),
            toggle = body.querySelector(".icon-wallet"),

                submenu = body.querySelector(".wallet");
            if (submenu.className.indexOf(classe) != -1) {
                submenu.classList.remove(classe);
                toggle.classList.remove("open")

            } else {
                clearMenu();
                toggle.classList.toggle("open");

                submenu.classList.toggle(classe);
            }
        }
    }
    return (
        <div >
            <nav className="sidebar close" >
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src={Logo} alt="Logo"></img>
                        </span>

                        <div className="text header-text">
                            <span className="name">athletic Manager</span>
                            <span className="profession">web devoloper</span>
                        </div>
                    </div>
                    <FiChevronRight className="toggle" onClick={ativar} />
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        
                        <ul className="menu-links">
                            <li className="nav-link">
                                <a onClick={() => openSubMenuVenda('Membro')}>
                                    <FiHome className="icon" />
                                    <span className="text nav-text">Dashboard</span>
                                    <FiChevronRight className="toggle-icon icon-membro" />
                                </a>

                            </li>
                            <ul className="sub-menu membro ">
                                <li><a href="#">web membro</a></li>
                                <li><a href="#">web membro</a></li>
                                <li><a href="#">web membro</a></li>

                            </ul>

                            <li className="nav-link">
                                <a onClick={() => openSubMenuVenda('Grafico')}>
                                    <FiBarChart2 className="icon" />
                                    <span className="text nav-text">Revenue</span>
                                    <FiChevronRight className="toggle-icon icon-grafico" />

                                </a>

                            </li>
                            <ul className="sub-menu grafico">
                                <li><a href="#">web grafico</a></li>
                                <li><a href="#">web grafico</a></li>
                                <li><a href="#">web grafico</a></li>

                            </ul>
                            <li className="nav-link">
                                <a onClick={() => openSubMenuVenda('Venda')}>
                                    <FiBell className="icon" />
                                    <span className="text nav-text">Notifications</span>
                                    <FiChevronRight className="toggle-icon icon-venda" />

                                </a>
                            </li>
                            <ul className="sub-menu venda">
                                <li><a href="#">web venda</a></li>
                                <li><a href="#">web venda</a></li>
                                <li><a href="#">web venda</a></li>

                            </ul>
                            <li className="nav-link">
                                <a onClick={() => openSubMenuVenda('Analitico')}>
                                    <FiPieChart className="icon" />
                                    <span className="text nav-text">Analytics</span>
                                    <FiChevronRight className="toggle-icon icon-analitico" />

                                </a>
                            </li>
                            <ul className="sub-menu analitico">
                                <li><a href="#">web sla</a></li>
                                <li><a href="#">web sla</a></li>
                                <li><a href="#">web sla</a></li>

                            </ul>
                            <li className="nav-link">
                                <a onClick={() => openSubMenuVenda('Like')}>
                                    <FiHeart className="icon" />
                                    <span className="text nav-text">Likes</span>
                                    <FiChevronRight className="toggle-icon icon-like" />

                                </a>
                            </li>
                            <ul className="sub-menu like">
                                <li><a href="#">web sla</a></li>
                                <li><a href="#">web sla</a></li>
                                <li><a href="#">web sla</a></li>

                            </ul>
                            <li className="nav-link">
                                <a onClick={() => openSubMenuVenda('Wallet')}>
                                    <FiCreditCard className="icon" />
                                    <span className="text nav-text">Wallets</span>
                                    <FiChevronRight className="toggle-icon icon-wallet" />

                                </a>
                            </li>
                            <ul className="sub-menu wallet">
                                <li><a href="#">web sla</a></li>
                                <li><a href="#">web sla</a></li>
                                <li><a href="#">web sla</a></li>

                            </ul>
                        </ul>
                    </div>
                    <div className="buttom-content">
                        <li className="nav-link">
                            <a href="https://www.google.com/">
                                <FiLogOut className="icon" />
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
            <section className="home">
<Perfil></Perfil>
                {/*                <Despesa></Despesa>*/}
            </section>
        </div>
    )

}

export default Menu