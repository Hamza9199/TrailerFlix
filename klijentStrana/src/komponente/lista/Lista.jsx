import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React, { useRef, useState, useEffect } from "react";
import ListItem from "../listItem/ListItem";
import style from "./Lista.module.css";

export default function Lista({ list }) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

    const listRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            setClickLimit(window.innerWidth / 230);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = (direction) => {
        setIsMoved(true);
        const distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 10 - clickLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };

    return (
        <div className={style.list}>
            <span className={style.listTitle}>{list.title}</span>
            <div className={style.wrapper}>
                <ArrowBackIosOutlined
                    className={`${style.sliderArrow} ${style.left}`}
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />
                <div className={style.container} ref={listRef}>
                    {list.content.map((item, i) => (
                        <ListItem key={i} index={i} item={item} />
                    ))}
                </div>
                <ArrowForwardIosOutlined
                    className={`${style.sliderArrow} ${style.right}`}
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
}
