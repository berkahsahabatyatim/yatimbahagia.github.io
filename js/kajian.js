var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("id");
if (c == null) {
    c = "1";
}

new Vue({
    el: '#app',
    data() {
      return {
          item: null
      }
    },
    mounted() {
        var url = "https://raw.githubusercontent.com/berkahsahabatyatim/static-data/main/event-details/"
        url += c;
        url += ".json";
        axios
          .get(url)
          .then(response => {
              this.item = response.data
              document.querySelector('meta[property="og:description"]').setAttribute("content", this.item.title);
              document.querySelector('meta[property="og:image"]').setAttribute("content", this.item.img);
          })
    },
})