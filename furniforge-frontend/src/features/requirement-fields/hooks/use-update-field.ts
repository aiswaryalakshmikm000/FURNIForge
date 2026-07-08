import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { FieldCommandResponseDTO, UpdateFieldDTO } from "../types/field-command.type";
import { updateFieldApi } from "../api/update-field.api";

export const useUpdateField = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ fieldId, payload }: { fieldId: string, payload: UpdateFieldDTO; }) => updateFieldApi( fieldId, payload ),

    onSuccess: (response: ApiResponse<FieldCommandResponseDTO>) => {

      toast.success(response.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-fields"],
      });
    },
  });
};