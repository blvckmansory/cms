module.exports = {
    'field-formula': {
        enabled: true
    },
    'import-export-entries': {
        enabled: true,
        config: {
            "idField": "name"
        },
    },
    'revalidate-button': {
        enabled: true,
    },
    seo: {
        enabled: true,
    },
    'schemas-to-ts': {
        enabled: false,
        config: {
            acceptedNodeEnvs: ["development"],
            commonInterfacesFolderName: "schemas-to-ts",
            verboseLogs: false,
            alwaysAddEnumSuffix: false
        }
    },
    menus: {
        config: {
        maxDepth: 3,
        },
    },
}
