import React from 'react'

export default function Card(props) {
    return (
    <div className="card">
      <div className="img-container">
      </div>
      <div className="content">
        <ul>
        <img alt={props.name} src={props.data.picture.large} />

          <li>
            <strong> Name:</strong> {props.data.name.first} {props.data.name.last}
          </li>

          <li>
            <strong>E-mail:</strong> {props.data.email}
          </li>

          <li>
            <strong>Location:</strong> {props.data.location.country}
          </li>
    </ul>

      </div>
    </div>
  )
}

