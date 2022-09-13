import React from 'react';

import './footer.css';

function Footer() {
  return(
    <footer>
    <div class="f1">
        <div class="box">
            <p>Udemy Business</p>
            <p>Teach on Udemy</p>
            <p>Get the app</p>
            <p>About us</p>
            <p>Contact us</p>
        </div>
        <div class="box">
            <p>Carrers</p>
            <p>Blog</p>
            <p>Help and Support</p>
            <p>Affiliate</p>
            <p>Investors</p>
        </div>
        <div class="box">
            <p>Terms</p>
            <p>Privacy policy</p>
            <p>Cookie settings</p>
            <p>Sitemap</p>
            <p>Accessibility statement</p>
        </div>
        <div class="box lang">
            <div class="both">
                <span>🌐 </span>
                {/* <img src="./assets/globe.png" alt="globe">  */}
                <p>English</p>
            </div>
        </div>
    </div>
    <div class="f2">
        <div class="box">
              <img src='./images/udemy.png' alt='imagen udemy'/>
        </div>
        <div class="box">
            <p>© 2022 Udemy, Inc.</p>
        </div>
    </div>
</footer>
  )
}
export default Footer;