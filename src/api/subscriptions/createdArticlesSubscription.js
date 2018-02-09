


import gql from 'graphql-tag'
import client from '../../apollo'
import articleMainInformation from '../fragments/article';

const createdArticles = gql`
    subscription {
        createdArticles {
            article {
                id
                title
            }
        }
    }
`

export default createdArticles;
