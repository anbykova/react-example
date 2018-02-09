import gql from 'graphql-tag'
import client from '../../apollo'
import articleMainInformation from '../fragments/article';

const getNewArticles = gql`
    query {
        articles { 
            ...articleMainInformation
            author {
                id
                firstName
            }
        }
    }
    ${articleMainInformation}
`

export default getNewArticles;