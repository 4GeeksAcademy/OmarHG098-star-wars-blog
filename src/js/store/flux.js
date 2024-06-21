const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiURL: "https://swapi.dev/api",
      people: [],
	  person: {},
      planets: [],
	  planet: {},
	  vehicles: [],
	  vehicle: {},
	  favorites: [], 
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

	  getPerson: async (id) => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiURL}/people/${id}`);
          if (!response.ok) {
            throw new Error("No se pudo obtener el personaje");
          }
		  const data = await response.json();
		  console.log(data);
		  setStore({
			person: data,
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

	  getPlanet: async (id) => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiURL}/planets/${id}`);
          if (!response.ok) {
            throw new Error("No se pudo obtener el planeta");
          }
		  const data = await response.json();
		  console.log(data);
		  setStore({
			planet: data,
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
	  },

	  getVehicle: async (id) => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiURL}/vehicles/${id}`);
          if (!response.ok) {
            throw new Error("No se pudo obtener el vehículo");
          }
		  const data = await response.json();
		  console.log(data);
		  setStore({
			vehicle: data,
		  })
        } catch (error) {
          console.log(error);
        }
      }, 

	  addFavorite: (item)=>{
		const store = getStore();
		if (store.favorites.includes(item)) {
			let newArray = []
			newArray = store.favorites.filter((element) => element != item)
			setStore({ favorites: newArray })
		} else {
			setStore({ favorites: [...store.favorites, item] })
		}
		console.log(store.favorites);
	  },
    },
  };
};

export default getState;
