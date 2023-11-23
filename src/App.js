import Container from 'react-bootstrap/Container';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUser';
import ModalAddnew from './components/ModalAddnew';

function App() {


  return (
    <div className='app-container'>
      <Header />
      <Container>
        <div className='my-3 add-new d-flex justify-content-between'>
          <span><b>List Users:</b></span>
          {/* <button className='btn btn-primary'>Add new user</button> */}
          <ModalAddnew />
        </div>
        <TableUsers />
      </Container>

    </div>
  );
}

export default App;
