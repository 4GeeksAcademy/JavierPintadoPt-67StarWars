import React, {useContext, useContext, useEffect}from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => (

	const {store, actions} = useContext(Context);

	useEfect(() => {
		getPersonajes()
		ggetVehiculos()
		getPlanetas()
	}, [])


	return (
		
	<div className="text-center mt-5">
		<h1></h1>

		
	</div>

	)
	
	
	
);
// carrusel de imagenes tiene un estado y unas acciones que va a ser get que trae los personajes