import ru from '../../src/admin/src/translations/ru.json'

export default {
	config: {
		locales: ['ru', 'en'],

		translations: {
			ru: {
				...ru,
				Car: 'Машина',
				icon: 'Иконка',
				label: 'Текст',
				cover: 'Обложка',
				title: 'Заголовок',
				content: 'Содержание',
				description: 'Описание',
				carName: 'Модель машины',

				'HomePage.helmet.title': 'Домашняя страница',
				'Content Manager': 'Редактор',
				'Content Type Builder': 'Конструктор типов',
				'content-type-builder.plugin.name': 'Конструктор типов',
				'react-icons.plugin.name': 'Библиотека иконок',
				'import-export-entries.plugin.name': 'Импорт & Экспорт',
				'import-export-entries.plugin.description':
					'Позволяет импортировать и экспортировать данные в бд.',
				'notification.error.revalidate': 'Ошибка ревалидации',
				'multi-select.plugin.name': 'Мульти-Селект',
				'admin.pages.MarketPlacePage.helmet': 'Библиотека плагинов',
				'app.components.HomePage.welcome': 'Добро пожаловать!',
				'app.components.HomePage.welcome.again': 'И снова здравствуй!',
				'plugin.schema.i18n.localized.label-content-type': 'i18n',
				'plugin.schema.i18n.localized.label-field-type': 'i18n',
				'Auth.form.welcome.title': 'Админ панель хеллошки!',
				'Auth.form.welcome.subtitle': 'Войдите и настроивайте!',
			},
		},
		tutorials: false,
		notifications: { releases: false },
	},
	bootstrap: (app: any) => {
		console.log(app)
	},
}
