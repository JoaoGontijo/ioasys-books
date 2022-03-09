import React, { useContext } from "react";
import { Card, CardContent, CardActionArea, Typography, IconButton, CardMedia } from "@mui/material";
import Box from '@mui/material/Box';
import Spacer from "./shared/Spacer.tsx"
import getBookDetail from "../services/bookDetail"
import { UserContext } from "../context/UserContext";


const BookCard = (book) => {

  const { userDetails, setBookDetails, bookDetails } = useContext(UserContext)

  const bookDetail = (bookSelected) => {
    getBookDetail(bookSelected.id, userDetails.authorization).then((response) => {
        setBookDetails({ bookDetails: response.data, showDetailsModal: true })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Card sx={{ display: 'flex', maxWidth: '288px', width: '100%'}}>
      <CardActionArea onClick={() => bookDetail(book.book)}>
        <CardMedia
          component="img"
          sx={{ maxWidth: 122, maxHeight: 182, margin: '19px 0px 19px 19px' }}
          image={book.book.imageUrl || "https://d2drtqy2ezsot0.cloudfront.net/Book-3.jpg"}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="subtitle2" component="div" align="left">
              <b>{book.book?.title}</b>
            </Typography>
            <Typography align="left" variant="caption" color="#AB2680" component="div">
              {book.book?.authors[0]}
            </Typography>
            <Spacer horizontal="40"/>
            <Typography align="left" variant="caption" color="#999999" component="div">
              {book.book?.pageCount}
            </Typography>
            <Typography align="left" variant="caption" color="#999999" component="div">
              {book.book?.publisher}
            </Typography>
            <Typography align="left" variant="caption" color="#999999" component="div">
              Publicado em {book.book?.published}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="next">
            </IconButton>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;