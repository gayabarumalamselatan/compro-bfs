import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface MarqueeItem {
  src: string;
  title: string;
  desc: string;
}

const fetchFeaturedMedia = async (id: number): Promise<MarqueeItem[]> => {
  const { data } = await axios.get(`/api/featured-products/media?id=${id}`);
  return data.data;
};

export const useProdukUnggulan = () => {
  const marquee1Query = useQuery({
    queryKey: ["featured-products-media", 2],
    queryFn: () => fetchFeaturedMedia(2),
  });

  const marquee2Query = useQuery({
    queryKey: ["featured-products-media", 3],
    queryFn: () => fetchFeaturedMedia(3),
  });

  return {
    marquee1: marquee1Query.data ?? [],
    marquee2: marquee2Query.data ?? [],
    isLoading: marquee1Query.isLoading || marquee2Query.isLoading,
    isError: marquee1Query.isError || marquee2Query.isError,
  };
};
