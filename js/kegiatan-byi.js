new Vue({
    el: '#todo-list-example',
    data: {
      newTodoText: '',
      todos: [
        {
          id: 1,
          datebyi: 'Min, 13 Feb • 05.15',
          type: 'Kajian Berkah Sahabat Yatim',
          title: '10 Langkah Menjadi Ahlul Quran',
          presenter: 'Ust. RK Dadan Surya Negara',
          imgurl: 'https://raw.githubusercontent.com/berkahsahabatyatim/static-data/main/img/kbyi-2022-02-06.jpeg',
        },
        {
          id: 2,
          datebyi: 'Min, 13 Feb • 05.15',
          type: 'Kajian Spiritual Bisnis',
          title: 'Bisnis Berkah',
          presenter: 'Ust. RK Dadan Surya Negara',
          imgurl: 'https://raw.githubusercontent.com/berkahsahabatyatim/static-data/main/img/kbyi-2022-02-06.jpeg',
        },
        {
          id: 3,
          datebyi: 'Min, 13 Feb • 05.15',
          type: 'Al-Kahfi Time',
          title: 'Membangun Dunia dengan Akhirat',
          presenter: 'Ustadzah Siti Mariyam',
          imgurl: 'https://raw.githubusercontent.com/berkahsahabatyatim/static-data/main/img/kbyi-2022-02-06.jpeg',
        }
      ],
      nextTodoId: 4
    },
    mounted () {
      axios
        .get('https://raw.githubusercontent.com/berkahsahabatyatim/static-data/main/list-events.json')
        .then(response => {
          var resp = response.data;
          // resp.sort(function (a, b) {
          //   return b.download_url.localeCompare(a.download_url);
          // });
          this.todos = resp
        })
    },
    methods: {
      say: function (message) {
        window.location = message;
      }
    }
})