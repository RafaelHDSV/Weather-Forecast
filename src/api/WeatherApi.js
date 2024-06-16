const API_BASE = "http://api.weatherapi.com/v1/forecast.json"
const API_KEY = "bd8cc72f58fc4d679ef160951241606"

const fetchFunction = async (query) => {
    const req = await fetch(`${API_BASE}?key=${API_KEY}&q=${query}&lang=pt`)
    const json = await req.json()
    return json
}

export default {
    getCapitals: async () => {
        return [
            {
                name: "São Paulo",
                url: await fetchFunction("Sao Paulo"),
            },

            {
                name: "Rio de Janeiro",
                url: await fetchFunction("Rio de Janeiro"),
            },

            {
                name: "Belo Horizonte",
                url: await fetchFunction("Belo Horizonte"),
            },

            {
                name: "Brasília",
                url: await fetchFunction("Brasilia"),
            },

            {
                name: "Bélem",
                url: await fetchFunction("Belem"),
            },

            {
                name: "Salvador",
                url: await fetchFunction("Salvador"),
            },

            {
                name: "Curitiba",
                url: await fetchFunction("Curitiba"),
            },

            {
                name: "Fortaleza",
                url: await fetchFunction("Fortaleza"),
            },

            {
                name: "Manaus",
                url: await fetchFunction("Manaus"),
            },

            {
                name: "João Pessoa",
                url: await fetchFunction("Joao Pessoa"),
            }
        ]
    },

    getInput: async (query) => {
        return [await fetchFunction(query)]
    }
}