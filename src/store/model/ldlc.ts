import {Store} from './store';

export const ldlc: Store = {
	labels: {
		inStock: {
			container: '.modal-stock-web',
			text: ['<span>En <em>stock</em></span>']
		},
		comingSoon: {
			container: '#availability-alert',
			text: ['Être prévenu de la disponibilité']
		},
		outOfStock: {
			container: '.modal-stock-web',
			text: ['Rupture']
		},
		maxPrice: {
			container:
				'#activeOffer > div.product-info > div.wrap-aside > aside > div.price > div',
			euroFormat: false
		},
		printPrice: true
	},
	links: [
		// {
		// 	brand: 'test:brand',
		// 	model: 'test:model',
		// 	series: 'test:series',
		// 	url:
		// 		'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in11019393.html'
		// },
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00394151.html'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00394149.html'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc v1',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00395231.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00394150.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming pro oc',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00394363.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00394357.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00394343.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00394365.html'
		},
		{
			brand: 'gainward',
			model: 'Ghost OC',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00394590.html'
		},
		{
			brand: 'gainward',
			model: 'Ghost',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00394589.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00394586.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00394608.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00385048.html'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00391681.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00385045.html'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00385046.html'
		},
		{
			brand: 'kfa2',
			model: 'sg',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00385058.html'
		},
		{
			brand: 'kfa2',
			model: 'sg oc',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00393364.html'
		},
		{
			brand: 'kfa2',
			model: 'ex oc',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00393363.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00385043.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00384189.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00383549.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00385044.html'
		},
		{
			brand: 'gainward',
			model: 'phantom',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00385465.html'
		},
		{
			brand: 'gainward',
			model: 'phantom gs',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00385466.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00385462.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00385463.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00386926.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00386925.html'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00386030.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00386928.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://www.ldlc.com/fiche/PB00386927.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00368574.html'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00391682.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00368506.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00376207.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00368968.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00369072.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3060',
			url: 'https://www.ldlc.com/fiche/PB00376208.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00390466.html'
		},
		{
			brand: 'gainward',
			model: 'phantom',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00386063.html'
		},
		{
			brand: 'gainward',
			model: 'phantom gs',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00390727.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00369150.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00369158.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00369265.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00369299.html'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00369298.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00369268.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.ldlc.com/fiche/PB00369303.html'
		},

		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800xt',
			url: 'https://www.ldlc.com/fiche/PB00393086.html'
		},
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800xt',
			url: 'https://www.ldlc.com/fiche/PB00391072.html'
		},
		{
			brand: 'sapphire',
			model: 'amd reference',
			series: 'rx6800xt',
			url: 'https://www.ldlc.com/fiche/PB00391076.html'
		},
		{
			brand: 'sapphire',
			model: 'gaming oc',
			series: 'rx6800xt',
			url: 'https://www.ldlc.com/fiche/PB00393294.html'
		},
		{
			brand: 'sapphire',
			model: 'oc se',
			series: 'rx6800xt',
			url: 'https://www.ldlc.com/fiche/PB00393295.html'
		},
		{
			brand: 'asrock',
			model: 'phantom gaming d oc',
			series: 'rx6800xt',
			url: 'https://www.ldlc.com/fiche/PB00393405.html'
		},
		{
			brand: 'powercolor',
			model: 'red dragon',
			series: 'rx6800xt',
			url: 'https://www.ldlc.com/fiche/PB00394927.html'
		},
		{
			brand: 'sapphire',
			model: 'gaming oc',
			series: 'rx6800',
			url: 'https://www.ldlc.com/fiche/PB00393287.html'
		},
		{
			brand: 'sapphire',
			model: 'amd reference',
			series: 'rx6800',
			url: 'https://www.ldlc.com/fiche/PB00391077.html'
		},
		{
			brand: 'asrock',
			model: 'challenger pro oc',
			series: 'rx6800',
			url: 'https://www.ldlc.com/fiche/PB00394949.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800',
			url: 'https://www.ldlc.com/fiche/PB00392951.html'
		},
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800',
			url: 'https://www.ldlc.com/fiche/PB00390771.html'
		},
		{
			brand: 'powercolor',
			model: 'fighter',
			series: 'rx6800',
			url: 'https://www.ldlc.com/fiche/PB00394919.html'
		}
	],
	name: 'ldlc',
	DNS: 'ldlc.com'
};
