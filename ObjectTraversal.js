Let's look at two functions which allow us to iterate Objects:

Object.keys(obj);
Object.values(obj);
Object.keys(obj) returns an array with all the keys of obj.
Object.values(obj) returns an array with the values of all the keys of obj.

Taking an example:

const course = {
    name: 'Introduction to JavaScript',
    website: 'workat.tech',
    isPaid: true,
    cost: 999
};
const keys = Object.keys(course);
console.log(keys); // [ 'name', 'website', 'isPaid', 'cost' ]

const values = Object.values(course);
console.log(values); // [ 'Introduction to JavaScript', 'workat.tech', true, 999 ]
If we want to print all the key-value pairs in the form of key: value, we can do the following:

const keys = Object.keys(course);
for (key of keys) {
    console.log(key + ": " + course[key]);
}
