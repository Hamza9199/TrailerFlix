import "./filmLista.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FilmContext } from "../../context/filmContext/FilmContext";
import { getFilmovi } from "../../context/filmContext/serverCallFilm";

export default function FilmLista() {
    const { filmovi, dispatch } = useContext(FilmContext);

    useEffect(() => {
        getFilmovi(dispatch);
    }, [dispatch]);

    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
            field: "film",
            headerName: "Film",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "genre", headerName: "Genre", width: 120 },
        { field: "year", headerName: "Year", width: 120 },
        { field: "limit", headerName: "Limit", width: 120 },
        { field: "isSeries", headerName: "Is Series", width: 120 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/film/${params.row._id}`}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <DataGrid
                rows={filmovi}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                getRowId={(row) => row._id}
            />
        </div>
    );
}
