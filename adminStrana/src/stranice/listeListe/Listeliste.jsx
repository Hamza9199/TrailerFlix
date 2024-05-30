import React, { useContext, useEffect } from "react";
import style from "./Listeliste.module.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { ListContext } from "../../context/listContext/ListaContext";
import { deleteList, getLists } from "../../context/listContext/serverCallLista.js";



export default function ListList() {
    const { lists, dispatch } = useContext(ListContext);

    useEffect(() => {
        getLists(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteList(id, dispatch);
    };

    const handleEdit = (lista) => {
        localStorage.setItem("lista", JSON.stringify(lista));
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 250 },
        { field: "title", headerName: "Title", width: 250 },
        { field: "genre", headerName: "Genre", width: 150 },
        { field: "type", headerName: "Type", width: 150 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link
                            to={{ pathname: "/lista/" + params.row._id, list: params.row }}
                        >
                            <button
                                className={style.productListEdit}
                                onClick={() => handleEdit(params.row)}
                            >
                                Uredi
                            </button>
                        </Link>
                        <button
                            className={style.productListDelete}
                            onClick={() => handleDelete(params.row._id)}
                            >
                            Delete
                        </button>
                    </>
                );
            },
        },
    ];

    return (
        <div className={style.productList}>
            {lists ? (
                <DataGrid
                    rows={lists}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                    getRowId={(r) => r._id}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
