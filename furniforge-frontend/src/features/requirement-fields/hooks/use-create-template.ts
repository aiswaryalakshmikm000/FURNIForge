import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { createTemplateApi } from "../api/create-template.api";

export const useCreateTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTemplateApi,

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-templates"],
      });
    },
  });
};