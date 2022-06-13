import React, { Component } from 'react'
import './App.css';
import { Layout } from 'antd';
import CustomHeader from './components/Header/CustomHeader';
import CustomFooter from './components/Footer/CustomFooter';
import AnimatedRoutes from './AnimatedRoutes';


const { Header, Footer, Content } = Layout;

class App extends Component {
  // state = {
  //   isDarkTheme: true
  // }

  // toggleTheme = () => {
  //   this.setState({ isDarkTheme: !this.state.isDarkTheme }, () => {
  //     //console.log('theme', this.state.isDarkTheme)
  //     const theme = this.state.isDarkTheme ? darkTheme : lightTheme
  //     const {
  //       mainFontColor,
  //       secondaryFontColor,
  //       fontSelectedColor,
  //       mainBgColor,
  //       borderColor
  //     } = theme
  //     let root = document.documentElement
  //     root.style.setProperty('--main-font-color', mainFontColor)
  //     root.style.setProperty('--secondary-font-color', secondaryFontColor)
  //     root.style.setProperty('--main-font-selected-color', fontSelectedColor)
  //     root.style.setProperty('--main-bg-color', mainBgColor)
  //     root.style.setProperty('--main-border-color', borderColor)
  //   })
  // }

  render() {
    return (
      <>
        <Layout>
          <Header>
            <CustomHeader />
          </Header>

          <Content>
            <div className="main-content-div">
              <AnimatedRoutes />
            </div>
          </Content>

          <Footer>
            <CustomFooter />
          </Footer>
        </Layout>

      </>
    );
  }

}

// const darkTheme = {
//   mainFontColor: 'rgb(231, 119, 67)',
//   secondaryFontColor: '#fff',
//   fontSelectedColor: '#fff',
//   mainBgColor: '#1e3145',
//   borderColor: '#474a4f7f',
// }

// const lightTheme = {
//   mainFontColor: 'rgb(209, 84, 26)',
//   secondaryFontColor: 'rgb(43, 43, 43)',
//   fontSelectedColor: 'rgb(229, 226, 233)',
//   mainBgColor: '#ededed',
//   borderColor: '#474a4f3c',
// }

export default App;
