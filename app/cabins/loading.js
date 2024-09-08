import Spinner from "../_components/Spinner"

const loading = () => {
  return (
      <div className="grid items-center justify-center">
          <span className="text-xl text-primary-200">Loading cabin data...</span>
          <Spinner />  
      </div>
  )
}

export default loading