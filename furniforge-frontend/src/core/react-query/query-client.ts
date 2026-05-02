import { QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { normalizeError } from "../error/error-handler";

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: unknown) => {
        const appError = normalizeError(error);
        toast.error(appError.message);
      },
    },
  },
});