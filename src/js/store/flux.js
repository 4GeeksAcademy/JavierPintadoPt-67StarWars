const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes:[];
			vehiculos:[];
			planetas:[];
		},
		//hacer el fetch que trae los ususarios
		// setStore seteas lo que trae la store de caracteeres
		actions: {
			getPersonajes: async () =>{
				await fetch ("https://www.swapi.tech/api/people/")
			},
			
			getVehiculos: async () =>{
					await fetch ("https://www.swapi.tech/api/vehicles/")
			},

			getPlanetas: async () =>{
				await fetch ("https://www.swapi.tech/api/planetas/")	
			},
		}
	};
};

export default getState;
