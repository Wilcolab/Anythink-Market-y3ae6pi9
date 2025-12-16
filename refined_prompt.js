/**
 * Convert a string to camelCase.
 *
 * - Trims leading and trailing whitespace.
 * - Treats spaces, underscores, and hyphens as word separators; consecutive separators are collapsed.
 * - Normalizes all characters to lowercase before applying camel-casing so the result is deterministic.
 * - Leaves digits in place and treats them as part of words (e.g. "version 2 update" -> "version2Update").
 * - Returns an empty string for empty or whitespace-only inputs.
 *
 * Behavior notes:
 * - The first word is returned entirely in lowercase.
 * - Each subsequent word has its first character uppercased and the rest lowercased (simple title-casing).
 * - Non-separator punctuation present between words will split words only if included in the separator pattern
 *   (this implementation uses spaces, underscores and hyphens as explicit separators).
 *
 * Examples:
 *   toCamelCase('  hello world ')      -> 'helloWorld'
 *   toCamelCase('foo_bar-baz')         -> 'fooBarBaz'
 *   toCamelCase('FOO BAR')             -> 'fooBar'
 *   toCamelCase('alreadyCamelCase')    -> 'alreadycamelcase' // because input is normalized to lower-case first
 *   toCamelCase('version 2 update')    -> 'version2Update'
 *
 * @function toCamelCase
 * @param {string} input - The string to convert. Must not be null or undefined.
 * @returns {string} The camelCased string. Returns an empty string for empty/whitespace-only input.
 * @throws {TypeError} If input is null, undefined, or not of type string.
 */
 
/**
 * Convert a string to dot.case.
 *
 * - Trims leading and trailing whitespace.
 * - Inserts dot separators for transitions from lowercase/number to uppercase (camelCase/PascalCase boundaries).
 * - Splits acronym+word boundaries so that e.g. "HTMLParser" -> "html.parser".
 * - Replaces any sequence of non-alphanumeric characters with a single dot.
 * - Collapses multiple dots into a single dot and removes leading/trailing dots.
 * - Normalizes the entire result to lowercase.
 * - Returns an empty string for empty or whitespace-only inputs.
 *
 * Behavior notes:
 * - Preserves digits and treats them as part of tokens (e.g. "v2Beta" -> "v2.beta").
 * - Handles mixed separators and punctuation by converting them into single dot delimiters.
 *
 * Examples:
 *   toDotCase('  hello world ')   -> 'hello.world'
 *   toDotCase('foo_bar-baz')      -> 'foo.bar.baz'
 *   toDotCase('helloWorld')       -> 'hello.world'
 *   toDotCase('HTMLParser')       -> 'html.parser'
 *   toDotCase('Version 2.0-preview') -> 'version.2.0.preview'
 *
 * @function toDotCase
 * @param {string} input - The string to convert. Must not be null or undefined.
 * @returns {string} The dot.cased string (lowercased, dot-separated). Returns an empty string for empty/whitespace-only input.
 * @throws {TypeError} If input is null, undefined, or not of type string.
 */

/**
 * Convert a string to kebab-case.
 *
 * - Validates input is a non-empty string.
 * - Trims and converts to lowercase.
 * - Inserts hyphens for camelCase boundaries and replaces spaces/underscores with hyphens.
 * - Collapses multiple hyphens and trims leading/trailing hyphens.
 *
 * @param {string} input
 * @returns {string}
 * @throws {TypeError}
 */
function toKebabCase(input) {
    if (typeof input !== 'string') throw new TypeError('Input must be a non-empty string');
    const trimmed = input.trim();
    if (trimmed === '') throw new TypeError('Input must be a non-empty string');

    // Insert hyphens at camelCase boundaries using the original-cased trimmed input,
    // then replace spaces/underscores, lowercase, collapse hyphens and trim edges.
    const withCamelHyphens = trimmed.replace(/([a-z0-9])([A-Z])/g, '$1-$2');
    const replaced = withCamelHyphens.replace(/[\s_]+/g, '-');
    return replaced.toLowerCase().replace(/-+/g, '-').replace(/^-|-$/g, '');
}