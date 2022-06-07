import './App.css';
import { Layout } from 'antd';
import CustomHeader from './components/Header/CustomHeader';
import CustomFooter from './components/Footer/CustomFooter';
import AnimatedRoutes from './AnimatedRoutes';


const { Header, Footer, Content } = Layout;

function App() {

  return (
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
  );
}

export default App;
