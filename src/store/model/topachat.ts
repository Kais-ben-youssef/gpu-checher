import {Store} from './store';

export const TopAchat: Store = {
	labels: {
		inStock: {
			container: '.en-stock',
			text: ['']
		},
		comingSoon: {
			container: '.alert-dispo__button',
			text: ['Me prévenir de la disponibilité']
		},
		outOfStock: {
			container: '.en-rupture',
			text: ['']
		},
		maxPrice: {
			container: '#panier > div.prix > div.eproduct.NOR > span',
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
			brand: 'gainward',
			model: 'Ghost OC',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006327.html'
		},
		{
			brand: 'gainward',
			model: 'Ghost',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006328.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006333.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming pro oc',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006505.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006506.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006507.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006508.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel epic-x',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006335.html'
		},
		{
			brand: 'pny',
			model: 'uprising',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006334.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006620.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006537.html'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006536.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006535.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006242.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006243.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006306.html'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006307.html'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006682.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006277.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3060',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006276.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005183.html'
		},
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005509.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005184.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005320.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005070.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005289.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005319.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005071.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005199.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005262.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005263.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005223.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005222.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005225.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005224.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005291.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005292.html'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005289.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005290.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005334.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005296.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005297.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005293.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005294.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005295.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005267.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005268.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005269.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005270.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005228.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005227.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005226.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005229.html'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005271.html'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005272.html'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005273.html'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005266.html'
		},
		{
			brand: 'kfa2',
			model: 'sg',
			series: '3080',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005256.html'
		},
		{
			brand: 'kfa2',
			model: 'sg',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005257.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006135.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005260.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005261.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005641.html'
		},
		{
			brand: 'gigabyte',
			model: 'turbo',
			series: '3090',
			url:
				'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006283.html'
		}
	],
	name: 'topachat'
};
