import {Store} from './store';

export const AmazonFr: Store = {
	labels: {
		captcha: {
			container: '#captchacharacters',
			text: ['']
		},
		inStock: {
			container: '#a-autoid-0',
			text: ['Ajouter au panier']
		},
		maxPrice: {
			container:
				'span[class*="a-size-large a-color-price olpOfferPrice a-text-bold"]',
			euroFormat: true
		},
		printPrice: true,
		occasion: {
			selector: '.a-size-medium.olpCondition.a-text-bold'
		}
	},
	links: [
		// {
		// 	brand: 'test:brand',
		// 	model: 'test:model',
		// 	series: 'test:series',
		// 	url: 'https://www.amazon.fr/dp/offer-listing/B07PBLD2MX'
		// },
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08NC8YP6M'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HR5SXPS'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HGBYWQ6'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HR3Y5GQ'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HR55YB5'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HR4RJ3Q'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HH1BMQQ'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HJTH61J'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HJS2JLJ'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HHDP9DW'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HH5WF97'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HJNKT3P'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HJQ182D'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HR9D2JS'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HJRF2CN'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HJPDJTY'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HJGNJ81'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.amazon.fr/dp/offer-listing/B08HJLLF7G'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.amazon.fr/dp/offer-listing/B08166SLDF'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.amazon.fr/dp/offer-listing/B0815XFSGK'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.amazon.fr/dp/offer-listing/B08164VTWH'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.amazon.fr/dp/offer-listing/B0815Y8J9N'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.amazon.fr/dp/offer-listing/B08GSC5D9G'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.amazon.fr/dp/offer-listing/B08GS1N24H'
		}
	],
	name: 'amazon-fr',
	DNS: 'amazon.fr'
};
