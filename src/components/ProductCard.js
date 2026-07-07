// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea, Stack, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { fCurrency } from "../utils";

// function ProductCard({ product }) {
//   const navigate = useNavigate();

//   return (
//     <Card
//       sx={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         borderRadius: 2,
//         minHeight: 380,
//         alignSelf: "stretch",
//       }}
//       onClick={() => navigate(`/product/${product.id}`)}
//     >
//       <CardActionArea
//         sx={{
//           flexGrow: 1,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "stretch",
//           height: "100%",
//           justifyContent: "space-between",
//         }}
//       >
//         <CardMedia
//           component="img"
//           image={product.cover}
//           alt={product.name}
//           sx={{
//             height: 220,
//             width: "100%",
//             objectFit: "cover",
//             flexShrink: 0,
//           }}
//         />

//         <CardContent
//           sx={{
//             flex: 1,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//              minHeight: 140,
//           }}
//         >
//           <Typography
//             variant="body1"
//             fontWeight={600}
//             sx={{
//               minHeight: 48,
//               overflow: "hidden",
//               display: "-webkit-box",
//               WebkitLineClamp: 2,
//               WebkitBoxOrient: "vertical",
//             }}
//           >
//             {product.name}
//           </Typography>

//           <Stack
//             direction="row"
//             justifyContent="flex-end"
//             alignItems="center"
//             spacing={1}
//             mt="auto"
//           >
//             {product.priceSale && (
//               <Typography
//                 sx={{
//                   textDecoration: "line-through",
//                   color: "text.disabled",
//                 }}
//               >
//                 {fCurrency(product.priceSale)}
//               </Typography>
//             )}

//             <Typography variant="h6" fontWeight="bold">
//               {fCurrency(product.price)}
//             </Typography>
//           </Stack>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

// export default ProductCard;
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fCurrency } from "../utils";

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <Card  onClick={() => navigate(`/product/${product.id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.cover}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div" noWrap>
            {product.name}
          </Typography>
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            justifyContent="flex-end"
          >
            {product.priceSale && (
              <Typography
                component="span"
                sx={{ color: "text.disabled", textDecoration: "line-through" }}
              >
                {fCurrency(product.priceSale)}
              </Typography>
            )}
            <Typography variant="subtitle1">
              {fCurrency(product.price)}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;