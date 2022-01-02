import DashboardCard from "../../shared/DashbordCard"
import TopCard from "../../shared/TopCard"
import FormCreate from "../../shared/Form"
import { useState } from "react"

const Home = () => {
  const [open, setOpen] = useState(false)
  const [orderOpen, setOrderOpen] = useState(false)
  const [formType, setFormType] = useState("")
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px", marginBottom: "30px",position:"relative" }}>
        <TopCard name={"Request a quote"} action={()=> {
          setFormType("quote")
          setOpen(true)
          }} open={open} setOpen={setOpen} formType={formType}  />
        <TopCard name={"Place an Order"} action={()=> {
          setFormType("order")
          setOrderOpen(true)
          }} orderOpen={orderOpen} setOrderOpen={setOrderOpen} formType={formType} />
        <TopCard name={"View Existing Order"} />
        <TopCard name={"Make Payment"} />
        {/* <div className='card-top'> Request a quote</div> */}
        {/* {open && <FormCreate  setOpen={setOpen}/>} */}
      </div>
      <h5 style={{ textAlign: "center", textDecoration: "underline" }}>Your Recent Orders</h5>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <DashboardCard category={"Digitizing"} type={"Order"} date={"12022021"} desc={"IHYC frostbite burgee"} />
        <DashboardCard category={"Artowrk"} type={"Quote"} date={"12022021"} desc={"Texas wildlife supply"} />
        <DashboardCard category={"Artowrk"} type={"Quote"} date={"12022021"} desc={"Texas wildlife supply"} />
        {/* <div className='card border-wrap m30'>
          <div className='flex-3 '>
            <p className='p10'>Artwork</p>
            <p className='p10 b-top'>12022021</p>
          </div>
          <div className='flex-6 ' >
            <p className='p10'> <strong>Quote</strong></p>
            <p className='p10 b-top'>Texas wildlife supply</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Home
