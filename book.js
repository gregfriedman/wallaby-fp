const _ = require('lodash/fp')

const { tap } = require('./utils')

/**
 * Convert a book into an index of chapter titles
 * @param book { { chapters: [ { title, pages} ] } }
 * @return {{ [title]: { pages } }}
 */
const chapterIndex = _.pipe(
    // Ideally, I can just use a Live Comment to show the output of the curried function,
    //  but it just logs the '_.get' function
    _.get('chapters'), //?

    // My fallback method for inspecting the results of a step in the transformation pipeline is
    //  to inject this utility function that logs the value to the console and then passes it on.
    //  Unfortunately, Live Comment here just logs the 'tap' function
    tap, //?

    _.keyBy('title'),

    // I tried an identity function to see if Live Comments would work but again just logs the function
    x => x, //?

    _.mapValues(_.omit('title')),

    // Finally found an approach that displays the result of the function next to the code in the IDE.
    //  So that's promising. But it's too verbose for the purpose of trying to understand
    //  what is happening at steps in the pipeline. Not nearly as nice as the Live Comments. :)
    x => {
        console.log(x);
        return x
    }
)

module.exports = {
    chapterIndex
}
