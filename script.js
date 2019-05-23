let app = new Vue({
    el: '#app',
    data: {
        title: '',
        img: '',
        alt: '',
        loading: true,
        results: {},
        favorites: {},
        info: null
    },
    methods: {
        async bookInput() {
            try {
                this.loading = true;
                const response = await axios.get('http://openlibrary.org/search.json?q=' + this.title);
                this.current = response.data;
                this.loading = false;
                this.title = response.data.title;
            } catch (error) {
                console.log(error);
            }
        },
        bookSubmit() {
            this.title = bookInput;
        },
        AddToFavorites() {
            this.favorites.push[this.title];
        },
        RemoveFromFavorites() {
            this.favorites.pop[this.title];
        }
    },

});