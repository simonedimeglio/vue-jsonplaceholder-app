<template>
	<!-- Barra di navigazione con link alle pagine Home e About -->
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<!-- Visualizzazione dinamica della componente corrispondente alla route attuale -->
	<router-view />
</template>

<style>
body {
	font-family: "Arial", sans-serif;
	margin: 0;
	padding: 0;
}

#app {
	text-align: center;
}

/* Stili globali comuni a tutte le pagine */
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
