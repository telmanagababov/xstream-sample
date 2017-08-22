import xs from 'xstream';

const counterElement = document.querySelector('#counter');

const renderCounter = content => {
    counterElement.innerHTML = content;
}

const stream = xs.periodic(250)
    .filter(x => x % 2 === 0)
    .map(x => x * x)
    .endWhen(xs.periodic(3000).take(1));

stream.addListener({
    next: x => renderCounter('count: ' + x),
    error: er => renderCounter('error: ', er),
    complete: _ => renderCounter('complete')
})