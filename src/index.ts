import * as _ from 'lodash';

// example for using lodash methods
/*
  function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
*/


/*
dummy function to test whether TypeScript is 
compiled ok. Test by running the compiled bundle via node.
*/

const greeting = (person: string) => {

    console.log('Hello ' + person);

};

greeting('Dave');
