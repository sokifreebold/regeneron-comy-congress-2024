export function isLocalEnvironment(): boolean {
	return 'hostname' in location && location.hostname.includes('localhost');
}
