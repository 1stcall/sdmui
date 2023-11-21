<script>
	export let data;
</script>

<h1 class="heading1">Switches list</h1>
<h3 class="heading3">This is the Switches list page for sdmui.</h3>

<form class="switches">
	{#each data.switches as { name, description, selected, editable, hasArgument, argumentType, argumentValue }}
		<div class="row">
			<td class="col firstcol">
				<label class="label" for={name}>{name}</label>
			</td>
			<td class="col secondcol">
				<input
					class="checkbox"
					id={name}
					type="checkbox"
					bind:checked={selected}
					disabled={!editable}
				/>
				<label class="checkmark" for={name}></label>
			</td>
			<td class="col thirdcol">
				{#if hasArgument == true}
					{#if argumentType == "text"}
						<input
							type="text"
							disabled={!selected}
							bind:value={argumentValue}
						/>
					{:else if argumentType == "file"}
						<input
							type="file"
							disabled={!selected}
							bind:value={argumentValue}
						/>
					{:else if argumentType == "ipAddress"}
						<input
							type="text"
							disabled={!selected}
							bind:value={argumentValue}
							minlength="7"
							maxlength="15"
							size="15"
							pattern="^((\d{(1,
							2)}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{(1,
							2)}|1\d\d|2[0-4]\d|25[0-5])$"
						/>
					{:else if argumentType == "multiFile"}
						<input
							type="file"
							disabled={!selected}
							bind:value={argumentValue}
							multiple
						/>
					{/if}
				{/if}
				<div class="description">{@html description}</div></td
			>
		</div>
	{/each}
	<input type="submit">
</form>

<style>
	.heading1 {
		margin-bottom: 0;
	}
	.heading3 {
		margin-top: 0;
	}
	.switches {
		display: table;
		max-width: 100%;
	}
	.row {
		display: table-row;
	}
	.col {
		display: table-cell;
	}
	.firstcol {
		display: table-cell;
		white-space: nowrap;
		padding-right: 1rem;
	}
	.label {
		font-size: large;
		vertical-align: middle;
	}
	.description {
		font-style: italic;
		color: #194a9f;
		font-size: medium;
	}

	.thirdcol {
		overflow: hidden;
	}

	/* The container */
	.secondcol {
		display: block;
		position: relative;
		padding-left: 35px;
		margin-bottom: 12px;
		cursor: pointer;
		font-size: 22px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	/* Hide the browser's default checkbox */
	.secondcol input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	/* Create a custom checkbox */
	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 20px;
		width: 20px;
		background-color: #eee;
		z-index: 99;
	}

	/* On mouse-over, add a grey background color */
	.secondcol:hover input ~ .checkmark {
		background-color: #ccc;
	}

	/* When the checkbox is checked, add a blue background */
	.secondcol input:checked:not([disabled]) ~ .checkmark {
		background-color: #2196f3;
	}

	/* When the checkbox is disabled, add a grey background */
	.secondcol input:disabled ~ .checkmark {
		background-color: #6f7e89;
	}

	/* Create the checkmark/indicator (hidden when not checked) */
	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}

	/* Show the checkmark when checked */
	.secondcol input:checked ~ .checkmark:after {
		display: block;
	}

	/* Style the checkmark/indicator */
	.secondcol .checkmark:after {
		left: 7px;
		top: 3px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
</style>
