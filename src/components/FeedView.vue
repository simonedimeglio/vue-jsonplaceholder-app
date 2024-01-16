<template>
	<div class="feed">
		<!-- Itera attraverso i post visualizzati -->
		<div v-for="post in displayedPosts" :key="post.id" class="post">
			<!-- Collegamento al dettaglio del post tramite router-link -->
			<router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
				<!-- Visualizzazione dell'immagine del post -->
				<img :src="post.thumbnailUrl" :alt="post.title" class="thumbnail" />
			</router-link>
		</div>

		<!-- Sezione per la paginazione -->
		<div class="pagination">
			<!-- Pulsante "Previous" per navigare alla pagina precedente -->
			<button @click="prevPage" :disabled="currentPage === 1">Previous</button>
			<!-- Visualizza il numero della pagina corrente -->
			<span>{{ currentPage }}</span>
			<!-- Pulsante "Next" per navigare alla pagina successiva -->
			<button @click="nextPage" :disabled="currentPage === totalPages">
				Next
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [], // Array per memorizzare tutti i post
			itemsPerPage: 5, // Numero di post visualizzati per pagina
			currentPage: 1, // Pagina corrente iniziale
		};
	},
	computed: {
		totalPages() {
			// Calcola il numero totale di pagine in base al numero di post e post per pagina
			return Math.ceil(this.posts.length / this.itemsPerPage);
		},
		displayedPosts() {
			// Calcola gli indici di inizio e fine per i post visualizzati sulla pagina corrente
			const startIndex = (this.currentPage - 1) * this.itemsPerPage;
			const endIndex = startIndex + this.itemsPerPage;
			// Restituisce solo i post da visualizzare sulla pagina corrente
			return this.posts.slice(startIndex, endIndex);
		},
	},
	mounted() {
		// Chiamata API per ottenere i post quando il componente viene montato
		this.fetchPosts();
	},
	methods: {
		async fetchPosts() {
			// Effettua una chiamata API per ottenere i post da visualizzare
			try {
				const response = await this.$axios.get("/photos");
				this.posts = response.data;
			} catch (error) {
				console.error("Errore durante il recupero dei post", error);
			}
		},
		nextPage() {
			// Va alla pagina successiva se disponibile
			if (this.currentPage < this.totalPages) {
				this.currentPage++;
			}
		},
		prevPage() {
			// Va alla pagina precedente se disponibile
			if (this.currentPage > 1) {
				this.currentPage--;
			}
		},
	},
};
</script>

<style scoped>
.feed {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.post {
	margin: 10px;
}

.thumbnail {
	width: 200px;
	height: 200px;
	object-fit: cover;
	cursor: pointer;
}

.pagination {
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.pagination button {
	margin: 0 5px;
	cursor: pointer;
}
</style>
