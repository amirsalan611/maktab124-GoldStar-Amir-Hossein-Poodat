"use client";
import { HeaderLocalization } from "@/constants/Localizations/Localization";
import { BASE_URL } from "@/services/api/api";
import axios from "axios";
import { RiSearch2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { StyledWrapper } from "./SearchInput.styles";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const router = useRouter();

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: async () => {
      if (searchTerm.trim() === "") return [];
      const response = await axios.get(
        `${BASE_URL}/api/products?discount[gt]=0&name=${searchTerm}`
      );
      return response.data.data.products;
    },
    enabled: searchTerm.trim().length > 0,
  });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isLoading && searchTerm.trim()) {
      timeout = setTimeout(() => {
        setShowResults(true);
      }, 1000);
    } else {
      setShowResults(false);
    }

    return () => clearTimeout(timeout);
  }, [isLoading, searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowResults(false);
  };

  return (
    <StyledWrapper>
      <div className="group hover:ring-1 transition-all duration-300 ring-[3px] ring-[#B2A5FF] rounded-[10px]">
        <RiSearch2Line className="icon" />
        <input
          className="input outline-none bg-white"
          type="text"
          placeholder={HeaderLocalization.search}
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>

      {searchTerm.trim() && (
        <div className="flex flex-col items-center gap-2 absolute bg-purple-50 w-1/3 border border-[#94a3b8] rounded-lg top-22 left-1/2 -translate-x-1/2 py-5 max-h-[300px] overflow-y-auto hide-scrollbar">
          {isLoading || !showResults ? (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
          ) : searchResults?.length > 0 ? (
            searchResults.map((item: any) => (
              <div
                key={item._id}
                className="border-b border-[#94a3b8] w-2/3 text-center py-3 hover:bg-purple-100 cursor-pointer rounded-2xl shadow-2xl"
                onClick={() => {
                  router.push(`/singleProduct/${item._id}`);
                  setSearchTerm("");
                }}
              >
                {item.name}
              </div>
            ))
          ) : (
            <div className="text-gray-500">{HeaderLocalization.noResults}</div>
          )}
        </div>
      )}
    </StyledWrapper>
  );
};

export default SearchInput;
