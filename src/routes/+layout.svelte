<script>
  import '@beyonk/gdpr-cookie-consent-banner/banner.css' // optional, you can also define your own styles
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'

  function initAnalytics () {
    // do something with segment.io or google analytics etc
  }
</script>

<GdprBanner heading="GDPR Cookie Notice" cookieName="AnotherCookie" description="Please let me store cookies on yor computer." on:analytics={initAnalytics} />
<div class="page">
<div class="header">
	<h1>1stcall's sdm command line generator</h1>
	<nav class="nav">
		<ul>
			<li><a href="/">home</a></li>
			<li><a href="/oslist">OS list</a></li>
			<li><a href="/switches">switches</a></li>
			<li style="float:right"><a href="/about">about</a></li>
		</ul>
	</nav>
</div>

<div class="clear"></div>
<div class="clear"></div>
<div class="clear"></div>

<div class="content">
	<slot />
</div>

<div class="clear"></div>

<div class="footer">
	<p>
		Copyright &copy; 2023 1stcall Information Technology.  All rights researved.
	</p>
</div>
</div>

<style>
	.page {
		background: wheat;
	}
	.nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #333;
	}
	.nav ul li {
		float: left;
		border-left: none;
		border-right: 1px solid #bbb;
	}
	.nav ul li:last-child {
		border-right: none;
		border-left: 1px solid #bbb;
	}
	.nav ul li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}
	.nav ul li a:hover {
		background-color: #111;
	}
	.header {
		left: 0.5rem;
		right: 0.5rem;
   		top: 0rem;
		text-align: center;
		position: fixed;
		background: wheat 0 ;
	}
	.footer {
   		left: 0.5rem;
		right: 0.5rem;
   		bottom: 0rem;
   		text-align: center;
		position: fixed;
		background: wheat;
		border-top: 1px solid #bbb;
		height: 4.5rem;
		vertical-align: bottom;
	}
	.clear {
		clear: both;
		height: 4.5rem;
	}
</style>
