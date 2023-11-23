import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/pages/categorydetails.css";
import { categories } from "./categoryData";
import Sidebar from "../Sidebar";
import { NavHashLink as Link } from "react-router-hash-link";
import { Drawer, Box, ListItem, List } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import MoreDetails from "./MoreDetails";

const CategoryDetails = () => {
  const { id, cid } = useParams();
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };




  useEffect(() => {
    const selectedCategory = categories.find(
      (category) =>
        category.id === parseInt(id) || category.cid === parseInt(cid) ||
        (category.subcategory &&
        category.subcategory.some((sub) => sub.subid === parseInt(id)) )||
        (category.subcategory2 &&
        category.subcategory2.some((sub) => sub.subid === parseInt(id))) ||
        (category.subcategory3 &&
        category.subcategory3.some((sub) => sub.subid === parseInt(id)))||
        (category.subcategory4 &&
        category.subcategory4.some((sub) => sub.subid === parseInt(id)))||
        (category.subcategory5 &&
        category.subcategory5.some((sub) => sub.subid === parseInt(id)))||
        (category.subcategory6 &&
        category.subcategory6.some((sub) => sub.subid === parseInt(id)))
    );
    setCategoryDetails(selectedCategory);


    
  }, [ id, cid]);


  if (!categoryDetails) {
    return <p>Category not found</p>;  
  }

  const list = () => (
    <Box style={{ width: 300, height:'50%' }}>
      <List>
        <ListItem className="list-items">
          <button className="close-button btn " onClick={handleClose}>
            <RxCross1 />
          </button>

          <div className="sidebar-drawer mt-5">
          <ul>
        {categories.map((category) => (
          <li key={category.cid} onClick={handleClose}>
            <Link to={`/categorypage/${category.cid}` }>
              {category.name}
            </Link>

            {Object.keys(category).map((key) => {
              // Check if the key is a subcategory array
              if (key.startsWith("subcategory")) {
                return (
                  <ul className="sub" key={key}>
                    {category[key].map((subcategory) => (
                      <li key={subcategory.subid} onClick={handleClose}>
                        <Link to={`/categorypage/${subcategory.subid}`}>
                          - {subcategory.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </li>
        ))}
      </ul>
          </div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    
    <div>
      <div className="category-detailspage">
        <Navbar />

        <div className="category-detailspage-img">
          <img src={categoryDetails.bgimg} alt={categoryDetails.name} />
        </div>

        <button
          color="inherit"
          onClick={handleOpen}
          className="sidebar-menu-button btn btn-outline-primary"
          // onClick={toggleSidebar}
        >
          Menu
        </button>
        {isSidebarOpen && <Sidebar />}

        <Drawer height={50} open={open} anchor="right" onClose={handleClose}>
          {list()}
        </Drawer>
        
{id <= 16 ? (
        <div className="category-detailspagec">
          <div className="category-details-content mt-3">
            <h1>
              {Array.from(`${categoryDetails.name}`).map((letter, index) => (
                <span
                  key={index}
                  // data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          {categoryDetails.stoolh && (
            <h3 className="mt-3 fw-bold">{categoryDetails.stoolh}</h3>
          )}          

          {categoryDetails.process && (
            <h3 >{categoryDetails.process}</h3>
          )}
          
          <div className="category-details-para">
                {categoryDetails.content1 && (
                  <>
                <p>{categoryDetails.content1}</p>
                </>
              )}</div>

          <div className="category-details-wrap">
           {categoryDetails.img1 &&   <div   className="fittings-heading text-center"  ><Link to={categoryDetails.alink1}>
           {categoryDetails.firsth5 && <h5 className="mt-5">{categoryDetails.firsth5}</h5>}
           <img id="co" src={categoryDetails.img1} alt="" />
           </Link>
           </div>}
           {categoryDetails.img2 && <div className="text-center" ><Link to={categoryDetails.alink2}>
            {categoryDetails.secondh5 && <h5 className="mt-5">{categoryDetails.secondh5}</h5>}
            <img id="co" src={categoryDetails.img2} alt="" />
            </Link>
            </div>}
           {categoryDetails.imgKit && <img id="kit" src={categoryDetails.imgKit} alt="" />}
           {categoryDetails.imgKit1 && <img id="kit" src={categoryDetails.imgKit1} alt="" />}

            {categoryDetails.img3 && <div className="text-center" ><Link to={categoryDetails.alink3}>
              {categoryDetails.thirdh5 && <h5 className="mt-5">{categoryDetails.thirdh5}</h5>}
             <img id="co" src={categoryDetails.img3} alt="" />
             </Link>
             </div>}
             

           {categoryDetails.img50 && <div className="text-center mt-5" ><Link to={categoryDetails.alink50}>           
            {categoryDetails.fourthh5 && <h5 className="">{categoryDetails.fourthh5}</h5>}
           <img id="co"className="" src={categoryDetails.img50} alt="" /></Link></div>}
          </div>
          
          {categoryDetails.imgRen && 
          // <a href={categoryDetails.alinkren}>
           <img className="ren" src={categoryDetails.imgRen} alt="" />
          //  </a>
           }

          {categoryDetails.button1 && (
            <div className="series-btn mt-5">
              <button className="btn btn-outline-primary">
              {categoryDetails.subcategory.map((subcategory) => (
      <Link
        key={subcategory.subid}
        smooth={true}
        to={`/categorypage/${subcategory.subid}`}
      >
        {subcategory.title}
      </Link>
    ))}
              </button>
              <button className="btn btn-outline-primary">
                <Link smooth={true} to={`/categorypage/${categoryDetails.subcategory2[0].subid}`}>
                  {categoryDetails.button2}
                </Link>
              </button>
              <button className="btn btn-outline-primary">
                <Link smooth={true} to={`/categorypage/${categoryDetails.subcategory3[0].subid}`}>
                  {categoryDetails.button3}
                </Link>
              </button>
            </div>
          )}
          {categoryDetails.button4 && (
            <div className="series-btn mt-5">
              <button className="btn btn-outline-primary">
                <Link smooth={true} to={`/categorypage/${categoryDetails.subcategory[0].subid}`}>
                  {categoryDetails.button4}
                </Link>
              </button>
              <button className="btn btn-outline-primary">
                <Link smooth={true} to={`/categorypage/${categoryDetails.subcategory2[0].subid}`}>
                  {categoryDetails.button5}
                </Link>
              </button>
              <button className="btn btn-outline-primary">
                <Link smooth={true} to={`/categorypage/${categoryDetails.subcategory3[0].subid}`}>
                  {categoryDetails.button6}
                </Link>
              </button>
            </div>
          )}
          {/* {categoryDetails.button7 && (
            <div className="series-btn">
              <button className="btn btn-outline-primary">
                <Link smooth={true} to={`/moredetails/${categoryDetails.subcategory[0].subid}`}>
                  {categoryDetails.button7}
                </Link>
              </button>
            </div>
          )} */}
           
           {categoryDetails.button8 && (
            <div className="series-btn" id="emergency">
              <button className="btn btn-outline-primary">
                <Link smooth={true} to={`/categorypage/${categoryDetails.subcategory[0].subid}`}>
                  {categoryDetails.button8}
                </Link>
              </button>
            </div>
          )}

          {categoryDetails.content1 && (
            <div className="category-details-para">
                  {categoryDetails.contenthos1 &&<h5 className="hos1">{categoryDetails.contenthos1}</h5>}

            
            {categoryDetails.img24 &&(
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 ">
                {categoryDetails.img24 && (
                  <img
                    className="hospital-img"
                    src={categoryDetails.img24}
                    alt=""
                  />
                )}
                {categoryDetails.img25 && (
                  <img
                    className="hospital-img"
                    src={categoryDetails.img25}
                    alt=""
                  />
                )}
              </div>
              )}
              
              {categoryDetails.img30 && (
              <div className="d-flex flex-wrap justify-content-center align-items-center w-100 mt-4 mb-4">
                {categoryDetails.img30 && (
                  <img
                    className="toilet w-75"
                    src={categoryDetails.img30}
                    alt=""
                  />
                )}
              </div>
              )}

              
              {categoryDetails.contenth4 && <h4 className="fs-2 fw-bold mt-4 mb-4">{categoryDetails.contenth4}</h4>}
              
              {categoryDetails.content2 && <p>{categoryDetails.content2}</p>}
              {categoryDetails.content3 && (<p>{categoryDetails.content3}</p>)}
              {categoryDetails.contenthos3 && <h5 className="hos3">{categoryDetails.contenthos3}</h5>}

              {categoryDetails.img26 && (
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
                
                  <img
                    className="hospital-img"
                    src={categoryDetails.img26}
                    alt=""
                  />
                
              </div>)}
              {categoryDetails.content4 && <p>{categoryDetails.content4}</p>}
              {categoryDetails.contenthos5 &&<h5 className="hos5">{categoryDetails.contenthos5}</h5>}

              {categoryDetails.content5 && (
                <p>{categoryDetails.content5}</p>
              )}

              {categoryDetails.img27 && (
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
                {categoryDetails.img27 && (
                  <img
                    className="hospital-img "
                    src={categoryDetails.img27}
                    alt=""
                  />
                )}
                {categoryDetails.img28 && (
                  <img
                    className="hospital-img"
                    src={categoryDetails.img28}
                    alt=""
                  />
                )}
              </div>
              )}

              

              {categoryDetails.content6 && <p>{categoryDetails.content6}</p>}
              {categoryDetails.content7 && <p>{categoryDetails.content7}</p>}
              {categoryDetails.content8 && <p>{categoryDetails.content8}</p>}
              {categoryDetails.content9 && <p>{categoryDetails.content9}</p>}
              {categoryDetails.content9a && <p>{categoryDetails.content9a}</p>}
              {categoryDetails.content9b && <p>{categoryDetails.content9b}</p>}
              {categoryDetails.content9c && <p>{categoryDetails.content9c}</p>}
              {categoryDetails.content9d && <p>{categoryDetails.content9d}</p>}
            </div>
          )}
          {categoryDetails.process1 && (
            <div className="category-details-para">
              {categoryDetails.process1 && (
                <h3 >{categoryDetails.process1}</h3>
              )}
              <div className="d-flex flex-wrap justify-content-center align-items-center w-100 mt-4">
                {categoryDetails.img29 && (
                  <img
                    className="toilet w-75"
                    src={categoryDetails.img29}
                    alt=""
                  />
                )}
              </div>
            </div>
          )}
          {categoryDetails.imgchair &&(
            <div className="chairs">
              <img src={categoryDetails.imgchair} alt="" />
            </div>
          )}

          {categoryDetails.img4 && (
            <div className="category-details-wrap" >
              <a href={categoryDetails.alink4}>
              {categoryDetails.img4 && (
                <img src={categoryDetails.img4} alt="" />
                
              )}
              </a>
              {categoryDetails.img5 && (
                <img src={categoryDetails.img5} alt="" />
              )}
              {categoryDetails.img6 && (
                <img src={categoryDetails.img6} alt="" />
              )}
            </div>
          )}

          {categoryDetails.content10 && (
            <div className="category-details-para">
              {categoryDetails.content10 && <p>{categoryDetails.content10}</p>}
              {categoryDetails.content11 && <p>{categoryDetails.content11}</p>}
              {categoryDetails.content12 && <p>{categoryDetails.content12}</p>}
              {categoryDetails.content13 && <p>{categoryDetails.content13}</p>}
              {categoryDetails.content14 && <p>{categoryDetails.content14}</p>}
              {categoryDetails.content15 && <p>{categoryDetails.content15}</p>}
              {categoryDetails.content16 && <p>{categoryDetails.content16}</p>}
              {categoryDetails.content17 && <p>{categoryDetails.content17}</p>}
              {categoryDetails.content17a && (
                <p>{categoryDetails.content17a}</p>
              )}
              {categoryDetails.content17b && (
                <p>{categoryDetails.content17b}</p>
              )}
            </div>
          )}
          {categoryDetails.process2 && (
            <div className="category-details-para">
              {categoryDetails.process2 && (
                <h3>{categoryDetails.process2}</h3>
              )}
            </div>
          )}

          {categoryDetails.img7 && (
            <div className="category-details-wrap">
              {categoryDetails.img7 && (
                <img src={categoryDetails.img7} alt="" />
              )}
              {categoryDetails.img8 && (
                <img src={categoryDetails.img8} alt="" />
              )}
            </div>
          )}

          {categoryDetails.content18 && (
            <div className="category-details-para">
              {categoryDetails.content18 && <p>{categoryDetails.content18}</p>}
              {categoryDetails.content19 && <p>{categoryDetails.content19}</p>}
              {categoryDetails.content20 && <p>{categoryDetails.content20}</p>}
              {categoryDetails.content21 && <p>{categoryDetails.content21}</p>}
              {categoryDetails.content22 && <p>{categoryDetails.content22}</p>}
              {categoryDetails.content23 && <p>{categoryDetails.content23}</p>}
              {categoryDetails.content24 && <p>{categoryDetails.content24}</p>}
              {categoryDetails.content25 && <p>{categoryDetails.content25}</p>}
              {categoryDetails.content26 && <p>{categoryDetails.content26}</p>}
            </div>
          )}

          {categoryDetails.process3 && (
            <div className="category-details-para">
              {categoryDetails.process3 && <h3>{categoryDetails.process3}</h3>}
            </div>
          )}

          {categoryDetails.img9 && (
            <div className="category-details-wrap">
              {categoryDetails.img9 && (
                <img src={categoryDetails.img9} alt="" />
              )}
              {categoryDetails.img10 && (
                <img src={categoryDetails.img10} alt="" />
              )}
            </div>
          )}

          {categoryDetails.content27 && (
            <div className="category-details-para">
              {categoryDetails.content27 && <p>{categoryDetails.content27}</p>}
              {categoryDetails.content28 && <p>{categoryDetails.content28}</p>}
              {categoryDetails.content29 && <p>{categoryDetails.content29}</p>}
              {categoryDetails.content30 && <p>{categoryDetails.content30}</p>}
              {categoryDetails.content31 && <p>{categoryDetails.content31}</p>}
              {categoryDetails.content32 && <p>{categoryDetails.content32}</p>}
              {categoryDetails.content33 && <p>{categoryDetails.content33}</p>}
              {categoryDetails.content34 && <p>{categoryDetails.content34}</p>}
              {categoryDetails.content35 && <p>{categoryDetails.content35}</p>}
            </div>
          )}

          {categoryDetails.process4 && (
            <div className="category-details-para">
              {categoryDetails.process4 && <h3>{categoryDetails.process4}</h3>}
            </div>
          )}

          {categoryDetails.img11 && (
            <div className="category-details-wrap">
              {categoryDetails.img11 && (
                <img src={categoryDetails.img11} alt="" />
              )}
              {categoryDetails.img12 && (
                <img src={categoryDetails.img12} alt="" />
              )}
            </div>
          )}

          {categories.content27 && (
            <div className="category-details-para">
              {categoryDetails.content27 && <p>{categoryDetails.content27}</p>}
              {categoryDetails.content28 && <p>{categoryDetails.content28}</p>}
              {categoryDetails.content29 && <p>{categoryDetails.content29}</p>}
              {categoryDetails.content30 && <p>{categoryDetails.content30}</p>}
              {categoryDetails.content31 && <p>{categoryDetails.content31}</p>}
              {categoryDetails.content32 && <p>{categoryDetails.content32}</p>}
              {categoryDetails.content33 && <p>{categoryDetails.content33}</p>}
              {categoryDetails.content34 && <p>{categoryDetails.content34}</p>}
              {categoryDetails.content35 && <p>{categoryDetails.content35}</p>}
            </div>
          )}

          {categoryDetails.process5 && (
            <div className="category-details-para">
              {categoryDetails.process5 && <h3>{categoryDetails.process5}</h3>}
            </div>
          )}

          {categoryDetails.img13 && (
            <div className="category-details-wrap">
              {categoryDetails.img13 && (
                <img src={categoryDetails.img13} alt="" />
              )}
              {categoryDetails.img14 && (
                <img src={categoryDetails.img14} alt="" />
              )}
            </div>
          )}

          {categoryDetails.content36 && (
            <div className="category-details-para">
              {categoryDetails.content36 && <p>{categoryDetails.content36}</p>}
              {categoryDetails.content37 && <p>{categoryDetails.content37}</p>}
              {categoryDetails.content38 && <p>{categoryDetails.content38}</p>}
              {categoryDetails.content39 && <p>{categoryDetails.content39}</p>}
              {categoryDetails.content40 && <p>{categoryDetails.content40}</p>}
              {categoryDetails.content41 && <p>{categoryDetails.content41}</p>}
              {categoryDetails.content42 && <p>{categoryDetails.content42}</p>}
              {categoryDetails.content43 && <p>{categoryDetails.content43}</p>}
              {categoryDetails.content44 && <p>{categoryDetails.content44}</p>}
            </div>
          )}

          {categoryDetails.process6 && (
            <div className="category-details-para">
              {categoryDetails.process6 && <h3>{categoryDetails.process6}</h3>}
            </div>
          )}
          {categoryDetails.img15 && (
            <div className="category-details-wrap">
              {categoryDetails.img15 && (
                <img src={categoryDetails.img15} alt="" />
              )}
              {categoryDetails.img16 && (
                <img src={categoryDetails.img16} alt="" />
              )}
            </div>
          )}
          {categoryDetails.content45 && (
            <div className="category-details-para">
              {categoryDetails.content45 && <p>{categoryDetails.content45}</p>}
              {categoryDetails.content46 && <p>{categoryDetails.content46}</p>}
              {categoryDetails.content47 && <p>{categoryDetails.content47}</p>}
              {categoryDetails.content48 && <p>{categoryDetails.content48}</p>}
              {categoryDetails.content49 && <p>{categoryDetails.content49}</p>}
              {categoryDetails.content50 && <p>{categoryDetails.content50}</p>}
              {categoryDetails.content51 && <p>{categoryDetails.content51}</p>}
              {categoryDetails.content52 && <p>{categoryDetails.content52}</p>}
              {categoryDetails.content53 && <p>{categoryDetails.content53}</p>}
            </div>
          )}
          {categoryDetails.img20 && (
          <div className="ed-fr w-100">
            <div className="ed-img">
              {categoryDetails.img20 && (
                <img src={categoryDetails.img20} alt="" />
              )}
            </div>
            
            {categoryDetails.content54 &&
            <div className="ed-para">
               <p>{categoryDetails.content54} </p>
            </div>
            }
          </div>
          )}
          {categoryDetails.img21 && (
          <div className="ed-fr w-100">
            <div className="ed-img">
              {categoryDetails.img21 && (
                <img src={categoryDetails.img21} alt="" />
              )}
            </div>
            {categoryDetails.content55 &&
            <div className="ed-para">
              {categoryDetails.content55 && <p>{categoryDetails.content55} </p>}
            </div>
            }
          </div>
          )}
          {categoryDetails.img22 && (
          <div className="ed-fr w-100">
            <div className="ed-img">
              {categoryDetails.img22 && (
                <img src={categoryDetails.img22} alt="" />
              )}
            </div>
            {categoryDetails.content56 &&
            <div className="ed-para">
              {categoryDetails.content56 && <p>{categoryDetails.content56} </p>}
            </div>
            }
          </div>
          )}
          {categoryDetails.img23 && (
          <div className="ed-fr w-100">
            <div className="ed-img">
              {categoryDetails.img23 && (
                <img src={categoryDetails.img23} alt="" />
              )}
            </div>
            <div className="ed-para">
              {categoryDetails.content57 && <p>{categoryDetails.content57} </p>}
            </div>
          </div>
          )}


          {/* ////////////////Kitchen/////////////////////////// */}
          {categoryDetails.contentbox1 &&( 
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 w-75 mt-4">
            <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox1}</h6></div>
            <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox2}</h6></div>
            <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox3}</h6></div>
            <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox4}</h6></div>
            {categoryDetails.contentbox5 && <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox5}</h6></div>}
            {categoryDetails.contentbox6 && <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox6}</h6></div>}
            {categoryDetails.contentbox7 && <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox7}</h6></div>}
            {categoryDetails.contentbox8 && <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox8}</h6></div>}
            {categoryDetails.contentbox9 && <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox9}</h6></div>}
            {categoryDetails.contentbox10 && <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox10}</h6></div>}
            {categoryDetails.contentbox11 && <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox11}</h6></div>}
            {categoryDetails.contentbox12 && <div className="kitchen-box"><h6 className="text-white">{categoryDetails.contentbox12}</h6></div>}
            </div>     
            )}

           {categoryDetails.shower1 && <div className="shower">

            <div><img src={categoryDetails.imgs1} alt="" />
            <h4>{categoryDetails.shower1}</h4>
            </div>

            <div><img src={categoryDetails.imgs2} alt="" />
            <h4>{categoryDetails.shower2}</h4>
            </div>
              <div><img src={categoryDetails.imgs3} alt="" />
            <h4>{categoryDetails.shower3}</h4>
            </div> 
             <div><img src={categoryDetails.imgs4} alt="" />
            <h4>{categoryDetails.shower4}</h4>
            </div>            
             <div><img src={categoryDetails.imgs5} alt="" />
            <h4>{categoryDetails.shower5}</h4>
            </div>            
             <div><img src={categoryDetails.imgs6} alt="" />
            <h4>{categoryDetails.shower6}</h4>
            </div>            

            </div>}




        </div> ) : id >= 16 ?(

        
      <MoreDetails/> ): null }

        <Footer />
      </div>

    </div>
  );
};
export default CategoryDetails;
