import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import type { Education } from "@/types/api";

export function useEducation() {
  return useQuery<Education[]>({
    queryKey: ["education"],
    queryFn: apiClient.education.getAll,
  });
}

export function useUpdateEducation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Education> }) =>
      apiClient.education.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["education"] });
    },
  });
}
