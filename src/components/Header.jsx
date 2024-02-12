export default function Header({ title, Logo }) {
    return <header id="header">
        <img src={Logo || ''} alt="Logobrand" />
        <h1>{title}</h1>
    </header>
}
