# theyssamy-ajax

A small one-page website using AJAX and jekyll.

## Content

Content is grouped in collections. Each collection is represented by a folder containing the article in markdown format. With the magic of jekyll these articles are transformed to html files available at domain-name.com/collection/article-title.html.

## Website structure

As this is a one-page website the generated html files are not intended to be seen by the user. There content is loaded on the main page which looks like so:


    +----------------------------------+
    |                                  |
    |                                  |
    |           Page header            |
    |                                  |
    |                                  |
    +-+------------------------------+-+
    | |  Last article of the first   | |
    | |  collection. The arrows can  | |
    |<|  used to navigate through    |>|
    | |  all articles of this        | |
    | |  collection.                 | |
    +-+------------------------------+-+
    | |  Last article of the second  | |
    | |  collection.                 | |
    |<|                              |>|
    | |                              | |
    | |                              | |
    +-+------------------------------+-+
    |                                  |
    |              Footer              |
    |                                  |
    +----------------------------------+


The ajax is needed to keep the user on the main page but doesn't affect crawling, since the arrows are links.
