import style from "./filmLista.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FilmContext } from "../../context/filmContext/FilmContext";
import { deleteFilm, getFilmovi } from "../../context/filmContext/serverCallFilm";

export default function FilmLista() {
    const { filmovi, dispatch } = useContext(FilmContext);

    useEffect(() => {
        getFilmovi(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteFilm(id, dispatch);
    }

    const handleEdit = (film) => {
        localStorage.setItem("film", JSON.stringify(film));
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
            field: "film",
            headerName: "Film",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={style.productListItem}>
                        <img className={style.productListImg} src={params.row.img} alt="" />
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
                        <Link
                            to={{
                                pathname: `/film/${params.row._id}`,
                                state: { film: params.row }
                            }}
                        >
                            <button
                                className={style.productListEdit}
                                onClick={() => handleEdit(params.row)}
                            >
                                Uredi
                            </button>
                        </Link>
                        <DeleteOutline
                            className={style.productListDelete}
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className={style.productList}>
            {filmovi && filmovi.length > 0 && (
                <DataGrid
                    rows={filmovi}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                    getRowId={(row) => row._id}
                />
            )}
        </div>
    );
}
