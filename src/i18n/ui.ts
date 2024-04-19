import SpainFlag from '../components/flags/Spain.astro';
import UnitedStatesFlag from '../components/flags/UnitedStates.astro';

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.inicio': 'Inicio',
		'nav.vota': 'Vota',
		'nav.info': 'Nosotros',
		'nav.archivo': 'Viajes',
		'nav.legal': 'Aviso Legal',
		'nav.privacidad': 'Privacidad',
		'nav.cookies': 'Cookies',
	},
	en: {
		'nav.inicio': 'Home',
		'nav.vota': 'Vote',
		'nav.info': 'Information',
		'nav.archivo': 'Archive',
		'nav.legal': 'Legal Notice',
		'nav.privacidad': 'Privacy',
		'nav.cookies': 'Cookies',
	},
	ca: {
		'nav.inicio': 'Inici',
		'nav.vota': 'Vota',
		'nav.info': 'Informació',
		'nav.archivo': 'Arxiu',
		'nav.legal': 'Avís Legal',
		'nav.privacidad': 'Privacitat',
		'nav.cookies': 'Cookies',
	},
} as const;

export const routes = {
	es: {
		contacto: 'contacto',
		info: 'info',
		archivo: 'archivo',
		'aviso-legal': 'aviso-legal',
		privacidad: 'privacidad',
		cookies: 'cookies',
	},
	en: {
		contacto: 'contacto', // Agrega la ruta de contacto para el idioma inglés
		vota: 'vote',
		info: 'information',
		archivo: 'archive',
		'aviso-legal': 'legal-notice',
		privacidad: 'privacy',
		cookies: 'cookies',
	},
	ca: {
		contacto: 'contacto', // Agrega la ruta de contacto para el idioma catalán
		vota: 'vota',
		info: 'informacio',
		archivo: 'arxiu',
		'aviso-legal': 'avis-legal',
		privacidad: 'privacitat',
		cookies: 'cookies',
	},
};

