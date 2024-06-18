const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiURL: "https://swapi.dev/api",
      people: [],
      planets: [],
	  vehicles: [], 
    },
    actions: {
      getPeople: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiURL}/people`);
          if (!response.ok) {
            throw new Error("No se pudieron obtener los personajes");
          }
		  const data = await response.json();
		  console.log(data);
		  setStore({
			people: data.results,
		  })
        } catch (error) {
          console.log(error);
        }
      },
      getPlanets: async () => {
		const store = getStore();
		try {
			const response = await fetch(`${store.apiURL}/planets`);
			if(!response.ok){
				throw new Error("No se pudieron obtener los planetas");
			}
			const data = await response.json();
			console.log(data);
			setStore({
				planets: data.results,
			})
		} catch (error) {
			console.log(error);
		}
	  },

	  getVehicles: async () =>{
		const store = getStore();
		try {
			const response = await fetch(`${store.apiURL}/vehicles`);
			if(!response.ok){
				throw new Error("No se pudieron obtener los vehículos");
			}
			const data = await response.json();
			console.log(data);
			setStore({
				vehicles: data.results,
			})
		} catch (error) {
			console.log(error);
		}
	  }
    },
  };
};

export default getState;
