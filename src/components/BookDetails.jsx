import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  Grid,
} from "@mui/material";
import Box from "@mui/material/Box";
import Flexbox from "./shared/Flexbox.tsx"
import Spacer from "./shared/Spacer.tsx";
import { UserContext } from "../context/UserContext";
import "./style.scss"

const BookDetails = () => {

  const { bookDetails } = useContext(UserContext)
  const bookData = bookDetails.bookDetails

  if(!bookDetails.showDetailsModal) return <></>
  return (
    <Card 
      className="modal" 
      sx={{ 
        display: "flex",
        maxWidth: "70%",
        width: "80%", 
        height: "80%",
        overflowY: "auto",
      }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md:6, lg: 12 }}>
        <Grid item xs={6} sm={6} md={6} sx={{width: "100%"}}>
          <CardMedia
            component="img"
            sx={{ maxWidth: "80%", maxHeight: "80%", padding: "8% 0 8% 8%" }}
            image={
              bookData?.imageUrl ||
              "https://d2drtqy2ezsot0.cloudfront.net/Book-1.jpg"
            }
            alt="Live from space album cover"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "85%", margin: "8% 0 8% 8%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h4" component="div" align="left">
              <b>{bookData?.title}</b>
            </Typography>
            <Typography
              align="left"
              variant="h5"
              color="#AB2680"
              component="div"
            >
              {bookData?.authors[0]}
            </Typography>
            <Spacer horizontal="40" />
            <Flexbox justifyContent="space-between" width="100%">
            <span><b>Páginas</b></span>
              <Typography
                align="left"
                variant="subtitle2"
                color="#999999"
                component="div"
              >
                {bookData?.pageCount} páginas
              </Typography>
            </Flexbox>
            <Flexbox justifyContent="space-between">
              <span><b>Editora</b></span>
              <Typography
                  align="left"
                  variant="subtitle2"
                  color="#999999"
                  component="div"
                >
                  {bookData?.publisher}
                </Typography>
            </Flexbox>
            <Flexbox justifyContent="space-between">
              <span><b>Publicação</b></span>
              <Typography
                  align="left"
                  variant="subtitle2"
                  color="#999999"
                  component="div"
                >
                  {bookData?.published}
                </Typography>
            </Flexbox>
            <Flexbox justifyContent="space-between">
              <span><b>Idioma</b></span>
              <Typography
                  align="left"
                  variant="subtitle2"
                  color="#999999"
                  component="div"
                >
                  {bookData?.language}
                </Typography>
            </Flexbox>
            <Flexbox justifyContent="space-between">
              <span><b>Título Original</b></span>
              <Typography
                  align="left"
                  variant="subtitle2"
                  color="#999999"
                  component="div"
                >
                  {bookData?.title}
                </Typography>
            </Flexbox>
            <Flexbox justifyContent="space-between">
              <span><b>ISBN-10</b></span>
              <Typography
                  align="left"
                  variant="subtitle2"
                  color="#999999"
                  component="div"
                >
                  {bookData?.isbn10}
                </Typography>
            </Flexbox>
            <Flexbox justifyContent="space-between">
              <span><b>ISBN-13</b></span>
              <Typography
                  align="left"
                  variant="subtitle2"
                  color="#999999"
                  component="div"
                >
                  {bookData?.isbn13}
                </Typography>
            </Flexbox>
            <Spacer horizontal="50" />
            <Typography align="left" variant="subtitle2" color="#333333" sx={{ textTransform: 'uppercase' }}>
              <b>Resenha da editora</b>
            </Typography>
            <Typography align="left" variant="caption" color="#999999">
              {bookData?.description}
            </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="next"></IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default BookDetails;
