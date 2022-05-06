import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import CustomHeader from './components/Header/CustomHeader';
import CustomFooter from './components/Footer/CustomFooter';

import About from './components/Content/About/About'
import Skills from './components/Content/Skills/Skills'
import Work from './components/Content/Work/Work'
import Education from './components/Content/Education/Education'

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <CustomHeader/>
        </Header>

        {/* <Layout class="middle-layout">
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout> */}

        <Content>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="skills" element={<Skills/>}/>
            <Route path="work" element={<Work/>}/>
            <Route path="education" element={<Education/>}/>
          </Routes>
        </Content>

        <Footer>
          <CustomFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
