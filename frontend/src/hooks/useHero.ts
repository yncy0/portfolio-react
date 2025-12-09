import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import type { HeroTitle } from "@/types/api";

export function useHero() {
  return useQuery<HeroTitle[]>({
    queryKey: ["hero"],
    queryFn: apiClient.hero.getAll,
  });
}

export function useUpdateHero() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<HeroTitle> }) =>
      apiClient.hero.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hero"] });
    },
  });
}
