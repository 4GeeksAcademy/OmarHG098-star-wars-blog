const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: "https://www.swapi.tech/api",
			people: [],
			planets: [],
		},
		actions: {
			getPeople: async () => {
				const store = getStore();
					try {
						const response = await fetch(`${store.apiURL}/people`,

						)
						if(!response.ok){
							throw new Error ("No se pudieron obtener los personajes");
						}
					} catch (error) {
						console.log(error);
					}
			},
			getPlanets: async () => {

			}
		}
	};
};

export default getState;
