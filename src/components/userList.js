import angular from 'angular'

import user from './user'

const userList = angular.module('userList', [
  user.name
])

  .component('userList', {
    template: `
    <div class="users">
      <user remove="userList.remove($index)" email="user.email" ng-repeat="user in userList.users track by $index"></user>
    </div>
    <form name="userList.userAddForm" ng-submit="userList.add()" novalidate>
      <input ng-model="userList.email" type="email" required placeholder="Add user email">
      <button type="submit">Add</button>
    </form>
    {{ users.email }}
  `,

    controller: function () {
      this.users = [
        { email: 'tmoyse@gmail.com' },
        { email: 'naholyr@gmail.com' },
        { email: 'delapouite@gmail.com' }
      ]

      this.add = function () {
        if (this.userAddForm.$invalid) return
        this.users.push({
          email: this.email
        })
      }

      this.remove = function (idx) {
        this.users.splice(idx, 1)
      }
    }
  })

export default userList
