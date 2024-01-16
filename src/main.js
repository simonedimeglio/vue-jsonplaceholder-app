import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from './router'

// Configura Axios
const apiClient = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

const app = createApp(App).use(router);

// Aggiungi Axios all'istanza di Vue come $axios
app.config.globalProperties.$axios = apiClient;

app.mount("#app");
