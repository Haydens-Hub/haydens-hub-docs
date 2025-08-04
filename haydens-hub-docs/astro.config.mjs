// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Admin User Manual',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'guides/getting_started' },
						{ label: 'Website Structure', slug: 'guides/web_structure' },
						{ label: 'Content Management', 
							items: [
								{ label: 'Getting Started with CMS', slug: 'guides/cms' },
								{ label: 'Understanding Content Models', slug: 'guides/cms/content_models' },
								{label: 'Working with Entries', 
									items:[
										{ label: 'Intro to Entries', slug: 'guides/cms/entries' },
										{ label: 'Homepage Content', slug: 'guides/cms/entries/homepage' },
										{ label: 'Resource Page Content', slug: 'guides/cms/entries/resources' },
										{label: 'Hayden\'s Journal Page Content', slug: 'guides/cms/entries/journal'},
										{label: 'Guidelines & TOC Rules', slug: 'guides/cms/entries/guidelines_and_toc' },
									]
								},
							],
						},
					],
				},
				{
					label: 'Tech Documentation',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
