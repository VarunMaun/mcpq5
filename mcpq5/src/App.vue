<template>
  <div id="app">
    <nav>
    <side-menu />
    </nav>
    <header>
        <logo />
    </header>
    <section>
    <router-view/>
  </section>
    <footer>
    </footer>
  </div>
</template>

<script>
import SideMenu from '@/components/Menu'
import Logo from '@/components/Logo'

export default {
  name: 'App',
  components:{
    SideMenu,Logo
  }
}
</script>

<style >

#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

height:100vh;
width:100vw;
display:grid;
grid-template-columns:3.5rem 1fr;
grid-template-rows:3.6rem auto 40px;
}

nav{
  grid-row-start: 1;
  grid-row-end:4;
  background: #fff;
  overflow: auto;
  border-right:1px solid #ccc;
}

header{
  background: #f1f1f1;
  overflow: auto;
}

section{
  background: #fff;
  overflow: auto;
}

footer{
  background: #ccc;
  overflow: auto;
}



</style>
