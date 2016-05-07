import * as React from "react";

// React.Component<P, S>
// P: props
// S: State
 abstract class View extends React.Component<{}, {}> {
  element: HTMLElement;
  constructor(props: any) {
    super(props);
  }
  abstract render(): JSX.Element;
  abstract destructor(): void;
}

export default View;