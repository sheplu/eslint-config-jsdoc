import { jsdocRules as eslintJsdocRules } from './eslint-jsdoc.js';

export const jsdocRules = [
	{
		rules: {
			...eslintJsdocRules.rules,
		},
	},
];
