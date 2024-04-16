import stomatologia from '../../public/stomatologia.jpg';
import protetyka from '../../public/protetyka.jpg';
import ortodoncja from '../../public/ortodoncja.jpg';
import chirurgia from '../../public/chirurgia.jpg';

export const linksSevices = [
	{
		name: 'Stomatologia estetyczna',
		href: '/Services/Dentistry',
		image: stomatologia,
		description:
			'Stomatologia estetyczna łączy w sobie metody leczenia różnych specjalności, by piękne zęby stały się naszą wizytówką. Specjalizujemy się w kompleksowych zabiegach poprawiających i korygujących wygląd, kształt oraz kolor zębów.',
	},
	{
		name: 'Protetyka',
		href: '/Services/Prosthetics',
		image: protetyka,
		description:
			'Nowoczesna protetyka to nie tylko protezy, ale również możliwość odbudowy złamanych zębów, zmiany ich kształtu, ustawienia, koloru. Zajmujemy się odtwarzaniem pojedynczych, jak i rozległych braków zębowych, bowiem piękny uśmiech cieszy niezależnie od wieku.',
	},
	{
		name: 'Ortodoncja',
		href: '/Services/Orthodontics',
		image: ortodoncja,
		description:
			'Prawidłowo ustawione zęby to nie tylko kwestia estetyki, ale przede wszystkim zdrowia, bowiem wady zgryzu mogą wpływać na ogólny stan naszego organizmu. Dzięki stałej współpracy z dr Patrycją Wojtasińską-Chebel świadczymy usługi ortodontyczne na najwyższym poziomie.',
	},
	{
		name: 'Chirurgia',
		href: '/Services/Surgery',
		image: chirurgia,
		description:
			'Chirurgia dentystyczna to specjalizacja w dziedzinie stomatologii zajmująca się leczeniem problemów związanych z tkankami miękkimi i twardymi jamy ustnej oraz przylegającymi strukturami.',
	},
];
export const linksSevicesNav = [
	{ name: 'STOMATOLOGIA', href: '/Services/Dentistry' },
	{ name: 'PROTETYKA', href: '/Services/Prosthetics' },
	{ name: 'ORTODONCJA', href: '/Services/Orthodontics' },
	{ name: 'CHIRURGIA', href: '/Services/Surgery' },
];
export const linksNav = [
	{ name: 'START', href: '/' },
	{ name: 'USŁUGI', href: '/Services' },
	{ name: 'ZESPÓŁ', href: '/Team' },
	// { name: 'CENNIK', href: '/Prices' },
	{ name: 'GWARACJA', href: '/Warranty' },
	{ name: 'KONTAKT', href: '/Contact' },
];
export const dentistry = [
	{ name: 'Badanie stomatologiczne', price: '120' },
	{ name: 'Konsultacja - plan leczenia', price: '200' },
	{ name: 'Wizyta adaptacyjna dla dzieci', price: '150' },
	{ name: 'Wypełnienie światłoutwardzalne', price: '350 - 550' },
	{
		name: 'Odbudowa zęba na wkładzie z włókien szklanych',
		price: '550 - 800',
	},
	{
		name: 'Licowanie zęba materiałem światłoutwardzalnym',
		price: '550 - 900',
	},
	{
		name: 'Wypełnienie chemoutwardzalne w zębie mlecznym',
		price: '200 - 240',
	},
	{ name: 'Zatrucie miazgi zęba', price: '200' },
	{
		name: 'Leczenie kanałowe w mikroskopie zęba:',
		types: [
			{ name: 'Jednokanałowego', price: 'od 1000' },
			{ name: 'Dwukanałowego', price: 'od 1200' },
			{ name: 'Trzykanałowego', price: 'od 1500' },
			{ name: 'Czterokanałowego', price: 'od 1600 - 1800' },
		],
	},
	{ name: 'Usunięcie kamienia nazębnego', price: '180 - 300' },
	{ name: 'Piaskowanie', price: '200 - 250' },
	{ name: 'Pakiet higienizacyjny', price: '350' },
	{ name: 'Wybielanie zęba martwego', price: '250' },
	{ name: 'Wybielanie zębów żywych', price: '1000' },
	{ name: 'Lakowanie zęba', price: '150' },
	{ name: 'RTG', price: '40' },
];
export const prosthetics = [
	{ name: 'Konsultacja protetyczna z planem leczenia', price: '200' },
	{ name: 'Modele orientacyjne', price: '170' },
	{ name: 'Proteza całkowita akrylowa', price: '1800 - 2200' },
	{ name: 'Proteza szkieletowa', price: '2500 - 2700' },
	{ name: 'Naprawa złamanej lub pękniętej protezy', price: '200' },
	{ name: 'Podścielenie protezy', price: '480' },
	{ name: 'Podścielenie miekkie', price: '50' },
	{
		name: 'Wkłady koronowo-korzeniowe',
		types: [
			{ name: 'Stalowy prosty', price: '450' },
			{ name: 'Stalowy wkładany', price: '550' },
			{ name: 'Z włókien szklanych', price: '300' },
		],
	},
	{ name: 'Korona porcelanowa na metalu', price: '1600' },
	{ name: 'Korona porcelanowa na złocie galwanicznym', price: '3000' },
	{ name: 'Korona porcelanowa na cerkonie', price: '2200' },
	{ name: 'Korona teleskopowa', price: '2400' },
	{ name: 'Korona tymczasowa', price: '100' },
	{ name: 'Korona pełnoceramiczna', price: '2500' },
	{ name: 'Szklanie podparcie', price: '1000' },
	{ name: 'Licówka porcelanowa', price: '2500' },
	{ name: 'Inlay - Onlay porcelanowy', price: '1600' },
	{ name: 'Inlay - Onlay kompozytowy', price: '1300' },
	{ name: 'Nost adhezyjny na włóknach szklanych', price: '2300' },
];
export const orthodontics = [
	{ name: 'Konsultacja', price: '200' },
	{ name: 'Modele diagnostyczne', price: '200' },
	{ name: 'Przygotowanie planu leczenia', price: '150' },
	{ name: 'Aparat zdejmowany jednoszczęlowy ze śrubą', price: 'od 1500' },
	{ name: 'Aparat zdejmowany dwuszczękowy', price: '1400' },
	{ name: 'Śruba w aparacie', price: '150' },
	{ name: 'Aparat stały metalowy - 1 łuk', price: '2200' },
	{ name: 'Aparat stały metalowy samoligaturujący', price: '3000' },
	{ name: 'Aparat stały kosmetyczny - 1 łuk', price: '3500' },
	{ name: 'Aparat kosmetyczny samoligaturujący', price: '3200' },
	{
		name: 'Kontrola leczenia aparatem stałym',
		types: [
			{ name: '1 łuk', price: '190' },
			{ name: '2 łuki', price: '250' },
		],
	},
	{ name: 'Kontrola leczenia aparatem ruchomym', price: '150' },
	{ name: 'Kontrola leczenia retencyjnego', price: '100' },
	{
		name: 'Zdjęcie aparatu stałego z czyszczeniem z kleju - 1 łuk',
		price: '350',
	},
	{ name: 'Retainer klejony', price: '400' },
	{ name: 'Retainer zdejmowany - szyna przezroczysta', price: '450' },
];
export const surgery = [
	{
		name: 'Usunięcie zęba',
		types: [
			{ name: 'Jednokorzeniowego', price: '270 - 350' },
			{ name: 'Wielokorzeniowego', price: '300 - 370' },
		],
	},
	{ name: 'Ekstrakcja skomplikowana (szycie, separacja)', price: '350 - 450' },
	{ name: 'Usunięcie zęba mlecznego w znieczuleniu żelem', price: '130 - 200' },
	{
		name: 'Chirurgiczne usunięcie zęba z separacją i płatem śluzówkowo-okostnowym',
		price: '450 - 550',
	},
	{ name: 'Usunięcie zęba zatrzymanego', price: '550 - 700' },
	{ name: 'Plastyka połączenia ustno-zatokowego', price: '300 - 400' },
	{ name: 'Szycie', price: '120' },
	{ name: 'Podcięcie wędzidełka', price: '250' },
	{ name: 'Resekcja', price: 'od 500' },
];
export const warranty = [
	{ name: 'Wypełnienie światłoutwardzalne', time: '24' },
	{ name: 'Wypełnienia światłoutwardzalne w okolicy szyjki zęba', time: '12' },
	{
		name: 'Wkłady korono-korzeniowe',
		time: '24',
		case: [
			{
				caseName:
					'W przypadku istniejących braków w pozostałym uzębieniu (brak tzw. stref podparcia)',
				caseTime: '6',
			},
			{
				caseName:
					'Po uzupełnieniu pozostałych braków gwarancja ulega przedłużeniu do',
				caseTime: '24',
			},
		],
	},
	{
		name: 'Stałe uzupełnienia protetyczne (korony, mosty, mosty adhezyjne, wkłady inlay, nakłady onlay)',
		time: '36',
		case: [
			{
				caseName:
					'W przypadku istniejących braków w pozostałym uzębieniu (brak tzw. stref podparcia)',
				caseTime: '12',
			},
			{
				caseName:
					'W przypadku bruksizmu okres trwania gwarancji jest indywidualnie ustalany przez lekarza prowadzącego',
				caseTime: '',
			},
		],
	},
	{
		name: 'Protezy akrylowe ruchome',
		time: '24',
		case: [
			{
				caseName:
					'W przypadku istniejących braków w pozostałym uzębieniu (brak tzw. stref podparcia)',
				caseTime: '12',
			},
		],
	},
	{
		name: 'Protezy ruchome szkieletowe',
		time: '24',
		case: [
			{
				caseName:
					'W przypadku istniejących braków w pozostałym uzębieniu (brak tzw. stref podparcia)',
				caseTime: '12',
			},
		],
	},
	{ name: 'Szyny zębowe oraz szyny relaksacyjne', time: '12' },
];
export const warrantyNot = [
	'Leczenia endodontycznego (kanałowego) ze względu na nieprzewidywalny proces gojenia zapalenia tkanek okołowierzchołkowych.',
	'Prac tymczasowych - wypełnienia, licówki, korony, mosty, protezy natychmiastowe bezpośrednio po usunięciu zęba.',
	'Prac, przy wykonaniu których Pacjent został poinformowany o braku lub ograniczeniu gwarancji, a które zostały wykonane na wyraźne życzenie Pacjenta.',
	'Leczenia stanów zapalnych po ekstrakcji (usunięciu) zęba.',
	'Leczenia zapalenia miazgi zęba bezpośrednio po wykonaniu wypełnienia lub osadzeniu pracy protetycznej - w takiej sytuacji Pacjent ponosi koszt tylko leczenia endodontycznego.',
];
export const warrantyNotDamages = [
	'Mechaniczne zębów naturalnych lub sztucznych w trakcie leczenia endodontycznego (np. między wizytami).',
	'Urazowe np. w wyniku uderzenia w koronę protetyczną, licówkę, most.',
	'Powstałe w wyniku naturalnego zaniku kości i zmian w przyzębiu.',
	'Wynikające z nieprzestrzegania higieny jamy ustnej.',
	'Spowodowane uzupełnieniem tylko części braków zębowych, co powoduje przeciążenie wykonanego uzupełnienia protetycznego.',
	'Spowodowane przez korekty wykonane poza MS DENT.',
];
