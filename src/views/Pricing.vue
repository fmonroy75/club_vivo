<template>

<v-container>

<v-row>

<v-col
v-for="plan in plans"
:key="plan.name"
cols="12"
md="4"
>

<v-card class="glass-card pa-6">

<v-card-title>
{{plan.name}}
</v-card-title>

<v-card-subtitle>
${{plan.price}} / mes
</v-card-subtitle>

<v-list>

<v-list-item
v-for="f in plan.features"
:key="f"
>
{{f}}
</v-list-item>

</v-list>

</v-card>

</v-col>

</v-row>

</v-container>

</template>

<script>

import { mapState } from "vuex"

export default {
    name: 'PricingView',
    computed:{
        ...mapState("pricing",["plans"])
    }
}

</script>
