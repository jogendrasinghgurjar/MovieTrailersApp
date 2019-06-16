import React, { Component } from 'react'
import { Menu, Icon, Dropdown } from 'antd'
import uuidv4 from 'uuid/v4'
import Api from '../../Services/dataService'
import Utils from '../../Services/utilsService'

export default class ListTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: []
    }
  }

  handleApiCall (props) {
    Api.getMovies(props.category)
      .then(data => {
        this.setState({
          results: data[0]
        })
      })
  }

  componentWillReceiveProps (nextProps) {
    this.handleApiCall(nextProps)
  }

  componentDidMount () {
    this.handleApiCall(this.props)
  }

  render () {
    const menu = (
      <Menu>
        {this.state.results.map((item => {
          <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
           {item}
          </a>
        </Menu.Item>
        }))}
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          Hover me <Icon type="down" />
        </a>
      </Dropdown>
    )
  }
}
