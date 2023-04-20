import React, { useEffect, useState } from "react";
import { Form, Button, Image, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//Importaciones de componentes
import TabMenuPaqueteria from "../../components/Paqueteria/TabMenuPaqueteria";
import BannerHome from "../../components/BannerHome";

export default function Home() {

    return (
        <>
            <BannerHome />
            <TabMenuPaqueteria />
            <div style={{ backgroundColor: "#ebebeb", height: "15vh" , display: "flex"}}>
                <form style={{ width: "20%" , height: "35%", margin: "1%", display: "flex"}}>
                    <label for="texto" style={{width: "50%", margin: "2%"}}>Buscar:</label>
                    <input type="text" name="texto" placeholder="   ID de pedido" style={{margin: "1%"}}></input>
                <Button variant="light">Buscar</Button>
                
            </form>
            <h1 style={{textAlign: "center", justifyContent: "center"}}>PEDIDOS</h1>
            </div>
        </>
    )
}