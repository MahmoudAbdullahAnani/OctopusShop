const LodingDataHome = () => {
    return (
      <div className="bg-dark h-100 w-full flex align-items-center justify-center fixed z-10 top-0">
        <div className="spinner-border text-white " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
}
 
export default LodingDataHome;