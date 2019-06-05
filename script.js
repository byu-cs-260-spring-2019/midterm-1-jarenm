let app = new Vue({
    el: '#app',
    data: {
        title: '',
        img: '',
        alt: '',
        loading: true,
        results: {},
        url: '',
        number: '',
        bookInput: '',
        item: '',
        favorites: []
    },
    methods: {
        async bookCall() {
            try {
                this.loading = true;
                const response = await axios.get('http://openlibrary.org/search.json?q=' + this.bookInput);
                this.results = response.data;
                let currISBN = this.results.docs[0].isbn[0];
                this.url = "http://covers.openlibrary.org/b/isbn/" + currISBN + "-M.jpg";
                this.loading = false;
                console.log(this.results);
            } catch (error) {
                console.log(error);
            }
        },
        favorite(item) {
            if(!(this.favorites.includes(this.results.docs[0].title))) {
                this.favorites.push({"title": this.results.docs[0].title});
            }
            console.log(this.favorites);
        },
        unfavorite(item) {
            var index = this.favorites.indexOf(item);
            if (index > -1)
              this.favorites.splice(index,1);
        }
    },

});