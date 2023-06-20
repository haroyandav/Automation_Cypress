let hour = 5

// if between 6 and 12 print 'Good morning'
// if between 12 and 18 print 'Good afternoon'
// otherwise print 'Good Evening'

if(hour >= 6 && hour <= 12 ) {
    console.log('Good morning');
} else if (hour >= 12 && hour <= 18) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
}