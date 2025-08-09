import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.warn("getDerivedStateFromError:", error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error capturado por ErrorBoundary", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Algo salió mal.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
