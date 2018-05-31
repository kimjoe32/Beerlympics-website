import React, { Component } from 'react';

const pageFooterStyle = {
    backgroundColor: "transparent"
}
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer" style={pageFooterStyle}>
                    <div className="container">
                    <div className="divider black" />
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="black-text">Beerlympics</h5>
                                <p className="black-text text-lighten-4">Thanks for visiting. This is a personal project  of mine. If you notice any bugs, let me know!</p>
                                <p className="black-text"> - Joe </p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="black-text">Links</h5>
                                <ul>
                                    <li>
                                        <a className="grey-text" href="https://github.com/kimjoe32/Beerlympics-website">GitHub</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }   
}

export default Footer;