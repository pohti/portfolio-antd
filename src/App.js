import './App.css';

import { Layout } from 'antd';
import CustomHeader from './components/Header/CustomHeader';
import CustomFooter from './components/Footer/CustomFooter';

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

        <Content>Content</Content>

        <Footer>
          <CustomFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
