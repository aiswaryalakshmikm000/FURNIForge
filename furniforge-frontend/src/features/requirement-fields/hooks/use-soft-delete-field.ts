import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { FieldCommandResponseDTO } from "../types/field-command.type";
import type { ApiResponse } from "../../../types/api/api-response.type";
import { softDeleteFieldApi } from "../api/soft-delete-field.api";

export const useSoftDeleteField = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ fieldId }: { fieldId: string }) => softDeleteFieldApi(fieldId),

    onSuccess: (response: ApiResponse<FieldCommandResponseDTO>) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-fields"],
      });
    },
  });
};