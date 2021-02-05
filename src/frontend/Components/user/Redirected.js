import React, { Component } from 'react'
import './Redirected.css'
export default class Redirected extends Component {

    constructor(props){
        super(props);
    }
    render(props) {
        return (
            <div className="redirected-container">

                <div className="film-image">
                    <img src={this.props.title.image} alt="kgf"/>

                </div>
                <div className="film-description">
                   {this.props.title.description}
                    </div>
                <div className="film-title">Movie:{this.props.title.title}</div>
                <div className="film-cast">Cast:{this.props.title.cast}</div>
                <div className="film-director">Director:{this.props.title.director}</div>
                <div className="film-date">Releasing Date:{this.props.title.date}</div>
                <div className="film-category">Category:{this.props.title.category}</div>
                




                
            </div>
        )
    }
}
