import React, { Component } from 'react'
import Api from '../../Services/dataService.js'
import { Row, Col, Card } from 'antd'
import uuidv4 from 'uuid/v4'
import './Showfilms.css'
import Movie from '../Movie/Movie'

export default class Showfilms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: [],
      isShowMovieDetails: false,
      movieDetailId: ''
    }
  }

  handleApiCall (props) {
    if (props.match.params.query) {
      Api.getSearch(props.match.params.query)
          .then(data => {
            this.setState({
              results: data[1]
            })
          })
    } else {
      Api.getMovies(props.category)
          .then(data => {
            this.setState({
              results: data[1]
            })
          })
    }
  }

  movieCardName (movieName) {
    let name;
    if(movieName.length <= 32){
      name = movieName
    } else {
      name = `${movieName.slice(0,32)}...`
    }
    return name;
  }
 
  componentWillReceiveProps (nextProps) {
    this.handleApiCall(nextProps)
  }

  componentDidMount () {
    this.handleApiCall(this.props)
  }

  render () {
    const imageClick = (value) => {
      this.setState({
        isShowMovieDetails: true,
        movieDetailId: value
      })
    }
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h1 className='title'>{ this.props.currentPage } </h1>
          </Col>
        </Row>
        <Row gutter={24}>
          {
            this.state.results && Object.entries(this.state.results).map(key => {
              return (
                <div>
                  {this.state.isShowMovieDetails && this.state.movieDetailId === key[1].EventCode && <Movie {...key[1]}/>}
                  <Col className='gutter-row' span={5} offset={1} key={uuidv4()}>
                      <Card style={{ width: 240 }} hoverable={true} bodyStyle={{ padding: 1 }} >
                        <div className='hovereffect'>
                          <img alt={key[1].EventTitle} onClick={() => {imageClick(key[1].EventCode)}} width='100%' src={`https://in.bmscdn.com/events/moviecard/${key[0]}.jpg`} />
                        </div>
                        <div className='custom-card'>
                          <h3>{this.movieCardName(key[1].EventTitle)}</h3>
                        </div>
                      </Card>
                  </Col>
                </div>
              )
            })
          }
        </Row>
      </div>
    )
  }
}
