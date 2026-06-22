import { useMutation, useQueryClient } from "@tanstack/react-query";
import { softDeleteTemplateApi } from "../api/soft-delete-template.api";
import { toast } from "sonner";

export const useSoftDeleteTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ templateId }: {
      templateId: string;
    }) => softDeleteTemplateApi( templateId ),

    onSuccess: (response) => {

      toast.success(response.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-templates"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-deliverables"],
      });
    },
  });
};