import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import "./AdminLayout.css";
function AdminLayout() {
  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <div className="admin-sidebar-top">
          <div className="admin-sidebar-header">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX8MiDqLSxS6aaFZr8cpRyYdvSDzWC9ukMa9sdDnCS7swoO8WDZxmRJFYJO-g45rQ9KBKqyyyjNX_mP6pRG4rDEXe6TFI29R7M-l2VLB6C3cGc1YbzSHgZ72SAZElMukKU5a5gQ1WFEtd3qx3ZmFPV5X-Lhc5cJmcbc-Dj__839YB4jHR0pnzwWFh4oQPdxJUuRKb6f1_H8vBy8AOZhtE0ZFa6BZzzRfBLKp-8PeMbBhBXx1IXvglp"
              alt=""
            />
            <div>
              <span>QuizFlow Admin</span>
              <span className="admin-sidebar-header-text-2">
                Coaching Portal
              </span>
            </div>
          </div>

          <div className="admin-sidebar-nav">
            <div className="admin-sidebar-nav-row selected">
              <MdDashboard className="nav-icon" />
              <Link to="/">Dashboard</Link>
            </div>

            <div className="admin-sidebar-nav-row">
              <MdDashboard className="nav-icon" />
              <Link to="/admin/create-quiz">Quiz Builder</Link>
            </div>

            <div className="admin-sidebar-nav-row">
              <MdDashboard className="nav-icon" />
              <Link to="/">Dashboard</Link>
            </div>

            <div className="admin-sidebar-nav-row">
              <MdDashboard className="nav-icon" />
              <Link to="/">Dashboard</Link>
            </div>

            <div className="admin-sidebar-nav-row">
              <MdDashboard className="nav-icon" />
              <Link to="/">Dashboard</Link>
            </div>
          </div>
        </div>

        <div className="admin-sidebar-end"></div>
      </div>

      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
