import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <div className="welcome-container">
            <div className="welcome-main">
                <div className='welcome-content'>
                    <div className='welcome-left'>
                        <p>Welcome To Car Repair Shop!</p>
                        <address>
                            Örnek Hallway<br />
                            Örnek Street<br />
                            Maslak, İstanbul No:111<br />
                            <a href="tel:+15555555555">(555) 555-5555</a>
                        </address>
                    </div>
                    <Link className='welcome-login-button' to="/login">Employee Login</Link>
                </div>
            </div>
        </div>
    )
    return content
}
export default Public