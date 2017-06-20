<template lang = "pug">
  div.container
    h1 {{ currentTab }}
    h2 Sort By
    div.button-set
      button(v-for='column in createColumns', @click='sortBy(column)') {{ column }}
    ul
      li(v-for='(country, index) in getCountries', :style='createScale[index]', :class='{active : currentTab == country.name}')
        a(href='#', @click.prevent='currentTab = country.name').item-title {{ country.name }} &mdash; {{ country.score }}
        transition(name='fade')
          div.content(v-if='currentTab == country.name')
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
export default {
  name: 'accord',
  data () {
    return {
      currentTab: '',
      countries: [
        { "name": "Japan", "score": 84.78},
        { "name": "United States", "score": 82.36},
        { "name": "Germany", "score": 82.02},
        { "name": "Canada", "score": 80.91},
        { "name": "France", "score": 80.74},
        { "name": "Australia", "score": 80},
        { "name": "Singapore", "score": 79.5},
        { "name": "Italy", "score": 79.32},
        { "name": "United Kingdom", "score": 78.88},
        { "name": "Poland", "score": 76.7},
        { "name": "Spain", "score": 76.25},
        { "name": "Korea", "score": 75.54},
        { "name": "Malaysia", "score": 69.66},
        { "name": "South Africa", "score": 61.3},
        { "name": "Mexico", "score": 60.79},
        { "name": "Argentina", "score": 60.79},
        { "name": "Russia", "score": 57.98},
        { "name": "India", "score": 56.39},
        { "name": "Turkey", "score": 56.08},
        { "name": "Indonesia", "score": 54.41},
        { "name": "Thailand", "score": 49.45},
        { "name": "Brazil", "score": 48.85},
        { "name": "China", "score": 47.89},
        { "name": "Vietnam", "score": 43.66}
      ]
    }
  },
  computed: {
    getCountries(){
      return this.countries;
    },
    createScale(){
      const scores = this.getCountries.map((country) => country.score);
      const maxScore = scores.reduce((a, b) => a < b ? b : a);
      const minScore = scores.reduce((a,b) => a > b ? b : a);
      const maxHue = 142;
      const minHue = 2;
      const hues = scores.map((score)=> {
        let hue = Math.floor(((score - minScore) / (maxScore - minScore)) * (maxHue - minHue) + minHue);
        return { backgroundColor: `hsl(${hue}, 80%, 50%)` };
      });
      return hues;
    },
    createColumns(){
const columns = [];
const entries = this.getCountries;
columns.push(...Object.keys(...entries));
return columns;
    }
  },
  methods: {
    sortBy(column){
      switch(column){
        case "name":
          return this.getCountries.sort((a,b) => a.name > b.name ? 1 : -1 );
          break;
        default:
          return this.getCountries.sort((a,b) => a.score > b.score ? -1 : 1);
      }
  }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin: 0 auto;
  max-width: 90%;
}
ul{
  padding: 0;
}
ul li{
  display: block;
  list-style: none;
  border: 1px solid #000;
}
a.item-title{
  display: block;
  color: black;
  text-decoration: none;
transform: scale(1, 1);
}
li.active a.item-title{

  padding: 1.25em;
  transition: all .5s ease-in-out;
}
.transform-enter-active, .transform-leave-active {
    transform: scale(1.5, 1.5);
}
.transform-enter, .transform-leave-to /* .fade-leave-active in <2.1.8 */ {
  transform: scale(1, 1);
}

.content{
  padding: 1em;
  background-color: #ffe;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.button-set{
  display: flex;
  flex-wrap: wrap;
}

button{
flex: 1 1 40%;
margin: 1em;
font-size: 1em;
box-shadow: 1px 1px 1px rgba(0, 0, 0, .5);
background: azure;
}
</style>
