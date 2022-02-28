import React from 'react';
import './App.css';
import Image from './Components/Image'
import DescriptionBox from './Components/DescriptionBox'
import ArrowButton from './Components/ArrowButton'
import HeartButton from './Components/HeartButton'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageURL: '',
      myDescription: '',
      numOfClick: 0,
      isMyBabe: false
    }
  }
  render() {
    return (this.state.isMyBabe)
      ? (
        <div className='App'>
          <Image imageURL={this.state.imageURL} />
          <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <DescriptionBox myDescription={this.state.myDescription} />
            <div className='NavigationBar'>
              <ArrowButton handleArrowButton={this.handleArrowButton} iconLink={'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-left-icon.png'} />
              <HeartButton handleHeartButton={this.handleHeartButton} numOfClick={this.state.numOfClick} iconLink={'https://www.pinclipart.com/picdir/middle/6-60466_blue-heart-clipart-instagram-blue-heart-icon-png.png'} />
              <ArrowButton handleArrowButton={this.handleArrowButton} iconLink={'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-right-icon.png'} />
            </div>
          </div>
        </div>
      )
      : <div> {'Bạn nhập sai rồi. Mình xin lỗi nhé!'} </div>
  }
  componentDidMount() {
    const date = prompt('Rất vui được gặp bạn! Mình là trợ lí ảo của Trường Huy. Để mình biết chắc bạn là Trân, vui lòng nhập chính xác ngày kỉ niệm tình yêu', 'Nhập ở đây nhé!')
    if (date === '26/10/2019') this.setState({ isMyBabe: true })
  }
  handleArrowButton = () => {
    fetch('http://localhost:3000/')
      .then(res => res.json())
      .then(obj => {
        this.setState({
          imageURL: obj.imageURL,
          myDescription: obj.myDescription,
          numOfClick: obj.numOfClick
        })
      })
  }

  handleHeartButton = () => {
    const { imageURL, numOfClick } = this.state
    fetch('http://localhost:3000/', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        imageURL,
        numOfClick: numOfClick + 1
      })
    })
      .then(promise => promise.json())
      .then(res => this.setState({ numOfClick: res.numOfClick }))
  }
}

export default App;
