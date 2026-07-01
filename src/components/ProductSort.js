import React from "react";
import { MenuItem } from "@mui/material";
import { FSelect } from "./form";

function ProductSort() {
  return (
    <FSelect
      name="sortBy"
      label="Sort By"
      size="small"
      sx={{ width: 300 }}
    >
      <MenuItem value="featured">Featured</MenuItem>
      <MenuItem value="newest">Newest</MenuItem>
      <MenuItem value="priceDesc">Price: High-Low</MenuItem>
      <MenuItem value="priceAsc">Price: Low-High</MenuItem>
    </FSelect>
  );
}

export default ProductSort;