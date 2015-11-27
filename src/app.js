import angular from 'angular'
import userList from './components/userList'

angular.module('app', [
  userList.name // user-list component
])

  .component('app', {
    template: `<user-list></user-list>`
  })

angular.bootstrap(document, ['app'])
