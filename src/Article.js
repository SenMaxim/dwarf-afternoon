import React from 'react'
import ArticleTitle from './ArticleTitle'
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks'

class Article extends React.Component {
    render() {
        return (
            <div className="large-8 medium-12 columns article">
                <ArticleTitle />
                <ArticleBody />
                <ArticleLinks />
            </div>
        )
    }
}

export default Article