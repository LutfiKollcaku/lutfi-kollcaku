let app = new Vue({
  el: '#app',
  data: {
    title: 'Kollcaku Lutfi',
    url: 'https://avatars.githubusercontent.com/u/132099775?v=4',
    alt: 'Immagine Profilo Kollcaku Lutfi',
    year: '',
    icons: [
      {
        http: 'https://github.com/LutfiKollcaku',
        icon: 'fa-brands fa-github display-6'
      },
      {
          http: 'https://www.linkedin.com/in/lutfi-kollcaku-2a9430236/',
          icon: 'fa-brands fa-linkedin display-6'
      },
      {
        http: 'https://www.instagram.com/ludovicokollcaku_/',
        icon: 'fa-brands fa-instagram display-6'
      },
      {
        http: 'mailto:ludovico95winter@gmail.com',
        icon: 'fa-solid fa-at display-6'
      },
    ]
  },
  mounted() {
    this.getDateYears()
  },
  methods: {
    copyText: function (element) {
      let text = document.querySelector(`div[data-key="${element}"]`).dataset.href;
      let dictionary = {
        '0': 'GitHub',
        '1': 'Linkedin',
        '2': 'Instagram',
        '3': 'Gmail'
      }

      navigator.clipboard.writeText(text);  // clipboard ti copia ciò che vuoi passarli, writeText fa in modo dio copiare il testo passato 
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseleave', Swal.resumeTimer)  // Swal.resumeTimer di riprende il timerProgress appena togli il mouse dalla barra
        },
        willClose: () => {
          window.open(`${text}`, '_blank');
        }
      });
      
      Toast.fire({  // quando parte 
        icon: 'success',
        title: `Tra 2s verrai indirizzato all pagina di "${dictionary[`${element}`]}"`
      });
    },
    getDateYears: function(){
      let date = new Date();
      this.year = date.getFullYear();
    }

  },
})
