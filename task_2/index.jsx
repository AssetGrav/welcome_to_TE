import { Fragment, memo } from 'react';

const MainComponent = () => {
    const makeLog = () => console.log('hi from MainComponent'); // function to make logs from MainComponent

    return (
        <Fragment>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from ChildComponent</button>
), (prevProps, nextProps) => {
    return prevProps !== nextProps;
  } );

// https://codesandbox.io/s/task-2-forked-3r2li0
