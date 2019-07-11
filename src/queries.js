import Vue from 'vue'
import axios from 'axios'

let queries = {
  dashboard: `{
    organization(login: $loginName) {
      name
      url
    }
  }`,
  myRepo: `query getMyRepo($number_of_repos:Int!) {
    viewer {
      name
       repositories(last: $number_of_repos) {
         nodes {
           name
         }
       }
     }
  }`
}

Vue.prototype.$query = function (queryName, queryVariables) {
  let options = {
    url: 'https://api.github.com/graphql',
    method: 'POST',
    data: {
      query: queries[queryName]
    }
  }

  if (queryVariables) {
    options.data.variables = queryVariables
  }

  // Api token
  options.headers = {
    Authorization: `bearer ${process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  }

  return axios(options)
}
