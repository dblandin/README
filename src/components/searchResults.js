import React from "react"
import Highlighter from "react-highlight-words"

const SearchResults = ({ query, results }) => (
  <section aria-label="Search results for all posts">
    {!!results.length && query && (
      <h2 className="search-results-count" id="search-results-count" aria-live="assertive">
        Found {results.length} posts on "{query}"
      </h2>
    )}
    {!!results.length && (
      <ol className="search-results-list">
        {results.map(({ title, url, description, content }, index) => (
          <li key={index}>
            <h3 className="search-results-list__heading">
              <a href={url} className="search-results-list__link">
                <Highlighter searchWords={[query]} autoEscape={true} textToHighlight={title} />
              </a>
            </h3>
            {description && (
              <p>
                <Highlighter searchWords={[query]} autoEscape={true} textToHighlight={description} />
              </p>
            )}
            {content && (
              <p>
                <Highlighter searchWords={[query]} autoEscape={true} textToHighlight={content} />
              </p>
            )}
          </li>
        ))}
      </ol>
    )}
  </section>
)

export default SearchResults