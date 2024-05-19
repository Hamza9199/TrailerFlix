import Chart from "../../komponente/chart/Chart";
import FeaturedInfo from "../../komponente/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../komponente/widgetSm/WidgetSm";
import WidgetLg from "../../komponente/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}