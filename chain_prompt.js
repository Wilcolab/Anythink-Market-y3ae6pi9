/**
 * Convert a string to kebab-case.
 * Validation: throws if input is not a string.
 * Normalization: trims whitespace.
 * Conversion: handles spaces, underscores, and camelCase boundaries.
 */
function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError(`toKebabCase: expected a string but received ${input === null ? 'null' : typeof input}`);
    }

    // Trim whitespace
    let s = input.trim();
    if (s === '') return '';

    // Preserve camelCase boundaries by inserting hyphen between lower/number -> Upper
    s = s.replace(/([a-z0-9])([A-Z])/g, '$1-$2');

    // Replace spaces and underscores with hyphens
    s = s.replace(/[\s_]+/g, '-');

    // Lowercase everything, collapse multiple hyphens, and trim hyphens
    s = s.toLowerCase().replace(/-+/g, '-').replace(/^-+|-+$/g, '');

    return s;
}

module.exports = toKebabCase;