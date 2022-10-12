const _ = require('lodash/fp')

const tap = x => { console.log(x); return x }

const chapterIndex = _.pipe(
    // Ideally, I could just
    _.get('chapters'), //?
    tap, //?
    _.keyBy('title'), //?
    x => x, //?
    _.mapValues(_.omit('title')),
    x => { console.log(x); return x } //??
)

module.exports = {
    chapterIndex
}
