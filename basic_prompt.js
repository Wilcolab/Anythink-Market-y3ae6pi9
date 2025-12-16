const prompt = `Write a JavaScript function named toCamelCase(str) that converts an input string to lowerCamelCase. Rules:
- Treat spaces, hyphens (-), underscores (_), and punctuation as word boundaries.
- Remove any non-alphanumeric characters (except digits which are kept).
- Collapse consecutive separators into one.
- Lowercase the first word; capitalize the first letter of each subsequent word.
- Trim leading/trailing whitespace.
- Return an empty string for empty or all-separator input.

Examples:
- "hello world" -> "helloWorld"
- " Foo_bar-baz " -> "fooBarBaz"
- "convert THIS_string 42 times!" -> "convertThisString42Times"
`;

module.exports = prompt;