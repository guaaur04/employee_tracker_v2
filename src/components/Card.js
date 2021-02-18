import React, { Component } from 'react'

export default function Card(props) {
    return (

        <div className="card text-center">
            <div className="card-header">
                <h3> Name: {props.data.name} </h3>
            </div>
        <div className="card-body">{props.children}</div>
    </div >
  );
}

