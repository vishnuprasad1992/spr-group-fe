import CancelIcon from "@mui/icons-material/Cancel";
// import { Axios } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
// import { savePortfolioDetails } from "../../controllers/portfolio";
// import { axios } from "../../setups/axios";
const CreateForm = ({ setOpen, formType, setOrderOpen }) => {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formDetails, setFormDetails] = useState({
    name: "",
    design: "",
    education: "",
    companyName: "",
    email: "",
    mobile: "",
    name: "",
    flips: "",
    city: "",
    state: "",
    country: "",
    aboutCompany: "",
    clients: "",
    products: "",
    services: "",
  });
  console.log(formType)
  const [error, setError] = useState({});
  const [message, setMessage] = useState({});


  //   const imageHandler = async(e) => {
  //     e.preventDefault()
  //     const formData = new FormData();
  //     formData.append("file", e.target.files[0]);
  //     formData.append("upload_preset", "bpyd08nw");
  //     const response = await axios()({
  //       url: "https://api.cloudinary.com/v1_1/prasad1992/image/upload",
  //       method: "POST",
  //       data: formData,
  //     });
  //     console.log(response)
  //     setFormDetails({
  //       ...formDetails,
  //       clients: response.data.secure_url,
  //     });
  //   }



  const submit = async (e) => {
    e.preventDefault();
    // console.log(formDetails);
    // const formData = new FormData();
    // formData.append("file", formDetails.clients);
    // formData.append("upload_preset", "bpyd08nw");
    // const response = await axios()({
    //   url: "https://api.cloudinary.com/v1_1/prasad1992/image/upload",
    //   method: "POST",
    //   data: formData,
    // }).then((res) =>
    //   setFormDetails({ ...formDetails, clients: res.data.secure_url })
    // );
    // setTimeout(async () => {
    //   const portfolioResponse = await savePortfolioDetails(formDetails);
    console.log(formDetails)
    //   console.log(portfolioResponse);
    //   if (portfolioResponse) {
    //     setSuccessMessage("Your profile is added successfully");
    //   }
    // }, 1000);
  };
  console.log(category)
  return (
    <div className="portfolio-form-modal">


      <form action="" className="portfolio-form mt30">
        <div className="mb20 form-top">
          {
            formType === "quote" &&
            <div className="close mb20" onClick={() => setOpen(false)}>
              <CancelIcon />
            </div>
          }
          {
            formType === "order" &&
            <div className="close mb20" onClick={() => setOrderOpen(false)}>
              <CancelIcon />
            </div>
          }
          <h2 className="mb20 center form-heading">
            Please fill the form for {formType}
          </h2>
        </div>
        <div className="form-top-cat mb20">
          <span className="mr20"> Select the category  : </span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" selected >Category *</option>
            <option value="vector" >VECTOR ARTWORK</option>
            <option value="digi">DIGITIZING</option>
            <option value="businesscard">BUSINESS CARD</option>
            <option value="broucher">BROUCHER</option>
            <option value="logo">LOGO DESIGNING</option>
            <option value="carton">CARTON BOX DESIGNING</option>
            <option value="other">OTHERS</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Contact Name"
          value={formDetails.name}
          onChange={(e) =>
            setFormDetails({ ...formDetails, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Phone Mobile"
          value={formDetails.mobile}
          onChange={(e) =>
            setFormDetails({ ...formDetails, mobile: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Contact email"
          value={formDetails.email}
          onChange={(e) =>
            setFormDetails({ ...formDetails, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Business Name"
          value={formDetails.companyName}
          onChange={(e) =>
            setFormDetails({
              ...formDetails,
              companyName: e.target.value,
            })
          }
        />
        { category !== "other" && <input
          type="text"
          placeholder="Design Name"
          value={formDetails.design}
          onChange={(e) =>
            setFormDetails({
              ...formDetails,
              design: e.target.value,
            })
          }
        />}
        {category === "digi" &&
          <select>
            <option value="" selected>Placement*</option>
            <optgroup label="CAP">
              <option value="Front Of Cap">Front Of Cap</option>
              <option value="Back Of Cap">Back Of Cap</option>
              <option value="Side Of Cap">Side Of Cap</option>
              <option value="Visor">Visor</option>
              <option value="Beenie Of Cap">Beenie Cap</option>
            </optgroup>
            <optgroup label="TOWEL">
              <option value="Towel">Towel</option>
            </optgroup>
            <optgroup label="Bags">
              <option value="Bags">Bags</option>
            </optgroup>
            <optgroup label="POLO">
              <option value="Left Chest">Left Chest</option>
              <option value="Sleeve">Sleeve</option>
              <option value="Pocket">Pocket</option>
              <option value="Full Back">Full Back</option>
              <option value="Full Front">Full Front</option>
              <option value="Back Yoke">Back Yoke</option>
            </optgroup>
            <optgroup label="OTHERS">
              <option value="other1">Others</option>
            </optgroup>
          </select>
        }
        {category !== "other" && <select >
          <option value="" selected>Process type*</option>
          <option value="SCREEN PRINTING</">SCREEN PRINTING</option>
          <option value="OFFSET PRINTING">OFFSET PRINTING</option>
          <option value="DIGITAL PRINTING">DIGITAL PRINTING</option>
          <option value="other6">OTHERS</option>
        </select>}
          <select >
            <option value="" selected>Priority*</option>
            <option value="Normal">NORMAL</option>
            <option value="Rush">RUSH</option>
          </select>
        {(category === "digi" || "carton") && category !== "other" &&
          <input
            type="text"
            placeholder="Fabric :"
            value={formDetails.flips}
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                flips: e.target.value,
              })
            }
          />
        }
        {category === "digi" &&
          <select>
            <option value="" selected>Height*</option>
            <option value="1">1</option>
            <option value="1.25">1.25</option>
            <option value="1.5">1.5</option>
            <option value="1.75">1.75"</option>

            <option value="2">2</option>
            <option value="2.25">2.25</option>
            <option value="2.5">2.5</option>
            <option value="2.75">2.75</option>
            <option value="3">3</option>
            <option value="3.25">3.25</option>
            <option value="3.5">3.5</option>
            <option value="3.75">3.75</option>
            <option value="4">4</option>
            <option value="4.25">4.25</option>
            <option value="4.5">4.5</option>
            <option value="4.75">4.75</option>
            <option value="5">5</option>
            <option value="5.25">5.25</option>
            <option value="5.5">5.5</option>
            <option value="5.75">5.75</option>
            <option value="6">6</option>
            <option value="6.25">6.25</option>
            <option value="6.5">6.5</option>
            <option value="6.75">6.75</option>
            <option value="7">7</option>
            <option value="7.25">7.25</option>
            <option value="7.5">7.5</option>
            <option value="7.75">7.75</option>
            <option value="8">8</option>
            <option value="8.25">8.25</option>
            <option value="8.5">8.5</option>
            <option value="8.75">8.75</option>
            <option value="9">9</option>
            <option value="9.25">9.25</option>
            <option value="9.5">9.5</option>
            <option value="9.75">9.75</option>
            <option value="10">10</option>
            <option value="10.25">10.25</option>
            <option value="10.5">10.5</option>
            <option value="10.75">10.75</option>
            <option value="11">11</option>
            <option value="11.25">11.25</option>
            <option value="11.5">11.5</option>
            <option value="11.75">11.75</option>
            <option value="12">12</option>
            <option value="12.25">12.25</option>
            <option value="12.5">12.5</option>
            <option value="12.75">12.75</option>
            <option value="13">13</option>
            <option value="13.25">13.25</option>
            <option value="13.5">13.5</option>
            <option value="13.75">13.75</option>
            <option value="14">14</option>
            <option value="14.25">14.25</option>
            <option value="14.5">14.5</option>
            <option value="14.75">14.75</option>
            <option value="15">15</option>
            <option value="15.25">15.25</option>
            <option value="15.5">15.5</option>
          </select>
        }
        {category === "digi" &&
          <select>
            <option value="">Width*</option>
            <option value="1">1</option>
            <option value="1.25">1.25</option>
            <option value="1.5">1.5</option>
            <option value="1.75">1.75"</option>
            <option value="2">2</option>
            <option value="2.25">2.25</option>
            <option value="2.5">2.5</option>
            <option value="2.75">2.75</option>
            <option value="3">3</option>
            <option value="3.25">3.25</option>
            <option value="3.5">3.5</option>
            <option value="3.75">3.75</option>
            <option value="4">4</option>
            <option value="4.25">4.25</option>
            <option value="4.5">4.5</option>
            <option value="4.75">4.75</option>
            <option value="5">5</option>
            <option value="5.25">5.25</option>
            <option value="5.5">5.5</option>
            <option value="5.75">5.75</option>
            <option value="6">6</option>
            <option value="6.25">6.25</option>
            <option value="6.5">6.5</option>
            <option value="6.75">6.75</option>
            <option value="7">7</option>
            <option value="7.25">7.25</option>
            <option value="7.5">7.5</option>
            <option value="7.75">7.75</option>
            <option value="8">8</option>
            <option value="8.25">8.25</option>
            <option value="8.5">8.5</option>
            <option value="8.75">8.75</option>
            <option value="9">9</option>
            <option value="9.25">9.25</option>
            <option value="9.5">9.5</option>
            <option value="9.75">9.75</option>
            <option value="10">10</option>
            <option value="10.25">10.25</option>
            <option value="10.5">10.5</option>
            <option value="10.75">10.75</option>
            <option value="11">11</option>
            <option value="11.25">11.25</option>
            <option value="11.5">11.5</option>
            <option value="11.75">11.75</option>
            <option value="12">12</option>
            <option value="12.25">12.25</option>
            <option value="12.5">12.5</option>
            <option value="12.75">12.75</option>
            <option value="13">13</option>
            <option value="13.25">13.25</option>
            <option value="13.5">13.5</option>
            <option value="13.75">13.75</option>
            <option value="14">14</option>
            <option value="14.25">14.25</option>
            <option value="14.5">14.5</option>
            <option value="14.75">14.75</option>
            <option value="15">15</option>
            <option value="15.25">15.25</option>
            <option value="15.5">15.5</option>
          </select>
        }
        {(category === "digi" || "carton") && category != "other" &&
          <input
            type="text"
            placeholder="No .Of Flips :"
            value={formDetails.flips}
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                flips: e.target.value,
              })
            }
          />
        }
        {
          category !== "other" &&
        <select>
          <option value="" selected>Number of colors</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        }
        <select>
          <option value="">Final files*</option>
          <option value="PDF, EPS">PDF, EPS</option>
          <option value="PDF, AI">PDF, AI</option>
          <option value="PDF, EPS, AI">PDF, EPS, AI</option>
          <option value="PDF, CDR">PDF, CDR</option>
          <option value="PDF, EPS, CDR">PDF, EPS, CDR</option>
          <option value="PDF, EPS, AI, CDR">PDF, EPS, AI, CDR</option>
          <option value="other3">OTHERS</option>
        </select>
        {category === "businesscard" &&
          <select>
            <option value="" selected>Preferable layout*</option>
            <option value="HORIZONTAL">HORIZONTAL</option>
            <option value="VERTICAL">VERTICAL</option>
          </select>
        }
        {category === "logo" &&
          <select>
            <option value="" selected>Preferable colors*</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>

          </select>
        }
        {category === "logo" &&
          <select>
            <option value="" selected>Preferable shapes*</option>
            <option value="Square">Square</option>
            <option value="Rectangle">Rectangle</option>
            <option value="circle">circle</option>
            <option value="Ellipse">Ellipse</option>
            <option value="Rhombus">Rhombus</option>
            <option value="Parallelogram">Parallelogram</option>
            <option value="Trapezoid">Trapezoid</option>
            <option value="Kite">Kite</option>
            <option value="Equilateral Triangle">Equilateral Triangle</option>
            <option value="Isosceles Triangle">Isosceles Triangle</option>
            <option value="Scalene Triangle">Scalene Triangle</option>
            <option value="Right Triangle">Right Triangle</option>
            <option value="Regular Pentagon">Regular Pentagon</option>
            <option value="Regular Hexagon">Regular Hexagon</option>
            <option value="Regular Octagon">Regular Octagon</option>
            <option value="Regular Decagon">Regular Decagon</option>
          </select>
        }
        {category === "logo" &&
          <input
            type="text"
            placeholder="Preferable FontStyle :"
            value={formDetails.fontStyle}
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                fontStyle: e.target.value,
              })
            }
          />
        }
        {category === "logo" &&
          <input
            type="text"
            placeholder="Age Group/Audience :"
            value={formDetails.audience}
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                audience: e.target.value,
              })
            }
          />
        }
        {category === "businesscard" &&
          <select>
            <option value="" selected>No .of sides</option>
            <option value="Front">Front</option>
            <option value="Back">Back</option>
            <option value="Front & Back">Front & Back</option>
          </select>
        }
        {category === "businesscard" &&
          <select>
            <option value="" selected>Color mode*</option>
            <option value="CMYK">CMYK</option>
            <option value="RGB">RGB</option>
            <option value="PANTONE">PANTONE</option>
          </select>
        }
        {category === "broucher" &&
          <select>
            <option value="" selected>No .of pages</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        }

        <div className="fileInput mt20">
          <input
            type="file"
            placeholder="Your Clients"
            // value={formDetails.clients}
            onChange={(e) => imageHandler(e)}
          />
        </div>
        <div className="textMessage mt20">
          <textarea
            type="text"
            placeholder="Your message"
            rows={5}
            cols="50"
            style={{padding:"10px"}}
            // value={formDetails.clients}
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                messgeAboutQuote: e.target.value,
              })}
          />
        </div>
        {successMessage && <h5>{successMessage}</h5>}
        <div className="flex mt20">
          <button className="blue button mr20 " onClick={submit}>
            Submit {formType}
          </button>
          <button className="red button ml20" onClick={() => setOpen(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
