import { Fragment, memo } from 'react';

const MainComponent = ({
    user = { name: 'unknown', age: null } // default value for `props.user`
}) => {
    return (
        <Fragment>
            <ChildComponent user={user} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    )
}, (prevProps, nextProps) => {
    return prevProps !== nextProps;
  });

//  https://codesandbox.io/s/task-3-forked-qowj3v
