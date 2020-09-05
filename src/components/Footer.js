import React from 'react'

export default function Footer() {
    return (
        <div className="site-footer">
            <h4 className="text-center">
                Code Blog
            </h4>            
            <p className="text-center">
                Follow us
            </p>
            <div className="footer-social-links">
                <ul className="social-links-list">
                    <li>
                        <a className="facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a className="google" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-google fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a className="linkedin" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
