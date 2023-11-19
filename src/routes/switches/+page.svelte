<script>
	export let data;
</script>

<h1>Switches list</h1>
<p>This is the Switches list page for sdmui.</p>

<form class="switches">
	{#each data.switches as { name, description, selected, editable, hasArgument, argumentType, argumentValue }}
		<div class="row">
			<td class="firstcol"><label for="{ name }">{ name }</label></td>
			<td class="col"><input id="{ name }" type="checkbox" bind:checked="{ selected }" disabled="{ !editable }"></td>
			<td class="col">
			{#if hasArgument == true}
				<p>
					{#if argumentType == "text"}
						<input type="text" disabled="{ !selected }" bind:value="{ argumentValue }">
					{:else if argumentType == "file"}
						<input type="file" disabled="{ !selected }" bind:value="{ argumentValue }">
					{:else if argumentType == "ipAddress"}
						<input type="text" disabled="{ !selected }" bind:value="{ argumentValue }" minlength="7" maxlength="15" size="15" pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$">
					{:else if argumentType == "multiFile"}
						<input type="file" disabled="{ !selected }" bind:value="{ argumentValue }" multiple>
					{/if}
				</p>
			{/if}
			<p>{ description }</p> </td>
		</div>
	{/each}
</form>

<style>
	.switches {
		display: table;
		max-width: 100%;
	}
	.row {
		display: table-row;
	}
	.col {
		display: table-cell;
		padding-top: 10px;
	}
	.firstcol {
		display: table-cell;
		white-space: nowrap;
		padding-top: 10px;
	}
</style>
