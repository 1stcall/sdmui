<script>
  import '@beyonk/gdpr-cookie-consent-banner/banner.css' // optional, you can also define your own styles
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'

  function initAnalytics () {
    // do something with segment.io or google analytics etc
  }
</script>

<GdprBanner heading="GDPR Cookie Notice" cookieName="AnotherCookie" description="Please let me store cookies on yor computer." on:analytics={initAnalytics} />

<nav class="nav">
	<ul>
		<li><a href="/">home</a></li>
    	<li><a href="/oslist">OS list</a></li>
		<li><a href="/switches">switches</a></li>
		<li><a href="/about">about</a></li>
	</ul>
</nav>

<div class="content">
	<slot />
</div>

<div class="footer">
	<p>Footer</p>
</div>
  
<style>
	.content {
		margin: 0em;
		padding: 1em;
		background-color: #fec89a;
	}
	.nav ul {
		list-style-type: none;
  		margin: 0em;
  		padding: 1em;
		background-color: #457b9d;
	}
	.nav ul li {
		margin: 2em;
		padding: 1em;
		background-color: #264653;
		display: inline;
	}
	.nav ul li a {
    	color: #457b9d;
    	text-decoration: none;
	}
	.footer {
		position: fixed;
   		left: 0;
   		bottom: 0;
   		width: 100%;
	    color: white;
   		text-align: center;
	   	background-color: #fec89a;
	}
</style>
