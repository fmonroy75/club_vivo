<template>

<v-container>

<h1 class="text-h3 mb-6">Blog Fitness</h1>

<v-row>

<v-col
v-for="post in posts"
:key="post.id"
cols="12"
md="4"
>

<v-card>

<v-img
:src="post.image"
height="200"
/>

<v-card-title>
{{post.title}}
</v-card-title>

<v-card-text>
{{post.content}}
</v-card-text>

</v-card>

</v-col>

</v-row>

</v-container>

</template>

<script>

import { mapState } from "vuex"

export default {

computed:{
...mapState("blog",["posts"])
}

}

</script>
