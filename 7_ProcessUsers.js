//@ts-check
import { measurePerformance } from "./measurePerformance.js";

// Mock function to generate user data
function generateUsers(n) {
  const users = [];
  for (let i = 0; i < n; i++) {
    users.push({
      id: i + 1,
      name: `User ${i + 1}`,
      age: Math.floor(Math.random() * 60) + 18,
      isActive: Math.random() > 0.5,
      // Object method for checking if the user is active
      isActiveUser: function () {
        return this.isActive;
      },
      // Object method for getting user's age
      getUserAge: function () {
        return this.age;
      },
    });
  }
  return users;
}

// User Management System using object methods
class UserManager {
  constructor(users) {
    this.users = users;
  }

  filterActiveUsers() {
    return this.users.filter((user) => user.isActiveUser());
  }

  calculateAverageAge(users) {
    const totalAge = users.reduce((sum, user) => sum + user.getUserAge(), 0);
    return totalAge / users.length;
  }

  sortUsersByAge(users) {
    return users.sort((a, b) => a.getUserAge() - b.getUserAge());
  }
}

// Procedural approach for comparison
function processUsers(users) {
  const activeUsers = users.filter((user) => user.isActive);
  const sortedActiveUsers = activeUsers.sort((a, b) => a.age - b.age);
  const averageAge =
    sortedActiveUsers.reduce((sum, user) => sum + user.age, 0) /
    sortedActiveUsers.length;
  return { sortedActiveUsers, averageAge };
}

const users = generateUsers(1000); // Generate 1000 users

function doAll() {
  const userManager = new UserManager(users);
  const activeUsersOO = userManager.filterActiveUsers();
  const sortedActiveUsersOO = userManager.sortUsersByAge(activeUsersOO);
  const averageAgeOO = userManager.calculateAverageAge(sortedActiveUsersOO);
}

measurePerformance(doAll, "Object methods", users);
measurePerformance(processUsers, "Procedural", users);
