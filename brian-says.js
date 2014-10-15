'use strict';

var unacceptableError = 'Completely unacceptable! I only except strings.';

function stringToUppercase (string) {
    return string.toUpperCase();
}

function brianSays (stringToShoutAbout) {
    if (typeof stringToShoutAbout !== 'string') {
        return stringToUppercase(unacceptableError);
    }

    return stringToUppercase(stringToShoutAbout);
}

module.exports = {
    says: brianSays
};