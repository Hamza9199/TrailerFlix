import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Prihod</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415 KM</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Usporedba na zadnji mjesec</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4,415 KM</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Usporedba na zadnji mjesec</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cijena</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,225 KM</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Usporedba na zadnji mjesec</span>
      </div>
    </div>
  );
}