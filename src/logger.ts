import {Link, Store} from './store/model';
import chalk from 'chalk';
import {config} from './config';
import winston from 'winston';

const prettyJson = winston.format.printf((info) => {
	const timestamp = new Date().toLocaleTimeString();

	let out = `${chalk.grey(`[${timestamp}]`)} ${info.level} ${chalk.grey(
		'::'
	)} ${info.message}`;

	if (Object.keys(info.metadata).length > 0) {
		out = `${out} ${chalk.magenta(JSON.stringify(info.metadata, null, 2))}`;
	}

	return out;
});

export const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.metadata({fillExcept: ['level', 'message', 'timestamp']}),
		prettyJson
	),
	level: config.logLevel,
	transports: [new winston.transports.Console({})]
});

export const Print = {
	backoff(
		link: Link,
		store: Store,
		parameters: {delay: number; statusCode: number},
		color?: boolean
	): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow(
					`BACKOFF DELAY status=${parameters.statusCode} delay=${parameters.delay}`
				)
			);
		}

		return `✖ ${buildProductString(link, store)} :: BACKOFF DELAY status=${
			parameters.statusCode
		} delay=${parameters.delay}`;
	},
	badStatusCode(
		link: Link,
		store: Store,
		statusCode: number,
		color?: boolean
	): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow(`STATUS CODE ERROR ${statusCode}`)
			);
		}

		return `✖ ${buildProductString(
			link,
			store
		)} :: STATUS CODE ERROR ${statusCode}`;
	},
	bannedSeller(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('BANNED SELLER')
			);
		}

		return `✖ ${buildProductString(link, store)} :: BANNED SELLER`;
	},
	captcha(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('CAPTCHA')
			);
		}

		return `✖ ${buildProductString(link, store)} :: CAPTCHA`;
	},
	inStock(
		link: Link,
		store: Store,
		color?: boolean,
		sms?: boolean,
		price?: number | null,
		state?: string | null
	): string {
		const productString = `${buildProductString(link, store)} :: EN STOCK`;

		state = state ? state.replace(/\s/g, '') : 'EN STOCK';

		if (color) {
			let eur = '';
			if (price) {
				eur = ` :: PRIX :: EUR ${price}`;
			}

			return (
				'✅ ' +
				chalk.blueBright(buildProductString(link, store, false)) +
				' :: ' +
				chalk.greenBright(state) +
				chalk.yellowBright(eur)
			);
		}

		if (sms) {
			return productString;
		}

		return ` ✅ ${productString} `;
	},
	inStockWaiting(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'ℹ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('IN STOCK, WAITING')
			);
		}

		return `ℹ ${buildProductString(link, store)} :: IN STOCK, WAITING`;
	},
	comingSoon(
		link: Link,
		store: Store,
		price: number | null,
		color?: boolean
	): string {
		if (color) {
			let eur = '';
			if (price) {
				eur = ` :: PRIX :: EUR ${price}`;
			}

			return (
				'ℹ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('EN PRÉCOMMANDE') +
				chalk.yellowBright(eur)
			);
		}

		return `ℹ ${buildProductString(link, store)} :: EN PRÉCOMMANDE`;
	},
	maxPrice(
		link: Link,
		store: Store,
		price: number,
		maxPrice: number,
		color?: boolean
	): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow(`PRICE ${price} EXCEEDS LIMIT ${maxPrice}`)
			);
		}

		return `✖ ${buildProductString(
			link,
			store
		)} :: PRICE ${price} EXCEEDS LIMIT ${maxPrice}`;
	},
	message(
		message: string,
		topic: string,
		store: Store,
		color?: boolean
	): string {
		if (color) {
			return (
				'✖ ' +
				buildSetupString(topic, store, true) +
				' :: ' +
				chalk.yellow(message)
			);
		}

		return `✖ ${buildSetupString(topic, store)} :: ${message}`;
	},
	noResponse(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('NO RESPONSE')
			);
		}

		return `✖ ${buildProductString(link, store)} :: NO RESPONSE`;
	},
	outOfStock(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.red('RUPTURE DE STOCK')
			);
		}

		return `✖ ${buildProductString(link, store)} :: RUPTURE DE STOCK`;
	},
	productInStock(link: Link): string {
		let productString = `Product Page: ${link.url}`;
		if (link.cartUrl) productString += `\nAdd To Cart Link: ${link.cartUrl}`;

		return productString;
	},
	rateLimit(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('RATE LIMIT EXCEEDED')
			);
		}

		return `✖ ${buildProductString(link, store)} :: RATE LIMIT EXCEEDED`;
	}
};

function buildSetupString(
	topic: string,
	store: Store,
	color?: boolean
): string {
	if (color) {
		return chalk.cyan(`[${store.name}]`) + chalk.grey(` [setup (${topic})]`);
	}

	return `[${store.name}] [setup (${topic})]`;
}

function buildProductString(link: Link, store: Store, color?: boolean): string {
	if (color) {
		return (
			(store.DNS
				? chalk.cyan(`[${store.DNS}]`)
				: chalk.cyan(`[${store.name}]`)) +
			chalk.grey(
				` [${link.brand.toUpperCase()} (${
					link.series
				})] ${link.model.toUpperCase()}`
			)
		);
	}

	const finalName = store.DNS ? store.DNS : store.name;
	return `[${finalName}] [${link.brand.toUpperCase()} (${
		link.series
	})] ${link.model.toUpperCase()}`;
}
