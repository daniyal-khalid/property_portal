import React, { Component, useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import img from "../../Assets/2.webp";
import { Card } from "react-bootstrap";
import { consts } from "react-elastic-carousel";
import "./slider.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Sliders() {
  const location = useLocation();

  // Houses_Property

  const [appartments, setAppartments] = useState([]);
  const [houses, setHouses] = useState([]);
  var urlAppartments =
    "http://localhost:8000/properties?propertyType=Flats_Apartments&page=1&limit=8";
  var urlHouses =
    "http://localhost:8000/properties?propertyType=Houses_Property&page=1&limit=8";

  const fetchDATA = async () => {
    try {
      const resAppartments = await axios.get(urlAppartments);
      setAppartments(resAppartments.data);

      const resHouses = await axios.get(urlHouses);
      setHouses(resHouses.data);

      console.log("houses", houses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDATA();
  }, []);

  // state = {
  //   items: [
  //     { id: 1, title: "Property For Sale", price: "PKR1234556" },
  //     { id: 2, title: "Appartment For Sale", price: "PKR1234556" },
  //     { id: 3, title: "Property For Rent", price: "PKR1234556" },
  //     { id: 4, title: "Appartment for sale", price: "PKR1234556" },
  //     { id: 5, title: "Plot for Sale", price: "PKR1234556" },
  //     { id: 6, title: "Plot for Sale", price: "PKR1234556" },
  //     { id: 7, title: "Plot for Sale", price: "PKR1234556" },
  //     { id: 8, title: "Plot for Sale", price: "PKR1234556" },
  //   ],
  // };

  return (
    <>
      <div style={{ margin: "20px 70px" }}>
        <Link
          to="/propertylisting"
          state={{
            propertyType: "Flats_Apartments",
          }}
          className="sliderlink"
        >
          <h6 style={{ fontWeight: "bold", fontSize: "20px" }}> Appartments</h6>
        </Link>
      </div>

      <Carousel
        itemsToShow={4}
        itemPadding={[0, 4]}
        itemPosition={consts.START}
      >
        {/* {items.map(item => <div key={item.id}>{item.title}</div>)} */}

        {appartments.map((item) => {
          return (
            <>
              <div className="mx-2 ">
                <div key={item.id}>
                  <Card className="cards" >
                    <Card.Img
                      src={item.img}
                      style={{ width: "330px", height: "230px" ,objectFit:"cover" }}
                    />
                    <Card.Body className="body">
                      <Card.Title className="title">
                        {" "}
                        <p className="price">{item.price}</p>
                      </Card.Title>
                      <Card.Text>
                        {/* <p style={{fontSize:"15px",fontWeight:"semi-bold"}}>{item.title}</p> */}
                        <Link
                          to="propertylisting/propertyDetail"
                          state={{
                            item: item,
                          }}
                          style={{ textDecoration: "none", color: "#444" }}
                        >
                        <p className="mb-0 p-0">{item.title}</p>
                        </Link>
                        <div className="icn">
                          <div>
                            <i class="fa-solid fa-bath"></i>&nbsp;4
                          </div>
                          <div className="px-2">
                            <i class="fa-solid fa-bed"></i>&nbsp;5
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>

      <div style={{ margin: "20px 70px" }}>
        <Link
          to="/propertylisting"
          state={{
            propertyType: "Houses_Property",
          }}
          className="sliderlink"
        >
          <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
            {" "}
            Houses For Rent
          </h6>
        </Link>
      </div>
      <Carousel
        itemsToShow={4}
        itemPadding={[0, 4]}
        itemPosition={consts.START}
      >
        {/* {items.map(item => <div key={item.id}>{item.title}</div>)} */}

        {houses.map((item) => {
          return (
            <>
              <div className="mx-2 ">
                <div key={item.id}>
                  <Card className="cards">
                    <Card.Img
                      src={item.img}
                      style={{width: "330px", height: "230px" ,objectFit:"cover"}}
                    />
                    <Card.Body className="body">
                      <Card.Title className="title">
                        {" "}
                        <p className="price">{item.price}</p>
                      </Card.Title>
                      <Card.Text>
                        {/* <p style={{fontSize:"15px",fontWeight:"semi-bold"}}>{item.title}</p> */}
                        <Link
                          to="propertylisting/propertyDetail"
                          state={{
                            item: item,
                          }}
                          style={{ textDecoration: "none", color: "#444" }}
                        >
                          <p className="mb-0 p-0">{item.title}</p>
                        </Link>
                        <div className="icn">
                          <div>
                            <i class="fa-solid fa-bath"></i>&nbsp;4
                          </div>
                          <div className="px-2">
                            <i class="fa-solid fa-bed"></i>&nbsp;5
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
}

export default Sliders;