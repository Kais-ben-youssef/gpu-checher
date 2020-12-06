import chalk from 'chalk';
import {readFileSync} from 'fs';

const version = readFileSync('version.txt', 'utf8');

export const banner = {
	asciiVersion: `
	▓█████▄  ▒█████   ▒█████    █████▒   ▓█████▄  ▒█████   ▒█████    █████▒
	▒██▀ ██▌▒██▒  ██▒▒██▒  ██▒▓██   ▒    ▒██▀ ██▌▒██▒  ██▒▒██▒  ██▒▓██   ▒ 
	░██   █▌▒██░  ██▒▒██░  ██▒▒████ ░    ░██   █▌▒██░  ██▒▒██░  ██▒▒████ ░ 
	░▓█▄   ▌▒██   ██░▒██   ██░░▓█▒  ░    ░▓█▄   ▌▒██   ██░▒██   ██░░▓█▒  ░ 
	░▒████▓ ░ ████▓▒░░ ████▓▒░░▒█░       ░▒████▓ ░ ████▓▒░░ ████▓▒░░▒█░    
	 ▒▒▓  ▒ ░ ▒░▒░▒░ ░ ▒░▒░▒░  ▒ ░        ▒▒▓  ▒ ░ ▒░▒░▒░ ░ ▒░▒░▒░  ▒ ░    
	 ░ ▒  ▒   ░ ▒ ▒░   ░ ▒ ▒░  ░          ░ ▒  ▒   ░ ▒ ▒░   ░ ▒ ▒░  ░      
	 ░ ░  ░ ░ ░ ░ ▒  ░ ░ ░ ▒   ░ ░        ░ ░  ░ ░ ░ ░ ▒  ░ ░ ░ ▒   ░ ░    
	   ░        ░ ░      ░ ░                ░        ░ ░      ░ ░          
	 ░                                    ░                                
`,
	render(ascii: boolean, hexColor: string) {
		return chalk
			.hex(hexColor)
			.bold(ascii ? this.asciiVersion : this.stringVersion);
	},
	stringVersion: `doof doof
${version}`
};
