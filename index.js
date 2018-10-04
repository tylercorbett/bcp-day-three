var countTo = prompt('How high should we count?');

var sure = confirm('Are you sure you want to count to ' + countTo + '?');

for(var i = 0; i <= countTo; i++) {
    if (i % 2 === 0) {
        console.log('The current number is', i);
    }
}