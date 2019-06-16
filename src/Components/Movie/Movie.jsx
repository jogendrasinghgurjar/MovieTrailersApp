/* @flow */
import React, { Component } from 'react'
import { Row, Col, Rate, Tag } from 'antd'
import ReactPlayer from 'react-player'

import Utils from '../../Services/utilsService'
import Api from '../../Services/dataService'

import './Movie.css'

export default class Movie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      urlImage: '',
      stars: 0,
      genres: [],
      release_date: '',
      videoId: 0
    }
  }

  render () {
    return (
      <Row className='overlay'>
        <Col span={4} offset={1}>
          <img alt={this.props.EventTitle} width='85%' src={`https://in.bmscdn.com/events/moviecard/${this.props.EventCode}.jpg`} />
        </Col>
        <Col span={8} offset={1}>
          <h1>{this.props.EventTitle}</h1>
          <hr />
          <strong> Description: </strong>
          <p>{this.state.description}</p>
          <hr />
          <div className='genere'>
            <span className='genereTitle'>
              <strong>Generes: </strong>
            </span>
            {/* {this.props.genres.map(genere => <Tag color={Utils.randomColor()} key={genere.id}>{genere.name}</Tag>)} */}
          </div>
          {/* <Rate className='rate' value={this.state.stars} /> */}
          <hr />
          <div className='trailer'>
            <strong> Trailer: </strong>
          </div>
          <ReactPlayer url={this.props.TrailerURL} controls={true}/>
        </Col>
      </Row>
    )
  }
}
