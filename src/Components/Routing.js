
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomeComponent from '../Pages/Home';
import Registration from '../Pages/Registration'
function Routing() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="Registration" element={<Registration />} />

          </Routes>
        </Layout>
      </BrowserRouter>

    </div>
  );
}

export default Routing;