import type { App } from 'vue';
import _ from 'lodash';

export default async (app: App<Element>): Promise<void> => {
	const components = import.meta.glob('./*.vue');

	for (const component in components) {
		try {
			const componentName = _.upperFirst(
				_.camelCase(component.replace(/^\.\//, '').replace(/\.\w+$/, '')),
			);

			const module: any = await components[component]();
			app.component(componentName, module.default || module);
		} catch (error) {
			console.warn(`[ERR]: Failed to register component '${component}'`);
		}
	}
};
