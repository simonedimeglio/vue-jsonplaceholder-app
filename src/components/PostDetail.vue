<template>
  <!-- Visualizzazione dei dettagli del post -->
  <div class="post-detail">
    <!-- Visualizzazione dell'immagine del post -->
    <img :src="post.url" :alt="post.title" class="post-image" />
    <!-- Sezione di informazioni sul post -->
    <div class="post-info">
      <!-- Titolo del post -->
      <h2>{{ post.title }}</h2>
      <!-- Corpo del post -->
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {}, // Oggetto per memorizzare i dettagli del post
    };
  },
  mounted() {
    // Chiamata API per ottenere i dettagli del post quando il componente viene montato
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      // Ottieni l'ID del post dai parametri della route
      const postId = this.$route.params.id;
      try {
        // Effettua una chiamata API per ottenere i dettagli del post specifico
        const response = await this.$axios.get(`/photos/${postId}`);
        this.post = response.data;
      } catch (error) {
        console.error('Errore durante il recupero del post', error);
      }
    },
  },
};
</script>

<style scoped>
.post-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 20px;
}

.post-info {
  text-align: center;
}

.post-info h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.post-info p {
  font-size: 1rem;
}
</style>
