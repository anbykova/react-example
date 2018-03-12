import gql from 'graphql-tag'
import client from '../../apollo'

export const createArticle = gql`
  mutation ($username:String! $title:String! $description:String) {
   createArticle (username:$username title:$title description:$description) {
      id
    }
  }
`

export default createArticle;