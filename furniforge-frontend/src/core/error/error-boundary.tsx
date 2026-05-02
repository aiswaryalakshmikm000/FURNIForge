import React from "react";
import { Button } from "../../shared/components/ui/button";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Error caught by boundary:", error);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="text-center max-w-md">
            <h1 className="text-xl font-bold text-foreground">
              Something went wrong
            </h1>

            <p className="text-muted-foreground mt-2">
              Please try refreshing the page or come back later.
            </p>

            {/* 🔁 Reload Button */}
            <Button
              onClick={this.handleReload} variant="copper"
              className="mt-4 w-full"
            >
              Reload Page
            </Button>

            {/* ♻️ Reset Button (soft retry) */}
            <Button
              onClick={this.handleReset} variant="ghost"
              className="mt-4 w-full"
            >
              Try Again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}