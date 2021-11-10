import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="wrap">
          <div class="social-links">
            <a href="#stank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="#stank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="#stank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          </div>
          <input type="text" placeholder="Email Address" />
          <button type ="submit">Keep in Touch</button>
        </div>

        <p class="copyright">&copy;2016 Sarah Holden</p>
      </footer>
    </div>
  )
}

export default Footer
