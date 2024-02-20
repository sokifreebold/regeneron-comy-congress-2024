<template>
	<div class="layout-home">
		<the-header />

		<main>
			<div class="container container--home">
				<slot />
			</div>
		</main>

		<the-footer />
	</div>

	<molecules-home />
</template>
