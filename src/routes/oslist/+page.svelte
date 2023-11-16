<script>
	export let data;
</script>

<h1>OS list</h1>
<p>This is the OS list page for sdmui.</p>

<ul>
	{#each data.summaries as { slug, name, description }}
		<li><a href="/oslist/{slug}">{name}</a></li>
		<p style="text-indent: 2em;">{description}</p>
	{/each}
</ul>
