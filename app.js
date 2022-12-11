// const fibonacci = (n) =>{
//     let arr = [0,1];
//     for(let i =0; i < n -2  ; i++){
//         arr.push(arr[i]+arr[i+1]);
//     }
//     return arr;
// }

// const fibonacci = (n) =>{
//     let arr = [0,1];
//     for(let i =2; i < n  ; i++){
//         arr[i] = arr[i-1] + arr[i-2];
//     }
//     return arr;
// }

// const factorial = (n) =>{
//     let fact = 1;
//    for(let i = n ; i >1 ; i--){
//     fact *= i;
//    }
//    return fact;
// }

// Frequency Array

// const a = [1, 2, 3, 6, 1, 7];

// const frequency = (a) => {
//   const freq = {};
//   for (let i = 0; i < a.length; i++) {
//     freq[a[i]] ? freq[a[i]]++ : (freq[a[i]] = 1);
//   }
//   return freq;
// };

// console.log(frequency(a));

// Prefix Sum

// const a = [1, 2, 3, 4, 5];

// const prefixSum = (a) => {
//   const pre = [];
//   pre[0] = a[0];
//   for (let i = 1; i < a.length; i++) {
//     pre[i] = pre[i - 1] + a[i];
//   }
//   return pre;
// };

// console.log(prefixSum(a));

// PrefixFives

// occurence in a certain interval

// const a = [1, 5, 3, 4, 5, 5, 6, 5];

// const prefixFives = (a) => {
//   const pre = [];
//   a[0] === 5 ? (pre[0] = 1) : (pre[0] = 0);
//   for (let i = 1; i < a.length; i++) {
//     a[i] === 5 ? (pre[i] = pre[i - 1] + 1) : (pre[i] = pre[i - 1]);
//   }
//   return pre;
// };

// console.log(prefixFives(a)[5]);

// occurence in all the array
// const a = [1, 5, 3, 4, 5, 5, 6, 5];

// const fiveOccurence = (a) => {
//   const occ = {};
//   for (let i = 0; i < a.length; i++) {
//     occ[a[i]] ? occ[a[i]]++ : (occ[a[i]] = 1);
//   }
//   return occ;
// };

// console.log(fiveOccurence(a)[5]);

// Partial Sum

// const a = [0, 0, 0, 0, 0, 0];

// const partialSum = (a, first, last, val) => {
//   a[first] = val;
//   a[last + 1] = -val;
//   for (let i = 1; i < a.length; i++) {
//     a[i] += a[i - 1];
//   }
//   return a;
// };

// console.log(partialSum(a, 2, 4, -5));

// const accounts = [
//   [2, 8, 7],
//   [7, 1, 3],
//   [1, 9, 5],
// ];

// const prefixSum = (a) => {
//   let sum = 0;
//   a.forEach((el) => (sum += el));
//   return sum;
// };

// const busyStudent = function (accounts) {
//   let max = 0;
//   for (let i = 0; i < accounts.length; i++) {
//     accounts[i] = prefixSum(accounts[i]);
//     accounts[i] > max ? (max = accounts[i]) : max;
//   }
//   return max;
// };

// console.log(busyStudent(accounts));

// const nums = [1],
//   k = 1;

// const topKFrequent = function (nums, k) {
//   const freq = {};
//   for (let i = 0; i < nums.length; i++) {
//     freq[nums[i]] ? freq[nums[i]]++ : (freq[nums[i]] = 1);
//   }
//   const sortable = [];
//   for (let el in freq) {
//     sortable.push([el, freq[el]]);
//   }
//   sortable.sort((a, b) => {
//     return b[1] - a[1];
//   });
//   const res = [];
//   for (let i = 0; i < k; i++) {
//     res.push(sortable[i][0]);
//   }
//   return res;
// };

// // console.log(topKFrequent(nums, k));

// const grid = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
//   k = 1;

// const shiftGrid = (grid, k) => {
//   let res = [];
//   const lastColumn = [];
//   for (let i = 0; i < 3; i++) {
//     lastColumn.push(grid[i][2]);
//   }
//   console.log(lastColumn);
//   for (let i = 0; i < 3; i++) {
//     grid[i][2] = grid[i][1];
//   }
//   for (let j = 0; j < 3; j++) {
//     grid[j][1] = grid[j][0];
//   }
//   // const temp = lastColumn[2];
//   // lastColumn[2] = lastColumn[0];
//   // lastColumn[0] = temp;
//   res = [lastColumn, grid];

//   return res;
// };

// console.log(shiftGrid(grid, k));

// const nums = [1, -2, -3];
// let count = 0;
// let k = 1;

// const findPre = (k, nums) => {
//   const pre = [];
//   pre[0] = k + nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     pre[i] = pre[i - 1] + nums[i];
//   }
//   for (let i = 0; i < pre.length; i++) {
//     const element = pre[i];
//     if (element < 1) {
//       findRes(k + 1, nums);
//       break;
//     }
//   }
//   return k;
// };

// const findRes = (k, nums) => {
//   findPre(k, nums);
//   count++;
//   return count;
// };

// console.log(findRes(k, nums));

// const nums = [1, -2, -3];

// var minStartValue = function (nums) {
//   let min;
//   const pre = [];
//   pre[0] = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     pre[i] = pre[i - 1] + nums[i];
//   }
//   min = Math.min(...pre);
//   return min < 1 ? 1 - min : 1;
// };

// console.log(minStartValue(nums));

// const points = [
//   [3, 2],
//   [-2, 2],
// ];

// const minTimeToVisitAllPoints = (points) => {
//   let sum = 0;
//   for (let i = 0; i < points.length - 1; i++) {
//     sum += Math.max(
//       Math.abs(points[i][0] - points[i + 1][0]),
//       Math.abs(points[i][1] - points[i + 1][1])
//     );
//   }
//   return sum;
// };

// console.log(minTimeToVisitAllPoints(points));

// const arr = [1, 0, 2, 3, 0, 4, 5, 0];

// const duplicateZeros = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 0, 0);
//       i++;
//       arr.pop();
//     }
//   }
// };

// console.log(duplicateZeros(arr));

// const arr = [10, 11, 12];

// const sumOddLengthSubarrays = (arr) => {
//   let sum = 0;
//   const n = arr.length;
//   for (let i = 1; i <= n; i += 2) {
//     for (let j = 0; j < i; j++) {
//       arr.slice(j, j + (n + 1 - i)).forEach((el) => {
//         sum += el;
//       });
//     }
//   }
//   return sum;
// };

// console.log(sumOddLengthSubarrays(arr));

// const gain = [-4, -3, -2, -1, 4, 3, 2];

// const largestAltitude = (gain) => {
//   gain.unshift(0);
//   let pre = [];
//   const n = gain.length;
//   pre[0] = gain[0];
//   for (let i = 1; i < n; i++) {
//     pre[i] = pre[i - 1] + gain[i];
//   }
//   return Math.max(...pre);
// };

// console.log(largestAltitude(gain));

// const nums = [0];

// const moveZeros = (nums) => {
//   const n = nums.length;
//   const freq = {};
//   for (let i = 0; i < nums.length; i++) {
//     freq[nums[i]] ? freq[nums[i]]++ : (freq[nums[i]] = 1);
//   }
//   for (let j = 0; j < freq[0]; j++) {
//     for (let i = 0; i < n - 1; i++) {
//       if (nums[i] === 0 && nums[i + 1] !== 0) {
//         nums[i] = nums[i + 1];
//         nums[i + 1] = 0;
//       }
//     }
//   }
//   return nums;
// };

// console.log(moveZeros(nums));

// const nums = [0, 0, 1];

// const moveZeros = (nums) => {
//   const n = nums.length;
//   for (let i = n - 1; i >= 0; i--) {
//     if (nums[i] === 0) {
//       nums.push(0);
//       nums.splice(i, 1);
//     }
//   }
//   return nums;
// };

// console.log(moveZeros(nums));

// let s = "ab##abc",
//   t = "abc";

// var backspaceCompare = function (s, t) {
//   let newS = [];
//   let newT = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== "#") {
//       newS.push(s[i]);
//     } else {
//       newS.pop();
//     }
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (t[i] !== "#") {
//       newT.push(t[i]);
//     } else {
//       newT.pop();
//     }
//   }
//   return newS.join("") === newT.join("");
// };
// const backspaceCompare = (s, t) => {
//   return getFinalStr(s) === getFinalStr(t);
// };

// const getFinalStr = (str) => {
//   let newStr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "#") {
//       newStr.push(str[i]);
//     } else {
//       newStr.pop();
//     }
//   }
//   return newStr.join("");
// };

// console.log(backspaceCompare(s, t));

// const s = "{(})";

// const obj = {
//   "(": ")",
//   "[": "]",
//   "{": "}",
// };

// const isValid = (s) => {
//   let stack = [];
//   let openning = Array.from(Object.keys(obj));
//   for (let i = 0; i < s.length; i++) {
//     if (openning.includes(s[i])) {
//       stack.push(s[i]);
//     } else {
//       let lastIn = stack[stack.length - 1];
//       if (s[i] === obj[lastIn]) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return !stack.length ? true : false;
// };

// console.log(isValid(s));

// const s = "azxxzy";

// const removeDuplicates = (s) => {
//   let stack = [];
//   let n = s.length;
//   stack[0] = s[0];
//   for (let i = 1; i < n; i++) {
//     if (s[i] === stack[stack.length - 1]) {
//       stack.pop();
//     } else {
//       stack.push(s[i]);
//     }
//   }
//   return stack.join("");
// };

// console.log(removeDuplicates(s));

// const s = "(()())(())";

// const removeOuterParentheses = (s) => {
//   let res = "";
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     const element = s[i];
//     if (element === "(") {
//       if (stack.length) {
//         res += element;
//       }
//       stack.push(element);
//     } else {
//       stack.pop();
//       if (stack.length) {
//         res += element;
//       }
//     }
//   }
//   return res;
// };

// console.log(removeOuterParentheses(s));

// const ops = ["1", "C"];

// const calPoints = (ops) => {
//     let stack = [];
//     for (let i = 0; i < ops.length; i++) {
//       if (!isNaN(parseInt(ops[i]))) stack.push(parseInt(ops[i]));
//       if (ops[i] === "C") stack.pop();
//       if (ops[i] === "D") stack.push(2 * stack[stack.length - 1]);
//       if (ops[i] === "+")
//         stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
//     }
//     return stack.reduce((total, num) => total + num, 0);
//   };

// console.log(calPoints(ops));

// const students = [1, 1, 0, 0],
//   sandwiches = [0, 1, 0, 1];

// const countStudents = (students, sandwiches) => {
//   let round = 0;

//   while (true) {
//     if (students.length === 0 || students.length === round) break;

//     let top = sandwiches[0];
//     let nxtStd = students[0];
//     if (nxtStd === top) {
//       sandwiches.shift();
//       students.shift();
//       round = 0;
//     } else {
//       students.push(students.shift());
//       round++;
//     }
//   }

//   return students.length;
// };

// console.log(countStudents(students, sandwiches));

// const tickets = [2, 3, 2],
//   k = 2;
// // 60 25 0 0 46 53 63 0

// const timeRequiredToBuy = (tickets, k) => {
//   let count = 0;
//   while (tickets[k] !== 0) {
//     for (let i = 0; i < tickets.length; i++) {
//       if (tickets[i] !== 0) {
//         tickets[i]--;
//         count++;
//       }
//       if (tickets[k] === 0) break;
//     }
//   }
//   return count;
// };

// console.log(timeRequiredToBuy(tickets, k));

// const s = "aabb";

// const firstUniqChar = (s) => {
//   const freq = {};
//   for (let i = 0; i < s.length; i++) {
//     freq[s[i]] ? freq[s[i]]++ : (freq[s[i]] = 1);
//   }
//   const key = Object.keys(freq).find((key) => {
//     return freq[key] === 1;
//   });
//   return s.indexOf(key);
// };

// console.log(firstUniqChar(s));

// class Node {
//   constructor(val, next) {
//     this.val = val;
//     this.next = next;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }
//   traverse() {
//     let current = this.head;
//     while (current) {
//       console.log(current);
//       current = current.next;
//     }
//   }
//   pop() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if (!this.length) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
// }

// const list = new SinglyLinkedList();
// list.push(5);
// list.push("amr");
// list.push("###");

// const nums = [1, 3, 5, 6],
//   target = 0;

// const searchInsert = (nums, target) => {
//   let start = 0,
//     end = nums.length - 1,
//     mid;
//   while (end >= start) {
//     mid = Math.floor((start + end) / 2);
//     if (nums[mid] > target) end = mid - 1;
//     else if (nums[mid] < target) start = mid + 1;
//     else return mid;
//   }
//   return start;
// };

// console.log(searchInsert(nums, target));

// const nums = [1, 2, 5, 2, 3],
//   target = 2;

// const targetIndices = (nums, target) => {
//   const sorted = nums.sort((a, b) => a - b);
//   const indices = [];
//   sorted.forEach((el, idx) => {
//     if (el === target) indices.push(idx);
//   });
//   return indices;
// };

// console.log(targetIndices(nums, target));

// const num = 16;

// const isPerfectSquare = (num) => {
//   if (num == 1) return true;
//   let s = 0,
//     e = num,
//     mid;
//   while (s <= e) {
//     mid = Math.floor((e + s) / 2);
//     if (mid * mid == num) {
//       return true;
//     } else if (mid * mid < num) {
//       s = mid + 1;
//     } else {
//       e = mid - 1;
//     }
//   }
//   return false;
// };

// console.log(isPerfectSquare(num));

// const n = 6;

// const arrangeCoins = (n) => {
//   let rows = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n >= i) {
//       n -= i;
//       rows++;
//     } else break;
//   }
//   return rows;
// };

// console.log(arrangeCoins(n));

// const mat = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   ],
//   k = 17;

// const kWeakestRows = (mat, k) => {
//   for (let i = 0; i < mat.length; i++) {
//     let count = 0;
//     mat[i].forEach((el) => {
//       if (el === 1) count++;
//     });
//     mat[i] = count;
//   }
//   let indecies = [];
//   let temp = [...mat];
//   temp.sort((a, b) => a - b);
//   temp.forEach((el) => {
//     for (let i = 0; i < mat.length; i++) {
//       if (mat[i] === el) {
//         mat[i] = false;
//         indecies.push(i);
//       }
//     }
//   });
//   return indecies.slice(0, k);
// };

// console.log(kWeakestRows(mat, k));

// const nums = [8, 1, 2, 2, 3];

// const smallerNumbersThanCurrent = (nums) => {
//   const n = nums.length;
//   let res = [];
//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//       if (i === j) continue;
//       if (nums[i] > nums[j]) count++;
//     }
//     res.push(count);
//   }
//   return res;
// };

// console.log(smallerNumbersThanCurrent(nums));

// const users = [
//     { name: "john", age: 30 },
//     { name: "joseph", age: 35 },
//     { name: "steve", age: 40 },
//   ];

//   const filterSteve = (users) => {
//     const res = users.filter((obj) => obj.name !== "steve");
//     return res;
//   };

//   console.log(filterSteve(users));

// const s = "is2 sentence4 This1 a3";

// const sortSentence = (s) => {
//   let strings = [];
//   let arr = s.split(" ");
//   let sorted = arr.sort((a, b) => a[a.length - 1] - b[b.length - 1]);
//   for (let i = 0; i < sorted.length; i++) {
//     strings.push(sorted[i].substring(0, sorted[i].length - 1));
//   }
//   return strings.join(" ");
// };

// console.log(sortSentence(s));

// const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
//   arr2 = [2, 1, 4, 3, 9, 6];

// const relativeSortArray = (arr1, arr2) => {
//     arr2.forEach(element => {

//     });
// };

// console.log(relativeSortArray(arr1, arr2));

// const s = "asssm";

// const longestPalindrome = (s) => {
//   const freq = {};
//   let res = 0,
//     isOdd = false,
//     countOnes = 0;
//   for (let i = 0; i < s.length; i++) {
//     freq[s[i]] ? freq[s[i]]++ : (freq[s[i]] = 1);
//   }
//   Object.values(freq).forEach((val) => {
//     val % 2 === 0 ? (res += val) : (res += val - 1);
//     if (val % 2 !== 0 && val !== 1) isOdd = true;
//     if (val % 2 !== 0 && val === 1) countOnes++;
//   });
//   return !isOdd && countOnes === 0 ? res : res + 1;
// };

// console.log(longestPalindrome(s));

// const nums = [1, 2, 3, 1],
//   k = 3;

// var containsNearbyDuplicate = function (nums, k) {
//   const myMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (myMap.has(nums[i]) && Math.abs(myMap.get(nums[i]) - i) <= k) {
//       return true;
//     }
//     myMap.set(nums[i], i);
//   }
//   return false;
// };

// console.log(containsNearbyDuplicate(nums, k));

// const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
//   list2 = [
//     "Piatti",
//     "The Grill at Torrey Pines",
//     "Hungry Hunter Steakhouse",
//     "Shogun",
//   ];

// const list1 = ["happy", "sad", "good"],
//   list2 = ["sad", "happy", "good"];

// var findRestaurant = function (list1, list2) {
//   const myMap = new Map();
//   let sum;
//   let res = {};
//   let final = [];
//   let output = [];
//   for (let i = 0; i < list1.length; i++) {
//     myMap.set(list1[i], i);
//   }
//   for (let i = 0; i < list2.length; i++) {
//     if (myMap.has(list2[i])) {
//       sum = i + myMap.get(list2[i]);
//       res[list2[i]] = sum;
//     }
//   }
//   console.log(res);
//   const out = Object.entries(res).sort((a, b) => a[1] - b[1]);
//   let min = out[0][1];
//   out.forEach((arr) => {
//     if (arr[1] === min) final.push(arr);
//   });
//   final.forEach((fin) => output.push(fin[0]));
//   return output;
// };

// console.log(findRestaurant(list1, list2));

// var findRestaurant = function (list1, list2) {
//   const myMap = new Map();
//   let sum = 0;
//   let res = {};
//   let final = [];
//   let output = [];
//   for (let i = 0; i < list1.length; i++) {
//     myMap.set(list1[i], i);
//   }
//   for (let i = 0; i < list2.length; i++) {
//     if (myMap.has(list2[i])) {
//       sum = i + myMap.get(list2[i]);
//       res[list2[i]] = sum;
//     }
//   }
//   const out = Object.entries(res).sort((a, b) => a[1] - b[1]);
//   let min = out[0][1];
//   out.forEach((arr) => {
//     if (arr[1] === min) final.push(arr);
//   });
//   final.forEach((fin) => output.push(fin[0]));
//   return output;
// };

// const words = ["Hello", "Alaska", "Dad", "Peace"];

// const checkWord = (word) => {
//   const row1 = "qwertyuiop",
//     row2 = "asdfghjkl",
//     row3 = "zxcvbnm";
//   let countRow1 = 0,
//     countRow2 = 0,
//     countRow3 = 0;
//   word = word.toLowerCase();
//   const n = word.length;
//   for (let i = 0; i < n; i++) {
//     if (row1.includes(word[i])) countRow1++;
//     if (row2.includes(word[i])) countRow2++;
//     if (row3.includes(word[i])) countRow3++;
//   }
//   return countRow1 === n || countRow2 === n || countRow3 === n;
// };

// const findWords = (words) => {
//   return words.filter((word) => checkWord(word));
// };

// console.log(findWords(words));

// const nums = [1, 2, 3, 3];

// var repeatedNTimes = function (nums) {
//   const myMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (myMap.has(nums[i])) return nums[i];
//     else myMap.set(nums[i], i);
//   }
// };

// console.log(repeatedNTimes(nums));

// const n = 3;

// const digitsSum = (n) => {
//   return n
//     .toString()
//     .split("")
//     .reduce((total, digit) => total + +digit * +digit, 0);
// };

// const isHappy = (n) => {
//   let myMap = new Map();
//   while (!myMap.get(n)) {
//     myMap.set(n, true);
//     n = digitsSum(n);
//     if (n === 1) return true;
//   }
//   return false;
// };

// console.log(isHappy(n));

// const s = "ae",
//   t = "aea";

// const findTheDifference = (s, t) => {
//   const freq = {};
//   t.split("").forEach((el) => {
//     freq[el] ? freq[el]++ : (freq[el] = 1);
//   });
//   s.split("").forEach((el) => {
//     if (freq[el]) freq[el]--;
//   });
//   const res = Object.entries(freq).filter((entry) => entry[1] === 1);
//   return res[0][0];
// };

// console.log(findTheDifference(s, t));

// const s = "ae",
//   t = "aea";

// const findTheDifference = (s, t) => {
//   const str1 = s.split("").sort();
//   const str2 = t.split("").sort();
//   for (let i = 0; i < t.length; i++) {
//     if (str1[i] === str2[i]) {
//       continue;
//     } else {
//       return str2[i];
//     }
//   }
//   //   const freq = {};
//   //   t.split("").forEach((el) => {
//   //     freq[el] ? freq[el]++ : (freq[el] = 1);
//   //   });
//   //   s.split("").forEach((el) => {
//   //     if (freq[el]) freq[el]--;
//   //   });
//   //   const res = Object.entries(freq).filter((entry) => entry[1] === 1);
//   //   return res[0][0];
// };

// console.log(findTheDifference(s, t));

// const s = "MCMXCIV";

// const romanToInt = (s) => {
//   const obj = {
//     V: 5,
//     L: 50,
//     D: 500,
//     M: 1000,
//   };
//   let res = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "I") {
//       if (s[i + 1] === "V") {
//         res += 4;
//         i++;
//         continue;
//       }
//       if (s[i + 1] === "X") {
//         res += 9;
//         i++;
//         continue;
//       }
//       res += 1;
//     }
//     if (s[i] === "X") {
//       if (s[i + 1] === "L") {
//         res += 40;
//         i++;
//         continue;
//       }
//       if (s[i + 1] === "C") {
//         res += 90;
//         i++;
//         continue;
//       }
//       res += 10;
//     }
//     if (s[i] === "C") {
//       if (s[i + 1] === "D") {
//         res += 400;
//         i++;
//         continue;
//       }
//       if (s[i + 1] === "M") {
//         res += 900;
//         i++;
//         continue;
//       }
//       res += 100;
//     }
//     if (obj[s[i]]) res += obj[s[i]];
//   }
//   return res;
// };

// console.log(romanToInt(s));

// const ransomNote = "aa",
//   magazine = "aab";

// const canConstruct = (ransomNote, magazine) => {
//   const freq = {};
//   for (let i = 0; i < magazine.length; i++) {
//     let el = magazine[i];
//     freq[el] ? freq[el]++ : (freq[el] = 1);
//   }
//   const temp = ransomNote.split("");
//   for (let i = 0; i < temp.length; i++) {
//     let el = temp[i];
//     if (freq[el] > 0) {
//       freq[el]--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(canConstruct(ransomNote, magazine));

// const left = 47,
//   right = 85;

// const checkNumber = (num, res) => {
//   let flag = true;
//   num
//     .toString()
//     .split("")
//     .forEach((element) => {
//       if (num % +element !== 0) flag = false;
//     });
//   if (flag) res.push(num);
// };

// const selfDividingNumbers = (left, right) => {
//   const res = [];
//   while (left <= right) {
//     checkNumber(left, res);
//     left++;
//   }
//   return res;
// };

// console.log(selfDividingNumbers(left, right));

// const x = 121;

// const isPalindrome = (x) => {
//   let left = x;
//   let right = x.toString().split("").reverse().join("");
//   return left == right;
// };

// console.log(isPalindrome(x));

// const digits = [9, 9];

// // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

// const plusOne = (digits) => {
//   let n = digits.length;
//   while (n--) {
//     if (digits[n] === 9) {
//       digits[n] = 0;
//     } else {
//       digits[n] += 1;
//       break;
//     }
//   }
//   if (digits[0] === 0) digits.unshift(1);
//   return digits;
// };

// console.log(plusOne(digits));

// const n = 16;

// var isPowerOfTwo = function (n) {
//   return Number.isInteger(Math.log2(n));
// };

// console.log(isPowerOfTwo(n));

// const n = 5;

// var fib = function (n) {
//   let res = [0, 1];
//   for (let i = 2; i <= n + 1; i++) {
//     res[i] = res[i - 1] + res[i - 2];
//   }
//   return res[n + 1];
// };

// console.log(fib(n));

// const n = 10,
//   k = 10;

// const sumBase = (n, k) => {
//   let sum = 0;
//   while (n !== 0) {
//     sum += n % k;
//     n = Math.floor(n / k);
//   }
//   return sum;
// };

// console.log(sumBase(n, k));
