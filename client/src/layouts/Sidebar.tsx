function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="../index.html">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="">
            <i className="icon-paper menu-icon"></i>
            <span className="menu-title">Chat</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
