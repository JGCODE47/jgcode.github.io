
const Navbar = () => {
    return (
        <nav>
            <div
                className="logo"

            >
                <a href="/">{`<JGCODE>`}</a>
            </div>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/Profile">Profile</a>
                </li>
                <li>
                    <a href="/Project">Project</a>
                </li>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
