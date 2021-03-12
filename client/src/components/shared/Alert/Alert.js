import { Toast } from "react-bootstrap"

import logo from './../../layout/Navigation/logoblack.png'

const Alert = ({ handleAlert, show, title, text }) => {

    return (
        <Toast autohide show={show} onClose={() => handleAlert(false)} delay={4000} style={{ zIndex: 9999, position: 'fixed', bottom: 38, right: 17, width: 400 }}>
            <Toast.Header>
                <img
                    src={logo}
                    className="rounded mr-2"
                    alt="Logotipo"
                    style={{ width: 20, height: 20 }}
                />
                <strong className="mr-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}

export default Alert