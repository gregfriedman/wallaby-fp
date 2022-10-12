const { chapterIndex } = require('./book')

describe('transform', () => {
    it('should create index using chapter names from book', () => {
        const book = {
            chapters: [
                { title: 'First', pages: 20 },
                { title: 'Second', pages: 30 }
            ]
        }

        expect(chapterIndex(book)).toEqual({ First: { pages: 20 }, Second: { pages: 30 } })
    })
})