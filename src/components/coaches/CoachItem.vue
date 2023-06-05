<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>{{ rate }}</h4>
        <div>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        </div>
        <div  class="actions">
            <base-button mode="outline" link :to="coachContactLink">Contact</base-button><!--/coaches/c1/contact  better to use a computed property rather than hardcoding it-->
            <base-button  link :to="coachDetailsLink">View Details</base-button><!--/coaches/c1-->
        </div>
    </li>
</template>
<script>
export default {
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        fullName() { 
            return this.firstName + ' ' + this.lastName
        },
        coachContactLink() {
            return this.$route.path + '/' + this.id + '/contact'
            // better to this.$route.path so that if the path is ever changed, nothing needs changing'/coaches/' + this.id + '/contact'
        },
        coachDetailsLink() {
            return this.$route.path + '/' + this.id  //again better to use this.$route.path '/coaches/' +  this.id
         }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>