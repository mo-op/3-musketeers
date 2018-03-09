# cash

Cash is an open source currency management application that converts the given amount between currencies, from the command line. 

To convert 85 usd to eur, simply run

	$ node index.js 85 USD EUR

	✔ 69.16 (EUR) Euro


Leaving the second argument blank gives conversion to the other currencies. 

	$ node index.js 85 usd 

	✔ 69.16 (EUR) Euro
	✔ 61.48 (GBP) Pound Sterling

Through this application, you can also 
- set a default currency
- run a help/ version command in order to understand how to use the application

	$ node index.js --save EUR
	Saved default currencies to /home/manasa/.config/cash-nodejs/config.json

	$ node index.js --help
	Usage:

	 $ node bin/index.js <amount> <currency>

	 $ node bin/index.js <command>

	Commands:
	--save,  -s       Save currencies as default currencies
	--help,  -h       Display help message
	--version,  -v     Display version number

	 List of currencies: http://akep.us/currencies

	Examples:

	 $ node bin/index.js 1 usd

	 $ node bin/index.js 1 usd eur pln aud

	 $ node bin/index.js --save usd eur pln aud

	 $ node bin/index.js --help
-get the version
	$ node index.js --version 
	1.0.0

