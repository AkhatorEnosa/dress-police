import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo'; 
import Form from './components/Form/Form';
import Form1 from './components/Form/Form1';
import Image from './components/Image/Image';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';



const app = new Clarifai.App({
 apiKey: '567f7e37e09c45879fb50dd97fde8d49'
});

const initialState = {
      input : '',
      imageUrl: '',
      box: {},
      name: '',
      fired: false,
      modal: false,
      verdict: ''
    }

class App extends Component { 
  constructor(){
    super()

    this.state = initialState

  }

  getName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  fireMainComponent = () => {
    if(this.state.name === '') {
     alert('Please tell us what your name is ')
    } else{
      this.setState({
        fired: true
      })
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onPictureSubmit = (e) => {
    if(this.state.input === '') {
      alert('Please paste a link')
    } else {

      this.setState({
        imageUrl: this.state.input
      })

      app.models.predict("d16f390eb32cad478c7ae150069bd2c6", this.state.input)
      .then(response => {
        const outputsValue = response.outputs[0].data.concepts;

          if(outputsValue[0].name === 'safe') {
            this.setState({ verdict: 'This is allowed morally 👍👮', modal: true})
          }else {
            this.setState({ verdict: 'This is not allowed morally 👮👎', modal: true})
          }
      })
      .catch(err => {
          this.setState({ verdict: 'Met with an error. Please try again with a valid link ✌👮' , modal: true})
      })
    }
  }

  closeModal = (e) => {
    this.setState({
      verdict: '',
      modal: false
    })
  }

  render() {
    const {fired, modal, name, imageUrl, verdict} = this.state;
    if (fired === false){ 
        return (
            <div className = "tc pa5">
              <Logo />
              <Form1 
                getName = {this.getName}
                fireMainComponent = {this.fireMainComponent}
                />
              <div className="w-90 w-30-ns f6 f5-ns bg-white-60 br4 center pa3 desc">
                <p className="f6 f5-ns desc-c">This app checks a picture for improper dressing according to moral standards</p>
              </div>
              <Footer />
            </div>
        )
    } else if(modal === true) {
      return(
        <div className = "tc pa5">  
          <Logo />
          <Modal 
              closeModal = {this.closeModal}
              getStatus = {verdict}
            />
          <Footer />
        </div>
        )
    } else {
      return(
        <div className = "tc pa5">  
          <Logo />
          <Form 
            onInputChange = {this.onInputChange}
            onPictureSubmit = {this.onPictureSubmit}
            getName = {name}
          />
          <Image imageUrl = {imageUrl}/>

          <Footer />
        </div> 
      ) 

    }
  } 
}

export default App; 