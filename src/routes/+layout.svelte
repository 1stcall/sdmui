<script>
  import '@beyonk/gdpr-cookie-consent-banner/banner.css' // optional, you can also define your own styles
  import '@fortawesome/fontawesome-free/css/all.min.css'
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'

  function initAnalytics () {
    // do something with segment.io or google analytics etc
  }
</script>

<GdprBanner heading="GDPR Cookie Notice" cookieName="sdmui" description="Please let me store cookies on yor computer." on:analytics={initAnalytics} />

<div class="page">
	<div class="header">
		<div class="headlogo">
			<i class="fa-solid fa-tty fa-1xl"></i>
			1stcall
		</div>
		<div class="headtext">
			SDM Command Line Generator
		</div>
		<nav class="nav">
			<ul>
				<li><a href="/">home</a></li>
				<li><a href="/oslist">OS list</a></li>
				<li><a href="/switches">switches</a></li>
				<li class="right"><a href="/about">about</a></li>
			</ul>
		</nav>
	</div>

	<div class="content">
		<slot />
	</div>

	<div class="clear"></div>

	<div class="footer">
		<p>
		sdmui V0.2 Copyright &copy; 2023 1stcall Information Technology.  All rights researved.<br>
		<a href="https://github.com/1stcall/sdmui/"><i class="fa-brands fa-github"></i> See us on github.</a>
		</p>
	</div>
</div>

<style>
	.page {
		background: wheat;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		font-family: sans-serif;
	}

	.page .header {
		background: wheat;
		top: 0;
		position: -webkit-sticky; /* Safari */
		position: sticky;
		color: #194a9f;
		font-family: 'Brush Script MT', cursive;
		z-index: 999999;
	}

	.page .header .headlogo {
		font-size: 4rem;
	}

	.page .header .headtext {
		font-size: 2rem;
/*
		position: fixed;
		top: 3rem;
		width: 100%;
		text-align: center;
*/
	}

	.page .header .nav {
		font-family: sans-serif;
	}

	.page .header .nav ul {
		list-style-type: none;
		overflow: hidden;
		background-color: #333;
		padding: 0;
	}

	.page .header .nav ul li {
		float: left;
		border-left: none;
		border-right: 1px solid #bbb;
	}

	.page .header .nav ul li:last-child {
		border-right: none;
		border-left: 1px solid #bbb;
	}

	.page .header .nav ul li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	.page .header .nav ul li a:hover {
		background-color: #111;
	}

	.page .header .nav ul li.right {float: right;}

	@media screen and (max-width: 600px) {
		.page .header .nav ul li.right, .page .header .nav ul li {float: none;}
	}

	.page .content {
		display: flex;
		flex-flow: column;
		height: 100%;
		flex: 1 1 auto;
	}

	.page .footer {
		background: wheat;
   		left: 0.5rem;
		right: 0.5rem;
   		bottom: 0;
   		text-align: center;
		position: fixed;
		border-top: 1px solid #bbb;
		height: 4rem;
		vertical-align: bottom;
		z-index: 999999;
	}

	.page .footer a {
		text-decoration: none;
		color: black;
	}

	.clear {
		clear: both;
		height: 4.5rem;
	}
</style>
