

export const HeaderComponent = () => {
  return (
    <>
    <header id="header" className="header sticky-top">
        
        <div className="branding d-flex align-items-cente">
            <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
                <img src="assets/img/finest-logo.png" alt="Logo"/>
                <h1 className="sitename">Finest</h1>
            </a>
            <nav id="navmenu" className="navmenu">
                <ul>
                <li>
                    <a href="/" className="active">
                    Home
                    </a>
                </li>
                <li>
                    <a href="/education">Education</a>
                </li>
                <li>
                    <a href="/catalog-detail">Catalog</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="#team">Team</a>
                </li>
                
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list" />
            </nav>
            </div>
        </div>
    </header>

    </>
  )
}
