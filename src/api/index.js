import getAllArticles from './queries/getAllArticlesQuery';
import getAllAuthors from './queries/getAllAuthorsQuery';
import createArticle from './mutations/createArticleMutation';
import createdArticles from './subscriptions/createdArticlesSubscription'

export const queries = {
  getAllArticles,
  getAllAuthors
}

export const mutations = {
  createArticle
}

export const subscriptions = {
  createdArticles
}
