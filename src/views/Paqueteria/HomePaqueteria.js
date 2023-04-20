import React, { useEffect, useState } from "react";
import { Form, Button, Image, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//Importaciones de componentes
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import CardBooks from "../../components/Card";
import BannerHome from "../../components/BannerHome";

export default function Home() {
    const navigate = useNavigate();

    const [books, setBooks] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/test/libros')
            .then(response => response.json())
            .then((data) => {
                setBooks(data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
            })
    }, []);

    return (
        <>
            <BannerHome />
            <NavTabMenu />
            <div style={{ backgroundColor: "#ebebeb", height: "40vh" }}>
                <div>
                    <h1>Buscar ID: </h1>
                </div>
            </div>
        </>
    )
}