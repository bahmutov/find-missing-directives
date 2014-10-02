# find-missing-directives

> Finds empty angular directives in HTML body

Custom Angular directives that were misspelled or not included silently get ignored.
They remain empty nodes in the HTML body, causing lots of pain to find and fix.
This script makes it simple to discover any custom tags that have no inner content

    // index.html
    <body>
        <p>
            Below is angular directive without actual module
            <my-tag></my-tag>
        </p>
    // your angular stuff
    <script src="find-missing-directives.js"></script>
    <script>
        var empty = findMissingDirectives();
        if (empty.length) {
            throw new Error('Found missing directives ' + empty.join(','));
        }
        // throws error 'Found missing directives my-tag'
    </script>
    </body

## Limitations

* Does not work with transcluded directives (because they do include other content)
* Does not work with attribute directives

## Details

install `bower install find-missing-directives`

related utility [stop-angular-overrides](https://github.com/bahmutov/stop-angular-overrides)

## Small print

Author: Gleb Bahmutov &copy; 2014
[@bahmutov](https://twitter.com/bahmutov) [glebbahmutov.com](http://glebbahmutov.com)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet / open issue on Github
