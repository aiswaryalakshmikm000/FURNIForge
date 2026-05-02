import { Button } from "../../../shared/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-xl font-bold">Page crashed</h1>

        <p className="text-muted-foreground mt-2">
          Something went wrong while loading this page
        </p>

        <Button
          onClick={() => window.location.reload()} variant="link"
          className="mt-4"
        >
          Reload Page
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;