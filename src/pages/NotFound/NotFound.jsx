import './NotFound.css';
import four from '../../assets/four.png';
import four1 from '../../assets/four1.png';
import zero from '../../assets/zero.png';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <div className="wrapper">
                <main className="main">
                    <div className="notpage">
                        <div className="container">
                            <div className="notpage__wrapper">
                                <div className="bubbles">
                                    <div className="bubble bubble-one"></div>
                                    <div className="bubble bubble-two"></div>
                                    <div className="bubble bubble-three"></div>
                                    <div className="bubble bubble-four"></div>
                                    <div className="bubble bubble-five"></div>
                                    <div className="bubble bubble-six"></div>
                                </div>
                                <div className="notpage__wrapper-img">
                                    <img src={four} alt="" /> <img src={zero} alt="" />
                                    <img src={four1} alt="" />
                                </div>
                                <div className="notpage__wrapper-data">
                                    <div className="title">Opps! Page not found</div>
                                    <Link to="/" className="btn btn-reset">
                                        Back to home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default NotFound;
