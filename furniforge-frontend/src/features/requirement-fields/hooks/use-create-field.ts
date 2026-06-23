import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFieldApi } from "../api/create-field.api";
import { toast } from "sonner";

export const useCreateField = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createFieldApi,

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-fields"],
      });
    },
  });
};