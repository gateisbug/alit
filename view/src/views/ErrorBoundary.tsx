import React from 'react';

type ErrorBoundaryProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: any;
  showMessage?: boolean;
  children: React.ReactNode;
};

type StateType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info?: any;
};

export default class ErrorBoundary extends React.PureComponent<
  ErrorBoundaryProps,
  StateType
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (this.props.onError) this.props.onError(error, info);
    this.setState({ error, info });
  }

  render() {
    const { error } = this.state;
    if (error) {
      const firstLine = error.toString();

      return (
        <span>
          <strong>Unexpected error</strong>
          {firstLine ? `: ${firstLine}` : ''}
        </span>
      );
    }

    return this.props.children;
  }
}
