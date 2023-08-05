import logo from './GloboLogo.png'

const Header = (props) => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="col-md-7 mt-5 subtitle">
            {props.subtitle}
        </div>
    </header>
);

export default Header