import React, { useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { KorisnikContext } from "../../context/korisnikContext/KorisnikContext.jsx";
import { deleteKorisnici, getKorisnici } from "../../context/korisnikContext/serverCallKorisnik";
import styles from "./userList.module.css";

export default function UserList() {
    const { korisnici, dispatch } = useContext(KorisnikContext);

    useEffect(() => {
        getKorisnici(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteKorisnici(id, dispatch);
    };

    const handleEdit = (korisnik) => {
        localStorage.setItem("korisnikU", JSON.stringify(korisnik));
    }

    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
            field: "korisnik",
            headerName: "Korisnik",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={styles.userListUser}>
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "username",
            headerName: "Username",
            width: 150,
        },
        {
            field: "password",
            headerName: "Password",
            width: 150,
        },
        {
            field: "isAdmin",
            headerName: "Admin",
            width: 150,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row._id}`}>
                            <button
                                className={styles.userListEdit}
                                onClick={() => handleEdit(params.row)}
                            >
                                Uredi
                            </button>
                        </Link>
                        <button
                            className={styles.userListDelete}
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
        <div className={styles.userList}>
            {korisnici && korisnici.length > 0 && (
                <DataGrid
                    rows={korisnici}
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
