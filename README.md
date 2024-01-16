
# Vue JSONPlaceholder App

Benvenuto alla Vue JSONPlaceholder App! Questa applicazione è stata creata con Vue.js e utilizza JSONPlaceholder come API di esempio per mostrare una lista di post e dettagli sui post.

NB: Repository per la formazione nelle mie academy Vue3

## Caratteristiche

- Visualizzazione del feed con miniature dei post.
- Visualizzazione dei dettagli di un post selezionato.
- Paginazione per visualizzare un numero limitato di post per pagina.
- Navigazione tra le pagine utilizzando Vue Router.

## Requisiti

Prima di iniziare, assicurati di avere Node.js e npm installati sulla tua macchina.

## Installazione

1. Clona il repository:

   ```bash
   git clone https://github.com/tuononen/vue-jsonplaceholder-app.git
   cd vue-jsonplaceholder-app

2. Installa le dipendenze (npm install)
3. Avvia l'applicazione (npm run serve)

## Struttura del Progetto

-   `src/views`: Contiene le pagine principali dell'applicazione (FeedView e PostDetail).
-   `src/components`: Contiene i componenti riutilizzabili (Feed e Pagination).
-   `src/router`: Contiene la configurazione del router.
-   `src/App.vue`: Il componente principale dell'applicazione.
-   `src/main.js`: Punto di ingresso dell'applicazione.

## Librerie Utilizzate

-   [Vue.js](https://vuejs.org/): Framework JavaScript per la costruzione di interfacce utente.
-   Vue Router: Gestisce la navigazione tra le pagine.
-   [Axios](https://axios-http.com/): Libreria per effettuare chiamate HTTP.
## Personalizzazioni

-   **FeedView**: La pagina principale mostra una lista di miniature di post. Puoi personalizzare ulteriormente il suo aspetto e la logica di visualizzazione.
-   **PostDetail**: La pagina dei dettagli mostra i dettagli di un singolo post. Personalizza il layout e l'aspetto secondo le tue preferenze.
-   **Pagination**: Aggiungi ulteriori funzionalità alla paginazione, come la visualizzazione del numero totale di pagine.

## Suggerimenti per l'Apprendimento

-   **Vue.js**: Per ulteriori informazioni su Vue.js, consulta la [documentazione ufficiale](https://vuejs.org/).
-   **Vue Router**: Impara di più su Vue Router qui.
-   **Axios**: Per saperne di più su come effettuare chiamate HTTP con Axios, consulta la documentazione di Axios.