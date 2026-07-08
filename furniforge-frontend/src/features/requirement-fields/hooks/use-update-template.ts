import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UpdateTemplateDTO } from "../types/template-command.type";
import { updateTemplateApi } from "../api/update-template.api";
import { toast } from "sonner";

export const useUpdateTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ templateId, payload }: { templateId: string, payload: UpdateTemplateDTO }) => updateTemplateApi( templateId, payload ),

    onSuccess: (response) => {

      toast.success(response.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-templates"],
      });
    },
  });
};