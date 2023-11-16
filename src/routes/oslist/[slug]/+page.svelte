<script>
	export let data;
</script>

<h1><img src="{data.os.icon}" alt="Icon for {data.os.name} "> {data.os.os_name}</h1>
<div>
	<p>{data.os.description}</p>
	<a href="{data.os.download_url}">download</a>
</div>
