import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { toggleTemplateStatusApi } from "../api/toggle-template-status.api";

export const useToggleTemplateStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (templateId: string) => toggleTemplateStatusApi(templateId),

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-templates"],
      });
    },
  });
};
