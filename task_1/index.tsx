import { Component } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
    title?: string
}

// functional component
export const FunctionComponent = ({ user: { name, age }, title }: IProps) => {
  console.log(`${title} has been updated`);

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
};

// class component
export class ClassComponent extends Component<IProps> {
  render() {
    console.log(`${this.props.title} has been updated`);

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}

// ссылка https://codesandbox.io/s/task-1-forked-izym6v?file=/src/interface.ts:150-168
