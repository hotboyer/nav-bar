import React from "react";
import check from "../icons/black-checkmark-png-4.svg"

function Plans(){
    return  <div class="container py-3">
    <main>
    <h2 class="display-6 text-center mb-4">Compare plans</h2>

    <div class="table-responsive">
      <table class="table text-center">
        <thead>
          <tr>
            <th style={{width: "34%"}}></th>
            <th style={{width: "22%"}}>Free</th>
            <th style={{width: "22%"}}>Pro</th>
            <th style={{width: "22%"}}>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-start">Public</th>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Private</th>
            <td></td>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row" class="text-start">Permissions</th>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Sharing</th>
            <td></td>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Unlimited members</th>
            <td></td>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Extra security</th>
            <td></td>
            <td></td>
            <td><img className="img" height={24} width={24} src={check} alt="bootstrap" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  </div>
}

export default Plans;