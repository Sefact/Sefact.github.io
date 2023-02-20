<script lang="ts">

export default{
  name: "Comment",
  components: {},
  methods: {
    initValine() {
      let utterances = window.document.createElement('script')
      utterances.type = 'text/javascript'
      utterances.src = 'https://utteranc.es/client.js'
      utterances.async = true
      utterances.setAttribute('issue-term', 'pathname')
      utterances.setAttribute('theme', 'github-light')
      utterances.setAttribute('repo', 'Sefact/Sefact.github.io')
      utterances.crossorigin = 'anonymous'

      window.document.getElementById('comment').appendChild(utterances)
    }
  },
  mounted() {
    this.initValine()
  }
};
</script>

<template>
  <div id="comment"></div>
</template>

<style scoped>

</style>