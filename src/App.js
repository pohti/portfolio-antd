import './App.css';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Layout class="middle-layout">
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
