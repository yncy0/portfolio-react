import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import type { About } from "@/types/api";

export function useAbout() {
  return useQuery<About[]>({
    queryKey: ["about"],
    queryFn: apiClient.about.getAll,
  });
}

export function useUpdateAbout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<About> }) =>
      apiClient.about.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["about"] });
    },
  });
}
