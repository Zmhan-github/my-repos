<template>
  <div class="about">
    <form>
      <input id="suggest" class="input" type="text" />
    </form>

    <div class="accordion">
      <ul>
        <li>
          <div class="question">
            Вопрос ?
          </div>
          <div class="answer">
            Ответ !
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ['Санкт-Петербург', 'Москва']
    }
  },

  created() {
    window.ymaps.ready(this.init)
  },

  methods: {
    find(arr, find) {
      return arr.filter(function(value) {
        return (value + '').toLowerCase().indexOf(find.toLowerCase()) != -1
      })
    },

    init() {
      var suggestView1 = new ymaps.SuggestView('suggest')
      console.log(suggestView1, this.arr)

      var myProvider = {
        suggest: function(request, options) {
          var res = find(this.arr, request)
          var arrayResult = []
          var results = Math.min(options.results, res.length)
          for (var i = 0; i < results; i++) {
            arrayResult.push({ displayName: res[i], value: res[i] })
          }
          return window.ymaps.vow.resolve(arrayResult)
        }
      }

      var suggestView = new window.ymaps.SuggestView('suggest', {
        provider: myProvider,
        results: 3
      })

      console.log(suggestView)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 2em;
  background: #eee;
}
</style>
