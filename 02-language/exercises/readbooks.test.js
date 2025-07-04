const {readbooks}  = require('./readbooks');

test('readbook response  or false when book is found or not', () => {
    const books = [
        { title: 'The Great Gatsby',  isRead: false},
        { title: 'To Kill a Mockingbird',  isRead: false },
        { title: '1984', isRead: true }
    ];
    
    expect(readbooks(books, '1984')).toBe(true);
    expect(readbooks(books, 'The Great Gatsby')).toBe(false);
});

test('readbook response false if title is not found', () => {
    const books = [
        { title: 'The Great Gatsby',  isRead: false},
        { title: 'To Kill a Mockingbird',  isRead: false },
        { title: '1984', isRead: true }
    ];
    
    expect(readbooks(books, 'El Golpe')).toBe(false);
});

test('readbook response false if book collection is empty', () => {
    const books = [];
    
    expect(readbooks(books, '1984')).toBe(false);
});

test('readbook comparasion is case insensitive', () => {
   const books = [
        { title: 'The Great Gatsby',  isRead: true},
        { title: 'To Kill a Mockingbird',  isRead: false },
        { title: '1984', isRead: false }
    ];
    
    expect(readbooks(books, 'THE GreaT GAtsby')).toBe(true);
});