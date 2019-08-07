// https://webpack.js.org/guides/dependency-management/#require-context
// https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js
// const requireComponent = require.context(
//   // Look for files in the current directory
//   '.',
//   // Do not look in subdirectories
//   false,
//   // Only include "_base-" prefixed .vue files
//   /_base-[\w-]+\.vue$/
// )

// https://webpack.js.org/guides/dependency-management/#require-context
const files = require.context(
    // Look for files in the current directory
    '.',
    // Look in subdirectories
    true,
    // Only include "_base-" prefixed .vue files
    // /_base-[\w-]+\.json$/
    /\.json$/
)

let features = []
files.keys().map(filename => {

    let $_feature_collection = files(filename)
    features = features.concat($_feature_collection.features)

})

const collection = { type: "FeatureCollection", features: features }

export default collection
