<template>
	<div class="trial-card trial-card--phase">
		<div class="trial-card__aside">&nbsp;</div>
		<div class="trial-card__datum trial-card__phases">
			<div v-for="(phase, index) in 3" :key="index" class="trial-card__phase">
				<label>{{ $t('misc.phase') }}</label>
				<strong>{{ phase }}</strong>
			</div>
			<div class="trial-card__phase">
				<label>Non-<br />Interventional</label>
			</div>
		</div>
	</div>
</template>
