var BRAILLE_LOOKUP = {
    100000: 'a',
    101000: 'b',
    110000: 'c',
    110100: 'd',
    100100: 'e',
    111000: 'f',
    111100: 'g',
    101100: 'h',
    011000: 'i',
    011100: 'j',
    100010: 'k',
    101010: 'l',
    110010: 'm',
    110110: 'n',
    100110: 'o',
    111010: 'p',
    111110: 'q',
    101110: 'r',
    011010: 's',
    011110: 't',
    100011: 'u',
    101011: 'v',
    011101: 'w',
    110011: 'x',
    110111: 'y',
    100111: 'z'
};

var secretMessage = [
    '.O O. .O OO O. O. .O OO O. OO O. .O O. .O',
    'O. .O O. .. .. OO OO .. .. .. OO OO .O OO',
    'O. O. O. O. .. O. O. O. OO .. .. .O O. .O'
];

function rawToBinary(raw) {
    return _.map(raw, function(rawLine) {
        return rawLine.replace('O', '1').replace('.', '0');
    })
}



rawToBinary(secretMessage);