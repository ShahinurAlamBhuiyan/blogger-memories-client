import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 mb-4">
                        <h6>About us</h6>
                        <p class="text-justify">Blogger is an American online content management system which enables multi-user blogs with time-stamped entries.</p>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12 mt-5">
                        <ul class="social-icons">
                            <li><a class="facebook" href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a class="twitter" href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a class="linkedin" href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by Blogger Memories.</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;