<template>
	<div class="hello">
        <p>
            {{ $store.state.day }}/{{$store.state.month}}/{{$store.state.year}}
        </p>
		<h1>{{ title }}</h1>
		<CounterComponent />
	</div>
</template>

<script>
import CounterComponent from "./CounterComponent.vue";

export default {
    name: "HelloWorld",
    data() {
        "OpenClassrooms - Quiz de la section 2"
    },
    components: { CounterComponent }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
