import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./assets/css/App.css";
import "./assets/css/chat.css";
import "./assets/css/global.css";

import Chat from "./modules/chat/pages/chat";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <Chat />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
