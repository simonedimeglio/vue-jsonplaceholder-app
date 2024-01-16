// Importa createRouter e createWebHistory da vue-router
import { createRouter, createWebHistory } from "vue-router";

// Importa i componenti delle pagine
import FeedView from "../components/FeedView.vue";
import PostDetail from "../components/PostDetail.vue";

// Definisci le route dell'applicazione
const routes = [
	{
		// La route principale corrisponde alla visualizzazione del feed
		path: "/",
		name: "FeedView", // Nome univoco per la route
		component: FeedView, // Componente associato a questa route
	},
	{
		// Route per visualizzare i dettagli di un singolo post
		path: "/post/:id", // :id è un parametro dinamico per identificare il post specifico
		name: "PostDetail", // Nome univoco per la route
		component: PostDetail, // Componente associato a questa route
	},
];

// Crea un'istanza del router con history mode
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes, // Passa le route definite
});

// Esporta l'istanza del router
export default router;
