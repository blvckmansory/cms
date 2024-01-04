module.exports = {
	'import-export-entries': {
		enabled: true,
		config: {
			idField: 'name',
		},
	},
	'schemas-to-ts': {
		enabled: false,
		config: {
			acceptedNodeEnvs: ['development'],
			commonInterfacesFolderName: 'schemas-to-ts',
			verboseLogs: false,
			alwaysAddEnumSuffix: false,
		},
	},
}
