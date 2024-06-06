import VakantMap from "./vakant-map";

const AllVakants = () => {
  return (
    <div id="style-4" className="grid grid-rows-6 gap-4 h-[90vh] overflow-auto">
      <div className="row-span-6 grid grid-cols-2  gap-4 px-1">
        
       <VakantMap/>

      </div>
     
    </div>
  )
}

export default AllVakants;
