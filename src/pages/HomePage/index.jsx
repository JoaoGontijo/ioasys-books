import React, { useContext, useEffect, useState } from "react";
import Flexbox from "../../components/shared/Flexbox.tsx";
import Header from "../../components/Header.jsx";
import listBooks from "../../services/books"
import { Grid, Pagination, Modal } from "@mui/material";
import HomeBackground from "./../../assets/HomeBackground.png"
import BookCard from "../../components/BookCard";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import BookDetails from "../../components/BookDetails";
import { bookDetailsInitial } from "../../common/helpers/initialStates";


const HomePage = () => {

    
  console.log('aqui depois')
  const { userDetails, bookDetails, setBookDetails } = useContext(UserContext)
  const [indexPagination, setIndexPagination] = useState(1)  
  const [books, setBooks] = useState([])
  const navigate = useNavigate();
  const loggedUser = JSON.parse(sessionStorage.getItem("user"))

  useEffect (() => {
    if(!loggedUser) {
      navigate('/', { replace: true })
    }
  }, [loggedUser, navigate])
 
  useEffect(() => {
      listBooks(indexPagination, userDetails.authorization).then((response) => {
        setBooks(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [indexPagination, navigate, userDetails.authorization])

  const handleIndex = (event, index) => {
    setIndexPagination(index)
  }
    
  return (
    <Flexbox className="bg-mobile" padding="2% 10%" backgroundImage={HomeBackground} height={'100vh'} >
      <Header />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 6, md:6, lg: 12 }}>
        {Array.from(books).map((book, index) => (
          <Grid item xs={3} sm={3} md={3} key={index}>
            <BookCard book={book}/>
          </Grid>
        ))}
      </Grid>
      <Modal
          open={bookDetails.showDetailsModal}
          onClose={() => setBookDetails(bookDetailsInitial)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <BookDetails />
      </Modal>
      <Flexbox padding="30px 0px" width="100%" justifyContent="flex-end"> 
        <Pagination
          count={10}
          defaultPage={1}
          siblingCount={0}
          page={indexPagination}
          onChange={handleIndex}
        />
      </Flexbox>
    </Flexbox>
  );
};

export default HomePage;