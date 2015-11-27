import angular from 'angular'
import md5 from 'md5'

const user = angular.module('user', [])

  .component('user', {
    bindings: {
      email: '=',
      remove: '&'
    },

    template: `
    <div class="user">
      <span>
        <img ng-src="http://www.gravatar.com/avatar/{{ user.hash() }}">
      </span>
      <label>{{ user.email }}</label>
      <button type="button" ng-click="user.remove()">&times;</button>
    </div>
  `,

    controller: function ($http) {
      $http.get('/style.css')
      this.hash = function () {
        return md5(this.email)
      }
    }

  })

export default user
