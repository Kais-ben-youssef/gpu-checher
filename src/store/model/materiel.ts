import {Store} from './store';

export const materiel: Store = {
	labels: {
		inStock: {
			container: '.o-availability__value',
			text: ['En stock']
		},
		comingSoon: {
			container: '.js-modal-trigger__alert_availability',
			text: ['Être prévenu de la disponibilité']
		},
		outOfStock: {
			container: '.stockStatus',
			text: ['Levertermijn onbekend', 'pre-order']
		},
		maxPrice: {
			container: '.o-product__price',
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
			url: 'https://www.materiel.net/produit/202011200137.html'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3060',
			url: 'https://www.materiel.net/produit/202011200138.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3060',
			url: 'https://www.materiel.net/produit/202011200140.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming pro oc',
			series: '3060',
			url: 'https://www.materiel.net/produit/202011180031.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3060',
			url: 'https://www.materiel.net/produit/202011180027.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3060',
			url: 'https://www.materiel.net/produit/202011180025.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3060',
			url: 'https://www.materiel.net/produit/202011180019.html'
		},
		{
			brand: 'gainward',
			model: 'Ghost OC',
			series: '3060',
			url: 'https://www.materiel.net/produit/202011090108.html'
		},
		{
			brand: 'gainward',
			model: 'Ghost',
			series: '3060',
			url: 'https://www.materiel.net/produit/202011090107.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix',
			series: '3060',
			url: 'https://www.materiel.net/produit/202011090110.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3060',
			url: 'https://www.materiel.net/produit/202011240231.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
			url: 'https://www.materiel.net/produit/202010010052.html'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3070',
			url: 'https://www.materiel.net/produit/202011030097.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.materiel.net/produit/202010010050.html'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.materiel.net/produit/202010010051.html'
		},
		{
			brand: 'kfa2',
			model: 'sg oc',
			series: '3070',
			url: 'https://www.materiel.net/produit/202009220060.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.materiel.net/produit/202010200077.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.materiel.net/produit/202009290085.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.materiel.net/produit/202009290086.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3070',
			url: 'https://www.materiel.net/produit/202010200076.html'
		},
		// {
		// 	brand: 'evga',
		// 	model: 'ftw3',
		// 	series: '3070',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00386926.html'
		// },
		// {
		// 	brand: 'evga',
		// 	model: 'ftw3 ultra',
		// 	series: '3070',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00386925.html'
		// },
		// {
		// 	brand: 'evga',
		// 	model: 'xc3 black',
		// 	series: '3070',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00386030.html'
		// },
		// {
		// 	brand: 'evga',
		// 	model: 'xc3',
		// 	series: '3070',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00386928.html'
		// },
		// {
		// 	brand: 'evga',
		// 	model: 'xc3 ultra',
		// 	series: '3070',
		// 	url:
		// 		'https://www.materiel.net/produit/202010210027.html'
		// },
		// {
		// 	brand: 'msi',
		// 	model: 'gaming x trio',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202009070052.html'
		// },
		// {
		// 	brand: 'msi',
		// 	model: 'suprim x',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202010220025.html'
		// },
		// {
		// 	brand: 'msi',
		// 	model: 'ventus 3x oc',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202009070053.html'
		// },
		// {
		// 	brand: 'gigabyte',
		// 	model: 'vision oc',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202009300085.html'
		// },
		// {
		// 	brand: 'gigabyte',
		// 	model: 'gaming oc',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202009080083.html'
		// },
		// {
		// 	brand: 'gigabyte',
		// 	model: 'eagle oc',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202009080086.html'
		// },
		// {
		// 	brand: 'gigabyte',
		// 	model: 'aorus master',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202009290084.html'
		// },
		// {
		// 	brand: 'gigabyte',
		// 	model: 'aorus xtreme',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202011060056.html'
		// },
		// {
		// 	brand: 'gigabyte',
		// 	model: 'xtreme waterforce wb',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202011240220.html'
		// },
		// {
		// 	brand: 'gigabyte',
		// 	model: 'xtreme waterforce',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202011240219.html'
		// },
		// {
		// 	brand: 'evga',
		// 	model: 'ftw3',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202009090100.html'
		// },
		// {
		// 	brand: 'evga',
		// 	model: 'ftw3 ultra',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202009090101.html'
		// },
		// {
		// 	brand: 'evga',
		// 	model: 'xc3 black',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202009090098.html'
		// },
		// {
		// 	brand: 'evga',
		// 	model: 'xc3',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202009090099.html'
		// },
		// {
		// 	brand: 'evga',
		// 	model: 'xc3 ultra',
		// 	series: '3080',
		// 	url:
		// 		'https://www.materiel.net/produit/202009100088.html'
		// },

		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.materiel.net/produit/202009070050.html'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3090',
			url: 'https://www.materiel.net/produit/202010220024.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.materiel.net/produit/202009070051.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3090',
			url: 'https://www.materiel.net/produit/202010280094.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.materiel.net/produit/202009080064.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.materiel.net/produit/202009080079.html'
		},
		{
			brand: 'gigabyte',
			model: 'turbo',
			series: '3090',
			url: 'https://www.materiel.net/produit/202011060060.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3090',
			url: 'https://www.materiel.net/produit/202010300049.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.materiel.net/produit/202009090107.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://www.materiel.net/produit/202009090109.html'
		},
		{
			brand: 'evga',
			model: 'turbo',
			series: '3090',
			url: 'https://www.materiel.net/produit/202011060060.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
			url: 'https://www.materiel.net/produit/202009090103.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
			url: 'https://www.materiel.net/produit/202009090106.html'
		}

		// {
		// 	brand: 'gigabyte',
		// 	model: 'gaming oc',
		// 	series: 'rx6800xt',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00393086.html'
		// },
		// {
		// 	brand: 'msi',
		// 	model: 'amd reference',
		// 	series: 'rx6800xt',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00391072.html'
		// },
		// {
		// 	brand: 'sapphire',
		// 	model: 'amd reference',
		// 	series: 'rx6800xt',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00391076.html'
		// },
		// {
		// 	brand: 'sapphire',
		// 	model: 'gaming oc',
		// 	series: 'rx6800xt',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00393294.html'
		// },
		// {
		// 	brand: 'sapphire',
		// 	model: 'oc se',
		// 	series: 'rx6800xt',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00393295.html'
		// },
		// {
		// 	brand: 'asrock',
		// 	model: 'phantom gaming d oc',
		// 	series: 'rx6800xt',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00393405.html'
		// },
		// {
		// 	brand: 'powercolor',
		// 	model: 'red dragon',
		// 	series: 'rx6800xt',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00394927.html'
		// },
		// {
		// 	brand: 'sapphire',
		// 	model: 'gaming oc',
		// 	series: 'rx6800',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00393287.html'
		// },
		// {
		// 	brand: 'sapphire',
		// 	model: 'amd reference',
		// 	series: 'rx6800',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00391077.html'
		// },
		// {
		// 	brand: 'asrock',
		// 	model: 'challenger pro oc',
		// 	series: 'rx6800',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00394949.html'
		// },
		// {
		// 	brand: 'gigabyte',
		// 	model: 'gaming oc',
		// 	series: 'rx6800',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00392951.html'
		// },
		// {
		// 	brand: 'msi',
		// 	model: 'amd reference',
		// 	series: 'rx6800',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00390771.html'
		// },
		// {
		// 	brand: 'powercolor',
		// 	model: 'fighter',
		// 	series: 'rx6800',
		// 	url:
		// 		'https://www.ldlc.com/fiche/PB00394919.html'
		// },
	],
	name: 'materiel',
	DNS: 'materiel.net'
};
