import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import CustomHeader from './components/Header/CustomHeader';
import CustomFooter from './components/Footer/CustomFooter';

import About from './components/Content/About/About'
import Skills from './components/Content/Skills/Skills'
import Work from './components/Content/Work/Work'
import Education from './components/Content/Education/Education'
import Resume from './components/Content/Resume/Resume';

const { Header, Footer, Content } = Layout;

function App() {
  // console.log(window.innerHeight)
  // const contentHeight = window.innerHeight - 133

  return (
    <Layout>
      <Header>
        <CustomHeader />
      </Header>

      <Content>
        <div className="main-content-div">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="work" element={<Work />} />
            <Route path="education" element={<Education />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
        </div>
      </Content>

      <Footer>
        <CustomFooter />
      </Footer>
    </Layout>
  );
}

export default App;
