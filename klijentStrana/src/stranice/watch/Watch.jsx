import style from "./Watch.module.css";
import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import templateVideo from "../../assets/templateVideo.mp4";



export default function Watch() {
    const location = useLocation();
    const movie = location.movie;
    return (
        <div className={style.watch}>
            <Link to="/" className={style.back}>
                <ArrowBackOutlined style={{ marginRight: '10px' }} />
                Home
            </Link>
            <video className={style.video} src={templateVideo} controls autoPlay />
        </div>
    );
}
