import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import type { Badge } from "@/types/api";

export function useBadges() {
  return useQuery<Badge[]>({
    queryKey: ["badges"],
    queryFn: apiClient.badges.getAll,
  });
}

export function useUpdateBadge() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Badge> }) =>
      apiClient.badges.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["badges"] });
    },
  });
}
