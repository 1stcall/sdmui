<script>
	export let data;
</script>

<h1>Switches list</h1>
<p>This is the Switches list page for sdmui.</p>

<ul>
	{#each data.switches as { name, description, selected, enabled, hasArgument, argumentType, argumentValue }}
		<li><p>	{name} 
			<input id="{ name }" type="checkbox" bind:checked="{ selected }" enabled="{ enabled }">
			{#if { hasArgument }}
				{#if { argumentType } == "text" }
					<input type="text" disabled="{ !selected }" bind:value="{ argumentValue }">
				{:else if { argumentType } == "file" }
					<input type="file" disabled="{ !selected }" bind:value="{ argumentValue }">
				{:else if { argumentType } == "ipAddress" }
					<input type="text" disabled="{ !selected }" bind:value="{ argumentValue }" minlength="7" maxlength="15" size="15" pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$">
				{:else if { argumentType } == "multiFile" }
					<input type="file" disabled="{ !selected }" bind:value="{ argumentValue }" multiple>
				{/if}
			{/if} 
		</p></li>
		<p>{description}</p>
	{/each}
</ul>
