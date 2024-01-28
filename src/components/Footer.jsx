import React from "react";
import bootstraplogo from "../icons/bootstraplogo.svg"

function Footer(){
    return <footer class="pt-4 my-md-5 pt-md-5 border-top">
      <div class="row">
        <div class="col-12 col-md">
          <img class="mb-2" src={bootstraplogo} alt="" width="24" height="19"/>
          <small class="d-block mb-3 text-body-secondary">&copy; 2017–2023</small>
        </div>
        <div class="col-6 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Cool stuff</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Random feature</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Team feature</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Stuff for developers</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Another one</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Last time</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Resource</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Resource name</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Another resource</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Final resource</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Team</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Locations</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Privacy</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="bing.com">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
}

export default Footer;