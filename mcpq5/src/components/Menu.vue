<template>

<div>
  <ul>
    <li>
      <router-link :to="{ name: 'Home', params: {} }">
        <i class="fal fa-home">
      </i></router-link>
    </li>
    <li>
      <router-link :to="{ name: 'Leads', params: {} }">
        <i class="fal fa-id-card"></i>
        </router-link>

    </li>
    <li>
      <router-link :to="{ name: 'Opportunities', params: {} }">
        <i class="fal fa-file-alt"></i>
      </router-link>
    </li>
  </ul>

</div>



</template>
<style scoped>

a{
  list-style-type: none !important;
  display:block;

  font-size:1.6rem;
  padding:1.3rem 0px;
  text-align: center;
  color:#888;
  cursor: pointer;
}

a.router-link-active{
  color:#000;
}


</style>
