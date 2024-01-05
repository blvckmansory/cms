const parseQueryParams = (url: string): URLSearchParams => {
	const queryString = url.split('?').at(-1) || ''
	return new URLSearchParams(queryString)
}

export { parseQueryParams }
