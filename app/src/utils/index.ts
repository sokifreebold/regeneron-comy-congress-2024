// Function to change string to Sentence Case for Analytics purpose
export function changeToSentenceCase(value: string) {
	if (!value) {
		return '';
	}

	try {
		const updatedValue = (value[0].toUpperCase() + value.slice(1).toLowerCase()).replace(
			/-/g,
			' ',
		);
		return updatedValue;
	} catch (err) {
		console.warn(err);
		return value;
	}
}
