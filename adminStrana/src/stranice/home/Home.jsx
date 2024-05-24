import Chart from "../../komponente/chart/Chart";
import FeaturedInfo from "../../komponente/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../komponente/widgetSm/WidgetSm";
import WidgetLg from "../../komponente/widgetLg/WidgetLg";
import {useEffect, useMemo, useState} from "react";
import axios from "axios";

export default function Home() {
    const MONTSH = useMemo(()=>
        [
            "Januar",
            "Februar",
            "Mart",
            "April",
            "Maj",
            "Jun",
            "Jul",
            "Avgust",
            "Septembar",
            "Oktobar",
            "Novembar",
            "Decembar",
        ],[])

    const [userStats, setUserStats] = useState([])


    useEffect(() => {
        const getStats = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("korisnik")).accessToken;
                console.log('Token:', token);
                const res = await axios.get("http://localhost:8888/server/korisnici/statistika", {
                    headers: {
                        token: "Bearer " + token
                    },
                });
                res.data.map((item) =>
                    setUserStats((prev) => [
                        ...prev,
                        {name: MONTSH[item._id - 1], "Novi Korisnik": item.total},
                    ])
                );
            } catch (err) {
                console.log(err);
            }
        };
        getStats();
    }, [MONTSH]);


    return (
        <div className="home">
            <Chart data={userStats} title="Statistika" grid={true} dataKey="Novi Korisnici" />
            <div className="homeWidgets">
                <WidgetSm />
            </div>
        </div>
    );
}
