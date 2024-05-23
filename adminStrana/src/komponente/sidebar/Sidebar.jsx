import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report, PlayCircle, PlayCircleOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Panel</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Korisnici
                </li>
              </Link>
              <Link to="/filmovi" className="link">
                <li className="sidebarListItem">
                  <PlayCircleOutlined className="sidebarIcon" />
                  Filmovi
                </li>
                </Link>
                <Link to="/liste" className="link">
                  <li className="sidebarListItem">
                    <PlayCircleOutlined className="sidebarIcon" />
                    Liste
                  </li>
                </Link>
            </ul>
          </div>
        </div>
      </div>
  );
}
