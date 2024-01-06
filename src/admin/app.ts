import ru from './src/translations/ru.json'
import HelloLogo from './extensions/favicon.png'

const brandTranslations = {
	'rate-types': 'Типы тарифов',
	Document: 'Документ',
	notFound: '404',
	noData: 'Нет данных',
	internalError: '500',
	first: 'Первая',
	second: 'Вторая',
	third: 'Третья',
	home: 'Главная',
	business: 'Бизнес',
	Car: 'Машина',
	CarType: 'Тип машины',
	Hint: 'Подсказка',
	Post: 'Новость',
	Rate: 'Тариф',
	User: 'Пользователь',
	icon: 'Иконка',
	price: 'Цена',
	label: 'Текст',
	cover: 'Обложка',
	title: 'Заголовок',
	content: 'Содержание',
	description: 'Описание',
	name: 'Название',
	carType: 'Тип машины',
	isNew: 'Новинка',
	isWrapped: 'Оклейка',
	isHot: 'Популярная',
	previewImage: 'Превью',
	sideImages: 'Цвета',
	characteristics: 'Характеристики машины',
	mainFeatures: 'Основные',
	otherFeatures: 'Особенности',
	rate: 'Тариф',
	minMinuteRate: 'Минимальный тариф(мин)',
	kmCost: 'Стоимость километра',
	minutes: 'Минутные тарифы для резидента и нерезидента',
	minuteRate: 'Стоимость минуты',
	minuteRateParking: 'Стоимость стоянки',
	isResident: 'Резидент',
	color: 'Цвет',
	image: 'Изображение',
	cars: 'Машины',
	videoURL: 'Ссылка на видео',
	hintType: 'Тип подсказки',
	ratesWithConditions: 'Тарифы с условиями',
	daysAndKms: 'Сутки и км',
	hoursAndKms: 'Часы и км',
	minutesAndKms: 'Минуты и км',
	'content-manager.containers.ListPage.table-headers.publishedAt': 'Тарифы с условиями',

	'Media Library': 'Медиа-Библиотека',
	'Content Type Builder': 'Конструктор типов',
	'content-type-builder.plugin.name': 'Конструктор типов',

	// 'HomePage.helmet.title': 'Домашняя страница',
	// 'Content Type Builder': 'Конструктор типов',
	// 'notification.error.revalidate': 'Ошибка ревалидации',
	'multi-select.plugin.name': 'Мульти-Селект',
	'admin.pages.MarketPlacePage.helmet': 'Библиотека плагинов',
	'app.components.HomePage.welcome': 'Добро пожаловать!',
	'app.components.HomePage.welcome.again': 'И снова здравствуйте!',
	'plugin.schema.i18n.localized.label-content-type': 'i18n',
	'plugin.schema.i18n.localized.label-field-type': 'i18n',
	'Auth.form.welcome.title': 'Админ панель хеллошки!',
	'Auth.form.welcome.subtitle': 'Войдите и настраивайте!',
	'app.components.LeftMenu.navbrand.title': 'Hello.by',
	'app.components.LeftMenu.navbrand.workplace': 'Панель управления',
}

export default {
	config: {
		theme: {
			light: {
				colors: {
					primary100: '#60ff6d',
					// borders
					primary200: '#60ff6d',
					primary500: '#000000',
					primary600: '#000000',
					primary700: '#000000',
					buttonPrimary500: '#000000',
					buttonPrimary600: '#000000',
				},
			},
			dark: {
				colors: {
					primary100: '#000000',
					// borders
					primary200: '#000000',
					primary500: '#60ff6d',
					primary600: '#60ff6d',
					primary700: '#60ff6d',
					// first background color
					neutral0: '#000000',
					// text color in non-main buttons
					buttonNeutral0: '#000000',
					buttonPrimary500: '#60ff6d',
					buttonPrimary600: '#60ff6d',
				},
			},
		},
		auth: {
			logo: HelloLogo,
		},
		head: {
			favicon: HelloLogo,
		},
		locales: ['ru', 'en'],
		menu: {
			logo: HelloLogo,
		},
		translations: {
			en: {
				// 	...ru,
				'app.components.LeftMenu.navbrand.title': 'Hello.by',
				'app.components.LeftMenu.navbrand.workplace': 'Admin panel',
			},
			ru: {
				...ru,
				...brandTranslations,
			},
		},
		tutorials: false,
		notifications: { releases: false },
	},
	bootstrap: (app: any) => {
		document.title = 'Hello.by | Управление сайтом'
	},
}
