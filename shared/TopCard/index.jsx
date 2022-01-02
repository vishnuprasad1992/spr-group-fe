import FormCreate from "../Form/index"
const TopCard = ({name,action,formType,setOpen,open,setOrderOpen,orderOpen}) => {
    return (
        <>
        <div className='card-top cursor' onClick={action}> {name}</div>
        { open && formType === "quote"  && <FormCreate setOpen={setOpen} formType={formType} />}
        { orderOpen && formType ==="order" && <FormCreate setOrderOpen={setOrderOpen} formType={formType} />}
        </>
    )
}

export default TopCard
