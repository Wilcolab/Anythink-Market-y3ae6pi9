// few_shot_prompt.js
function toCamelCase(input) {
    if (typeof input !== 'string') return '';

    const parts = input
        .trim()
        .replace(/[^a-zA-Z0-9]+/g, ' ') // normalize separators to spaces
        .split(/\s+/)
        .filter(Boolean);

    if (parts.length === 0) return '';

    return parts
        .map((part, idx) => {
            part = part.toLowerCase();
            if (idx === 0) return part;
            return part.charAt(0).toUpperCase() + part.slice(1);
        })
        .join('');
}

module.exports = toCamelCase;

// Examples:
// toCamelCase('first name')   -> 'firstName'
// toCamelCase('user_id')      -> 'userId'
// toCamelCase('SCREEN_NAME')  -> 'screenName'
// toCamelCase('mobile-number')-> 'mobileNumber'