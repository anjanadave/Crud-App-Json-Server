import AllUsers from './component/AllUsers';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import NavBar from './component/NavBar';
import NotFound from './component/NotFound';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;