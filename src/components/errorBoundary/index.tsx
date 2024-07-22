/* eslint-disable no-console */
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Handle All errors
 *
 * @returns {React.FC} Error Boundary
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  /**
   * Handle All errors
   *
   * @param {Error} _ error
   * @returns {State} class State
   */
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  /**
   * Component Did Catch
   *
   * @param {Error} error error
   * @param {ErrorInfo} errorInfo error info
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Cause: ${error}.\nStackTrace: ${errorInfo.componentStack}`);
  }

  /**
   * Component Did Catch
   *
   * @returns {ReactNode} React Node
   */
  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
