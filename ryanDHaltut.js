/*setTimeout(function() {
console.log('worlld')
}, 2000);

console.log('hello');
*/


var outerScopeVar = 'l';

function helloCatAsync() {
    setTimeout(function() {
        outerScopeVar = 'Nya';
    }, Math.random() * 2000);
}


helloCatAsync();
console.log('hmm ' + outerScopeVar);
