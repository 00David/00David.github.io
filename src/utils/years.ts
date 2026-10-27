// URL of the page listing one academic year's projects, from its `code`,
// e.g. "M1" -> "/project/year/m1".
export function yearHref(code: string): string {
    return `/project/year/${code.toLowerCase()}`;
}
