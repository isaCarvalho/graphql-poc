const { default: axios } = require("axios")

const resolvers = {
    Query: {
        tasks: async () => {
            try {
                const response = await axios.get("http://localhost:8081/tasks")
                return response.data;
            } catch (error) {
                return console.log(error)
            }
        } 
    }
}

module.exports = { resolvers }