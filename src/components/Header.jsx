import React from "react";
import bootstrap from "../icons/bootstrap-svgrepo-com.svg"

function Header(){
    return <div class="container py-3">
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img className="img" height={40} width={45} src={bootstrap} alt="bootstrap" />
          <span class="fs-4">Pricing example</span>
        </a>
  
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="bing">Features</a>
          <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="bing">Enterprise</a>
          <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="bing">Support</a>
          <a class="py-2 link-body-emphasis text-decoration-none" href="bing">Pricing</a>
        </nav>
      </div>
  
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal text-body-emphasis">Pricing</h1>
        <p class="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
      </div>
    </header>
    </div>
}

export default Header;